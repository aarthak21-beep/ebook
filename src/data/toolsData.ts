import { GroceryItem } from '../types/ebook';

export const GROCERY_LIST: GroceryItem[] = [
  // धान्ये व डाळी
  { id: 'g1', category: 'धान्ये व डाळी', name: 'ज्वारी (दळण्यासाठी)', englishName: 'Jowar (Sorghum)', monthlyQty: '५ किलो', benefit: 'फायबरयुक्त धान्य; विविध धान्यांसोबत आहारात वापरता येते' },
  { id: 'g2', category: 'धान्ये व डाळी', name: 'बाजरी (थंडीत विशेष उपयुक्त)', englishName: 'Bajra (Pearl Millet)', monthlyQty: '२ किलो', benefit: 'ऊर्जा व लोहाचा (Iron) समृद्ध स्त्रोत' },
  { id: 'g3', category: 'धान्ये व डाळी', name: 'थालीपीठ भाजणी पीठ', englishName: 'Thalipeeth Bhajani Flour', monthlyQty: '२ किलो', benefit: 'मल्टीग्रेन पोषक घटक व झटपट नाश्ता' },
  { id: 'g4', category: 'धान्ये व डाळी', name: 'पिवळी मूग डाळ (धुतलेली)', englishName: 'Yellow Moong Dal', monthlyQty: '२ किलो', benefit: 'प्रथिनांचा स्रोत; पचनाची सहनशीलता व्यक्तीनुसार बदलते' },
  { id: 'g5', category: 'धान्ये व डाळी', name: 'तूर डाळ व मसूर डाळ', englishName: 'Toor & Masoor Dal', monthlyQty: '२ किलो', benefit: 'रोजच्या वरणासाठी आवश्यक प्रथिने' },
  { id: 'g6', category: 'धान्ये व डाळी', name: 'अख्खे हिरवे मूग व मटकी', englishName: 'Whole Moong & Matki', monthlyQty: '२ किलो', benefit: 'मोड आणून उसळ व सॅलडसाठी सर्वोत्तम' },
  { id: 'g7', category: 'धान्ये व डाळी', name: 'काळे हरभरे (देशी चणे)', englishName: 'Black Chickpeas (Kala Chana)', monthlyQty: '१.५ किलो', benefit: 'परवडणारे प्रथिन व लोह; फायबरमुळे तृप्तीला मदत होऊ शकते' },
  { id: 'g8', category: 'धान्ये व डाळी', name: 'चणाडाळीचे ताजे बेसन', englishName: 'Gram Flour (Besan)', monthlyQty: '१.५ किलो', benefit: 'चिला, धिरडे व पिठल्यासाठी उपयुक्त' },
  { id: 'g9', category: 'धान्ये व डाळी', name: 'जाड पोहे व रोल्ड ओट्स', englishName: 'Rolled Oats & Thick Poha', monthlyQty: '२ किलो', benefit: 'सकाळच्या जलद आणि फायबरयुक्त नाश्त्यासाठी' },

  // प्रथिनयुक्त पदार्थ
  { id: 'p1', category: 'प्रथिनयुक्त पदार्थ', name: 'सोया चंक्स / सोयाबीन दाणे', englishName: 'Soya Chunks', monthlyQty: '१ किलो', benefit: 'प्रथिनांचा किफायतशीर वनस्पती-आधारित स्रोत; उत्पादनानुसार पोषणमूल्य बदलते' },
  { id: 'p2', category: 'प्रथिनयुक्त पदार्थ', name: 'ताजी अंडी (मांसाहारींसाठी)', englishName: 'Farm Fresh Eggs', monthlyQty: '३० ते ६० अंडी', benefit: 'सर्वोत्तम बायो-अव्हेलेबिलिटी प्रोटीन (६ ग्रॅम/अंडे)' },
  { id: 'p3', category: 'प्रथिनयुक्त पदार्थ', name: 'गाईचे किंवा म्हशीचे ताजे दूध', englishName: 'Milk for Curd/Paneer', monthlyQty: '१ लिटर/दिवस', benefit: 'घरचे दही, ताक व पनीर बनवण्यासाठी' },
  { id: 'p4', category: 'प्रथिनयुक्त पदार्थ', name: 'कच्चे पनीर (लो फॅट)', englishName: 'Paneer (Cottage Cheese)', monthlyQty: '१ किलो (आवश्यकतेनुसार)', benefit: 'शाकाहारी कॅल्शियम व प्रथिनांचा खजिना' },
  { id: 'p5', category: 'प्रथिनयुक्त पदार्थ', name: 'शेंगदाणे (कच्चे)', englishName: 'Raw Peanuts', monthlyQty: '१.५ किलो', benefit: 'चांगले फॅट्स, प्रोटीन व चटणी-कोशिंबिरीसाठी' },

  // भाज्या व फळे
  { id: 'v1', category: 'भाज्या व फळे', name: 'हिरव्या पालेभाज्या (पालक, मेथी, शेपू)', englishName: 'Spinach, Fenugreek, Dill', monthlyQty: 'आठवड्यातून ३ वेळा', benefit: 'कॅलरी अत्यंत कमी, लोह व जीवनसत्त्वे मुबलक' },
  { id: 'v2', category: 'भाज्या व फळे', name: 'काकडी, टोमॅटो, गाजर, बीट', englishName: 'Cucumber, Tomato, Carrot, Beet', monthlyQty: 'आठवडी ५ किलो', benefit: 'सॅलड व विविध पदार्थांसाठी; फायबर आणि सूक्ष्मपोषकांचा स्रोत' },
  { id: 'v3', category: 'भाज्या व फळे', name: 'दुधी भोपळा, दोडका, पडवळ, भेंडी', englishName: 'Bottle Gourd, Ridge Gourd', monthlyQty: 'आठवडी ३ किलो', benefit: 'पचनास हलक्या आणि पाण्याचे प्रमाण जास्त असणाऱ्या भाज्या' },
  { id: 'v4', category: 'भाज्या व फळे', name: 'लिंबू, आले, लसूण, हिरवी मिरची', englishName: 'Lemon, Ginger, Garlic', monthlyQty: '१ किलो', benefit: 'चव आणि पदार्थांना सुगंध देण्यासाठी' },
  { id: 'v5', category: 'भाज्या व फळे', name: 'हंगामी फळे (पेरू, पपई, सफरचंद, डाळिंब)', englishName: 'Seasonal Fruits', monthlyQty: 'आठवडी ३-४ किलो', benefit: 'नॅचरल अँटीऑक्सिडंट्स आणि गोडाची इच्छा शमवण्यासाठी' },

  // मसाले व तेल
  { id: 'm1', category: 'मसाले व तेल', name: 'लाकडी घाण्याचे शेंगदाणा किंवा मोहरी तेल', englishName: 'Cold Pressed Peanut/Mustard Oil', monthlyQty: '१.५ लिटर (३ जणांच्या कुटुंबासाठी)', benefit: 'शुद्ध अनरिफाइन्ड तेल, नियंत्रित प्रमाणात वापरणे' },
  { id: 'm2', category: 'मसाले व तेल', name: 'घरगुती साजूक गाईचे तूप', englishName: 'Pure Desi Cow Ghee', monthlyQty: '५०० ग्रॅम', benefit: 'स्निग्ध पदार्थ; मर्यादित प्रमाणात आणि एकूण आहारानुसार वापरा' },
  { id: 'm3', category: 'मसाले व तेल', name: 'सैंधव मीठ (Pink Salt)', englishName: 'Rock Salt (Sendha Namak)', monthlyQty: '१ किलो', benefit: 'सैंधव मिठातही सोडियम असते; एकूण मीठ मर्यादित ठेवणे महत्त्वाचे' },
  { id: 'm4', category: 'मसाले व तेल', name: 'जिरे, ओवा, हिंग, हळद, मोहरी', englishName: 'Cumin, Carom, Asafoetida, Turmeric', monthlyQty: '२५० ग्रॅम प्रत्येकी', benefit: 'फोडणी व चवीसाठी वापरले जाणारे पारंपरिक मसाले' },
  { id: 'm5', category: 'मसाले व तेल', name: 'पांढरे तीळ व जवस (Flaxseeds)', englishName: 'Sesame & Flax Seeds', monthlyQty: '५०० ग्रॅम', benefit: 'ओमेगा-३, फायबर आणि कॅल्शियमचा स्त्रोत' },

  // हेल्दी स्नॅक्स
  { id: 's1', category: 'हेल्दी स्नॅक्स', name: 'भाजलेले चणे (फुटाणे)', englishName: 'Roasted Chana', monthlyQty: '१ किलो', benefit: 'संध्याकाळच्या अल्पोपहारासाठी प्रथिने व फायबरचा स्रोत' },
  { id: 's2', category: 'हेल्दी स्नॅक्स', name: 'मखाने (Foxnuts)', englishName: 'Phool Makhana', monthlyQty: '२५० ग्रॅम', benefit: 'हलका कुरकुरीत अल्पोपहार; पोषणमूल्य उत्पादनानुसार बदलते' },
  { id: 's3', category: 'हेल्दी स्नॅक्स', name: 'बदाम आणि अक्रोड', englishName: 'Almonds & Walnuts', monthlyQty: '५०० ग्रॅम', benefit: 'असंतृप्त चरबी व इतर पोषक घटकांचा स्रोत' }
];

export const PROTEIN_COST_ANALYSIS = [
  { food: 'सोया चंक्स (Soya Chunks)', proteinPer100g: '५२ ग्रॅम', approxCostPerKg: '₹१०० - ₹१२०', costPer10gProtein: '₹२.०० - ₹२.४०', rating: 'सर्वोत्तम बजेट प्रथिन' },
  { food: 'ताजी अंडी (Whole Eggs)', proteinPer100g: '१३ ग्रॅम (६ ग्रॅम/अंडे)', approxCostPerKg: '₹६ - ₹७ प्रति अंडे', costPer10gProtein: '₹१०.०० - ₹१२.००', rating: 'सर्वोच्च गुणवत्ता अमिनो ॲसिड' },
  { food: 'मोड आलेले हिरवे मूग (Moong)', proteinPer100g: '२४ ग्रॅम (कच्चे)', approxCostPerKg: '₹१२० - ₹१४०', costPer10gProtein: '₹५.०० - ₹६.००', rating: 'उत्तम शाकाहारी पचनास हलके' },
  { food: 'काळे हरभरे / देशी चणे', proteinPer100g: '२० ग्रॅम', approxCostPerKg: '₹८० - ₹१००', costPer10gProtein: '₹४.०० - ₹५.००', rating: 'खिशाला परवडणारे व फायबरयुक्त' },
  { food: 'घरगुती ताजे दही (Curd)', proteinPer100g: '४ ग्रॅम', approxCostPerKg: '₹६० लिटर दूध', costPer10gProtein: '₹१५.००', rating: 'प्रोबायोटिक व स्नायू मजबुती' },
  { food: 'लो-फॅट पनीर (Paneer)', proteinPer100g: '१८ - २० ग्रॅम', approxCostPerKg: '₹३६० - ₹४००', costPer10gProtein: '₹२०.०० - ₹२२.००', rating: 'शाकाहारी स्वादिष्ट पर्याय' },
  { food: 'चिकन ब्रेस्ट (Chicken Breast)', proteinPer100g: '२८ - ३० ग्रॅम', approxCostPerKg: '₹२६० - ₹३००', costPer10gProtein: '₹१०.०० - ₹११.००', rating: 'लीन मांसाहारी प्रथिन' },
  { food: 'शेंगदाणे (Peanuts)', proteinPer100g: '२६ ग्रॅम', approxCostPerKg: '₹१४० - ₹१६०', costPer10gProtein: '₹५.५० - ₹६.००', rating: 'चांगले फॅट्स + प्रोटीन' },
  { food: 'तूर व मसूर डाळ', proteinPer100g: '२२ ग्रॅम', approxCostPerKg: '₹१४० - ₹१६०', costPer10gProtein: '₹६.५० - ₹७.५०', rating: 'रोजचे पारंपरिक प्रथिन' }
];

export const WORKOUT_ROUTINE = [
  {
    phase: 'वॉर्मअप (५ ते ७ मिनिटे)',
    exercises: [
      { name: 'मानेचे आणि खांद्यांचे रोटेशन्स (Neck & Shoulder Rolls)', reps: '१० क्लॉकवाइज, १० अँटीक्लॉकवाइज', note: 'अकडलेले स्नायू मोकळे करण्यासाठी' },
      { name: 'जागेवर संथ जॉगिंग किंवा हाय-नीज (Spot Marching/Jog)', reps: '२ मिनिटे सलग', note: 'हृदयाचे ठोके व शरीराचे तापमान वाढवण्यासाठी' },
      { name: 'कंबरेचे रोटेशन आणि हॅमस्ट्रिंग स्ट्रेच', reps: '१० फेऱ्या दोन्ही बाजूला', note: 'दुखापती टाळण्यासाठी अत्यंत आवश्यक' }
    ]
  },
  {
    phase: 'मुख्य होम वर्कआउट (१५ ते २० मिनिटे - बिन उपकरणांचे)',
    exercises: [
      { name: '१. बॉडीवेट स्क्वॅट्स (Bodyweight Squats)', reps: '१२ ते १५ रेप्लिकेशन्स × ३ सेट्स', note: 'मांडीचे व कमरेचे स्नायू बळकट होतात. बसताना खुर्चीवर बसल्यासारखे बसा.' },
      { name: '२. गुडघ्यांवर पुश-अप्स (Knee Push-ups)', reps: '८ ते १२ रेप्लिकेशन्स × ३ सेट्स', note: 'छाती, खांदे आणि दंडांची ताकद वाढते. नवशिक्यांसाठी सोपे.' },
      { name: '३. ग्लूट ब्रिज (Glute Bridges)', reps: '१५ रेप्लिकेशन्स × ३ सेट्स', note: 'पाठीचा खालचा भाग आणि हिप्स मजबूत करण्यासाठी, पाठदुखी थांबते.' },
      { name: '४. रिव्हर्स किंवा फॉरवर्ड लंजेस (Lunges)', reps: '१० प्रत्येक पायाने × ३ सेट्स', note: 'संतुलन आणि पाय मजबूत होतात.' },
      { name: '५. कोपरावरील प्लँक (Elbow Plank)', reps: '२० ते ४५ सेकंद होल्ड × ३ सेट्स', note: 'पोटाचे स्नायू (Core) घट्ट होतात आणि कंबर सरळ राहते.' }
    ]
  },
  {
    phase: 'कूल-डाउन आणि स्ट्रेचिंग (५ मिनिटे)',
    exercises: [
      { name: 'चाइल्ड्स पोझ (Balasana)', reps: '१ मिनिट शांत श्वासोच्छ्वास', note: 'पाठीच्या कण्याला आराम मिळतो' },
      { name: 'कोब्रा पोझ (Bhujangasana)', reps: '३० सेकंद होल्ड', note: 'पोटाचे स्नायू ताणले जातात' },
      { name: 'शवासन (Shavasana)', reps: '२ मिनिटे पूर्ण शांतता', note: 'हृदयाचे ठोके सामान्य होतात' }
    ]
  }
];

export const THIRTY_DAY_CHALLENGE = [
  { day: 1, title: 'हायड्रेशन संकल्प', task: 'दिवसभर नियमित पाणी प्या; गरज तहान, हवामान, हालचाल व आरोग्यानुसार ठरवा. कोल्ड्रिंक्सऐवजी पाणी निवडा.', completed: false },
  { day: 2, title: 'साखर नियंत्रण', task: 'चहा/कॉफीतील साखर अर्धी करा. बिस्किटे खाणे थांबवा.', completed: false },
  { day: 3, title: 'सकाळी १५ मिनिटे चालणे', task: 'सकाळी किंवा संध्याकाळी सलग १५ मिनिटे जलद चाला.', completed: false },
  { day: 4, title: 'ताटात ५०% भाज्या', task: 'दुपारच्या आणि रात्रीच्या जेवणात १ मोठी वाटी सॅलड/कोशिंबीर खा.', completed: false },
  { day: 5, title: 'घरचे जेवण', task: 'बाहेरचे पॅकेटबंद, तळलेले आणि जंक फूड शून्य.', completed: false },
  { day: 6, title: 'प्रोटीनची सुरुवात', task: 'नाश्त्यात उकडलेली अंडी किंवा बेसनाचा चिला/उसळ खा.', completed: false },
  { day: 7, title: 'पहिला प्रोग्रेस चेक', task: 'वजन आणि कंबर मोजून वहीत नोंदवा. १ आठवड्याचा आनंद!', completed: false },
  { day: 8, title: '७,००० पावले चालणे', task: 'फोन किंवा स्मार्टवॉचवर ७,००० पावलांचे टार्गेट पूर्ण करा.', completed: false },
  { day: 9, title: 'रात्री ८ च्या आत जेवण', task: 'रात्रीचे जेवण ८ च्या आत पूर्ण करा. पोट हलके राहील.', completed: false },
  { day: 10, title: '१० मिनिटे बॉडीवेट स्क्वॅट्स', task: 'दिवसभरात ३ सेट्समध्ये एकूण ३० स्क्वॅट्स करा.', completed: false },
  { day: 11, title: 'फळांचे सेवन', task: 'संध्याकाळच्या चहासोबत तळलेल्या पदार्थांऐवजी १ सफरचंद किंवा पेरू खा.', completed: false },
  { day: 12, title: 'गट हेल्थ डे', task: 'दुपारच्या जेवणासोबत १ वाटी ताजे दही किंवा मसाला ताक प्या.', completed: false },
  { day: 13, title: '१० मिनिटे सूर्य नमस्कार', task: 'सकाळी रिकाम्या पोटी ५ ते ७ फेऱ्या सूर्यनमस्कार करा.', completed: false },
  { day: 14, title: 'दुसरा प्रोग्रेस चेक', task: 'ऊर्जा पातळी आणि कपड्यांची फिटिंग तपासा. स्वतःचे कौतुक करा.', completed: false },
  { day: 15, title: '८,५०० पावले टार्गेट', task: 'आज चालण्याचा वेग थोडा वाढवा.', completed: false },
  { day: 16, title: 'रात्री स्क्रिन फ्री वेळ', task: 'झोपण्याच्या ३० मिनिटे आधी मोबाईल बाजूला ठेवा.', completed: false },
  { day: 17, title: 'मोड आलेले कडधान्य', task: 'उसळ किंवा सॅलडमधून भरपूर नैसर्गिक फायबर शरीराला द्या.', completed: false },
  { day: 18, title: '३० सेकंद प्लँक चॅलेंज', task: 'दिवसभरात ३ वेळा ३०-३० सेकंद प्लँक करा.', completed: false },
  { day: 19, title: 'तेलाचे मोजमाप', task: 'आज स्वयंपाकात पळीऐवजी चमच्याने मोजून तेल वापरा.', completed: false },
  { day: 20, title: '१०,००० पावले दिवस', task: 'आजचा दिवस १०,००० पावलांचा ऐतिहासिक टप्पा गाठा!', completed: false },
  { day: 21, title: 'तिसरा प्रोग्रेस चेक', task: '२१ दिवस ही सवय बनण्याची पहिली पायरी असते. अभिनंदन!', completed: false },
  { day: 22, title: 'नवीन रेसिपी ट्राय करा', task: 'ई-बुकमधील सोया भुर्जी किंवा थालीपीठ करून पहा.', completed: false },
  { day: 23, title: 'पायऱ्यांचा वापर', task: 'ऑफिस किंवा घरी लिफ्ट ऐवजी पायऱ्या चढा.', completed: false },
  { day: 24, title: 'साखर-मुक्त दिवस', task: 'आज दिवसभरात कोणत्याही स्वरूपात प्रक्रिया केलेली साखर खाऊ नका.', completed: false },
  { day: 25, title: '२० मिनिटे संपूर्ण वर्कआउट', task: 'ई-बुकमधील सर्व ५ व्यायाम प्रत्येकी ३ सेट्स पूर्ण करा.', completed: false },
  { day: 26, title: 'मित्र किंवा कुटुंबाशी संवाद', task: 'कुटुंबातही एखाद्याला निरोगी खाण्याची सवय लावा.', completed: false },
  { day: 27, title: '८ तास गाढ झोप', task: 'शांत अंधाऱ्या खोलीत पूर्ण ८ तास विश्रांती घ्या.', completed: false },
  { day: 28, title: 'हळदीचे दूध व रिलॅक्सेशन', task: 'रात्री हळद-जायफळ दूध पिऊन शरीर शांत करा.', completed: false },
  { day: 29, title: 'अंतिम सराव व चालणे', task: '१०,००० पावले व २५ मिनिटे योग/स्ट्रेचिंग करा.', completed: false },
  { day: 30, title: '३० दिवसांचे रूपांतरण!', task: 'अंतिम मोजमाप घ्या. तुम्ही ही जीवनशैली कायमस्वरूपी जिंकली आहे!', completed: false }
];
