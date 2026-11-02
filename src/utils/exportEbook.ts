import { EBOOK_META, CHAPTERS } from '../data/ebookContent';
import { HEALTHY_RECIPES } from '../data/recipes';
import { VEG_7_DAY_PLAN, NON_VEG_7_DAY_PLAN } from '../data/mealPlans';
import { THIRTY_DAY_CHALLENGE, GROCERY_LIST, PROTEIN_COST_ANALYSIS, WORKOUT_ROUTINE } from '../data/toolsData';

export function downloadStandaloneEbook() {
  const chaptersHtml = CHAPTERS.map((ch) => `
    <div class="page-break chapter-box">
      <div class="chapter-header">
        <span class="chapter-num">प्रकरण ${ch.id}</span>
        <h2>${ch.title}</h2>
        <div class="english-title">${ch.englishTitle} · ${ch.readTimeMinutes} मिनिटे वाचन</div>
      </div>
      <div class="summary-box">"${ch.summary}"</div>
      <div class="sections">
        ${ch.sections.map((sec) => `
          <div class="section-item">
            <h3>${sec.heading}</h3>
            ${(sec.content || []).map((p) => `<p>${p}</p>`).join('')}
            ${sec.callout ? `
              <div class="callout ${sec.callout.type}">
                <strong>${sec.callout.title}:</strong> ${sec.callout.text}
              </div>
            ` : ''}
            ${sec.bulletPoints ? `
              <ul>
                ${sec.bulletPoints.map((bp) => `<li>${bp}</li>`).join('')}
              </ul>
            ` : ''}
          </div>
        `).join('')}
      </div>
      <div class="takeaways">
        <strong>प्रकरणाचे मुख्य सार:</strong>
        <ul>
          ${ch.keyTakeaways.map((kt) => `<li>✓ ${kt}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');

  const recipesHtml = HEALTHY_RECIPES.map((r) => `
    <div class="recipe-card">
      <h3>${r.id}. ${r.title}</h3>
      <div class="recipe-meta">
        वेळ: ${r.cookTime} | व्यक्ती: ${r.servings} | कॅलरी: ${r.calories} kcal | प्रोटीन: ${r.protein}g | कार्ब्स: ${r.carbs}g | फायबर: ${r.fiber}g
      </div>
      <div class="ingredients">
        <strong>साहित्य:</strong>
        <ul>
          ${r.ingredients.map((ing) => `<li>${ing}</li>`).join('')}
        </ul>
      </div>
      <div class="instructions">
        <strong>कृती:</strong>
        <ol>
          ${r.instructions.map((ins) => `<li>${ins}</li>`).join('')}
        </ol>
      </div>
      <div class="tip-box">
        <strong>आरोग्य लाभ:</strong> ${r.nutritionBenefit}<br/>
        <strong>टीप:</strong> ${r.proTip}
      </div>
    </div>
  `).join('');

  const vegPlanHtml = VEG_7_DAY_PLAN.map((d) => `
    <div class="day-plan">
      <h4>${d.dayName} (${d.focus}) - ${d.totalCalories} kcal, ${d.totalProtein}g प्रोटीन</h4>
      <table>
        <tr><th>सकाळ</th><td>${d.meals.earlyMorning.items.join(', ')}</td></tr>
        <tr><th>नाश्ता</th><td>${d.meals.breakfast.items.join(', ')}</td></tr>
        <tr><th>दुपार</th><td>${d.meals.lunch.items.join(', ')}</td></tr>
        <tr><th>संध्याकाळ</th><td>${d.meals.eveningSnack.items.join(', ')}</td></tr>
        <tr><th>रात्र</th><td>${d.meals.dinner.items.join(', ')}</td></tr>
      </table>
    </div>
  `).join('');

  const nonVegPlanHtml = NON_VEG_7_DAY_PLAN.map((d) => `
    <div class="day-plan">
      <h4>${d.dayName} (${d.focus}) - ${d.totalCalories} kcal, ${d.totalProtein}g प्रोटीन</h4>
      <table>
        <tr><th>सकाळ</th><td>${d.meals.earlyMorning.items.join(', ')}</td></tr>
        <tr><th>नाश्ता</th><td>${d.meals.breakfast.items.join(', ')}</td></tr>
        <tr><th>दुपार</th><td>${d.meals.lunch.items.join(', ')}</td></tr>
        <tr><th>संध्याकाळ</th><td>${d.meals.eveningSnack.items.join(', ')}</td></tr>
        <tr><th>रात्र</th><td>${d.meals.dinner.items.join(', ')}</td></tr>
      </table>
    </div>
  `).join('');

  const htmlContent = `<!DOCTYPE html>
<html lang="mr">
<head>
  <meta charset="UTF-8">
  <title>${EBOOK_META.title} - ${EBOOK_META.subtitle}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;600;700&display=swap');
    @page { size: A4; margin: 15mm; }
    body { font-family: 'Noto Sans Devanagari', Arial, sans-serif; color: #1f2937; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px; }
    .page-break { page-break-after: always; break-after: page; }
    .cover-page { text-align: center; padding: 40px 20px; background: #1b4332; color: #fefae0; border-radius: 12px; margin-bottom: 30px; }
    .cover-page h1 { font-size: 38px; margin: 10px 0; color: #ffffff; }
    .cover-page h2 { font-size: 22px; color: #fef08a; margin-bottom: 20px; }
    .btn-print { background: #1b4332; color: #fff; padding: 12px 24px; border: none; border-radius: 8px; font-size: 16px; font-weight: bold; cursor: pointer; margin: 20px 0; }
    @media print { .no-print { display: none !important; } body { padding: 0; } }
    .disclaimer { background: #fffbeb; border: 1px solid #fde68a; padding: 15px; border-radius: 8px; font-size: 13px; margin: 20px 0; }
    .chapter-box { margin-bottom: 40px; padding-bottom: 20px; border-bottom: 2px solid #e5e7eb; }
    .chapter-header { border-bottom: 2px solid #1b4332; padding-bottom: 8px; margin-bottom: 12px; }
    .chapter-num { font-size: 12px; font-weight: bold; color: #1b4332; text-transform: uppercase; }
    .english-title { font-size: 12px; color: #6b7280; }
    .summary-box { background: #ecfdf5; border-left: 4px solid #10b981; padding: 10px; font-style: italic; margin-bottom: 15px; }
    .callout { background: #f3f4f6; padding: 10px 14px; border-radius: 6px; margin: 10px 0; font-size: 14px; }
    .callout.tip { background: #ecfdf5; border-left: 3px solid #059669; }
    .callout.science { background: #fef3c7; border-left: 3px solid #d97706; }
    .callout.caution { background: #fee2e2; border-left: 3px solid #dc2626; }
    .takeaways { background: #f9fafb; border: 1px solid #e5e7eb; padding: 12px; border-radius: 8px; margin-top: 15px; font-size: 13px; }
    .recipe-card { background: #fafaf9; border: 1px solid #e7e5e4; padding: 16px; border-radius: 8px; margin-bottom: 20px; }
    .recipe-meta { font-size: 12px; font-weight: bold; color: #047857; margin-bottom: 10px; }
    .day-plan { margin-bottom: 20px; }
    table { width: 100%; border-collapse: collapse; margin-top: 8px; font-size: 13px; }
    th, td { border: 1px solid #d1d5db; padding: 8px; text-align: left; }
    th { background: #f3f4f6; width: 120px; }
  </style>
</head>
<body>
  <div class="no-print" style="text-align: center; margin-bottom: 20px;">
    <button class="btn-print" onclick="window.print()">🖨️ PDF म्हणून सेव्ह करा / प्रिंट करा</button>
  </div>

  <div class="cover-page page-break">
    <p style="text-transform: uppercase; letter-spacing: 2px; font-size: 14px; color: #a7f3d0;">महाराष्ट्र आरोग्य व पोषण गाईड</p>
    <h1>${EBOOK_META.title}</h1>
    <h2>${EBOOK_META.subtitle}</h2>
    <p>लेखक: ${EBOOK_META.author} · किंमत: ${EBOOK_META.price}</p>
    <div class="disclaimer" style="color: #1f2937; text-align: left; margin-top: 30px;">
      <strong>वैद्यकीय इशारा:</strong> ${EBOOK_META.disclaimer}
    </div>
  </div>

  <h2 style="color: #1b4332; border-bottom: 2px solid #1b4332;">२५ संपूर्ण प्रकरणे</h2>
  ${chaptersHtml}

  <div class="page-break">
    <h2 style="color: #1b4332; border-bottom: 2px solid #1b4332;">७ दिवसांचा शाकाहारी डाएट प्लॅन</h2>
    ${vegPlanHtml}
  </div>

  <div class="page-break">
    <h2 style="color: #1b4332; border-bottom: 2px solid #1b4332;">७ दिवसांचा मांसाहारी डाएट प्लॅन</h2>
    ${nonVegPlanHtml}
  </div>

  <div class="page-break">
    <h2 style="color: #1b4332; border-bottom: 2px solid #1b4332;">१० पौष्टिक महाराष्ट्रीयन रेसिपीज</h2>
    ${recipesHtml}
  </div>

  <div class="page-break" style="text-align: center; padding: 40px 20px;">
    <h2 style="color: #1b4332;">अभिनंदन!</h2>
    <p>तुम्ही तुमच्या आरोग्याची गुरुकिल्ली मिळवली आहे. सातत्य ठेवा आणि घरच्या साध्या जेवणाचा आनंद घ्या!</p>
    <p><strong>मराठी फिटनेस गाईड</strong></p>
  </div>
</body>
</html>`;

  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Gharche_Jevan_Fit_Sharir_Marathi_Ebook.html';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
