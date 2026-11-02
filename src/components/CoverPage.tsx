import React from 'react';
import { EBOOK_META } from '../data/ebookContent';
import { CheckCircle2, Award, ShieldAlert, Sparkles, ArrowRight, Download, BookOpen } from 'lucide-react';

interface CoverPageProps {
  onStartReading: () => void;
  onOpenMealPlan: () => void;
  onOpenRecipes: () => void;
  onDownloadEbook: () => void;
}

export const CoverPage: React.FC<CoverPageProps> = ({
  onStartReading,
  onOpenMealPlan,
  onOpenRecipes,
  onDownloadEbook
}) => {
  return (
    <div className="space-y-12 max-w-5xl mx-auto px-4 sm:px-6 py-6">
      {/* Premium Ebook Front Cover Card */}
      <section className="bg-gradient-to-br from-[#1b4332] via-[#2d6a4f] to-[#1b4332] text-[#fefae0] rounded-2xl overflow-hidden shadow-2xl border border-emerald-900/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left Text Presentation */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs sm:text-sm tracking-wider uppercase text-yellow-300 font-semibold">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span>३० दिवसांचा प्रॅक्टिकल मराठी फिटनेस गाईड</span>
                <span className="text-emerald-300">·</span>
                <span className="text-emerald-200">किंमत: {EBOOK_META.price}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-marathi-display text-white tracking-tight leading-tight">
                {EBOOK_META.title}
              </h1>

              <p className="text-lg sm:text-2xl font-marathi-body text-[#fefae0] font-medium leading-relaxed">
                {EBOOK_META.subtitle}
              </p>

              <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed max-w-xl">
                कोणतेही महागडे पाश्चिमात्य डाएट किंवा क्रॅश स्टार्व्हेशन न करता, आपल्या स्वयंपाकघरातील ज्वारीची भाकरी, मोड आलेली उसळ, डाळी, ताक आणि पालेभाज्यांचा वापर करून शरीरातील अनावश्यक चरबी कमी करण्याचा शास्त्रीय आणि शाश्वत मार्ग.
              </p>
            </div>

            {/* Badges and Trust Markers */}
            <div className="pt-8 space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-emerald-50">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-300 shrink-0" />
                  <span>शाकाहारी + मांसाहारी</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-300 shrink-0" />
                  <span>२५ संपूर्ण प्रकरणे</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-300 shrink-0" />
                  <span>१० पारंपरिक रेसिपीज</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-300 shrink-0" />
                  <span>७-दिवस डाएट चार्ट</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-300 shrink-0" />
                  <span>प्रिंट-रेडी A4 फॉरमॅट</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-yellow-300 shrink-0" />
                  <span>ICMR-NIN मानके</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={onStartReading}
                  className="flex items-center gap-2.5 px-6 py-3.5 bg-yellow-400 hover:bg-yellow-300 text-stone-900 font-bold rounded-xl transition-all shadow-lg hover:shadow-xl transform active:scale-95"
                >
                  <BookOpen className="w-5 h-5 text-stone-900" />
                  <span>प्रकरण १ वाचा</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onDownloadEbook}
                  className="flex items-center gap-2 px-5 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl border border-emerald-400/40 transition-all shadow-md active:scale-95"
                >
                  <Download className="w-5 h-5" />
                  <span>ई-बुक डाऊनलोड (Offline File)</span>
                </button>
                <button
                  onClick={onOpenMealPlan}
                  className="px-4 py-3.5 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl border border-white/20 transition-colors"
                >
                  डाएट प्लॅन्स पहा
                </button>
              </div>

              <div className="pt-4 border-t border-emerald-700/60 flex items-center justify-between text-xs text-emerald-200">
                <span>लेखक: <strong className="text-white">{EBOOK_META.author}</strong></span>
                <span>आवृत्ती: {EBOOK_META.version}</span>
              </div>
            </div>
          </div>

          {/* Right Visual Image */}
          <div className="lg:col-span-5 relative bg-emerald-950 flex items-center justify-center p-4 sm:p-8">
            <div className="relative w-full max-w-sm rounded-xl overflow-hidden shadow-2xl ring-4 ring-yellow-400/30">
              <img
                src="/src/assets/images/ebook_cover_thali_1793638576728.jpg"
                alt="घरचं जेवण, फिट शरीर! - अस्सल महाराष्ट्रीयन संतुलित थाळी"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                <div className="text-white text-xs">
                  <span className="font-semibold text-yellow-300">अस्सल पारंपरिक ताट:</span> ज्वारी भाकरी, मोड आलेली मटकी उसळ, पालक डाळ, काकडी कोशिंबीर व ताक.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience & Book Highlights Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 shadow-sm">
          <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 flex items-center justify-center mb-4">
            <Award className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold font-marathi-display text-stone-900 dark:text-stone-100 mb-2">
            कोणासाठी आहे हे पुस्तक?
          </h2>
          <ul className="text-sm text-stone-600 dark:text-stone-300 space-y-1.5 list-disc list-inside">
            <li>वय वर्षे २२ ते ४५ मधील नोकरदार आणि गृहिणी</li>
            <li>वजन कमी करताना घरचे अन्न सोडू न इच्छिणारे</li>
            <li>डायबिटीज किंवा बीपीच्या सुरुवातीच्या टप्प्यातील लोक</li>
            <li>किफायतशीर (Budget-friendly) आरोग्याची आवड असलेले</li>
          </ul>
        </div>

        <div className="p-6 bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 shadow-sm">
          <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 flex items-center justify-center mb-4">
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold font-marathi-display text-stone-900 dark:text-stone-100 mb-2">
            ३० दिवसांचे मुख्य उद्दिष्ट
          </h2>
          <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
            अवास्तव किंवा बनावट वजन घटवण्याचे आमिष न दाखवता, शरीरातील चरबी (Fat) कमी करणे, पचनक्रिया सुधारणे आणि वर्षानुवर्षे टिकून राहणाऱ्या खाण्याच्या योग्य सवयींची शास्त्रीय शिस्त लावणे.
          </p>
        </div>

        <div className="p-6 bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 shadow-sm">
          <div className="w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 flex items-center justify-center mb-4">
            <BookOpen className="w-5 h-5" />
          </div>
          <h2 className="text-lg font-bold font-marathi-display text-stone-900 dark:text-stone-100 mb-2">
            प्रात्यक्षिक साहित्य समाविष्ट
          </h2>
          <ul className="text-sm text-stone-600 dark:text-stone-300 space-y-1.5 list-disc list-inside">
            <li>७-दिवस शाकाहारी व मांसाहारी डाएट चार्ट्स</li>
            <li>महिनाभराची किराणा खरेदी यादी (Shopping List)</li>
            <li>३० दिवसांचे दैनिक फिटनेस व हॅबिट वर्कशीट</li>
            <li>बीएमआय व प्रोटीन कॅल्क्युलेटर टूल</li>
          </ul>
        </div>
      </section>

      {/* Medical Disclaimer & Copyright Notice Box */}
      <section className="p-6 bg-[#fdfbf7] dark:bg-stone-900/60 rounded-xl border border-amber-200 dark:border-amber-900/40 text-stone-700 dark:text-stone-300">
        <div className="flex items-start gap-3">
          <ShieldAlert className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-2">
            <h2 className="text-sm font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wide">
              वैद्यकीय अस्वीकरण (Medical Disclaimer) व कायदेशीर नोंद
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-stone-600 dark:text-stone-300">
              {EBOOK_META.disclaimer}
            </p>
            <div className="pt-2 text-xs text-stone-500 dark:text-stone-400 border-t border-amber-200/60 dark:border-amber-900/40 flex flex-wrap justify-between gap-2">
              <span>© {new Date().getFullYear()} {EBOOK_META.author}. सर्व हक्क सुरक्षित (All Rights Reserved).</span>
              <span>संदर्भ मार्गदर्शक: ICMR-NIN 2024 · FSSAI Eat Right India · WHO Guidelines</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
