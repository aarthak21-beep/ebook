import React from 'react';
import coverImage from '../assets/images/ebook_cover_thali_1793638576728.jpg';
import breakfastImage from '../assets/images/healthy_breakfast_poha_1793638576917.jpg';
import workoutImage from '../assets/images/home_workout_yoga_1793638578050.jpg';
import proteinImage from '../assets/images/protein_rich_sources_1793638577287.jpg';
import { EBOOK_META, CHAPTERS } from '../data/ebookContent';
import { HEALTHY_RECIPES } from '../data/recipes';
import { VEG_7_DAY_PLAN, NON_VEG_7_DAY_PLAN } from '../data/mealPlans';
import { GROCERY_LIST, PROTEIN_COST_ANALYSIS, WORKOUT_ROUTINE, THIRTY_DAY_CHALLENGE } from '../data/toolsData';
import { CheckCircle2, ShieldAlert, Award, Sparkles, Clock } from 'lucide-react';

interface PrintableEbookProps {
  onBackToApp: () => void;
}

export const PrintableEbook: React.FC<PrintableEbookProps> = ({ onBackToApp }) => {
  return (
    <div className="bg-[#525659] py-8 min-h-screen">
      {/* Top Floating Control Bar (Hidden in print) */}
      <div className="no-print max-w-4xl mx-auto px-4 mb-6 flex items-center justify-between bg-white dark:bg-stone-900 p-4 rounded-xl shadow-lg border border-stone-300 dark:border-stone-700">
        <div className="text-sm font-semibold text-stone-800 dark:text-stone-200">
          A4 ई-बुक प्रिंट व PDF प्रिव्ह्यू मोड
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToApp}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-stone-200 dark:bg-stone-800 hover:bg-stone-300 text-stone-800 dark:text-stone-200"
          >
            ॲपमध्ये परत जा
          </button>
          <button
            onClick={() => window.print()}
            className="px-5 py-2 text-xs font-bold rounded-lg bg-emerald-800 hover:bg-emerald-900 text-white shadow-md flex items-center gap-1.5"
          >
            <span>PDF म्हणून सेव्ह करा / प्रिंट करा</span>
          </button>
        </div>
      </div>

      {/* Compiled A4 Document Container */}
      <div className="max-w-[210mm] mx-auto space-y-8 print:space-y-0 print:max-w-none">
        
        {/* PAGE 1: Front Cover */}
        <section className="a4-sheet page-break-after bg-[#1b4332] text-white flex flex-col justify-between border-4 border-yellow-400/40 relative overflow-hidden">
          <div className="space-y-4 pt-6 text-center">
            <div className="text-yellow-300 font-bold tracking-widest text-sm uppercase">
              महाराष्ट्र आरोग्य व पोषण मालिका
            </div>
            <h1 className="text-5xl font-bold font-marathi-display text-white leading-tight">
              {EBOOK_META.title}
            </h1>
            <p className="text-2xl font-marathi-body text-yellow-100 font-semibold">
              {EBOOK_META.subtitle}
            </p>
            <div className="h-1 w-24 bg-yellow-400 mx-auto rounded" />
          </div>

          <div className="my-6 flex justify-center">
            <div className="w-80 h-96 rounded-2xl overflow-hidden shadow-2xl border-2 border-yellow-400/60">
              <img
                src={coverImage}
                alt="अस्सल महाराष्ट्रीयन थाळी"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-4 pb-6 text-center">
            <div className="text-sm text-emerald-100 max-w-md mx-auto">
              घरगुती ज्वारी भाकरी, उसळ, ताक व साध्या जेवणातून वजन नियंत्रणाचा ३० दिवसांचा वैज्ञानिक गाईड
            </div>
            <div className="pt-4 border-t border-emerald-700/80 flex justify-between text-xs text-yellow-200 px-6 font-mono">
              <span>लेखक: {EBOOK_META.author}</span>
              <span>प्रकाशक: {EBOOK_META.publisher}</span>
              <span>संस्था: {EBOOK_META.organization}</span>
              <span>किंमत: {EBOOK_META.price}</span>
            </div>
          </div>
        </section>

        {/* PAGE 2: Copyright, Medical Disclaimer & Foreword */}
        <section className="a4-sheet page-break-after space-y-6 text-stone-800">
          <div className="border-b border-stone-300 pb-4">
            <h2 className="text-2xl font-bold font-marathi-display text-emerald-900">
              कायदेशीर माहिती व प्रकाशकीय नोंद
            </h2>
            <p className="text-xs text-stone-500">© {new Date().getFullYear()} {EBOOK_META.author}. सर्व हक्क राखीव.</p>
          </div>

          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs sm:text-sm text-stone-700 space-y-2">
            <div className="font-bold text-amber-900 uppercase">
              वैद्यकीय इशारा (Medical Disclaimer)
            </div>
            <p className="leading-relaxed">
              {EBOOK_META.disclaimer}
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-bold font-marathi-display text-emerald-900">
              मनोगत (Foreword from the Author)
            </h3>
            <p className="text-sm leading-relaxed">
              प्रिय वाचक मित्र आणि भगिनींनो, आजच्या धकाधकीच्या युगात निरोगी राहणे हे प्रत्येकाचे स्वप्न बनले आहे. परंतु पाश्चिमात्य डाएट्सच्या नावाखाली आपल्या घरात शतकानुशतके पिकणारे आणि पचणारे धान्य बाजूला टाकून महागडे पदार्थ खाण्याची गरज नाही.
            </p>
            <p className="text-sm leading-relaxed">
              आपल्या स्वयंपाकघरातील ज्वारी, बाजरी, मूग, मटकी, अंडी, ताक आणि पालेभाज्यांमध्ये शरीराला सुदृढ बनवण्याची अफाट ताकद आहे. हे पुस्तक तुम्हाला कोणताही अव्यवहार्य नियम न सांगता, सहज जमणाऱ्या सवयींतून आयुष्यभरासाठी निरोगी कसे राहावे हे शिकवते.
            </p>
          </div>

          <div className="pt-4 border-t border-stone-200">
            <h3 className="text-base font-bold font-marathi-display text-emerald-900 mb-2">
              संदर्भ व शास्त्रीय आधार
            </h3>
            <ul className="text-xs text-stone-600 space-y-1 list-disc list-inside">
              <li>ICMR-National Institute of Nutrition (NIN) Dietary Guidelines 2024</li>
              <li>FSSAI Eat Right India Initiative</li>
              <li>World Health Organization (WHO) Healthy Diet Norms</li>
            </ul>
          </div>
        </section>

        {/* ALL 25 CHAPTERS */}
        {CHAPTERS.map((ch) => (
          <section key={ch.id} className="a4-sheet page-break-after space-y-6 text-stone-800">
            <div className="border-b border-emerald-800 pb-3 flex justify-between items-end">
              <div>
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                  प्रकरण {ch.id}
                </span>
                <h2 className="text-2xl font-bold font-marathi-display text-stone-900">
                  {ch.title}
                </h2>
                <div className="text-xs text-stone-500 italic font-sans">{ch.englishTitle}</div>
              </div>
              <span className="text-xs text-stone-400 font-mono">{ch.readTimeMinutes} मि. वाचन</span>
            </div>

            <div className="text-xs italic bg-emerald-50 p-2.5 rounded border border-emerald-200 text-emerald-900">
              "{ch.summary}"
            </div>
            {ch.id === 4 && <figure className="rounded-xl overflow-hidden border border-emerald-100 bg-emerald-50"><img src={proteinImage} alt="डाळी, कडधान्ये आणि प्रथिनयुक्त अन्नपदार्थ" className="w-full h-44 object-cover" /><figcaption className="px-3 py-1.5 text-[10px] text-emerald-900">प्रथिनांचे घरगुती स्रोत</figcaption></figure>}
            {ch.id === 10 && <figure className="rounded-xl overflow-hidden border border-emerald-100 bg-emerald-50"><img src={breakfastImage} alt="पौष्टिक पोहे आणि नाश्ता" className="w-full h-44 object-cover" /><figcaption className="px-3 py-1.5 text-[10px] text-emerald-900">घरच्या घरी बनवता येणारा पौष्टिक नाश्ता</figcaption></figure>}
            {ch.id === 20 && <figure className="rounded-xl overflow-hidden border border-emerald-100 bg-emerald-50"><img src={workoutImage} alt="घरच्या घरी व्यायाम आणि योग" className="w-full h-44 object-cover" /><figcaption className="px-3 py-1.5 text-[10px] text-emerald-900">नवशिक्यांसाठी घरच्या घरी व्यायाम</figcaption></figure>}

            <div className="space-y-4 text-sm leading-relaxed">
              {ch.sections.map((sec, sIdx) => (
                <div key={sIdx} className="space-y-2">
                  <h3 className="text-base font-bold text-emerald-950 font-marathi-display">
                    {sec.heading}
                  </h3>
                  {(sec.content || []).map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                  {sec.callout && (
                    <div className="p-3 bg-stone-50 rounded border border-stone-200 text-xs">
                      <span className="font-bold text-emerald-900">{sec.callout.title}: </span>
                      <span>{sec.callout.text}</span>
                    </div>
                  )}
                  {sec.bulletPoints && (
                    <ul className="list-disc list-inside space-y-1 text-xs pl-2">
                      {sec.bulletPoints.map((bp, bIdx) => (
                        <li key={bIdx}>{bp}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            <div className="p-3 bg-stone-100 rounded-lg border border-stone-200 text-xs space-y-1.5">
              <div className="font-bold text-emerald-900">प्रकरणाचे मुख्य सार:</div>
              {ch.keyTakeaways.map((kt, kIdx) => (
                <div key={kIdx} className="flex items-start gap-1.5">
                  <span className="text-emerald-700 font-bold">✓</span>
                  <span>{kt}</span>
                </div>
              ))}
            </div>

            <div className="text-[10px] text-stone-400 text-right pt-4 border-t border-stone-200">
              घरचं जेवण, फिट शरीर! · प्रकरण {ch.id}
            </div>
          </section>
        ))}

        {/* 7-DAY VEG DIET CHART PAGE */}
        <section className="a4-sheet page-break-after space-y-4 text-stone-800">
          <div className="border-b border-emerald-800 pb-2">
            <h2 className="text-2xl font-bold font-marathi-display text-emerald-900">
              ७-दिवस संपूर्ण शाकाहारी डाएट चार्ट (Veg Meal Plan)
            </h2>
            <img src={breakfastImage} alt="महाराष्ट्रीयन पौष्टिक नाश्ता" className="mt-3 w-full h-40 object-cover rounded-xl" />
            <p className="text-xs text-stone-500">नमुना दिवसाचे अंदाजे पोषणमूल्य · वैयक्तिक कॅलरी गरज वेगळी असू शकते</p>
          </div>

          <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-[10px] leading-relaxed text-stone-700">
            <strong>घरगुती मापं:</strong> १ मध्यम वाटी ≈ १५० ml · १ कप ≈ २०० ml · मध्यम पोळी ≈ ६ इंच · तेलाचा १ चमचा = ५ ml. भाकरीचा आकार आणि वाटीचे माप घराघरानुसार बदलते. ताटाचा अर्धा भाग भाजी/सलाड, चतुर्थांश धान्य आणि चतुर्थांश डाळ/उसळ/पनीर/अंडी/मासे/चिकन ठेवा. ही नमुना प्रमाणं आहेत; वैयक्तिक गरजेनुसार बदल करा.
          </div>

          <div className="space-y-3 text-xs">
            {VEG_7_DAY_PLAN.map((day) => (
              <div key={day.day} className="p-2.5 border border-stone-300 rounded-lg bg-stone-50">
                <div className="flex justify-between font-bold text-emerald-900 mb-1">
                  <span>{day.dayName} - {day.focus}</span>
                  <span className="font-mono">{day.totalCalories} kcal | {day.totalProtein}g प्रोटीन</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-stone-700">
                  <div><strong>नाश्ता:</strong> {day.meals.breakfast.items.join(', ')}</div>
                  <div><strong>दुपार:</strong> {day.meals.lunch.items.join(', ')}</div>
                  <div><strong>संध्याकाळ:</strong> {day.meals.eveningSnack.items.join(', ')}</div>
                  <div><strong>रात्र:</strong> {day.meals.dinner.items.join(', ')}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7-DAY NON-VEG DIET CHART PAGE */}
        <section className="a4-sheet page-break-after space-y-4 text-stone-800">
          <div className="border-b border-emerald-800 pb-2">
            <h2 className="text-2xl font-bold font-marathi-display text-emerald-900">
              ७-दिवस संपूर्ण मांसाहारी डाएट चार्ट (Non-Veg Meal Plan)
            </h2>
            <p className="text-xs text-stone-500">नमुना दिवसाचे अंदाजे पोषणमूल्य · वैयक्तिक कॅलरी गरज वेगळी असू शकते</p>
          </div>

          <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-[10px] leading-relaxed text-stone-700">
            <strong>घरगुती मापं:</strong> १ मध्यम वाटी ≈ १५० ml · १ कप ≈ २०० ml · मध्यम पोळी ≈ ६ इंच · तेलाचा १ चमचा = ५ ml. भाकरीचा आकार आणि वाटीचे माप घराघरानुसार बदलते. ताटाचा अर्धा भाग भाजी/सलाड, चतुर्थांश धान्य आणि चतुर्थांश डाळ/उसळ/पनीर/अंडी/मासे/चिकन ठेवा. ही नमुना प्रमाणं आहेत; वैयक्तिक गरजेनुसार बदल करा.
          </div>

          <div className="space-y-3 text-xs">
            {NON_VEG_7_DAY_PLAN.map((day) => (
              <div key={day.day} className="p-2.5 border border-stone-300 rounded-lg bg-stone-50">
                <div className="flex justify-between font-bold text-emerald-900 mb-1">
                  <span>{day.dayName} - {day.focus}</span>
                  <span className="font-mono">{day.totalCalories} kcal | {day.totalProtein}g प्रोटीन</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-stone-700">
                  <div><strong>नाश्ता:</strong> {day.meals.breakfast.items.join(', ')}</div>
                  <div><strong>दुपार:</strong> {day.meals.lunch.items.join(', ')}</div>
                  <div><strong>संध्याकाळ:</strong> {day.meals.eveningSnack.items.join(', ')}</div>
                  <div><strong>रात्र:</strong> {day.meals.dinner.items.join(', ')}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 10 HEALTHY RECIPES PAGES */}
        <section className="a4-sheet page-break-after space-y-4 text-stone-800">
          <div className="border-b border-emerald-800 pb-2">
            <h2 className="text-2xl font-bold font-marathi-display text-emerald-900">
              १० पौष्टिक महाराष्ट्रीयन रेसिपीज (संग्रह)
            </h2>
            <p className="text-xs text-stone-500">कमी तेल, जास्त प्रथिने व पारंपरिक चवीचा परिपूर्ण मेळ</p>
          </div>

          <div className="mb-3 grid grid-cols-2 gap-3">
            <img src={breakfastImage} alt="घरगुती पौष्टिक नाश्ता" className="w-full h-32 object-cover rounded-xl" />
            <img src={proteinImage} alt="डाळी आणि प्रथिनयुक्त पदार्थ" className="w-full h-32 object-cover rounded-xl" />
          </div>
          <div className="space-y-4">
            {HEALTHY_RECIPES.map((r) => (
              <article key={r.id} className="p-4 border border-stone-300 rounded-xl bg-white space-y-2 break-inside-avoid">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-bold text-base text-emerald-900">{r.id}. {r.title}</h3>
                  <span className="shrink-0 rounded-full bg-emerald-50 px-2 py-1 text-[10px] text-emerald-800">{r.servings} जणांसाठी</span>
                </div>
                <div className="text-[11px] text-stone-600">तयारी: {r.prepTime} · शिजवणे: {r.cookTime}</div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] font-semibold text-emerald-900">
                  <div className="bg-emerald-50 rounded p-2">ऊर्जा: {r.calories} kcal</div>
                  <div className="bg-emerald-50 rounded p-2">प्रोटीन: {r.protein}g</div>
                  <div className="bg-emerald-50 rounded p-2">कार्ब्स: {r.carbs}g</div>
                  <div className="bg-emerald-50 rounded p-2">फायबर: {r.fiber}g</div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-stone-900 mb-1">लागणारे साहित्य</h4>
                  <ul className="list-disc list-inside text-[11px] leading-relaxed text-stone-700 columns-2">{r.ingredients.map((item, i) => <li key={i} className="mb-0.5">{item}</li>)}</ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-stone-900 mb-1">कृती</h4>
                  <ol className="list-decimal list-inside text-[11px] leading-relaxed text-stone-700 space-y-1">{r.instructions.map((step, i) => <li key={i}>{step}</li>)}</ol>
                </div>
                <p className="text-[11px] text-emerald-800"><strong>पोषणविषयक माहिती:</strong> {r.nutritionBenefit}</p>
                <p className="text-[11px] text-amber-800"><strong>किचन टिप:</strong> {r.proTip}</p>
                <p className="text-[10px] text-stone-500">टीप: पोषणमूल्ये अंदाजे आहेत; साहित्याचा ब्रँड, प्रमाण आणि शिजवण्याच्या पद्धतीनुसार बदलू शकतात.</p>
              </article>
            ))}
          </div>
        </section>

        {/* 30-DAY CHALLENGE & FITNESS WORKSHEET PAGE */}
        <section className="a4-sheet page-break-after space-y-4 text-stone-800">
          <div className="border-b border-emerald-800 pb-2">
            <h2 className="text-2xl font-bold font-marathi-display text-emerald-900">
              ३० दिवसांचे प्रोग्रेसिव्ह फिटनेस वर्कशीट (Printable Tracker)
            </h2>
            <img src={workoutImage} alt="घरच्या घरी व्यायाम" className="mt-3 w-full h-36 object-cover rounded-xl" />
            <p className="text-xs text-stone-500">रोज रात्री झोपण्यापूर्वी पूर्ण झालेल्या टास्कवर पेनाने [✓] करा.</p>
          </div>

          <div className="grid grid-cols-3 gap-2 text-[11px]">
            {THIRTY_DAY_CHALLENGE.map((c) => (
              <div key={c.day} className="p-2 border border-stone-300 rounded bg-white flex items-start gap-1.5">
                <div className="w-3.5 h-3.5 border border-stone-400 rounded shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-stone-900">दिवस {c.day}: {c.title}</div>
                  <div className="text-[10px] text-stone-600">{c.task}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 space-y-2">
            <div className="font-bold text-xs text-emerald-900">माझा रोजचा सवय ट्रॅकर — पूर्ण झाल्यास ✓ करा</div>
            <table className="w-full border-collapse text-[9px] text-stone-700">
              <thead><tr className="bg-emerald-50">
                <th className="border border-stone-300 p-1 text-left">दिवस</th>
                <th className="border border-stone-300 p-1">पाणी</th>
                <th className="border border-stone-300 p-1">चालणे / हालचाल</th>
                <th className="border border-stone-300 p-1">संतुलित ताट</th>
                <th className="border border-stone-300 p-1">पुरेशी झोप</th>
                <th className="border border-stone-300 p-1">मूड / ऊर्जा</th>
              </tr></thead>
              <tbody>
                {Array.from({ length: 30 }, (_, i) => (
                  <tr key={i}>
                    <td className="border border-stone-300 p-1 font-semibold">{i + 1}</td>
                    {Array.from({ length: 5 }, (_, j) => <td key={j} className="border border-stone-300 p-1 text-center">□</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-[9px] text-stone-500">पाणी पिण्याचे प्रमाण तहान, हवामान, व्यायाम आणि डॉक्टरांच्या सल्ल्यानुसार ठरवा. रोज परिपूर्ण होण्यापेक्षा सातत्य महत्त्वाचे.</p>
          </div>

          <div className="mt-4 p-4 border border-stone-300 rounded-lg bg-stone-50">
            <div className="font-bold text-xs text-emerald-900 mb-2">माझे ३० दिवसांचे परिणाम (Results Log):</div>
            <div className="grid grid-cols-4 gap-2 text-xs">
              <div>सुरुवातीचे वजन: ______ kg</div>
              <div>अंतिम वजन: ______ kg</div>
              <div>सुरुवातीची कंबर: ______ इंच</div>
              <div>अंतिम कंबर: ______ इंच</div>
            </div>
          </div>
        </section>

        {/* FINAL MOTIVATIONAL PAGE */}
        <section className="a4-sheet bg-emerald-950 text-white flex flex-col justify-between text-center p-12">
          <div className="space-y-4">
            <Award className="w-16 h-16 text-yellow-300 mx-auto" />
            <h2 className="text-3xl font-bold font-marathi-display text-white">
              अभिनंदन! तुम्ही आरोग्याचा मार्ग निवडला आहे.
            </h2>
            <p className="text-lg font-marathi-body text-yellow-100 max-w-md mx-auto">
              "आरोग्य ही एक दिवसाची शर्यत नसून, आयुष्यभराचा सुखद प्रवास आहे."
            </p>
          </div>

          <div className="space-y-4 max-w-lg mx-auto text-sm text-emerald-100/90 leading-relaxed">
            <p>
              तुम्ही हे ३० दिवस यशस्वीरित्या पूर्ण केले म्हणजे तुम्ही केवळ वजन कमी केलेले नाही, तर तुमच्या शरीराला, मनाला आणि अन्नसंस्कृतीला एका नव्या उंचीवर नेले आहे.
            </p>
            <p>
              घरचे साधे जेवण, पुरेसे पाणी, रोज चालणे आणि शांत झोप - हेच निरोगी आयुष्याचे चिरंतन रहस्य आहे.
            </p>
          </div>

          <div className="pt-8 border-t border-emerald-800 text-xs text-yellow-300">
            प्रकाशक: {EBOOK_META.publisher} · संस्था: {EBOOK_META.organization} · लेखक: {EBOOK_META.author}
          </div>
        </section>

      </div>
    </div>
  );
};
