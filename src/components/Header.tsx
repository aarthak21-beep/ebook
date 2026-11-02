import React from 'react';
import { BookOpen, Printer, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onPrintPdf: () => void;
  onDownloadFile: () => void;
  isDark: boolean;
  setIsDark: (val: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onPrintPdf,
  onDownloadFile,
  isDark,
  setIsDark
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-stone-900/95 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 transition-colors no-print">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 px-4 sm:px-6 py-3.5">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => setActiveTab('cover')}
          className="text-left group flex items-center gap-2.5 text-lg sm:text-xl font-bold font-marathi-display text-emerald-900 dark:text-emerald-400 whitespace-nowrap shrink-0 hover:opacity-85 transition-opacity"
        >
          <span className="p-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
            <BookOpen className="w-5 h-5" />
          </span>
          <span className="tracking-tight">घरचं जेवण, फिट शरीर!</span>
        </button>

        {/* Zone 2: 4-5 clean single-line nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600 dark:text-stone-300">
          <button
            onClick={() => setActiveTab('cover')}
            className={`whitespace-nowrap shrink-0 transition-colors pb-0.5 border-b-2 ${
              activeTab === 'cover'
                ? 'border-emerald-700 text-emerald-800 dark:text-emerald-400 font-semibold dark:border-emerald-400'
                : 'border-transparent hover:text-stone-900 dark:hover:text-stone-100'
            }`}
          >
            मुखपृष्ठ
          </button>
          <button
            onClick={() => setActiveTab('chapters')}
            className={`whitespace-nowrap shrink-0 transition-colors pb-0.5 border-b-2 ${
              activeTab === 'chapters'
                ? 'border-emerald-700 text-emerald-800 dark:text-emerald-400 font-semibold dark:border-emerald-400'
                : 'border-transparent hover:text-stone-900 dark:hover:text-stone-100'
            }`}
          >
            २५ प्रकरणे
          </button>
          <button
            onClick={() => setActiveTab('mealplans')}
            className={`whitespace-nowrap shrink-0 transition-colors pb-0.5 border-b-2 ${
              activeTab === 'mealplans'
                ? 'border-emerald-700 text-emerald-800 dark:text-emerald-400 font-semibold dark:border-emerald-400'
                : 'border-transparent hover:text-stone-900 dark:hover:text-stone-100'
            }`}
          >
            ७-दिवस डाएट
          </button>
          <button
            onClick={() => setActiveTab('recipes')}
            className={`whitespace-nowrap shrink-0 transition-colors pb-0.5 border-b-2 ${
              activeTab === 'recipes'
                ? 'border-emerald-700 text-emerald-800 dark:text-emerald-400 font-semibold dark:border-emerald-400'
                : 'border-transparent hover:text-stone-900 dark:hover:text-stone-100'
            }`}
          >
            १० रेसिपीज
          </button>
          <button
            onClick={() => setActiveTab('tools')}
            className={`whitespace-nowrap shrink-0 transition-colors pb-0.5 border-b-2 ${
              activeTab === 'tools'
                ? 'border-emerald-700 text-emerald-800 dark:text-emerald-400 font-semibold dark:border-emerald-400'
                : 'border-transparent hover:text-stone-900 dark:hover:text-stone-100'
            }`}
          >
            वर्कआउट व ट्रॅकर्स
          </button>
        </nav>

        {/* Zone 3: 1 primary action + theme toggle */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle theme"
            className="p-2 text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-colors"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={onDownloadFile}
            className="flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-semibold text-emerald-900 dark:text-emerald-200 bg-emerald-100 hover:bg-emerald-200 dark:bg-emerald-950 dark:hover:bg-emerald-900 rounded-lg transition-all whitespace-nowrap shrink-0"
            title="थेट ऑफलाइन ई-बुक फाईल डाऊनलोड करा"
          >
            <span>📥 ई-बुक डाऊनलोड</span>
          </button>
          <button
            onClick={onPrintPdf}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-900 dark:bg-emerald-700 dark:hover:bg-emerald-600 rounded-lg transition-all shadow-sm whitespace-nowrap shrink-0"
          >
            <Printer className="w-4 h-4" />
            <span>PDF प्रिंट</span>
          </button>
        </div>
      </div>

      {/* Mobile Secondary Bar for small screens */}
      <div className="md:hidden flex items-center justify-between px-3 py-2 border-t border-stone-200 dark:border-stone-800 text-xs overflow-x-auto gap-2 bg-stone-50 dark:bg-stone-950">
        <button
          onClick={() => setActiveTab('cover')}
          className={`px-2.5 py-1 rounded whitespace-nowrap ${activeTab === 'cover' ? 'bg-emerald-800 text-white font-medium' : 'text-stone-700 dark:text-stone-300'}`}
        >
          मुखपृष्ठ
        </button>
        <button
          onClick={() => setActiveTab('chapters')}
          className={`px-2.5 py-1 rounded whitespace-nowrap ${activeTab === 'chapters' ? 'bg-emerald-800 text-white font-medium' : 'text-stone-700 dark:text-stone-300'}`}
        >
          २५ प्रकरणे
        </button>
        <button
          onClick={() => setActiveTab('mealplans')}
          className={`px-2.5 py-1 rounded whitespace-nowrap ${activeTab === 'mealplans' ? 'bg-emerald-800 text-white font-medium' : 'text-stone-700 dark:text-stone-300'}`}
        >
          डाएट चार्ट
        </button>
        <button
          onClick={() => setActiveTab('recipes')}
          className={`px-2.5 py-1 rounded whitespace-nowrap ${activeTab === 'recipes' ? 'bg-emerald-800 text-white font-medium' : 'text-stone-700 dark:text-stone-300'}`}
        >
          १० रेसिपीज
        </button>
        <button
          onClick={() => setActiveTab('tools')}
          className={`px-2.5 py-1 rounded whitespace-nowrap ${activeTab === 'tools' ? 'bg-emerald-800 text-white font-medium' : 'text-stone-700 dark:text-stone-300'}`}
        >
          ट्रॅकर्स
        </button>
      </div>
    </header>
  );
};
