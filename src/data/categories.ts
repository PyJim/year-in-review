import { 
  BookOpen, 
  DollarSign, 
  Briefcase, 
  Users, 
  Heart, 
  Dumbbell,
  Star,
  LucideIcon
} from 'lucide-react';

// Properly type the icons record
export const categoryIcons: Record<string, LucideIcon> = {
  education: BookOpen,
  finance: DollarSign,
  career: Briefcase,
  social: Users,
  spiritual: Heart,
  health: Dumbbell,
  general: Star,
  wellbeing: Heart // Adding wellbeing since it's used in questions
};

export const categoryDescriptions: Record<string, string> = {
  education: "Reflect on your learning journey, new skills acquired, and knowledge gained throughout the year.",
  finance: "Review your financial decisions, achievements, and lessons learned in managing your resources.",
  career: "Examine your professional growth, workplace achievements, and career development.",
  social: "Consider your relationships, connections, and social experiences that shaped your year.",
  spiritual: "Contemplate your inner growth, beliefs, and spiritual development over the past year.",
  health: "Evaluate your physical and mental well-being, health habits, and lifestyle choices.",
  general: "Reflect on your overall experiences, achievements, and memorable moments of the year.",
  wellbeing: "Consider your overall happiness, work-life balance, and personal satisfaction."
};