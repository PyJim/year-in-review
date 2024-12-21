import React from 'react';
import { Download, Share2 } from 'lucide-react';
import { 
  Document, 
  Page, 
  Text, 
  View, 
  StyleSheet, 
  PDFDownloadLink,
  Image
} from '@react-pdf/renderer';

type QuestionType = 'multiple' | 'short' | 'long';

interface Question {
  id: number;
  text: string;
  type: QuestionType;
  category: string;
  options?: string[];
}

interface UserProfile {
  name: string;
  photo?: string;
  bio: string;
}

interface Answer {
  questionId: number;
  answer: string;
}

interface YearReportProps {
  profile: UserProfile;
  answers: Answer[];
  questions: Question[];
}

// Define styles for PDF
const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: '#ffffff'
  },
  header: {
    marginBottom: 20,
    textAlign: 'center'
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#666666'
  },
  section: {
    margin: 10,
    padding: 10
  },
  question: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5
  },
  answer: {
    fontSize: 12,
    marginBottom: 10,
    fontStyle: 'italic'
  },
  option: {
    fontSize: 12,
    marginLeft: 20,
    marginBottom: 3
  },
  footer: {
    position: 'absolute',
    bottom: 40,
    left: 40,
    right: 40,
    textAlign: 'center',
    fontSize: 12,
    color: '#666666'
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 20
  }
});

// PDF Document Component
const PDFDocument: React.FC<YearReportProps> = ({ profile, answers, questions }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {profile.photo && (
        <Image
          src={profile.photo}
          style={styles.profileImage}
        />
      )}
      
      <View style={styles.header}>
        <Text style={styles.title}>
          Looking Forward to {new Date().getFullYear() + 1}
        </Text>
        <Text style={styles.subtitle}>
          Year-End Reflection for {profile.name}
        </Text>
      </View>

      <View style={styles.section}>
        <Text>
          Thank you for taking the time to reflect on your journey. Your thoughtful 
          responses have painted a picture of your year's story.
        </Text>
      </View>

      {answers.map((answer, index) => {
        const question = questions.find(q => q.id === answer.questionId);
        return question ? (
          <View key={answer.questionId} style={styles.section}>
            <Text style={styles.question}>
              {index + 1}. {question.text}
            </Text>
            <Text style={styles.answer}>{answer.answer}</Text>
            {question.type === 'multiple' && question.options && (
              <View>
                {question.options.map((option, i) => (
                  <Text key={i} style={styles.option}>
                    • {option}
                  </Text>
                ))}
              </View>
            )}
          </View>
        ) : null;
      })}

      <Text style={styles.footer}>
        We wish you the best of luck, {profile.name}, as you continue to grow, 
        explore new opportunities, and thrive in every area of your life. 
        The next year is full of potential—embrace it!
      </Text>
    </Page>
  </Document>
);

const YearReport: React.FC<YearReportProps> = (props) => {
  
  let pdfLink: string | null = null;

  const handleShare = async () => {
    // Find the download link and set pdfLink
    const pdfLinkElement = await document.querySelector('a[download]');

    if (pdfLinkElement && pdfLinkElement instanceof HTMLAnchorElement) {
      pdfLink = pdfLinkElement.href; // Assign the link to the global variable
      console.log('PDF Link:', pdfLink); // Log the PDF link for debugging
    } else {
      console.error('PDF link not found');
      alert('PDF link not found. Please try again later.');
      return; // Early return if PDF link is not found
    }

    // Ensure pdfLink is available before attempting to share
    if (pdfLink) {
      try {
        // Fetch the PDF file as a Blob
        const response = await fetch(pdfLink);
        if (!response.ok) {
          throw new Error('Failed to fetch PDF');
        }
        const pdfBlob = await response.blob();

        if (navigator.share) {
          await navigator.share({
            title: `Year Report - ${props.profile.name}`,
            text: 'Here is my year report reflection!',
            files: [
              new File([pdfBlob], 'Year_Report.pdf', { type: 'application/pdf' })
            ]
          });
        } else {
          alert('Sharing is not supported on this device.');
        }
      } catch (error) {
        console.error('Error sharing the PDF:', error);
        alert('Failed to share the PDF.');
      }
    } else {
      alert('PDF link is unavailable. Please try again later.');
    }
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-6 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl p-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-gray-100 to-gray-200" />

        <div className="relative">
          {props.profile.photo && (
            <div className="mb-8 flex justify-center">
              <img
                src={props.profile.photo}
                alt={props.profile.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl"
              />
            </div>
          )}

          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Looking Forward to {new Date().getFullYear() + 1}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Thank you for taking the time to reflect on your journey, {props.profile.name}.
              Your thoughtful responses have painted a picture of your year's story.
              May the coming year bring you even more growth, joy, and remarkable achievements!
            </p>
          </div>

          <div className="space-y-8 hidden">
            {props.answers.map((answer, index) => {
              const question = props.questions.find(q => q.id === answer.questionId);
              return question ? (
                <div key={answer.questionId} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {question.text}
                  </h3>
                  <p className="text-gray-600 italic mb-4">{answer.answer}</p>
                  {question.type === 'multiple' && question.options && (
                    <div className="space-y-2">
                      {question.options.map((option, i) => (
                        <div key={i} className="text-sm text-gray-500">• {option}</div>
                      ))}
                    </div>
                  )}
                </div>
              ) : null;
            })}
          </div>

          <div className="flex justify-center space-x-6 mt-12">
          <PDFDownloadLink
            document={<PDFDocument {...props} />}
            fileName="Year_Report.pdf"
            className="flex items-center px-8 py-4 bg-black text-white rounded-xl hover:bg-gray-800 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            <Download className="w-6 h-6 mr-3" />
            Download Report
          </PDFDownloadLink>

            <button 
              className="flex items-center px-8 py-4 border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition-all transform hover:-translate-y-1"
              onClick={handleShare}
            >
              <Share2 className="w-6 h-6 mr-3" />
              Share Your Journey
            </button>
          </div>
          
          <div className="flex justify-center space-x-6 mt-8">
            <a href="#" className="text-blue-500 text-xl hover:underline">
              Review once more...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YearReport;
