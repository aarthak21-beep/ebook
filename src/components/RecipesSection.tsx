import React, { useState } from 'react';
import { HEALTHY_RECIPES } from '../data/recipes';
import { RecipeCard } from './RecipeCard';
import { Sparkles, UtensilsCrossed, ChefHat } from 'lucide-react';

export const RecipesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredRecipes = HEALTHY_RECIPES.filter((r) => {
    if (selectedCategory === 'all') return true;
    return r.category === selectedCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-8">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-yellow-300 uppercase tracking-wider">
            <ChefHat className="w-4 h-4" />
            <span>महाराष्ट्रीयन घरगुती पोषण</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-marathi-display text-white">
            १० पौष्टिक महाराष्ट्रीयन रेसिपीज
          </h2>
          <p className="text-sm text-emerald-100/90 leading-relaxed">
            कमी तेलात, पारंपरिक मसाल्यांचा सुवास टिकवून, प्रथिनांचे व फायबरचे प्रमाण दुप्पट करणाऱ्या १० घरगुती सोप्या रेसिपीज. प्रत्येक रेसिपीचे मॅक्रोन्यूट्रिएंट्स प्रमाणित आहेत.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center p-4 bg-white/10 rounded-xl border border-white/20 text-center shrink-0">
          <span className="text-xs text-yellow-300 font-medium">सरासरी कॅलरीज</span>
          <span className="text-2xl font-bold font-mono">~१५० - २२०</span>
          <span className="text-xs text-emerald-200">प्रति सर्व्हिंग</span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1 bg-stone-100 dark:bg-stone-800/60 rounded-xl w-fit">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors ${
            selectedCategory === 'all'
              ? 'bg-white dark:bg-stone-900 text-emerald-900 dark:text-emerald-300 shadow-sm'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
          }`}
        >
          सर्व रेसिपीज ({HEALTHY_RECIPES.length})
        </button>
        <button
          onClick={() => setSelectedCategory('breakfast')}
          className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors ${
            selectedCategory === 'breakfast'
              ? 'bg-white dark:bg-stone-900 text-emerald-900 dark:text-emerald-300 shadow-sm'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
          }`}
        >
          सकाळचा नाश्ता
        </button>
        <button
          onClick={() => setSelectedCategory('main')}
          className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors ${
            selectedCategory === 'main'
              ? 'bg-white dark:bg-stone-900 text-emerald-900 dark:text-emerald-300 shadow-sm'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
          }`}
        >
          मुख्य जेवण (Main Course)
        </button>
        <button
          onClick={() => setSelectedCategory('snack')}
          className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors ${
            selectedCategory === 'snack'
              ? 'bg-white dark:bg-stone-900 text-emerald-900 dark:text-emerald-300 shadow-sm'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
          }`}
        >
          हेल्दी स्नॅक्स
        </button>
        <button
          onClick={() => setSelectedCategory('side')}
          className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors ${
            selectedCategory === 'side'
              ? 'bg-white dark:bg-stone-900 text-emerald-900 dark:text-emerald-300 shadow-sm'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
          }`}
        >
          कोशिंबीर व ताक
        </button>
      </div>

      {/* Grid of Recipe Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};
