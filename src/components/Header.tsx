import React from 'react';
import { BookOpen, Printer, Sun, Moon, Download } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onPrintPdf: () => void;
  onDownloadFile: () => void;
  isDark: boolean;
  setIsDark: (val: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab, setActiveTab, onPrintPdf, onDownloadFile, isDark, setIsDark
}) => {
  const links = [
    ['cover', 'मुखपृष्ठ'], ['chapters', '२५ प्रकरणे'],
    ['mealplans', 'डाएट चार्ट'], ['recipes', 'रेसिपीज'], ['tools', 'ट्रॅकर्स']
  ];
  return (
    <header className="sticky top-0 z-40 bg-[#fffefa]/95 dark:bg-stone-950/95 backdrop-blur-xl border-b border-emerald-900/10 dark:border-stone-800 shadow-[0_8px_30px_-24px_rgba(16,54,41,.5)] no-print">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-3 sm:px-6 py-3">
        <button onClick={() => setActiveTab('cover')} className="text-left group flex items-center gap-2.5 text-base sm:text-xl font-bold font-marathi-display text-emerald-950 dark:text-emerald-300 whitespace-nowrap shrink-0">
          <span className="p-2 rounded-xl bg-emerald-900 text-amber-200 shadow-sm group-hover:rotate-[-4deg] transition-transform"><BookOpen className="w-5 h-5" /></span>
          <span className="tracking-tight">घरचं जेवण, फिट शरीर!</span>
        </button>
        <nav aria-label="मुख्य नेव्हिगेशन" className="hidden lg:flex items-center gap-1 text-sm font-semibold text-stone-600 dark:text-stone-300">
          {links.map(([id, label]) => (
            <button key={id} type="button" aria-current={activeTab === id ? "page" : undefined} onClick={() => setActiveTab(id)} className={`px-3 py-2 rounded-xl transition-all whitespace-nowrap ${activeTab === id ? 'bg-emerald-900 text-white shadow-sm' : 'hover:bg-emerald-50 dark:hover:bg-stone-800 hover:text-emerald-900 dark:hover:text-emerald-200'}`}>
              {label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <button onClick={() => setIsDark(!isDark)} aria-label="थीम बदला" className="p-2.5 text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-xl">
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button onClick={onDownloadFile} className="hidden sm:flex items-center gap-1.5 px-3 py-2.5 text-xs sm:text-sm font-bold text-emerald-950 dark:text-emerald-100 bg-amber-100 hover:bg-amber-200 dark:bg-emerald-950 dark:hover:bg-emerald-900 rounded-xl whitespace-nowrap">
            <Download className="w-4 h-4" /><span>ई-बुक</span>
          </button>
          <button onClick={onPrintPdf} className="flex items-center gap-1.5 px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-bold text-white bg-emerald-900 hover:bg-emerald-800 dark:bg-emerald-700 rounded-xl shadow-md shadow-emerald-950/10 whitespace-nowrap">
            <Printer className="w-4 h-4" /><span>PDF सेव्ह</span>
          </button>
        </div>
      </div>
      <nav aria-label="मुख्य नेव्हिगेशन" className="lg:hidden flex items-center gap-1 px-3 pb-2 overflow-x-auto border-t border-stone-100 dark:border-stone-800 pt-2 text-xs font-semibold">
        {links.map(([id, label]) => (
          <button key={id} type="button" aria-current={activeTab === id ? "page" : undefined} onClick={() => setActiveTab(id)} className={`px-3 py-2 rounded-lg whitespace-nowrap ${activeTab === id ? 'bg-emerald-900 text-white' : 'text-stone-600 dark:text-stone-300 hover:bg-emerald-50 dark:hover:bg-stone-800'}`}>{label}</button>
        ))}
      </nav>
    </header>
  );
};
