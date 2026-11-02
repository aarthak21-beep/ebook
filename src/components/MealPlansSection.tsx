import React, { useState } from 'react';
import { VEG_7_DAY_PLAN, NON_VEG_7_DAY_PLAN } from '../data/mealPlans';
import { DayDietPlan, MealSlot } from '../types/ebook';
import { Clock, Flame, Dumbbell, Calendar, AlertCircle, Sparkles, CheckCircle2 } from 'lucide-react';

export const MealPlansSection: React.FC = () => {
  const [dietType, setDietType] = useState<'veg' | 'nonveg'>('veg');
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(0);

  const activePlanList = dietType === 'veg' ? VEG_7_DAY_PLAN : NON_VEG_7_DAY_PLAN;
  const currentDayPlan = activePlanList[selectedDayIndex] || activePlanList[0];

  const renderMealRow = (title: string, slot: MealSlot) => (
    <div className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <div className="space-y-1 sm:max-w-md md:max-w-lg">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 dark:text-emerald-400">
          <span className="bg-emerald-100 dark:bg-emerald-950 px-2 py-0.5 rounded text-emerald-900 dark:text-emerald-300">
            {title}
          </span>
          <span className="flex items-center gap-1 text-stone-500 font-mono">
            <Clock className="w-3 h-3" />
            {slot.time}
          </span>
        </div>
        <ul className="text-sm font-medium text-stone-900 dark:text-stone-100 space-y-0.5">
          {slot.items.map((item, i) => (
            <li key={i} className="flex items-start gap-1.5">
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">·</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {slot.tip && (
          <p className="text-xs text-stone-500 dark:text-stone-400 italic">
            टीप: {slot.tip}
          </p>
        )}
      </div>

      <div className="flex sm:flex-col items-center sm:items-end justify-between border-t sm:border-t-0 pt-2 sm:pt-0 border-stone-100 dark:border-stone-800 shrink-0">
        <div className="text-xs font-mono text-stone-500">
          <span className="font-bold text-stone-900 dark:text-stone-100">{slot.calories}</span> kcal
        </div>
        <div className="text-xs font-mono font-semibold text-emerald-700 dark:text-emerald-400">
          <span className="font-bold">{slot.protein}g</span> प्रोटीन
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      {/* Title & Diet Type Switch */}
      <div className="bg-white dark:bg-stone-900 rounded-2xl p-6 sm:p-8 border border-stone-200 dark:border-stone-800 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider">
            <Calendar className="w-4 h-4" />
            <span>३० दिवसांचे फाउंडेशन</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-marathi-display text-stone-900 dark:text-stone-100">
            ७ दिवसांचे संपूर्ण डाएट शेड्युल
          </h2>
          <p className="text-sm text-stone-600 dark:text-stone-300 max-w-xl">
            सकाळपासून रात्रीपर्यंत जेवणाच्या वेळा, पदार्थ आणि अंदाजे पोषणमूल्ये. हा ७ दिवसांचा नमुना आहे; आवडीनुसार पर्याय बदलून वापरा. ३० दिवस एकच प्रमाण सर्वांना योग्य असेलच असे नाही.
          </p>
        </div>

        {/* Veg / Non-Veg Toggle (Accessible Button Group) */}
        <div className="flex items-center gap-1.5 p-1.5 bg-stone-100 dark:bg-stone-800 rounded-xl shrink-0">
          <button
            onClick={() => setDietType('veg')}
            className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
              dietType === 'veg'
                ? 'bg-emerald-800 text-white shadow-sm'
                : 'text-stone-600 dark:text-stone-300 hover:text-stone-900'
            }`}
          >
            शाकाहारी (Veg Plan)
          </button>
          <button
            onClick={() => setDietType('nonveg')}
            className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
              dietType === 'nonveg'
                ? 'bg-emerald-800 text-white shadow-sm'
                : 'text-stone-600 dark:text-stone-300 hover:text-stone-900'
            }`}
          >
            मांसाहारी (Non-Veg Plan)
          </button>
        </div>
      </div>

      {/* Household portion guide */}
      <div className="rounded-2xl border border-amber-200 bg-amber-50/70 dark:bg-stone-900 dark:border-stone-700 p-5 space-y-3">
        <div className="flex items-center gap-2 text-emerald-900 dark:text-emerald-300 font-bold">
          <Sparkles className="w-4 h-4" />
          <h3 className="text-lg">प्रमाण समजून घ्या — घरगुती मापं</h3>
        </div>
        <p className="text-xs text-stone-600 dark:text-stone-300">खालील मापं चार्टमधील “वाटी / कप / भाकरी” समजण्यासाठी संदर्भ म्हणून आहेत. भांड्यांच्या आकारानुसार प्रमाण बदलू शकते.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm text-stone-800 dark:text-stone-200">
          <div className="rounded-lg bg-white dark:bg-stone-800 p-3"><strong>१ मध्यम वाटी</strong><br/>सुमारे १५० ml — शिजलेली डाळ/उसळ/भाजी</div>
          <div className="rounded-lg bg-white dark:bg-stone-800 p-3"><strong>१ कप</strong><br/>सुमारे २०० ml — दूध, ताक किंवा सूप</div>
          <div className="rounded-lg bg-white dark:bg-stone-800 p-3"><strong>१ मध्यम पोळी</strong><br/>सुमारे ६ इंच; पीठ साधारण ३० g</div>
          <div className="rounded-lg bg-white dark:bg-stone-800 p-3"><strong>१ मध्यम भाकरी</strong><br/>साधारण ६–७ इंच; पिठाच्या प्रमाणानुसार आकार बदलेल</div>
          <div className="rounded-lg bg-white dark:bg-stone-800 p-3"><strong>१ चमचा तेल</strong><br/>५ ml; शक्यतो मोजून वापरा</div>
          <div className="rounded-lg bg-white dark:bg-stone-800 p-3"><strong>मासे / चिकन</strong><br/>चार्टमध्ये ग्रॅम दिले असल्यास ते शिजवण्यापूर्वीचे की नंतरचे हे तपासा; अंदाजे पोर्शन म्हणून घ्या</div>
        </div>
        <p className="text-xs text-stone-600 dark:text-stone-300">ताटाचा साधारण अर्धा भाग भाज्या/सलाड, चतुर्थांश धान्य आणि चतुर्थांश प्रथिनयुक्त पदार्थ ठेवा. भूक, शरीराचा आकार, हालचाल व आरोग्यानुसार प्रमाण बदला; गर्भावस्था, मधुमेह, किडनी/हृदयविकार किंवा औषधे असल्यास आहारतज्ज्ञ/डॉक्टरांचा सल्ला घ्या.</p>
      </div>

      {/* Days Tabs (Mon - Sun) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {activePlanList.map((plan, idx) => (
          <button
            key={plan.day}
            onClick={() => setSelectedDayIndex(idx)}
            className={`px-4 py-3 rounded-xl border text-left shrink-0 transition-all ${
              selectedDayIndex === idx
                ? 'bg-emerald-900 text-white border-emerald-900 shadow-sm'
                : 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 hover:border-emerald-600'
            }`}
          >
            <div className="text-xs opacity-80">{plan.dayName.split(' ')[0]}</div>
            <div className="font-bold text-sm sm:text-base whitespace-nowrap">
              दिवस {plan.day}
            </div>
          </button>
        ))}
      </div>

      {/* Selected Day View Card */}
      <div className="space-y-6">
        {/* Day Header Banner */}
        <div className="bg-[#fdfbf7] dark:bg-stone-850 p-5 sm:p-6 rounded-2xl border border-amber-100 dark:border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-400">
              {currentDayPlan.dayName}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-marathi-display text-stone-900 dark:text-stone-100">
              दिवसाचे मुख्य उद्दिष्ट: {currentDayPlan.focus}
            </h3>
          </div>

          <div className="flex items-center gap-4 bg-white dark:bg-stone-900 px-4 py-2.5 rounded-xl border border-stone-200 dark:border-stone-800 shrink-0">
            <div>
              <div className="text-[11px] text-stone-500">एकूण कॅलरी</div>
              <div className="text-base font-bold text-stone-900 dark:text-stone-100 font-mono">
                ~{currentDayPlan.totalCalories} kcal
              </div>
            </div>
            <div className="h-7 w-[1px] bg-stone-200 dark:bg-stone-800" />
            <div>
              <div className="text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold">एकूण प्रथिन</div>
              <div className="text-base font-bold text-emerald-700 dark:text-emerald-400 font-mono">
                {currentDayPlan.totalProtein}g
              </div>
            </div>
          </div>
        </div>

        {/* Meals Chronological Flow */}
        <div className="space-y-3">
          {renderMealRow('१. सकाळची सुरुवात', currentDayPlan.meals.earlyMorning)}
          {renderMealRow('२. पौष्टिक सकाळचा नाश्ता', currentDayPlan.meals.breakfast)}
          {renderMealRow('३. दुपारपूर्व हलका स्नॅक', currentDayPlan.meals.midMorning)}
          {renderMealRow('४. दुपारचे संतुलित जेवण (Lunch)', currentDayPlan.meals.lunch)}
          {renderMealRow('५. संध्याकाळचा चहा व स्नॅक', currentDayPlan.meals.eveningSnack)}
          {renderMealRow('६. रात्रीचे हलके जेवण (Dinner)', currentDayPlan.meals.dinner)}
          {renderMealRow('७. झोपण्यापूर्वी (Bedtime)', currentDayPlan.meals.bedtime)}
        </div>
      </div>
    </div>
  );
};
