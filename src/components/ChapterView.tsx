import React, { useState } from 'react';
import { CHAPTERS } from '../data/ebookContent';
import { Chapter } from '../types/ebook';
import { safeStorage } from '../utils/storage';
import { 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  Clock, 
  CheckCircle, 
  HelpCircle, 
  Flame, 
  AlertTriangle,
  Lightbulb,
  Share2,
  Bookmark
} from 'lucide-react';

interface ChapterViewProps {
  initialChapterId?: number;
  onNavigateToTab?: (tab: string) => void;
}

export const ChapterView: React.FC<ChapterViewProps> = ({
  initialChapterId = 1,
  onNavigateToTab
}) => {
  const [currentChapterId, setCurrentChapterId] = useState<number>(initialChapterId);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [savedBookmark, setSavedBookmark] = useState<number | null>(() => {
    const saved = safeStorage.getItem('marathi_fit_bookmark');
    return saved ? parseInt(saved, 10) : null;
  });

  const currentChapter = CHAPTERS.find((ch) => ch.id === currentChapterId) || CHAPTERS[0];

  const handleBookmark = (id: number) => {
    if (savedBookmark === id) {
      setSavedBookmark(null);
      safeStorage.removeItem('marathi_fit_bookmark');
    } else {
      setSavedBookmark(id);
      safeStorage.setItem('marathi_fit_bookmark', id.toString());
    }
  };

  const filteredChapters = CHAPTERS.filter((ch) => {
    if (filterCategory === 'all') return true;
    return ch.category === filterCategory;
  });

  const nextChapter = () => {
    if (currentChapterId < CHAPTERS.length) {
      setCurrentChapterId(currentChapterId + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevChapter = () => {
    if (currentChapterId > 1) {
      setCurrentChapterId(currentChapterId - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getCategoryLabel = (cat: Chapter['category']) => {
    switch (cat) {
      case 'foundation': return 'पाया व विज्ञान';
      case 'nutrition': return 'पोषणशास्त्र';
      case 'meals': return 'जेवणाचे नियोजन';
      case 'action_plan': return 'डाएट व कृती';
      case 'lifestyle': return 'जीवनशैली व सवयी';
      default: return 'प्रकरण';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Sidebar: Table of Contents & Category Filters */}
        <aside className="lg:col-span-4 bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-4 sm:p-5 shadow-sm sticky top-20 max-h-[85vh] flex flex-col">
          <div className="flex items-center justify-between pb-3 border-b border-stone-200 dark:border-stone-800">
            <div className="flex items-center gap-2 font-bold font-marathi-display text-base text-stone-900 dark:text-stone-100">
              <BookOpen className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
              <span>अनुक्रमणिका (२५ प्रकरणे)</span>
            </div>
            {savedBookmark && (
              <button
                onClick={() => setCurrentChapterId(savedBookmark)}
                className="text-xs text-amber-700 dark:text-amber-400 hover:underline flex items-center gap-1"
                title="बुकमार्क केलेल्या प्रकरणावर जा"
              >
                <Bookmark className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span>प्रकरण {savedBookmark}</span>
              </button>
            )}
          </div>

          {/* Interactive filter tabs */}
          <div className="py-3 flex flex-wrap gap-1 text-xs">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                filterCategory === 'all'
                  ? 'bg-emerald-800 text-white font-medium'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:text-stone-900'
              }`}
            >
              सर्व ({CHAPTERS.length})
            </button>
            <button
              onClick={() => setFilterCategory('foundation')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                filterCategory === 'foundation'
                  ? 'bg-emerald-800 text-white font-medium'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:text-stone-900'
              }`}
            >
              विज्ञान
            </button>
            <button
              onClick={() => setFilterCategory('nutrition')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                filterCategory === 'nutrition'
                  ? 'bg-emerald-800 text-white font-medium'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:text-stone-900'
              }`}
            >
              पोषण
            </button>
            <button
              onClick={() => setFilterCategory('meals')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                filterCategory === 'meals'
                  ? 'bg-emerald-800 text-white font-medium'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:text-stone-900'
              }`}
            >
              आहार
            </button>
            <button
              onClick={() => setFilterCategory('action_plan')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                filterCategory === 'action_plan'
                  ? 'bg-emerald-800 text-white font-medium'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:text-stone-900'
              }`}
            >
              प्लॅन्स
            </button>
          </div>

          {/* Chapter Links List */}
          <div className="overflow-y-auto space-y-1.5 flex-1 pr-1 mt-1 text-sm">
            {filteredChapters.map((ch) => {
              const isActive = ch.id === currentChapterId;
              const isBookmarked = savedBookmark === ch.id;

              return (
                <button
                  key={ch.id}
                  onClick={() => {
                    setCurrentChapterId(ch.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`w-full text-left p-2.5 rounded-lg transition-all flex items-start gap-2.5 ${
                    isActive
                      ? 'bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 font-semibold'
                      : 'hover:bg-stone-100 dark:hover:bg-stone-800/60 text-stone-700 dark:text-stone-300'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs shrink-0 mt-0.5 ${
                    isActive ? 'bg-emerald-800 text-white font-bold' : 'bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-400'
                  }`}>
                    {ch.id}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="truncate text-xs sm:text-sm font-medium">{ch.title}</p>
                    <div className="flex items-center gap-2 text-[11px] text-stone-400 dark:text-stone-500 mt-0.5">
                      <span>{getCategoryLabel(ch.category)}</span>
                      <span>·</span>
                      <span>{ch.readTimeMinutes} मि.</span>
                    </div>
                  </div>
                  {isBookmarked && (
                    <Bookmark className="w-3.5 h-3.5 text-amber-500 fill-amber-500 shrink-0 mt-1" />
                  )}
                </button>
              );
            })}
          </div>
        </aside>

        {/* Right Main Content: Elegant Editorial Reader Canvas */}
        <main className="lg:col-span-8 bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-6 sm:p-10 shadow-sm min-h-[800px] flex flex-col justify-between">
          <article className="space-y-8">
            {/* Chapter Header Ribbon */}
            <div className="pb-6 border-b border-stone-200 dark:border-stone-800">
              <div className="flex items-center justify-between gap-4 mb-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 dark:text-emerald-400">
                  <span>प्रकरण {currentChapter.id}</span>
                  <span aria-hidden="true">·</span>
                  <span>{getCategoryLabel(currentChapter.category)}</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1 text-stone-500">
                    <Clock className="w-3 h-3" />
                    {currentChapter.readTimeMinutes} मिनिटे वाचन
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleBookmark(currentChapter.id)}
                    aria-label="Bookmark this chapter"
                    className={`p-2 rounded-lg border transition-colors ${
                      savedBookmark === currentChapter.id
                        ? 'bg-amber-50 dark:bg-amber-950 border-amber-300 text-amber-600'
                        : 'border-stone-200 dark:border-stone-800 text-stone-400 hover:text-stone-700'
                    }`}
                    title={savedBookmark === currentChapter.id ? "बुकमार्क काढले" : "हे प्रकरण बुकमार्क करा"}
                  >
                    <Bookmark className={`w-4 h-4 ${savedBookmark === currentChapter.id ? 'fill-amber-500 text-amber-500' : ''}`} />
                  </button>
                </div>
              </div>

              <h1 className="text-2xl sm:text-4xl font-bold font-marathi-display text-stone-950 dark:text-stone-50 leading-tight">
                {currentChapter.title}
              </h1>

              <p className="text-xs sm:text-sm text-stone-400 dark:text-stone-500 mt-1 italic font-sans">
                {currentChapter.englishTitle}
              </p>

              <p className="text-base sm:text-lg text-emerald-900/80 dark:text-emerald-300/90 font-medium mt-3 bg-emerald-50/60 dark:bg-emerald-950/40 p-3.5 rounded-xl border border-emerald-100 dark:border-emerald-900/50">
                "{currentChapter.summary}"
              </p>
            </div>

            {/* Special Inline Visual for Key Chapters */}
            {currentChapter.id === 9 && (
              <div className="rounded-xl overflow-hidden border border-stone-200 dark:border-stone-800 shadow-sm my-6">
                <img
                  src="/src/assets/images/healthy_breakfast_poha_1793638576917.jpg"
                  alt="महाराष्ट्रीयन सकस नाश्ता - पोहे, अंडी व ग्रीन टी"
                  referrerPolicy="no-referrer"
                  className="w-full h-64 object-cover"
                />
                <div className="p-3 bg-stone-50 dark:bg-stone-800/80 text-xs text-stone-600 dark:text-stone-300 italic">
                  सकस महाराष्ट्रीयन नाश्ता: भरपूर मटार व शेंगदाणे घातलेले कांदे पोहे, उकडलेली अंडी व हर्बल चहा.
                </div>
              </div>
            )}

            {currentChapter.id === 13 && (
              <div className="rounded-xl overflow-hidden border border-stone-200 dark:border-stone-800 shadow-sm my-6">
                <img
                  src="/src/assets/images/protein_rich_sources_1793638577287.jpg"
                  alt="भारतीय प्रथिन स्त्रोत - मूग, पनीर, चणे, दही, सत्तू"
                  referrerPolicy="no-referrer"
                  className="w-full h-64 object-cover"
                />
                <div className="p-3 bg-stone-50 dark:bg-stone-800/80 text-xs text-stone-600 dark:text-stone-300 italic">
                  घरगुती प्रथिनांचा खजिना: मोड आलेले मूग, पनीर, ताजे दही, देशी चणे व अंडी.
                </div>
              </div>
            )}

            {currentChapter.id === 19 && (
              <div className="rounded-xl overflow-hidden border border-stone-200 dark:border-stone-800 shadow-sm my-6">
                <img
                  src="/src/assets/images/home_workout_yoga_1793638578050.jpg"
                  alt="घरच्या घरी सूर्यनमस्कार आणि योग"
                  referrerPolicy="no-referrer"
                  className="w-full h-64 object-cover"
                />
                <div className="p-3 bg-stone-50 dark:bg-stone-800/80 text-xs text-stone-600 dark:text-stone-300 italic">
                  घरामध्ये नैसर्गिक चटईवर सूर्यनमस्कार आणि स्ट्रेंथ व्यायाम.
                </div>
              </div>
            )}

            {/* Sections & Body Prose with Editorial Standards */}
            <div className="space-y-8 text-stone-800 dark:text-stone-200 leading-relaxed font-marathi-body text-base sm:text-lg">
              {currentChapter.sections.map((sec, idx) => (
                <section key={idx} className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold font-marathi-display text-stone-900 dark:text-stone-100 pt-2">
                    {sec.heading}
                  </h2>

                  {(sec.content || []).map((pText, pIdx) => (
                    <p
                      key={pIdx}
                      className={
                        idx === 0 && pIdx === 0
                          ? 'first-letter:text-4xl first-letter:font-bold first-letter:text-emerald-800 dark:first-letter:text-emerald-400 first-letter:mr-2'
                          : ''
                      }
                    >
                      {pText}
                    </p>
                  ))}

                  {/* Callout Boxes */}
                  {sec.callout && (
                    <div
                      className={`p-4 sm:p-5 rounded-xl border my-4 ${
                        sec.callout.type === 'tip'
                          ? 'bg-emerald-50/70 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900/60 text-emerald-950 dark:text-emerald-200'
                          : sec.callout.type === 'science'
                          ? 'bg-amber-50/70 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900/60 text-amber-950 dark:text-amber-200'
                          : 'bg-red-50/70 dark:bg-red-950/40 border-red-200 dark:border-red-900/60 text-red-950 dark:text-red-200'
                      }`}
                    >
                      <div className="flex items-center gap-2 font-bold text-sm mb-1.5">
                        {sec.callout.type === 'tip' ? (
                          <Lightbulb className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                        ) : sec.callout.type === 'science' ? (
                          <Flame className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                        ) : (
                          <AlertTriangle className="w-4 h-4 text-red-700 dark:text-red-400" />
                        )}
                        <span>{sec.callout.title}</span>
                      </div>
                      <p className="text-sm sm:text-base leading-relaxed opacity-95">
                        {sec.callout.text}
                      </p>
                    </div>
                  )}

                  {/* Bullet points if any */}
                  {sec.bulletPoints && (
                    <ul className="space-y-2.5 my-3 pl-2">
                      {sec.bulletPoints.map((bp, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-sm sm:text-base">
                          <CheckCircle className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0 mt-1" />
                          <span>{bp}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tables if any */}
                  {sec.table && (
                    <div className="overflow-x-auto my-4 rounded-xl border border-stone-200 dark:border-stone-800">
                      <table className="w-full text-left text-xs sm:text-sm">
                        <thead className="bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 font-bold border-b border-stone-200 dark:border-stone-800">
                          <tr>
                            {sec.table.headers.map((th, thIdx) => (
                              <th key={thIdx} className="p-3">
                                {th}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-200 dark:divide-stone-800">
                          {sec.table.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-stone-50 dark:hover:bg-stone-800/40">
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="p-3 font-medium">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* Key Takeaways Box */}
            <div className="p-5 sm:p-6 bg-stone-50 dark:bg-stone-800/60 rounded-xl border border-stone-200 dark:border-stone-800 mt-8 space-y-3">
              <h3 className="text-base font-bold font-marathi-display text-emerald-900 dark:text-emerald-300 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
                <span>प्रकरणाचे मुख्य सार (Key Takeaways)</span>
              </h3>
              <ul className="space-y-2 text-sm sm:text-base text-stone-700 dark:text-stone-300">
                {currentChapter.keyTakeaways.map((kt, ktIdx) => (
                  <li key={ktIdx} className="flex items-start gap-2">
                    <span className="text-emerald-700 dark:text-emerald-400 font-bold">✓</span>
                    <span>{kt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Bottom Pagination Controls */}
          <footer className="pt-8 mt-10 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between gap-4">
            <button
              onClick={prevChapter}
              disabled={currentChapterId === 1}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                currentChapterId === 1
                  ? 'opacity-40 cursor-not-allowed text-stone-400'
                  : 'text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>मागील प्रकरण</span>
            </button>

            <span className="text-xs text-stone-500 font-mono">
              {currentChapterId} / {CHAPTERS.length}
            </span>

            <button
              onClick={nextChapter}
              disabled={currentChapterId === CHAPTERS.length}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                currentChapterId === CHAPTERS.length
                  ? 'opacity-40 cursor-not-allowed text-stone-400'
                  : 'bg-emerald-800 text-white hover:bg-emerald-900 shadow-sm'
              }`}
            >
              <span>पुढील प्रकरण</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </footer>
        </main>
      </div>
    </div>
  );
};
