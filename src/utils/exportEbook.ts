import { EBOOK_META, CHAPTERS } from '../data/ebookContent';
import { HEALTHY_RECIPES } from '../data/recipes';
import { VEG_7_DAY_PLAN, NON_VEG_7_DAY_PLAN } from '../data/mealPlans';
import { THIRTY_DAY_CHALLENGE, GROCERY_LIST, PROTEIN_COST_ANALYSIS, WORKOUT_ROUTINE } from '../data/toolsData';

const escapeHtml = (value: unknown) => String(value ?? '').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char] || char);

export function downloadStandaloneEbook() {
  const chaptersHtml = CHAPTERS.map((ch) => `
    <div class="page-break chapter-box">
      <div class="chapter-header">
        <span class="chapter-num">प्रकरण ${ch.id}</span>
        <h2>${escapeHtml(ch.title)}</h2>
        <div class="english-title">${escapeHtml(ch.englishTitle)} · ${ch.readTimeMinutes} मिनिटे वाचन</div>
      </div>
      <div class="summary-box">"${escapeHtml(ch.summary)}"</div>
      <div class="sections">
        ${ch.sections.map((sec) => `
          <div class="section-item">
            <h3>${escapeHtml(sec.heading)}</h3>
            ${(sec.content || []).map((p) => `<p>${escapeHtml(p)}</p>`).join('')}
            ${sec.callout ? `
              <div class="callout ${sec.callout.type}">
                <strong>${escapeHtml(sec.callout.title)}:</strong> ${escapeHtml(sec.callout.text)}
              </div>
            ` : ''}
            ${sec.bulletPoints ? `
              <ul>
                ${sec.bulletPoints.map((bp) => `<li>${escapeHtml(bp)}</li>`).join('')}
              </ul>
            ` : ''}
          </div>
        `).join('')}
      </div>
      <div class="takeaways">
        <strong>प्रकरणाचे मुख्य सार:</strong>
        <ul>
          ${ch.keyTakeaways.map((kt) => `<li>✓ ${escapeHtml(kt)}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');

  const recipesHtml = HEALTHY_RECIPES.map((r) => `
    <div class="recipe-card">
      <h3>${r.id}. ${escapeHtml(r.title)}</h3>
      <div class="recipe-meta">
        वेळ: ${escapeHtml(r.cookTime)} | व्यक्ती: ${escapeHtml(r.servings)} | कॅलरी: ~${escapeHtml(r.calories)} kcal | प्रोटीन: ~${escapeHtml(r.protein)}g | कार्ब्स: ~${escapeHtml(r.carbs)}g | फायबर: ~${escapeHtml(r.fiber)}g (अंदाजे)
      </div>
      <div class="ingredients">
        <strong>साहित्य:</strong>
        <ul>
          ${r.ingredients.map((ing) => `<li>${escapeHtml(ing)}</li>`).join('')}
        </ul>
      </div>
      <div class="instructions">
        <strong>कृती:</strong>
        <ol>
          ${r.instructions.map((ins) => `<li>${escapeHtml(ins)}</li>`).join('')}
        </ol>
      </div>
      <div class="tip-box">
        <strong>घरगुती टीप:</strong> ${escapeHtml(r.nutritionBenefit)}<br/>
        <strong>टीप:</strong> ${escapeHtml(r.proTip)}
      </div>
    </div>
  `).join('');

  const vegPlanHtml = VEG_7_DAY_PLAN.map((d) => `
    <div class="day-plan">
      <h4>${escapeHtml(d.dayName)} (${escapeHtml(d.focus)}) - अंदाजे ${escapeHtml(d.totalCalories)} kcal, ${escapeHtml(d.totalProtein)}g प्रोटीन</h4>
      <table>
        <tr><th>सकाळ</th><td>${escapeHtml(d.meals.earlyMorning.items.join(', '))}</td></tr>
        <tr><th>नाश्ता</th><td>${escapeHtml(d.meals.breakfast.items.join(', '))}</td></tr>
        <tr><th>दुपार</th><td>${escapeHtml(d.meals.lunch.items.join(', '))}</td></tr>
        <tr><th>संध्याकाळ</th><td>${escapeHtml(d.meals.eveningSnack.items.join(', '))}</td></tr>
        <tr><th>रात्र</th><td>${escapeHtml(d.meals.dinner.items.join(', '))}</td></tr>
      </table>
    </div>
  `).join('');

  const nonVegPlanHtml = NON_VEG_7_DAY_PLAN.map((d) => `
    <div class="day-plan">
      <h4>${escapeHtml(d.dayName)} (${escapeHtml(d.focus)}) - अंदाजे ${escapeHtml(d.totalCalories)} kcal, ${escapeHtml(d.totalProtein)}g प्रोटीन</h4>
      <table>
        <tr><th>सकाळ</th><td>${escapeHtml(d.meals.earlyMorning.items.join(', '))}</td></tr>
        <tr><th>नाश्ता</th><td>${escapeHtml(d.meals.breakfast.items.join(', '))}</td></tr>
        <tr><th>दुपार</th><td>${escapeHtml(d.meals.lunch.items.join(', '))}</td></tr>
        <tr><th>संध्याकाळ</th><td>${escapeHtml(d.meals.eveningSnack.items.join(', '))}</td></tr>
        <tr><th>रात्र</th><td>${escapeHtml(d.meals.dinner.items.join(', '))}</td></tr>
      </table>
    </div>
  `).join('');

  const challengeHtml = THIRTY_DAY_CHALLENGE.map((item) => `
    <tr><td>${escapeHtml(item.day)}</td><td>${escapeHtml(item.title)}</td><td>${escapeHtml(item.task)}</td></tr>
  `).join('');

  const groceryHtml = GROCERY_LIST.map((item) => `
    <tr><td>${escapeHtml(item.category)}</td><td>${escapeHtml(item.name)}</td><td>${escapeHtml(item.monthlyQty)}</td></tr>
  `).join('');

  const proteinHtml = PROTEIN_COST_ANALYSIS.map((item) => `
    <tr><td>${escapeHtml(item.food)}</td><td>${escapeHtml(item.proteinPer100g)}</td><td>${escapeHtml(item.approxCostPerKg)}</td><td>${escapeHtml(item.costPer10gProtein)}</td></tr>
  `).join('');

  const workoutHtml = WORKOUT_ROUTINE.map((phase) => `
    <section class="workout-phase">
      <h3>${escapeHtml(phase.phase)}</h3>
      <ul>${phase.exercises.map((exercise) => `<li><strong>${escapeHtml(exercise.name)}</strong> — ${escapeHtml(exercise.reps)}<br/><span>${escapeHtml(exercise.note)}</span></li>`).join('')}</ul>
    </section>
  `).join('');

  const htmlContent = `<!DOCTYPE html>
<html lang="mr">
<head>
  <meta charset="UTF-8">
  <title>${escapeHtml(EBOOK_META.title)} - ${escapeHtml(EBOOK_META.subtitle)}</title>
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
    th { background: #f3f4f6; width: 120px; }\n    thead { display: table-header-group; }\n    tr, .workout-phase { break-inside: avoid; page-break-inside: avoid; }\n    td, th { overflow-wrap: anywhere; vertical-align: top; }\n    .workout-phase { margin: 12px 0; }
  </style>
</head>
<body>
  <div class="no-print" style="text-align: center; margin-bottom: 20px;">
    <button class="btn-print" onclick="window.print()">🖨️ PDF म्हणून सेव्ह करा / प्रिंट करा</button>
  </div>

  <div class="cover-page page-break">
    <p style="text-transform: uppercase; letter-spacing: 2px; font-size: 14px; color: #a7f3d0;">महाराष्ट्र आरोग्य व पोषण गाईड</p>
    <h1>${escapeHtml(EBOOK_META.title)}</h1>
    <h2>${escapeHtml(EBOOK_META.subtitle)}</h2>
    <p>लेखक: ${escapeHtml(EBOOK_META.author)} · प्रकाशक: ${escapeHtml(EBOOK_META.publisher)} · संस्था: ${escapeHtml(EBOOK_META.organization)} · किंमत: ${escapeHtml(EBOOK_META.price)}</p>
    <div class="disclaimer" style="color: #1f2937; text-align: left; margin-top: 30px;">
      <strong>वैद्यकीय इशारा:</strong> ${escapeHtml(EBOOK_META.disclaimer)}
    </div>
  </div>

  <h2 style="color: #1b4332; border-bottom: 2px solid #1b4332;">२५ संपूर्ण प्रकरणे</h2>
  ${chaptersHtml}

  <div class="page-break">
    <h2 style="color: #1b4332; border-bottom: 2px solid #1b4332;">प्रमाण समजून घ्या — घरगुती मापं</h2>
    <p>खालील मापं चार्टमधील “वाटी / कप / भाकरी” समजण्यासाठी संदर्भ म्हणून आहेत. भांड्यांच्या आकारानुसार प्रमाण बदलू शकते.</p>
    <table>
      <thead><tr><th>माप</th><th>साधारण प्रमाण</th></tr></thead>
      <tbody>
        <tr><td>१ मध्यम वाटी</td><td>सुमारे १५० ml — शिजलेली डाळ/उसळ/भाजी</td></tr>
        <tr><td>१ कप</td><td>सुमारे २०० ml — दूध, ताक किंवा सूप</td></tr>
        <tr><td>१ मध्यम पोळी</td><td>सुमारे ६ इंच; पीठ साधारण ३० g</td></tr>
        <tr><td>१ मध्यम भाकरी</td><td>साधारण ६–७ इंच; पिठाच्या प्रमाणानुसार आकार बदलेल</td></tr>
        <tr><td>१ चमचा तेल</td><td>५ ml; शक्यतो मोजून वापरा</td></tr>
        <tr><td>मासे / चिकन</td><td>चार्टमध्ये ग्रॅम दिले असल्यास ते शिजवण्यापूर्वीचे की नंतरचे हे तपासा; अंदाजे पोर्शन म्हणून घ्या</td></tr>
      </tbody>
    </table>
    <p>ताटाचा साधारण अर्धा भाग भाज्या/सलाड, चतुर्थांश धान्य आणि चतुर्थांश प्रथिनयुक्त पदार्थ ठेवा. भूक, शरीराचा आकार, हालचाल व आरोग्यानुसार प्रमाण बदला; गर्भावस्था, मधुमेह, किडनी/हृदयविकार किंवा औषधे असल्यास आहारतज्ज्ञ/डॉक्टरांचा सल्ला घ्या.</p>
  </div>

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

  <div class="page-break">
    <h2 style="color: #1b4332;">३० दिवसांचे छोटे सवय-आव्हान</h2>
    <p>आपल्या क्षमता, वेळ आणि आरोग्यानुसार कृतीत बदल करा. एखादा दिवस चुकल्यास पुढे सुरू ठेवा.</p>
    <table><thead><tr><th>दिवस</th><th>सवय</th><th>आजची कृती</th></tr></thead><tbody>${challengeHtml}</tbody></table>
  </div>

  <div class="page-break">
    <h2 style="color: #1b4332;">घरासाठी किराणा यादी</h2>
    <p>खालील प्रमाणे केवळ संदर्भासाठी आहेत; कुटुंबातील सदस्य, आवड, बजेट आणि गरजेनुसार प्रमाण ठरवा.</p>
    <table><thead><tr><th>विभाग</th><th>पदार्थ</th><th>सुचवलेले प्रमाण</th></tr></thead><tbody>${groceryHtml}</tbody></table>
  </div>

  <div class="page-break">
    <h2 style="color: #1b4332;">बजेटमध्ये प्रथिनांचे पर्याय</h2>
    <p>किंमती अंदाजे असून ठिकाण, हंगाम व बाजारानुसार बदलू शकतात. पोषणमूल्ये अन्नाच्या प्रकार व तयारीनुसार बदलतात.</p>
    <table><thead><tr><th>पदार्थ</th><th>प्रथिने</th><th>अंदाजे किंमत</th><th>१०g प्रथिनांची अंदाजे किंमत</th></tr></thead><tbody>${proteinHtml}</tbody></table>
  </div>

  <div class="page-break">
    <h2 style="color: #1b4332;">घरच्या घरी व्यायामाची रूपरेषा</h2>
    <p>व्यायाम आपल्या क्षमतेनुसार करा. वेदना, चक्कर किंवा अस्वस्थता जाणवल्यास थांबा; आरोग्यविषयक अडचणी असल्यास तज्ज्ञांचा सल्ला घ्या.</p>
    ${workoutHtml}
  </div>

  <div class="page-break" style="text-align: center; padding: 40px 20px;">
    <h2 style="color: #1b4332;">अभिनंदन!</h2>
    <p>तुम्ही तुमच्या आरोग्याची गुरुकिल्ली मिळवली आहे. सातत्य ठेवा आणि घरच्या साध्या जेवणाचा आनंद घ्या!</p>
    <p><strong>MOTI फिटनेस गाईड</strong></p>
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
  // Keep the object URL alive briefly so mobile browsers can begin the download.
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}
