import React from 'react';
import { EBOOK_META } from '../data/ebookContent';
import { CheckCircle2, Award, ShieldAlert, Sparkles, ArrowRight, Download, BookOpen, Utensils, CalendarDays, FileCheck2 } from 'lucide-react';
import coverImage from '../assets/images/ebook_cover_thali_1793638576728.jpg';

interface CoverPageProps {
  onStartReading: () => void;
  onOpenMealPlan: () => void;
  onOpenRecipes: () => void;
  onDownloadEbook: () => void;
}

export const CoverPage: React.FC<CoverPageProps> = ({ onStartReading, onOpenMealPlan, onOpenRecipes, onDownloadEbook }) => {
  const highlights = [
    'शाकाहारी + मांसाहारी पर्याय', '२५ सोपी वाचनीय प्रकरणे',
    '१० घरगुती रेसिपीज', '७ दिवसांचे दोन डाएट चार्ट',
    '३० दिवसांचा सवय ट्रॅकर', 'प्रिंट-रेडी A4 ई-बुक'
  ];
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10 sm:space-y-14">
      <section className="relative isolate overflow-hidden rounded-[2rem] bg-[#123b2c] text-[#fff9e9] shadow-[0_28px_70px_-28px_rgba(16,54,41,.65)] ring-1 ring-emerald-950/20">
        <div className="absolute inset-0 -z-10 opacity-30" style={{backgroundImage:'radial-gradient(circle at 15% 15%, #d8b45b 0, transparent 26%), radial-gradient(circle at 90% 85%, #4b956c 0, transparent 34%)'}} />
        <div className="grid lg:grid-cols-[1.08fr_.92fr]">
          <div className="p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
            <div className="inline-flex self-start items-center gap-2 rounded-full border border-amber-200/30 bg-white/5 px-4 py-2 text-[11px] sm:text-xs font-bold tracking-wide text-amber-200">
              <Sparkles className="w-4 h-4" /> ३० दिवसांची सोपी आरोग्यदायी सुरुवात
            </div>
            <p className="mt-7 text-sm font-semibold text-emerald-200">महाराष्ट्रीयन घरगुती आहारावर आधारित मार्गदर्शक</p>
            <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-bold font-marathi-display leading-[1.22] tracking-tight text-white">{EBOOK_META.title}</h1>
            <p className="mt-4 text-xl sm:text-2xl font-bold text-amber-200">{EBOOK_META.subtitle}</p>
            <p className="mt-5 max-w-xl text-sm sm:text-base leading-8 text-emerald-50/90">
              रोजच्या स्वयंपाकातील परिचित पदार्थ वापरून संतुलित आहार, हालचाल आणि टिकणाऱ्या चांगल्या सवयी तयार करण्यासाठी एक सोपा मराठी मार्गदर्शक.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {highlights.map((item) => <span key={item} className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.07] px-3 py-2 text-xs text-emerald-50"><CheckCircle2 className="w-3.5 h-3.5 text-amber-300" />{item}</span>)}
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <button onClick={onStartReading} className="inline-flex items-center gap-2 rounded-xl bg-amber-300 px-5 py-3.5 font-bold text-emerald-950 shadow-lg shadow-black/15 hover:bg-amber-200">
                <BookOpen className="w-5 h-5" /> वाचायला सुरुवात <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={onDownloadEbook} className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-3.5 font-bold text-white hover:bg-white/15">
                <Download className="w-5 h-5" /> ई-बुक डाऊनलोड
              </button>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/15 pt-5 text-xs text-emerald-200">
              <span>लेखक: <strong className="text-white">{EBOOK_META.author}</strong></span>
              <span className="rounded-full bg-amber-300 px-4 py-2 text-sm font-extrabold text-emerald-950">किंमत {EBOOK_META.price}</span>
            </div>
            <div className="mt-4 rounded-xl border border-amber-200/25 bg-white/[0.06] px-4 py-3 text-xs leading-6 text-emerald-50/90"><strong className="text-amber-200">पेमेंट सुविधा लवकरच सुरू होईल.</strong><span className="block">सध्या ऑनलाइन खरेदी / पेमेंट सक्रिय नाही. पेमेंट सुरू झाल्यावरच खरेदीची लिंक येथे दिली जाईल.</span></div>
          </div>
          <div className="relative min-h-[360px] sm:min-h-[520px] bg-emerald-950/40 p-5 sm:p-9 flex items-center justify-center">
            <div className="absolute inset-5 rounded-[1.6rem] border border-amber-200/20 pointer-events-none" />
            <div className="relative w-full max-w-md overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/20 rotate-[1deg] hover:rotate-0 transition-transform duration-500">
              <img src={coverImage} alt="महाराष्ट्रीयन संतुलित घरगुती थाळी" className="block w-full aspect-[4/5] object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 pt-16 text-white">
                <div className="text-xs font-bold tracking-widest text-amber-300">घरगुती • परवडणारे • व्यवहार्य</div>
                <div className="mt-1 text-lg font-bold">आपल्या ताटातून आरोग्याकडे</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <article className="rounded-2xl border border-emerald-900/10 bg-white/90 p-6 shadow-[0_12px_35px_-28px_rgba(16,54,41,.4)] dark:bg-stone-900 dark:border-stone-800">
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-200"><Utensils className="w-5 h-5" /></div>
          <h2 className="font-marathi-display text-xl font-bold text-emerald-950 dark:text-emerald-100">आपल्या घरच्या जेवणातून</h2>
          <p className="mt-2 text-sm leading-7 text-stone-600 dark:text-stone-300">ज्वारी, बाजरी, डाळी, उसळी, भाज्या आणि नेहमीच्या पदार्थांवर आधारित सोप्या कल्पना.</p>
        </article>
        <article className="rounded-2xl border border-emerald-900/10 bg-white/90 p-6 shadow-[0_12px_35px_-28px_rgba(16,54,41,.4)] dark:bg-stone-900 dark:border-stone-800">
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200"><CalendarDays className="w-5 h-5" /></div>
          <h2 className="font-marathi-display text-xl font-bold text-emerald-950 dark:text-emerald-100">कृतीत आणता येईल असा प्लॅन</h2>
          <p className="mt-2 text-sm leading-7 text-stone-600 dark:text-stone-300">शाकाहारी आणि मांसाहारी पर्याय, आठवड्याचे चार्ट आणि ३० दिवसांचा सवय ट्रॅकर.</p>
        </article>
        <article className="rounded-2xl border border-emerald-900/10 bg-white/90 p-6 shadow-[0_12px_35px_-28px_rgba(16,54,41,.4)] dark:bg-stone-900 dark:border-stone-800">
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-100 text-sky-900 dark:bg-sky-950 dark:text-sky-200"><FileCheck2 className="w-5 h-5" /></div>
          <h2 className="font-marathi-display text-xl font-bold text-emerald-950 dark:text-emerald-100">वाचायला आणि वापरायला सोपे</h2>
          <p className="mt-2 text-sm leading-7 text-stone-600 dark:text-stone-300">मोबाईलवर वाचा किंवा A4 PDF म्हणून सेव्ह करून प्रिंट काढा.</p>
        </article>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
        <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 dark:bg-stone-900 dark:border-stone-800">
          <div className="flex items-center gap-3"><Award className="h-6 w-6 text-amber-600" /><h2 className="font-marathi-display text-2xl font-bold text-emerald-950 dark:text-emerald-100">या ई-बुकमध्ये काय मिळेल?</h2></div>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 text-sm text-stone-700 dark:text-stone-300">
            {highlights.map((item) => <li key={item} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700 dark:text-emerald-400" />{item}</li>)}
            <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700 dark:text-emerald-400" />किराणा यादी आणि उपयोगी ट्रॅकर्स</li>
          </ul>
          <div className="mt-7 flex flex-wrap gap-3">
            <button onClick={onOpenMealPlan} className="rounded-xl bg-emerald-900 px-5 py-3 text-sm font-bold text-white hover:bg-emerald-800">डाएट चार्ट पहा</button>
            <button onClick={onOpenRecipes} className="rounded-xl border border-emerald-900/20 px-5 py-3 text-sm font-bold text-emerald-950 hover:bg-emerald-50 dark:text-emerald-100 dark:border-stone-700 dark:hover:bg-stone-800">रेसिपीज पहा</button>
          </div>
        </div>
        <div className="rounded-2xl border border-amber-200 bg-[#fff9e9] p-6 sm:p-8 dark:bg-stone-900 dark:border-amber-900/40">
          <div className="flex items-center gap-3"><ShieldAlert className="h-6 w-6 text-amber-700 dark:text-amber-400" /><h2 className="font-marathi-display text-xl font-bold text-amber-950 dark:text-amber-200">आरोग्यविषयक महत्त्वाची नोंद</h2></div>
          <p className="mt-4 text-sm leading-7 text-stone-700 dark:text-stone-300">{EBOOK_META.disclaimer}</p>
          <p className="mt-4 border-t border-amber-200 pt-4 text-xs leading-6 text-stone-500 dark:border-stone-700 dark:text-stone-400">ही माहिती सर्वांसाठी वैयक्तिक वैद्यकीय सल्ल्याचा पर्याय नाही. आजार, औषधे, गर्भधारणा किंवा विशेष आहाराच्या गरजा असल्यास डॉक्टर किंवा नोंदणीकृत आहारतज्ज्ञांचा सल्ला घ्या.</p>
          <div className="mt-4 text-xs text-stone-500 dark:text-stone-400">© {new Date().getFullYear()} {EBOOK_META.author}. सर्व हक्क राखीव.</div>
        </div>
      </section>
    </div>
  );
};
