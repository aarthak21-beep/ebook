import React, { useState } from 'react';
import { 
  GROCERY_LIST, 
  PROTEIN_COST_ANALYSIS, 
  WORKOUT_ROUTINE, 
  THIRTY_DAY_CHALLENGE 
} from '../data/toolsData';
import { safeStorage } from '../utils/storage';
import { 
  CheckCircle, 
  Droplet, 
  TrendingUp, 
  ShoppingCart, 
  Calculator, 
  Dumbbell, 
  Printer, 
  Plus, 
  Trash2, 
  Sparkles,
  Award
} from 'lucide-react';

interface ProgressEntry {
  id: string;
  date: string;
  weight: number;
  waist: number;
  energy: number;
  notes: string;
}

export const ToolsSection: React.FC = () => {
  const [activeToolTab, setActiveToolTab] = useState<'challenge' | 'calculator' | 'water' | 'progress' | 'grocery' | 'workout'>('challenge');

  // 30-Day Challenge State
  const [completedDays, setCompletedDays] = useState<Record<number, boolean>>(() => {
    try {
      const saved = safeStorage.getItem('marathi_fit_challenge_days');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleChallengeDay = (day: number) => {
    setCompletedDays((prev) => {
      const updated = { ...prev, [day]: !prev[day] };
      safeStorage.setItem('marathi_fit_challenge_days', JSON.stringify(updated));
      return updated;
    });
  };

  const totalChallengeCompleted = Object.values(completedDays).filter(Boolean).length;
  const challengePercent = Math.round((totalChallengeCompleted / 30) * 100);

  // Daily Water Tracker State
  const [waterGlasses, setWaterGlasses] = useState<number>(() => {
    try {
      const today = new Date().toISOString().slice(0, 10);
      const saved = safeStorage.getItem(`marathi_water_${today}`);
      return saved ? parseInt(saved, 10) : 0;
    } catch {
      return 0;
    }
  });

  const changeWaterGlasses = (delta: number) => {
    const today = new Date().toISOString().slice(0, 10);
    const updated = Math.max(0, Math.min(16, waterGlasses + delta));
    setWaterGlasses(updated);
    safeStorage.setItem(`marathi_water_${today}`, updated.toString());
  };

  // Weekly Progress Tracker State
  const [progressEntries, setProgressEntries] = useState<ProgressEntry[]>(() => {
    try {
      const saved = safeStorage.getItem('marathi_progress_entries');
      if (saved) return JSON.parse(saved);
      return [
        { id: '1', date: 'दिवस १ (सुरुवात)', weight: 74.5, waist: 36, energy: 6, notes: 'पुस्तकाचा अभ्यास व किराणा खरेदी पूर्ण.' }
      ];
    } catch {
      return [];
    }
  });

  const [newDate, setNewDate] = useState<string>('');
  const [newWeight, setNewWeight] = useState<string>('');
  const [newWaist, setNewWaist] = useState<string>('');
  const [newEnergy, setNewEnergy] = useState<number>(7);
  const [newNotes, setNewNotes] = useState<string>('');

  const addProgressEntry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newWeight || !newDate) return;

    const entry: ProgressEntry = {
      id: Date.now().toString(),
      date: newDate,
      weight: parseFloat(newWeight),
      waist: newWaist ? parseFloat(newWaist) : 0,
      energy: newEnergy,
      notes: newNotes || 'प्रगती सुरू आहे'
    };

    const updated = [entry, ...progressEntries];
    setProgressEntries(updated);
    safeStorage.setItem('marathi_progress_entries', JSON.stringify(updated));

    setNewDate('');
    setNewWeight('');
    setNewWaist('');
    setNewNotes('');
  };

  const deleteProgressEntry = (id: string) => {
    const updated = progressEntries.filter((en) => en.id !== id);
    setProgressEntries(updated);
    safeStorage.setItem('marathi_progress_entries', JSON.stringify(updated));
  };

  // Grocery Checked Items State
  const [checkedGroceries, setCheckedGroceries] = useState<Record<string, boolean>>(() => {
    try {
      const saved = safeStorage.getItem('marathi_grocery_checks');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const toggleGroceryItem = (id: string) => {
    setCheckedGroceries((prev) => {
      const updated = { ...prev, [id]: !prev[id] };
      safeStorage.setItem('marathi_grocery_checks', JSON.stringify(updated));
      return updated;
    });
  };

  // Calculator State
  const [calcGender, setCalcGender] = useState<'male' | 'female'>('male');
  const [calcAge, setCalcAge] = useState<number>(30);
  const [calcWeight, setCalcWeight] = useState<number>(70);
  const [calcHeight, setCalcHeight] = useState<number>(170);
  const [calcActivity, setCalcActivity] = useState<number>(1.375); // Light exercise

  // BMR (Mifflin-St Jeor formula)
  const bmr = calcGender === 'male'
    ? 10 * calcWeight + 6.25 * calcHeight - 5 * calcAge + 5
    : 10 * calcWeight + 6.25 * calcHeight - 5 * calcAge - 161;

  const tdee = Math.round(bmr * calcActivity);
  const deficitCalories = Math.max(1200, tdee - 450);
  const proteinTargetGrams = Math.round(calcWeight * 1.1);
  const bmi = (calcWeight / ((calcHeight / 100) * (calcHeight / 100))).toFixed(1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      {/* Header Banner */}
      <div className="bg-white dark:bg-stone-900 rounded-2xl p-6 sm:p-8 border border-stone-200 dark:border-stone-800 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-bold font-marathi-display text-stone-900 dark:text-stone-100">
          व्यावहारिक साधने, ट्रॅकर्स व वर्कशीट्स
        </h2>
        <p className="text-sm text-stone-600 dark:text-stone-300 mt-2 max-w-2xl">
          केवळ वाचून न थांबता प्रत्यक्षात कृती करण्यासाठी डिजिटल टूल्स. तुमची प्रगती तुमच्या ब्राऊझरमध्ये आपोआप सुरक्षित जतन केली जाते.
        </p>

        {/* Sub Navigation Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pt-6 border-t border-stone-200 dark:border-stone-800 mt-6 scrollbar-none">
          <button
            onClick={() => setActiveToolTab('challenge')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors shrink-0 ${
              activeToolTab === 'challenge'
                ? 'bg-emerald-800 text-white shadow-sm'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:text-stone-900'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>३०-दिवस चॅलेंज ({totalChallengeCompleted}/३०)</span>
          </button>

          <button
            onClick={() => setActiveToolTab('calculator')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors shrink-0 ${
              activeToolTab === 'calculator'
                ? 'bg-emerald-800 text-white shadow-sm'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:text-stone-900'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>कॅलरी व प्रोटीन गणक</span>
          </button>

          <button
            onClick={() => setActiveToolTab('water')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors shrink-0 ${
              activeToolTab === 'water'
                ? 'bg-emerald-800 text-white shadow-sm'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:text-stone-900'
            }`}
          >
            <Droplet className="w-4 h-4" />
            <span>पाणी ट्रॅकर ({waterGlasses * 250} ml)</span>
          </button>

          <button
            onClick={() => setActiveToolTab('progress')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors shrink-0 ${
              activeToolTab === 'progress'
                ? 'bg-emerald-800 text-white shadow-sm'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:text-stone-900'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>वजन व कंबर लॉग</span>
          </button>

          <button
            onClick={() => setActiveToolTab('grocery')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors shrink-0 ${
              activeToolTab === 'grocery'
                ? 'bg-emerald-800 text-white shadow-sm'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:text-stone-900'
            }`}
          >
            <ShoppingCart className="w-4 h-4" />
            <span>किराणा यादी व बजेट</span>
          </button>

          <button
            onClick={() => setActiveToolTab('workout')}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors shrink-0 ${
              activeToolTab === 'workout'
                ? 'bg-emerald-800 text-white shadow-sm'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:text-stone-900'
            }`}
          >
            <Dumbbell className="w-4 h-4" />
            <span>होम वर्कआउट गाईड</span>
          </button>
        </div>
      </div>

      {/* Tab 1: 30-Day Fitness Challenge Grid */}
      {activeToolTab === 'challenge' && (
        <div className="space-y-6">
          {/* Progress Overview Card */}
          <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 text-white p-6 sm:p-8 rounded-2xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-semibold text-yellow-300 uppercase tracking-wider">
                सवयींचा कायापालट
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-marathi-display">
                ३० दिवसांचा प्रोग्रेसिव्ह फिटनेस चॅलेंज
              </h3>
              <p className="text-sm text-emerald-100 max-w-xl">
                दररोज फक्त १ लहान सवय अंगीकारा. पूर्ण झालेल्या दिवसावर क्लिक करून खूण (Checkmark) करा.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center p-4 bg-white/10 rounded-xl border border-white/20 text-center shrink-0 min-w-[140px]">
              <span className="text-xs text-yellow-300 font-medium">एकूण प्रगती</span>
              <span className="text-3xl font-bold font-mono">{challengePercent}%</span>
              <span className="text-xs text-emerald-200">
                {totalChallengeCompleted} पैकी ३० दिवस पूर्ण
              </span>
            </div>
          </div>

          {/* 30 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {THIRTY_DAY_CHALLENGE.map((c) => {
              const isDone = !!completedDays[c.day];
              return (
                <div
                  key={c.day}
                  onClick={() => toggleChallengeDay(c.day)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer select-none flex flex-col justify-between ${
                    isDone
                      ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-400 dark:border-emerald-800 text-emerald-950 dark:text-emerald-100 shadow-sm'
                      : 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 hover:border-emerald-500'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                        isDone ? 'bg-emerald-700 text-white' : 'bg-stone-100 dark:bg-stone-800 text-stone-600'
                      }`}>
                        दिवस {c.day}
                      </span>
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                        isDone ? 'bg-emerald-700 border-emerald-700 text-white' : 'border-stone-300 dark:border-stone-700'
                      }`}>
                        {isDone && <CheckCircle className="w-3.5 h-3.5" />}
                      </div>
                    </div>

                    <h4 className="text-sm font-bold font-marathi-display">
                      {c.title}
                    </h4>

                    <p className="text-xs leading-relaxed opacity-90">
                      {c.task}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 2: Calorie & Protein Calculator */}
      {activeToolTab === 'calculator' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 bg-white dark:bg-stone-900 p-6 sm:p-8 rounded-2xl border border-stone-200 dark:border-stone-800 space-y-5">
            <h3 className="text-xl font-bold font-marathi-display text-stone-900 dark:text-stone-100">
              तुमची वैयक्तिक माहिती भरा
            </h3>

            {/* Gender Toggle */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-stone-600 dark:text-stone-400">लिंग (Gender)</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setCalcGender('male')}
                  className={`py-2 px-3 rounded-lg border text-sm font-semibold transition-colors ${
                    calcGender === 'male'
                      ? 'bg-emerald-800 text-white border-emerald-800'
                      : 'border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300'
                  }`}
                >
                  पुरुष (Male)
                </button>
                <button
                  type="button"
                  onClick={() => setCalcGender('female')}
                  className={`py-2 px-3 rounded-lg border text-sm font-semibold transition-colors ${
                    calcGender === 'female'
                      ? 'bg-emerald-800 text-white border-emerald-800'
                      : 'border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300'
                  }`}
                >
                  स्त्री (Female)
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="text-xs font-semibold text-stone-600 dark:text-stone-400">वय (Years)</label>
                <input
                  type="number"
                  value={calcAge}
                  onChange={(e) => setCalcAge(Number(e.target.value))}
                  className="w-full mt-1 p-2.5 rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 font-mono"
                  min={18}
                  max={80}
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-stone-600 dark:text-stone-400">वजन (kg)</label>
                <input
                  type="number"
                  value={calcWeight}
                  onChange={(e) => setCalcWeight(Number(e.target.value))}
                  className="w-full mt-1 p-2.5 rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 font-mono"
                  min={35}
                  max={160}
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-stone-600 dark:text-stone-400">उंची (cm)</label>
                <input
                  type="number"
                  value={calcHeight}
                  onChange={(e) => setCalcHeight(Number(e.target.value))}
                  className="w-full mt-1 p-2.5 rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 font-mono"
                  min={120}
                  max={210}
                />
              </div>
            </div>

            {/* Activity Level */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-stone-600 dark:text-stone-400">दैनंदिन हालचाल (Activity Level)</label>
              <select
                value={calcActivity}
                onChange={(e) => setCalcActivity(Number(e.target.value))}
                className="w-full p-2.5 rounded-lg border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800 text-stone-900 dark:text-stone-100 text-sm"
              >
                <option value={1.2}>बैठे काम (Sedentary - अजिबात व्यायाम नाही)</option>
                <option value={1.375}>हलका व्यायाम (Light - आठवड्यातून १-३ दिवस चालणे)</option>
                <option value={1.55}>मध्यम सक्रिय (Moderate - ४-५ दिवस नियमित वर्कआउट)</option>
                <option value={1.725}>अत्यंत सक्रिय (Very Active - कठीण शारीरिक श्रम)</option>
              </select>
            </div>
          </div>

          {/* Result Card */}
          <div className="lg:col-span-6 bg-emerald-900 text-white p-6 sm:p-8 rounded-2xl shadow-sm space-y-6">
            <h3 className="text-xl font-bold font-marathi-display text-white">
              तुमचे प्रमाणित पोषण उद्दिष्ट
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/10 rounded-xl border border-white/15">
                <div className="text-xs text-yellow-300 font-semibold">BMI (बॉडी मास इंडेक्स)</div>
                <div className="text-2xl font-bold font-mono mt-1">{bmi}</div>
                <div className="text-[11px] text-emerald-200 mt-0.5">
                  {parseFloat(bmi) < 18.5 ? 'कमी वजन' : parseFloat(bmi) <= 24.9 ? 'आदर्श वजन' : parseFloat(bmi) <= 29.9 ? 'जास्त वजन' : 'लठ्ठपणा'}
                </div>
              </div>

              <div className="p-4 bg-white/10 rounded-xl border border-white/15">
                <div className="text-xs text-yellow-300 font-semibold">दैनंदिन मेंटेनन्स खर्च</div>
                <div className="text-2xl font-bold font-mono mt-1">{tdee} kcal</div>
                <div className="text-[11px] text-emerald-200 mt-0.5">सध्याचे वजन स्थिर ठेवण्यासाठी</div>
              </div>
            </div>

            <div className="p-5 bg-yellow-400 text-stone-950 rounded-xl space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-stone-800">
                वजन घटवण्यासाठी सुचवलेले कॅलरी टार्गेट
              </div>
              <div className="text-3xl font-bold font-mono">
                ~{deficitCalories} kcal / दिवस
              </div>
              <p className="text-xs leading-relaxed text-stone-800">
                हे सुरक्षित आणि हळूहळू चरबी घटवणारे (Fat Loss) कॅलरी डेफिसिट आहे. उपाशी राहण्याची गरज नाही.
              </p>
            </div>

            <div className="p-4 bg-white/10 rounded-xl border border-white/15 flex items-center justify-between">
              <div>
                <div className="text-xs text-yellow-300 font-semibold">दैनंदिन प्रोटीन लक्ष्य</div>
                <div className="text-xl font-bold font-mono mt-0.5">
                  {proteinTargetGrams} ग्रॅम / दिवस
                </div>
              </div>
              <div className="text-xs text-emerald-200 text-right max-w-[180px]">
                (स्नायू बळकट ठेवण्यासाठी १.१ ग्रॅम प्रति किलो वजन)
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Daily Water Tracker */}
      {activeToolTab === 'water' && (
        <div className="max-w-xl mx-auto bg-white dark:bg-stone-900 p-6 sm:p-8 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm text-center space-y-6">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-400 flex items-center justify-center">
            <Droplet className="w-8 h-8 fill-cyan-500 text-cyan-500" />
          </div>

          <div className="space-y-1">
            <h3 className="text-2xl font-bold font-marathi-display text-stone-900 dark:text-stone-100">
              दैनिक पाणी हायड्रेशन ट्रॅकर
            </h3>
            <p className="text-xs text-stone-500">
              प्रत्येक ग्लास = अंदाजे २५० मिलीलीटर (आजची तारीख: {new Date().toLocaleDateString('mr-IN')})
            </p>
          </div>

          <div className="p-6 bg-cyan-50 dark:bg-cyan-950/40 rounded-2xl border border-cyan-100 dark:border-cyan-900/40 space-y-3">
            <div className="text-5xl font-bold font-mono text-cyan-800 dark:text-cyan-300 tabular-nums">
              {waterGlasses} <span className="text-xl font-normal">ग्लास</span>
            </div>
            <div className="text-sm font-semibold text-cyan-900 dark:text-cyan-200 font-mono">
              = {(waterGlasses * 0.25).toFixed(2)} लिटर पाणी प्यायले
            </div>
            <div className="text-xs text-stone-500">
              दैनंदिन उद्दिष्ट: १० ते १२ ग्लास (२.५ ते ३ लिटर)
            </div>
          </div>

          {/* Plus / Minus Control Buttons */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => changeWaterGlasses(-1)}
              disabled={waterGlasses === 0}
              className="px-5 py-3 rounded-xl border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 font-bold hover:bg-stone-100 dark:hover:bg-stone-800 disabled:opacity-40 transition-colors"
            >
              - १ ग्लास
            </button>
            <button
              onClick={() => changeWaterGlasses(1)}
              className="px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold transition-all shadow-md active:scale-95"
            >
              + १ ग्लास पाणी प्यायलो!
            </button>
          </div>
        </div>
      )}

      {/* Tab 4: Progress Log */}
      {activeToolTab === 'progress' && (
        <div className="space-y-6">
          {/* Add New Entry Form */}
          <form
            onSubmit={addProgressEntry}
            className="bg-white dark:bg-stone-900 p-5 sm:p-6 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 items-end"
          >
            <div>
              <label className="text-xs font-semibold text-stone-600 dark:text-stone-400">तारीख किंवा दिवस</label>
              <input
                type="text"
                placeholder="उदा. दिवस ७ (आठवडा १)"
                value={newDate}
                onChange={(e) => setNewDate(e.target.value)}
                required
                className="w-full mt-1 p-2 rounded-lg border border-stone-200 dark:border-stone-800 text-sm"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-stone-600 dark:text-stone-400">वजन (kg मध्ये)</label>
              <input
                type="number"
                step="0.1"
                placeholder="उदा. 73.2"
                value={newWeight}
                onChange={(e) => setNewWeight(e.target.value)}
                required
                className="w-full mt-1 p-2 rounded-lg border border-stone-200 dark:border-stone-800 text-sm font-mono"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-stone-600 dark:text-stone-400">कंबर (इंच मध्ये)</label>
              <input
                type="number"
                step="0.5"
                placeholder="उदा. 35.5"
                value={newWaist}
                onChange={(e) => setNewWaist(e.target.value)}
                className="w-full mt-1 p-2 rounded-lg border border-stone-200 dark:border-stone-800 text-sm font-mono"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-stone-600 dark:text-stone-400">काही नोंद / अनुभव</label>
              <input
                type="text"
                placeholder="उदा. कपडे सैल झाले"
                value={newNotes}
                onChange={(e) => setNewNotes(e.target.value)}
                className="w-full mt-1 p-2 rounded-lg border border-stone-200 dark:border-stone-800 text-sm"
              />
            </div>
            <button
              type="submit"
              className="py-2.5 px-4 bg-emerald-800 hover:bg-emerald-900 text-white font-semibold rounded-lg text-sm transition-colors flex items-center justify-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>नोंद जोडा</span>
            </button>
          </form>

          {/* Progress Entries Table */}
          <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 overflow-hidden shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 font-bold border-b border-stone-200 dark:border-stone-800">
                <tr>
                  <th className="p-3.5">तारीख / आठवडा</th>
                  <th className="p-3.5">वजन (kg)</th>
                  <th className="p-3.5">कंबर (इंच)</th>
                  <th className="p-3.5">नोंद</th>
                  <th className="p-3.5 text-right">कृती</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 dark:divide-stone-800">
                {progressEntries.map((item) => (
                  <tr key={item.id} className="hover:bg-stone-50 dark:hover:bg-stone-850">
                    <td className="p-3.5 font-medium text-stone-900 dark:text-stone-100">{item.date}</td>
                    <td className="p-3.5 font-mono font-bold text-emerald-800 dark:text-emerald-400 tabular-nums">
                      {item.weight} kg
                    </td>
                    <td className="p-3.5 font-mono tabular-nums text-stone-700 dark:text-stone-300">
                      {item.waist ? `${item.waist}"` : '-'}
                    </td>
                    <td className="p-3.5 text-xs text-stone-600 dark:text-stone-400">{item.notes}</td>
                    <td className="p-3.5 text-right">
                      <button
                        onClick={() => deleteProgressEntry(item.id)}
                        className="text-stone-400 hover:text-red-600 transition-colors"
                        title="Delete entry"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 5: Grocery Shopping List & Protein Cost Analysis */}
      {activeToolTab === 'grocery' && (
        <div className="space-y-8">
          {/* Grocery Checklist */}
          <div className="bg-white dark:bg-stone-900 p-6 sm:p-8 rounded-2xl border border-stone-200 dark:border-stone-800 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200 dark:border-stone-800">
              <div>
                <h3 className="text-xl font-bold font-marathi-display text-stone-900 dark:text-stone-100">
                  महिनाभराची सकस किराणा खरेदी यादी (Shopping List)
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  घरात उपलब्ध असणाऱ्या किंवा खरेदी केलेल्या वस्तूंवर टिकमार्क करा.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {GROCERY_LIST.map((item) => {
                const isChecked = !!checkedGroceries[item.id];
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleGroceryItem(item.id)}
                    className={`p-3.5 rounded-xl border flex items-start gap-3 cursor-pointer transition-all select-none ${
                      isChecked
                        ? 'bg-emerald-50/60 dark:bg-emerald-950/30 border-emerald-300 text-stone-500'
                        : 'bg-stone-50/50 dark:bg-stone-800/40 border-stone-200 dark:border-stone-800 hover:border-emerald-600'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded border mt-0.5 flex items-center justify-center shrink-0 ${
                      isChecked ? 'bg-emerald-700 border-emerald-700 text-white' : 'border-stone-300 dark:border-stone-600'
                    }`}>
                      {isChecked && <CheckCircle className="w-3 h-3" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-sm font-bold ${isChecked ? 'line-through text-stone-400' : 'text-stone-900 dark:text-stone-100'}`}>
                          {item.name}
                        </span>
                        <span className="text-xs font-mono bg-stone-200 dark:bg-stone-700 px-2 py-0.5 rounded text-stone-700 dark:text-stone-300 shrink-0">
                          {item.monthlyQty}
                        </span>
                      </div>
                      <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                        {item.benefit}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Protein Cost Analysis Table */}
          <div className="bg-white dark:bg-stone-900 p-6 sm:p-8 rounded-2xl border border-stone-200 dark:border-stone-800 space-y-4">
            <h3 className="text-xl font-bold font-marathi-display text-stone-900 dark:text-stone-100">
              प्रथिनांचे दर आणि खर्च विश्लेषण (Cost per 10g Protein)
            </h3>
            <p className="text-xs text-stone-500">
              महाराष्ट्रातील स्थानिक बाजारातील अंदाजे किमतींनुसार स्वस्त आणि चांगल्या प्रथिनांची तुलना.
            </p>

            <div className="overflow-x-auto rounded-xl border border-stone-200 dark:border-stone-800">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 font-bold border-b border-stone-200 dark:border-stone-800">
                  <tr>
                    <th className="p-3">अन्न घटक</th>
                    <th className="p-3">१०० ग्रॅममधील प्रोटीन</th>
                    <th className="p-3">अंदाजे बाजार भाव</th>
                    <th className="p-3">१० ग्रॅम प्रोटीनचा खर्च</th>
                    <th className="p-3">दर्जा व शेरा</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 dark:divide-stone-800">
                  {PROTEIN_COST_ANALYSIS.map((p, idx) => (
                    <tr key={idx} className="hover:bg-stone-50 dark:hover:bg-stone-850">
                      <td className="p-3 font-bold text-stone-900 dark:text-stone-100">{p.food}</td>
                      <td className="p-3 font-mono">{p.proteinPer100g}</td>
                      <td className="p-3 font-mono text-stone-600 dark:text-stone-400">{p.approxCostPerKg}</td>
                      <td className="p-3 font-mono font-bold text-emerald-800 dark:text-emerald-400">{p.costPer10gProtein}</td>
                      <td className="p-3 text-xs text-stone-600 dark:text-stone-300">{p.rating}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Tab 6: Home Workout Guide */}
      {activeToolTab === 'workout' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-teal-900 to-emerald-950 text-white p-6 sm:p-8 rounded-2xl shadow-sm space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold font-marathi-display">
              २० मिनिटांचा घरच्या घरी नो-इक्विपमेंट वर्कआउट
            </h3>
            <p className="text-sm text-emerald-100 max-w-xl">
              कोणतेही डंबेल्स किंवा उपकरणे न वापरता स्वतःच्या शरीराचे वजन वापरून स्नायू टोन करण्याचे प्रमाणित व्यायाम.
            </p>
          </div>

          <div className="space-y-6">
            {WORKOUT_ROUTINE.map((sec, sIdx) => (
              <div key={sIdx} className="bg-white dark:bg-stone-900 p-5 sm:p-6 rounded-2xl border border-stone-200 dark:border-stone-800 space-y-4">
                <h4 className="text-lg font-bold font-marathi-display text-emerald-900 dark:text-emerald-300">
                  {sec.phase}
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {sec.exercises.map((ex, eIdx) => (
                    <div key={eIdx} className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-800 space-y-2">
                      <div className="text-sm font-bold text-stone-900 dark:text-stone-100">
                        {ex.name}
                      </div>
                      <div className="text-xs font-mono font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 p-1.5 rounded">
                        रेप्स: {ex.reps}
                      </div>
                      <p className="text-xs text-stone-600 dark:text-stone-400">
                        {ex.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
