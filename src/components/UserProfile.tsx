import React, { useState } from 'react';
import { UserProfile } from '../types';
import { Camera, User, FileText } from 'lucide-react';

interface Props {
  onComplete: (profile: UserProfile) => void;
}

export default function UserProfileForm({ onComplete }: Props) {
  const [profile, setProfile] = useState<UserProfile>({
    name: '',
    bio: '',
  });
  const [photoPreview, setPhotoPreview] = useState<string>('');

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
        setProfile(prev => ({ ...prev, photo: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete(profile);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-white mb-6">
            Tell Us About Yourself
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Before we begin your year in review, let's personalize your experience. 
            Share a bit about yourself to make your reflection journey more meaningful.
          </p>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1513530176992-0cf39c4cbed4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              alt="Reflection"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="flex items-center text-lg font-medium text-gray-700 mb-3">
                <User className="w-5 h-5 mr-2" />
                Your Name
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-lg"
                value={profile.name}
                onChange={(e) => setProfile(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700 mb-3">
                Profile Photo (Optional)
              </label>
              <div className="flex justify-center">
                <label className="relative cursor-pointer group">
                  <div className={`w-32 h-32 rounded-full flex items-center justify-center overflow-hidden border-2 ${photoPreview ? 'border-gray-300' : 'border-dashed border-gray-400'} hover:border-gray-500 transition-colors`}>
                    {photoPreview ? (
                      <img
                        src={photoPreview}
                        alt="Preview"
                        className="w-full h-full object-cover group-hover:opacity-75 transition-opacity"
                      />
                    ) : (
                      <Camera className="w-10 h-10 text-gray-400 group-hover:text-gray-500 transition-colors" />
                    )}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity rounded-full flex items-center justify-center">
                      <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handlePhotoChange}
                  />
                </label>
              </div>
            </div>

            <div>
              <label className="flex items-center text-lg font-medium text-gray-700 mb-3">
                <FileText className="w-5 h-5 mr-2" />
                Short Bio
              </label>
              <textarea
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-lg"
                rows={4}
                value={profile.bio}
                onChange={(e) => setProfile(prev => ({ ...prev, bio: e.target.value }))}
                placeholder="Tell us a bit about yourself..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Continue to Questions
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}