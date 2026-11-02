export interface Chapter {
  id: number;
  title: string;
  englishTitle: string;
  category: 'foundation' | 'nutrition' | 'meals' | 'action_plan' | 'lifestyle';
  readTimeMinutes: number;
  summary: string;
  sections: {
    heading: string;
    content?: string[];
    callout?: {
      title: string;
      text: string;
      type: 'tip' | 'myth' | 'science' | 'caution';
    };
    bulletPoints?: string[];
    table?: {
      headers: string[];
      rows: string[][];
    };
  }[];
  keyTakeaways: string[];
}

export interface Recipe {
  id: number;
  title: string;
  marathiName: string;
  category: 'breakfast' | 'main' | 'snack' | 'side';
  prepTime: string;
  cookTime: string;
  servings: number;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  tags: string[];
  ingredients: string[];
  instructions: string[];
  nutritionBenefit: string;
  proTip: string;
}

export interface MealSlot {
  time: string;
  mealName: string;
  items: string[];
  calories: number;
  protein: number;
  tip?: string;
}

export interface DayDietPlan {
  day: number;
  dayName: string;
  focus: string;
  totalCalories: number;
  totalProtein: number;
  meals: {
    earlyMorning: MealSlot;
    breakfast: MealSlot;
    midMorning: MealSlot;
    lunch: MealSlot;
    eveningSnack: MealSlot;
    dinner: MealSlot;
    bedtime: MealSlot;
  };
}

export interface GroceryItem {
  id: string;
  category: 'धान्ये व डाळी' | 'भाज्या व फळे' | 'प्रथिनयुक्त पदार्थ' | 'मसाले व तेल' | 'हेल्दी स्नॅक्स';
  name: string;
  englishName: string;
  monthlyQty: string;
  benefit: string;
}
