/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, Component, ErrorInfo, ReactNode } from 'react';
import { Header } from './components/Header';
import { CoverPage } from './components/CoverPage';
import { ChapterView } from './components/ChapterView';
import { MealPlansSection } from './components/MealPlansSection';
import { RecipesSection } from './components/RecipesSection';
import { ToolsSection } from './components/ToolsSection';
import { PrintableEbook } from './components/PrintableEbook';
import { EBOOK_META } from './data/ebookContent';
import { downloadStandaloneEbook } from './utils/exportEbook';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Application Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#faf8f5] text-stone-900 p-8 flex flex-col items-center justify-center text-center">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-lg max-w-md space-y-4">
            <h2 className="text-xl font-bold font-marathi-display text-emerald-900">
              ॲप रीफ्रेश करा
            </h2>
            <p className="text-sm text-stone-600">
              ई-बुक लोड करताना काही अडचण आली आहे. खालील बटण दाबून पुन्हा सुरू करा किंवा थेट फाईल डाऊनलोड करा.
            </p>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => window.location.reload()}
                className="py-2.5 px-4 bg-emerald-800 text-white font-semibold rounded-lg"
              >
                पुन्हा लोड करा (Reload)
              </button>
              <button
                onClick={downloadStandaloneEbook}
                className="py-2.5 px-4 bg-yellow-400 text-stone-900 font-bold rounded-lg"
              >
                थेट ई-बुक डाऊनलोड करा
              </button>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('cover');
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      return typeof window !== 'undefined' && window.matchMedia
        ? window.matchMedia('(prefers-color-scheme: dark)').matches
        : false;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [isDark]);

  const handlePrintPdf = () => {
    setActiveTab('print');
    setTimeout(() => {
      try {
        window.print();
      } catch {
        // In restricted iframes, window.print might be blocked
      }
    }, 400);
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#faf8f5] dark:bg-stone-950 text-stone-900 dark:text-stone-100 flex flex-col font-marathi-body transition-colors">
        {/* Header bar (hidden during print) */}
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onPrintPdf={handlePrintPdf}
          onDownloadFile={downloadStandaloneEbook}
          isDark={isDark}
          setIsDark={setIsDark}
        />

        {/* Main Content Area */}
        <main className="flex-1">
          {activeTab === 'cover' && (
            <CoverPage
              onStartReading={() => setActiveTab('chapters')}
              onOpenMealPlan={() => setActiveTab('mealplans')}
              onOpenRecipes={() => setActiveTab('recipes')}
              onDownloadEbook={downloadStandaloneEbook}
            />
          )}

          {activeTab === 'chapters' && (
            <ChapterView onNavigateToTab={(t) => setActiveTab(t)} />
          )}

          {activeTab === 'mealplans' && (
            <MealPlansSection />
          )}

          {activeTab === 'recipes' && (
            <RecipesSection />
          )}

          {activeTab === 'tools' && (
            <ToolsSection />
          )}

          {activeTab === 'print' && (
            <PrintableEbook onBackToApp={() => setActiveTab('cover')} />
          )}
        </main>

        {/* Persistent Quiet Editorial Footer (no-print) */}
        {activeTab !== 'print' && (
          <footer className="no-print mt-16 border-t border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 py-8 px-4 text-xs text-stone-500 dark:text-stone-400">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <div className="font-bold text-stone-800 dark:text-stone-200 font-marathi-display text-sm">
                  {EBOOK_META.title} · {EBOOK_META.subtitle}
                </div>
                <div>
                  © {new Date().getFullYear()} {EBOOK_META.author}. सर्व हक्क सुरक्षित.
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 text-stone-600 dark:text-stone-300">
                <button
                  onClick={() => setActiveTab('chapters')}
                  className="hover:text-emerald-700 transition-colors"
                >
                  २५ प्रकरणे
                </button>
                <span>·</span>
                <button
                  onClick={() => setActiveTab('mealplans')}
                  className="hover:text-emerald-700 transition-colors"
                >
                  ७-दिवस डाएट
                </button>
                <span>·</span>
                <button
                  onClick={() => setActiveTab('recipes')}
                  className="hover:text-emerald-700 transition-colors"
                >
                  रेसिपीज
                </button>
                <span>·</span>
                <button
                  onClick={() => setActiveTab('tools')}
                  className="hover:text-emerald-700 transition-colors"
                >
                  टूल्स व ट्रॅकर्स
                </button>
                <span>·</span>
                <button
                  onClick={downloadStandaloneEbook}
                  className="font-semibold text-emerald-800 dark:text-emerald-400 hover:underline"
                >
                  📥 ई-बुक डाऊनलोड
                </button>
                <span>·</span>
                <button
                  onClick={handlePrintPdf}
                  className="font-semibold text-emerald-800 dark:text-emerald-400 hover:underline"
                >
                  PDF प्रिंट
                </button>
              </div>
            </div>
          </footer>
        )}
      </div>
    </ErrorBoundary>
  );
}
