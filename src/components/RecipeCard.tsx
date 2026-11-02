import React, { useState } from 'react';
import { Recipe } from '../types/ebook';
import { Clock, Users, Flame, Dumbbell, Sparkles, Check, ChevronDown, ChevronUp } from 'lucide-react';

interface RecipeCardProps {
  recipe: Recipe;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<number, boolean>>({});

  const toggleIngredient = (idx: number) => {
    setCheckedIngredients((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  return (
    <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div className="space-y-4">
        {/* Header Ribbon */}
        <div>
          <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 mb-1.5">
            <span className="font-semibold text-emerald-800 dark:text-emerald-400">
              रेसिपी #{recipe.id}
            </span>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {recipe.cookTime}
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-3.5 h-3.5" />
                {recipe.servings} व्यक्ती
              </span>
            </div>
          </div>

          <h3 className="text-xl font-bold font-marathi-display text-stone-900 dark:text-stone-100">
            {recipe.title}
          </h3>
          <p className="text-xs text-emerald-700 dark:text-emerald-400 font-medium">
            {recipe.marathiName}
          </p>
        </div>

        {/* Macro Pill Grid (Tabular Numerals) */}
        <div className="grid grid-cols-4 gap-2 bg-[#fdfbf7] dark:bg-stone-800/60 p-3 rounded-xl border border-amber-100 dark:border-stone-800 text-center">
          <div className="col-span-4 text-[10px] text-stone-500">प्रति सर्व्हिंग अंदाजे पोषणमूल्ये</div>
          <div>
            <div className="text-[11px] text-stone-500 dark:text-stone-400">कॅलरीज</div>
            <div className="text-base font-bold text-stone-900 dark:text-stone-100 font-mono tabular-nums">
              ~{recipe.calories}
            </div>
          </div>
          <div>
            <div className="text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold">प्रोटीन</div>
            <div className="text-base font-bold text-emerald-700 dark:text-emerald-400 font-mono tabular-nums">
              {recipe.protein}g
            </div>
          </div>
          <div>
            <div className="text-[11px] text-stone-500 dark:text-stone-400">कार्ब्स</div>
            <div className="text-base font-bold text-stone-800 dark:text-stone-200 font-mono tabular-nums">
              {recipe.carbs}g
            </div>
          </div>
          <div>
            <div className="text-[11px] text-stone-500 dark:text-stone-400">फायबर</div>
            <div className="text-base font-bold text-amber-700 dark:text-amber-400 font-mono tabular-nums">
              {recipe.fiber}g
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {recipe.tags.map((tag, tIdx) => (
            <span
              key={tIdx}
              className="text-[11px] text-stone-600 dark:text-stone-400 bg-stone-100 dark:bg-stone-800 px-2 py-0.5 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Nutritional Highlight */}
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 bg-emerald-50/50 dark:bg-emerald-950/20 p-2.5 rounded-lg border border-emerald-100/60 dark:border-emerald-900/30">
          <strong className="text-emerald-800 dark:text-emerald-400">आरोग्य लाभ: </strong>
          {recipe.nutritionBenefit}
        </p>

        {/* Expandable Section: Ingredients & Instructions */}
        {isExpanded && (
          <div className="space-y-4 pt-3 border-t border-stone-200 dark:border-stone-800 text-sm">
            {/* Ingredients with checkboxes */}
            <div>
              <h4 className="font-bold text-stone-900 dark:text-stone-100 mb-2 flex items-center justify-between">
                <span>लागणारे साहित्य:</span>
                <span className="text-xs font-normal text-stone-500">
                  (उपलब्ध साहित्यावर टिक करा)
                </span>
              </h4>
              <ul className="space-y-1.5">
                {recipe.ingredients.map((ing, iIdx) => {
                  const isChecked = !!checkedIngredients[iIdx];
                  return (
                    <li
                      key={iIdx}
                      onClick={() => toggleIngredient(iIdx)}
                      className="flex items-start gap-2.5 cursor-pointer hover:text-emerald-700 transition-colors select-none"
                    >
                      <div
                        className={`w-4 h-4 rounded border mt-0.5 flex items-center justify-center shrink-0 ${
                          isChecked
                            ? 'bg-emerald-700 border-emerald-700 text-white'
                            : 'border-stone-300 dark:border-stone-600'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3" />}
                      </div>
                      <span className={`text-xs sm:text-sm ${isChecked ? 'line-through text-stone-400' : 'text-stone-700 dark:text-stone-300'}`}>
                        {ing}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Step by step Instructions */}
            <div>
              <h4 className="font-bold text-stone-900 dark:text-stone-100 mb-2">
                कृती (Step-by-step):
              </h4>
              <ol className="space-y-2 list-decimal list-inside text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                {recipe.instructions.map((step, sIdx) => (
                  <li key={sIdx} className="leading-relaxed pl-1">
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Pro Tip */}
            <div className="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-lg border border-amber-200 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-200">
              <span className="font-bold">घरगुती टीप: </span>
              {recipe.proTip}
            </div>
          </div>
        )}
      </div>

      {/* Toggle View Button */}
      <div className="pt-4 mt-2">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full py-2 px-3 text-xs sm:text-sm font-semibold rounded-lg bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 transition-colors flex items-center justify-center gap-1.5"
        >
          <span>{isExpanded ? 'कृती व साहित्य बंद करा' : 'साहित्य व कृती पहा'}</span>
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
};
