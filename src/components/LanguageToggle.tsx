import React from 'react';
import { Switch } from '@/components/ui/switch';
import { useLanguageStore } from '@/store/language-store';

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguageStore();
  const isEnglish = language === 'en';

  return (
    <div className="flex items-center space-x-3 bg-white border border-red-200 rounded-lg p-2 shadow-sm">
      <span 
        className={`text-sm font-medium transition-colors duration-200 ${
          isEnglish ? 'text-red-600' : 'text-gray-500'
        }`}
      >
        ENG
      </span>
      <Switch
        checked={!isEnglish}
        onCheckedChange={toggleLanguage}
        className="data-[state=checked]:bg-red-600 data-[state=unchecked]:bg-gray-300"
      />
      <span 
        className={`text-sm font-medium transition-colors duration-200 tamil-text ${
          !isEnglish ? 'text-red-600' : 'text-gray-500'
        }`}
      >
        தமிழ்
      </span>
    </div>
  );
}