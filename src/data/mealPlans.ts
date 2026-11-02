import { DayDietPlan } from '../types/ebook';

export const VEG_7_DAY_PLAN: DayDietPlan[] = [
  {
    day: 1,
    dayName: 'सोमवार (Day 1)',
    focus: 'फायबरयुक्त आणि संतुलित सुरुवात',
    totalCalories: 1550,
    totalProtein: 63,
    meals: {
      earlyMorning: {
        time: '६:३० - ७:०० AM',
        mealName: 'सकाळची सुरुवात',
        items: ['१ ग्लास कोमट पाणी + १/२ लिंबाचा रस', '५ भिजवलेले बदाम व १ अक्रोड'],
        calories: 60,
        protein: 2.2,
        tip: 'दिवसाची सुरुवात साखरयुक्त चहाने न करता साध्या हायड्रेशनने करा.'
      },
      breakfast: {
        time: '८:३० - ९:०० AM',
        mealName: 'पौष्टिक नाश्ता',
        items: ['१ प्लेट व्हेज कांदे पोहे (मटार व भरपूर भाज्या घातलेले)', '१ वाटी मोड आलेले मूग सॅलड', '१ कप बिनसाखरेचा ग्रीन टी / ब्लॅक टी'],
        calories: 310,
        protein: 11.5,
        tip: 'पोह्यामध्ये शेंगदाणे मर्यादित ठेवा आणि भाज्यांचे प्रमाण जास्त ठेवा.'
      },
      midMorning: {
        time: '११:०० AM',
        mealName: 'दुपारपूर्व हलका स्नॅक',
        items: ['१ मध्यम आकाराचे ताजे सफरचंद किंवा १ पेरू', '१ ग्लास ताजे लिंबू पाणी (सैंधव मीठ घातलेले)'],
        calories: 85,
        protein: 1.0
      },
      lunch: {
        time: '१:०० - १:३० PM',
        mealName: 'संतुलित दुपारचे जेवण',
        items: ['१ मध्यम ज्वारीची भाकरी', '१ वाटी मोड आलेल्या मटकीची उसळ', '१ वाटी पालकाची पातळ भाजी/आमटी', '१ मोठी वाटी काकडी-टोमॅटो कोशिंबीर', '१ ग्लास ताक'],
        calories: 480,
        protein: 21.0,
        tip: 'ताटाची ५०% जागा सॅलड व भाजीने भरा.'
      },
      eveningSnack: {
        time: '५:०० - ५:३० PM',
        mealName: 'संध्याकाळचा चहा/स्नॅक',
        items: ['१ लहान वाटी भाजलेले काळे चणे (फुटाणे)', '१ कप बिनसाखरेचा चहा किंवा १/२ चमचा गूळ घातलेला चहा'],
        calories: 140,
        protein: 7.0,
        tip: 'बिस्किटे व खारी खाणे पूर्णपणे टाळा.'
      },
      dinner: {
        time: '७:३० - ८:०० PM',
        mealName: 'रात्रीचे हलके जेवण',
        items: ['१ लहान वाटी मूग डाळ खिचडी (गाजर व फ्रेंच बीन्स घातलेली)', '१ वाटी ताजे दही किंवा कढी', '१ वाटी वाफवलेली मेथीची भाजी'],
        calories: 410,
        protein: 17.5,
        tip: 'झोपण्याच्या किमान २ तास आधी जेवण पूर्ण करा.'
      },
      bedtime: {
        time: '१०:०० PM',
        mealName: 'झोपण्यापूर्वी',
        items: ['१ कप कोमट हळदीचे दूध (हळद + चिमूटभर जायफळ, बिनसाखरेचे)'],
        calories: 65,
        protein: 2.5
      }
    }
  },
  {
    day: 2,
    dayName: 'मंगळवार (Day 2)',
    focus: 'प्रथिन समृद्ध शाकाहारी दिवस',
    totalCalories: 1520,
    totalProtein: 65,
    meals: {
      earlyMorning: {
        time: '६:३० AM',
        mealName: 'सकाळची सुरुवात',
        items: ['१ ग्लास जिरे पाणी (रात्रभर भिजवलेले व हलके उकळलेले)', '४ भिजवलेले बदाम'],
        calories: 45,
        protein: 1.8
      },
      breakfast: {
        time: '८:३० AM',
        mealName: 'पौष्टिक नाश्ता',
        items: ['२ मध्यम बेसनाचे व्हेजिटेबल चिला', '२ चमचे पुदिना-हिरवी मिरची चटणी', '१ लहान वाटी ताजे दही'],
        calories: 340,
        protein: 14.5
      },
      midMorning: {
        time: '११:०० AM',
        mealName: 'दुपारपूर्व स्नॅक',
        items: ['१ संत्रे किंवा १ वाटी पपईचे तुकडे'],
        calories: 70,
        protein: 1.2
      },
      lunch: {
        time: '१:०० PM',
        mealName: 'दुपारचे जेवण',
        items: ['१ फुलका / चपाती (कमी तेल/तूप)', '१ वाटी पनीर-शिमला मिरची भाजी (कमी तेलात केलेली, ७० ग्रॅम पनीर)', '१ वाटी वरण / तूर डाळ', '१ वाटी गाजर-मुळा सॅलड'],
        calories: 520,
        protein: 24.0
      },
      eveningSnack: {
        time: '५:०० PM',
        mealName: 'संध्याकाळचा स्नॅक',
        items: ['१ वाटी उकडलेले कॉर्न किंवा मखाना (भाजलेला, चिमूटभर चाट मसाला)', '१ कप हर्बल ग्रीन टी'],
        calories: 120,
        protein: 3.5
      },
      dinner: {
        time: '७:४५ PM',
        mealName: 'रात्रीचे जेवण',
        items: ['१ वाटी घट्ट मूग डाळ सूप (लसूण फोडणी दिलेले)', '१ लहान ज्वारीची भाकरी', '१ वाटी दुधी भोपळ्याची सुकी भाजी'],
        calories: 420,
        protein: 19.5
      },
      bedtime: {
        time: '१०:०० PM',
        mealName: 'झोपण्यापूर्वी',
        items: ['१ कप कोमट पाणी किंवा ओव्याचे पाणी (पचनासाठी उत्तम)'],
        calories: 5,
        protein: 0
      }
    }
  },
  {
    day: 3,
    dayName: 'बुधवार (Day 3)',
    focus: 'कडधान्य आणि लो-जीआय ऊर्जा',
    totalCalories: 1520,
    totalProtein: 64,
    meals: {
      earlyMorning: {
        time: '६:३० AM',
        mealName: 'सकाळची सुरुवात',
        items: ['१ ग्लास कोमट पाणी + १ चमचा जवस पावडर (Flaxseeds)'],
        calories: 50,
        protein: 2.0
      },
      breakfast: {
        time: '८:३० AM',
        mealName: 'पौष्टिक नाश्ता',
        items: ['१ मल्टीग्रेन थालीपीठ (भाजणीचे)', '१/२ वाटी ताजे दही', '१ चमचा लसूण-खोबरं चटणी (मर्यादित)'],
        calories: 320,
        protein: 10.5
      },
      midMorning: {
        time: '११:०० AM',
        mealName: 'दुपारपूर्व स्नॅक',
        items: ['१ ग्लास ताजे शहाळ्याचे पाणी'],
        calories: 45,
        protein: 1.0
      },
      lunch: {
        time: '१:०० PM',
        mealName: 'दुपारचे जेवण',
        items: ['१ बाजरीची किंवा ज्वारीची भाकरी', '१ वाटी चवळीची किंवा राजमा रस्सा भाजी', '१ वाटी वांग्याचे किंवा भेंडीचे भरीत/भाजी', '१ वाटी काकडी कोशिंबीर'],
        calories: 490,
        protein: 21.5
      },
      eveningSnack: {
        time: '५:०० PM',
        mealName: 'संध्याकाळचा स्नॅक',
        items: ['१ वाटी मोड आलेली चणा चाट (कांदा, टोमॅटो, लिंबू घातलेली)', '१ कप ब्लॅक कॉफी किंवा लेमन टी'],
        calories: 150,
        protein: 8.5
      },
      dinner: {
        time: '७:३० PM',
        mealName: 'रात्रीचे जेवण',
        items: ['१ वाटी व्हेजिटेबल ओट्स उपमा (मटार, गाजर व टोमॅटो घालून केलेला)', '१ वाटी ताक'],
        calories: 400,
        protein: 18.0
      },
      bedtime: {
        time: '१०:०० PM',
        mealName: 'झोपण्यापूर्वी',
        items: ['१ कप कोमट हळदीचे दूध'],
        calories: 65,
        protein: 2.5
      }
    }
  },
  {
    day: 4,
    dayName: 'गुरुवार (Day 4)',
    focus: 'पोटाचे आरोग्य आणि प्रोबायोटिक्स',
    totalCalories: 1480,
    totalProtein: 59,
    meals: {
      earlyMorning: {
        time: '६:३० AM',
        mealName: 'सकाळची सुरुवात',
        items: ['१ ग्लास मेथी दाणे भिजवलेले पाणी', '५ बदाम'],
        calories: 50,
        protein: 2.0
      },
      breakfast: {
        time: '८:३० AM',
        mealName: 'पौष्टिक नाश्ता',
        items: ['१ वाटी रव्याचा व्हेजिटेबल उपमा (भरपूर गाजर, मटार, शिमला मिरची)', '१ वाटी उकडलेले मोड आलेले मूग'],
        calories: 310,
        protein: 12.0
      },
      midMorning: {
        time: '११:०० AM',
        mealName: 'दुपारपूर्व स्नॅक',
        items: ['१ डाळिंब किंवा १ सफरचंद'],
        calories: 80,
        protein: 1.5
      },
      lunch: {
        time: '१:०० PM',
        mealName: 'दुपारचे जेवण',
        items: ['१ ज्वारी भाकरी', '१ वाटी सोयाबीन भुर्जी किंवा सोया चंक्स करी', '१ वाटी शेवग्याच्या शेंगांची आमटी', '१ वाटी बीटरूट सॅलड'],
        calories: 510,
        protein: 23.5
      },
      eveningSnack: {
        time: '५:०० PM',
        mealName: 'संध्याकाळचा स्नॅक',
        items: ['१ वाटी साधे कुरमुरे + भाजलेले शेंगदाणे (मुठभर)', '१ कप चहा (१/२ चमचा साखर/गूळ)'],
        calories: 130,
        protein: 4.5
      },
      dinner: {
        time: '७:४५ PM',
        mealName: 'रात्रीचे जेवण',
        items: ['१ चपाती (गहू किंवा मल्टीग्रेन)', '१ वाटी मेथी-मुगाची डाळ सुकी भाजी', '१ वाटी टोमॅटो सूप (घरगुती, कॉर्नफ्लोअर विरहित)'],
        calories: 395,
        protein: 15.0
      },
      bedtime: {
        time: '१०:०० PM',
        mealName: 'झोपण्यापूर्वी',
        items: ['१ कप कोमट पाणी'],
        calories: 5,
        protein: 0
      }
    }
  },
  {
    day: 5,
    dayName: 'शुक्रवार (Day 5)',
    focus: 'चयापचय आणि संतुलित ऊर्जा',
    totalCalories: 1555,
    totalProtein: 66,
    meals: {
      earlyMorning: {
        time: '६:३० AM',
        mealName: 'सकाळची सुरुवात',
        items: ['१ ग्लास दालचिनी व मध घातलेले कोमट पाणी', '२ अक्रोड'],
        calories: 55,
        protein: 1.5
      },
      breakfast: {
        time: '८:३० AM',
        mealName: 'पौष्टिक नाश्ता',
        items: ['२ वाफवलेल्या इडल्या', '१ वाटी भरपूर भाज्या घातलेले सांबार', '१ चमचा पुदिना चटणी'],
        calories: 290,
        protein: 9.5
      },
      midMorning: {
        time: '११:०० AM',
        mealName: 'दुपारपूर्व स्नॅक',
        items: ['१ मोठा ग्लास घरगुती मसाला ताक'],
        calories: 45,
        protein: 2.8
      },
      lunch: {
        time: '१:०० PM',
        mealName: 'दुपारचे जेवण',
        items: ['१ वाटी ब्राऊन राईस किंवा १ ज्वारी भाकरी', '१ वाटी काबुली चणा मसाला (छोले - कमी तेलात)', '१ वाटी दोडक्याची किंवा पडवळाची भाजी', 'कांदा-टोमॅटो सॅलड'],
        calories: 530,
        protein: 22.0
      },
      eveningSnack: {
        time: '५:०० PM',
        mealName: 'संध्याकाळचा स्नॅक',
        items: ['१ लहान वाटी भाजलेले मखाने', '१ कप ग्रीन टी'],
        calories: 110,
        protein: 3.0
      },
      dinner: {
        time: '७:३० PM',
        mealName: 'रात्रीचे जेवण',
        items: ['१ वाटी डाळ खिचडी + १ वाटी मिक्स व्हेज रायता', '१ भाजलेला उडीद पापड'],
        calories: 460,
        protein: 24.5
      },
      bedtime: {
        time: '१०:०० PM',
        mealName: 'झोपण्यापूर्वी',
        items: ['१ कप हळदीचे दूध'],
        calories: 65,
        protein: 2.5
      }
    }
  },
  {
    day: 6,
    dayName: 'शनिवार (Day 6)',
    focus: 'मायक्रोन्यूट्रिएंट्स आणि अँटीऑक्सिडंट्स',
    totalCalories: 1470,
    totalProtein: 61,
    meals: {
      earlyMorning: {
        time: '६:३० AM',
        mealName: 'सकाळची सुरुवात',
        items: ['१ ग्लास आवळा ज्यूस किंवा कोमट पाणी + लिंबू', '४ भिजवलेले बदाम'],
        calories: 40,
        protein: 1.5
      },
      breakfast: {
        time: '८:३० AM',
        mealName: 'पौष्टिक नाश्ता',
        items: ['१ वाटी दूध आणि ओट्स (चिया सीड्स व १/२ सफरचंद चिरून घातलेले)'],
        calories: 320,
        protein: 12.0
      },
      midMorning: {
        time: '११:०० AM',
        mealName: 'दुपारपूर्व स्नॅक',
        items: ['१ वाटी मोसंबीच्या फोडी किंवा १ पेरू'],
        calories: 75,
        protein: 1.2
      },
      lunch: {
        time: '१:०० PM',
        mealName: 'दुपारचे जेवण',
        items: ['१ बाजरीची भाकरी (थंडी/पावसाळ्यात) किंवा ज्वारी भाकरी', '१ वाटी गरमागरम पिठलं (कमी तेल)', '१ लहान वाटी लसूण-मिरचीचा ठेचा', '१ वाटी मुळ्याची किंवा काकडीची कोशिंबीर'],
        calories: 490,
        protein: 20.0
      },
      eveningSnack: {
        time: '५:०० PM',
        mealName: 'संध्याकाळचा स्नॅक',
        items: ['१ वाटी उकडलेले शेंगदाणे व चणे मिक्स चाट', '१ कप चहा'],
        calories: 160,
        protein: 8.0
      },
      dinner: {
        time: '७:३० PM',
        mealName: 'रात्रीचे जेवण',
        items: ['२ लहान मूग डाळ व पालकाची धिरडी (डोसा)', '१ वाटी ताजे दही', 'हिरवी चटणी'],
        calories: 380,
        protein: 18.0
      },
      bedtime: {
        time: '१०:०० PM',
        mealName: 'झोपण्यापूर्वी',
        items: ['१ कप कोमट पाणी + १ चिमूट दालचिनी पूड'],
        calories: 5,
        protein: 0
      }
    }
  },
  {
    day: 7,
    dayName: 'रविवार (Day 7)',
    focus: 'आठवड्याची सांगता व सस्टेनेबल मील',
    totalCalories: 1590,
    totalProtein: 65,
    meals: {
      earlyMorning: {
        time: '७:०० AM',
        mealName: 'सकाळची सुरुवात',
        items: ['१ ग्लास कोमट पाणी', '५ भिजवलेले बदाम + २ खजूर'],
        calories: 75,
        protein: 2.0
      },
      breakfast: {
        time: '९:०० AM',
        mealName: 'संडे स्पेशल हेल्दी नाश्ता',
        items: ['१ वाटी मिश्र कडधान्य घावणे किंवा डोसा (कमी तेलात)', '१ वाटी सांबार', '१ वाटी ताक'],
        calories: 330,
        protein: 13.0
      },
      midMorning: {
        time: '११:३० AM',
        mealName: 'दुपारपूर्व स्नॅक',
        items: ['१ ग्लास लिंबू-पुदिना पाणी किंवा शहाळे'],
        calories: 45,
        protein: 0.5
      },
      lunch: {
        time: '१:३० PM',
        mealName: 'फॅमिली लंच (संतुलित)',
        items: ['१ मध्यम वाटी जिरा ब्राऊन राईस', '१ मोठी वाटी दाल तडका (कमी तुपातली)', '१ वाटी सुकी भेंडी मसाला', '१ मोठी वाटी कोशिंबीर (गाजर-काकडी)'],
        calories: 510,
        protein: 21.0
      },
      eveningSnack: {
        time: '५:३० PM',
        mealName: 'संध्याकाळचा स्नॅक',
        items: ['१ वाटी सुकी भेळ (शेव विरहित, भरपूर कांदा, टोमॅटो, कोथिंबीर व डाळिंब)'],
        calories: 140,
        protein: 4.5
      },
      dinner: {
        time: '८:०० PM',
        mealName: 'रात्रीचे जेवण',
        items: ['१ ज्वारीची भाकरी', '१ वाटी भोपळ्याची किंवा दुधीची साधी भाजी', '१ वाटी मुगाचे कढण / सूप'],
        calories: 425,
        protein: 21.5
      },
      bedtime: {
        time: '१०:१५ PM',
        mealName: 'झोपण्यापूर्वी',
        items: ['१ कप कोमट हळदीचे दूध'],
        calories: 65,
        protein: 2.5
      }
    }
  }
];

export const NON_VEG_7_DAY_PLAN: DayDietPlan[] = [
  {
    day: 1,
    dayName: 'सोमवार (Day 1)',
    focus: 'अंडी व हाय प्रोटीन किकस्टार्ट',
    totalCalories: 1580,
    totalProtein: 83,
    meals: {
      earlyMorning: {
        time: '६:३० AM',
        mealName: 'सकाळची सुरुवात',
        items: ['१ ग्लास कोमट पाणी + लिंबू', '५ बदाम'],
        calories: 55,
        protein: 2.0
      },
      breakfast: {
        time: '८:३० AM',
        mealName: 'पौष्टिक नाश्ता',
        items: ['२ उकडलेली अंडी (१ पूर्ण + १ फक्त पांढरा भाग)', '१ लहान ज्वारीची भाकरी किंवा १ ब्राऊन ब्रेड स्लाइस', '१ कप बिनसाखरेचा चहा / ग्रीन टी'],
        calories: 310,
        protein: 18.5
      },
      midMorning: {
        time: '११:०० AM',
        mealName: 'दुपारपूर्व स्नॅक',
        items: ['१ सफरचंद किंवा पेरू', '१ ग्लास पाणी'],
        calories: 80,
        protein: 1.0
      },
      lunch: {
        time: '१:०० PM',
        mealName: 'दुपारचे जेवण',
        items: ['१ ज्वारीची भाकरी', '१ वाटी चिकन रस्सा/सुक्के (१०० ग्रॅम बोनलेस चिकन, घरगुती कमी तेलात)', '१ वाटी काकडी-कांदा कोशिंबीर', '१ वाटी ताक'],
        calories: 510,
        protein: 34.0
      },
      eveningSnack: {
        time: '५:०० PM',
        mealName: 'संध्याकाळचा स्नॅक',
        items: ['१ लहान वाटी भाजलेले चणे', '१ कप ब्लॅक कॉफी किंवा ग्रीन टी'],
        calories: 130,
        protein: 6.5
      },
      dinner: {
        time: '७:४५ PM',
        mealName: 'रात्रीचे जेवण',
        items: ['२ अंड्यांची व्हेज भुर्जी (भरपूर कांदा, टोमॅटो, हिरवी मिरची)', '१ वाटी पातळ पालक डाळ', '१ वाटी काकडी सॅलड'],
        calories: 430,
        protein: 18.0
      },
      bedtime: {
        time: '१०:०० PM',
        mealName: 'झोपण्यापूर्वी',
        items: ['१ कप कोमट हळदीचे दूध'],
        calories: 65,
        protein: 2.5
      }
    }
  },
  {
    day: 2,
    dayName: 'मंगळवार (Day 2 - हलका दिवस)',
    focus: 'शाकाहारी बॅलन्स व पचन विश्रांती',
    totalCalories: 1460,
    totalProtein: 63,
    meals: {
      earlyMorning: {
        time: '६:३० AM',
        mealName: 'सकाळची सुरुवात',
        items: ['१ ग्लास मेथी पाणी', '४ बदाम + १ अक्रोड'],
        calories: 55,
        protein: 2.0
      },
      breakfast: {
        time: '८:३० AM',
        mealName: 'पौष्टिक नाश्ता',
        items: ['२ बेसनाचे व्हेज चिला', '२ चमचे पुदिना चटणी', '१ वाटी ताक'],
        calories: 320,
        protein: 13.5
      },
      midMorning: {
        time: '११:०० AM',
        mealName: 'दुपारपूर्व स्नॅक',
        items: ['१ वाटी पपई किंवा संत्रे'],
        calories: 70,
        protein: 1.0
      },
      lunch: {
        time: '१:०० PM',
        mealName: 'दुपारचे जेवण',
        items: ['१ ज्वारी भाकरी', '१ वाटी मोड आलेली उसळ', '१ वाटी मेथीची भाजी', '१ वाटी दही', 'काकडी सॅलड'],
        calories: 510,
        protein: 23.0
      },
      eveningSnack: {
        time: '५:०० PM',
        mealName: 'संध्याकाळचा स्नॅक',
        items: ['१ लहान वाटी मखाना भाजलेला', '१ कप चहा'],
        calories: 120,
        protein: 3.5
      },
      dinner: {
        time: '७:३० PM',
        mealName: 'रात्रीचे जेवण',
        items: ['१ वाटी डाळ खिचडी', '१ वाटी व्हेज रायता', '१ लहान वाटी टोमॅटो सूप'],
        calories: 380,
        protein: 19.5
      },
      bedtime: {
        time: '१०:०० PM',
        mealName: 'झोपण्यापूर्वी',
        items: ['१ कप कोमट पाणी'],
        calories: 5,
        protein: 0
      }
    }
  },
  {
    day: 3,
    dayName: 'बुधवार (Day 3)',
    focus: 'मासे (Fish) आणि ओमेगा-३ फॅटी ॲसिड्स',
    totalCalories: 1590,
    totalProtein: 86,
    meals: {
      earlyMorning: {
        time: '६:३० AM',
        mealName: 'सकाळची सुरुवात',
        items: ['१ ग्लास कोमट पाणी + लिंबू', '५ बदाम'],
        calories: 50,
        protein: 2.0
      },
      breakfast: {
        time: '८:३० AM',
        mealName: 'पौष्टिक नाश्ता',
        items: ['१ वाटी व्हेजिटेबल ओट्स किंवा पोहे', '२ उकडलेल्या अंड्याचे पांढरे भाग'],
        calories: 310,
        protein: 16.0
      },
      midMorning: {
        time: '११:०० AM',
        mealName: 'दुपारपूर्व स्नॅक',
        items: ['१ ग्लास शहाळ्याचे पाणी'],
        calories: 45,
        protein: 1.0
      },
      lunch: {
        time: '१:०० PM',
        mealName: 'दुपारचे जेवण',
        items: ['१ ज्वारीची भाकरी किंवा १ वाटी उकडलेला भात', '१ तुकडा तवा फ्राय सुरमई/पापलेट किंवा बांगडा करी (कमी तेल)', '१ वाटी कोकम कढी (सोलकढी - कमी नारळ दूध)', '१ वाटी कांदा-टोमॅटो सॅलड'],
        calories: 520,
        protein: 35.0
      },
      eveningSnack: {
        time: '५:०० PM',
        mealName: 'संध्याकाळचा स्नॅक',
        items: ['१ वाटी उकडलेले चणे चाट', '१ कप ग्रीन टी'],
        calories: 150,
        protein: 7.5
      },
      dinner: {
        time: '७:३० PM',
        mealName: 'रात्रीचे जेवण',
        items: ['१ वाटी चिकन क्लिअर सूप किंवा डाळ सूप', '१ फुलका', '१ वाटी हिरव्या पालेभाज्या'],
        calories: 450,
        protein: 22.0
      },
      bedtime: {
        time: '१०:०० PM',
        mealName: 'झोपण्यापूर्वी',
        items: ['१ कप हळदीचे दूध'],
        calories: 65,
        protein: 2.5
      }
    }
  },
  {
    day: 4,
    dayName: 'गुरुवार (Day 4)',
    focus: 'संतुलित शाकाहारी दिवस',
    totalCalories: 1450,
    totalProtein: 59,
    meals: {
      earlyMorning: {
        time: '६:३० AM',
        mealName: 'सकाळची सुरुवात',
        items: ['१ ग्लास जिरे पाणी', '४ बदाम'],
        calories: 45,
        protein: 1.8
      },
      breakfast: {
        time: '८:३० AM',
        mealName: 'पौष्टिक नाश्ता',
        items: ['१ मल्टीग्रेन थालीपीठ', '१ वाटी दही', '१ चमचा पुदिना चटणी'],
        calories: 310,
        protein: 10.5
      },
      midMorning: {
        time: '११:०० AM',
        mealName: 'दुपारपूर्व स्नॅक',
        items: ['१ डाळिंब किंवा पेरू'],
        calories: 80,
        protein: 1.5
      },
      lunch: {
        time: '१:०० PM',
        mealName: 'दुपारचे जेवण',
        items: ['१ भाकरी', '१ वाटी राजमा किंवा हरभरा उसळ', '१ वाटी पालक भाजी', '१ वाटी ताक'],
        calories: 490,
        protein: 22.0
      },
      eveningSnack: {
        time: '५:०० PM',
        mealName: 'संध्याकाळचा स्नॅक',
        items: ['१ लहान वाटी फुटाणे', '१ कप चहा'],
        calories: 130,
        protein: 6.0
      },
      dinner: {
        time: '७:४५ PM',
        mealName: 'रात्रीचे जेवण',
        items: ['१ वाटी मूग डाळ खिचडी', '१ वाटी वाफवलेल्या भाज्या', '१ चमचा तूप'],
        calories: 390,
        protein: 17.5
      },
      bedtime: {
        time: '१०:०० PM',
        mealName: 'झोपण्यापूर्वी',
        items: ['१ कप कोमट पाणी'],
        calories: 5,
        protein: 0
      }
    }
  },
  {
    day: 5,
    dayName: 'शुक्रवार (Day 5)',
    focus: 'चिकन व लिन प्रोटीन बूस्ट',
    totalCalories: 1600,
    totalProtein: 88,
    meals: {
      earlyMorning: {
        time: '६:३० AM',
        mealName: 'सकाळची सुरुवात',
        items: ['१ ग्लास कोमट पाणी + लिंबू', '२ अक्रोड'],
        calories: 60,
        protein: 1.8
      },
      breakfast: {
        time: '८:३० AM',
        mealName: 'पौष्टिक नाश्ता',
        items: ['२ अंड्यांचे ऑम्लेट (कांदा, टोमॅटो, पालक घातलेले, १ चमचा तेलात)', '१ कप ग्रीन टी'],
        calories: 270,
        protein: 17.0
      },
      midMorning: {
        time: '११:०० AM',
        mealName: 'दुपारपूर्व स्नॅक',
        items: ['१ ग्लास ताक + भाजलेली जिरे पूड'],
        calories: 45,
        protein: 2.8
      },
      lunch: {
        time: '१:०० PM',
        mealName: 'दुपारचे जेवण',
        items: ['१ ज्वारीची भाकरी किंवा १ वाटी ब्राऊन राईस', '१५० ग्रॅम ग्रिल्ड / कमी तेलातील चिकन सुक्के', '१ मोठी वाटी काकडी-गाजर कोशिंबीर'],
        calories: 540,
        protein: 38.0
      },
      eveningSnack: {
        time: '५:०० PM',
        mealName: 'संध्याकाळचा स्नॅक',
        items: ['१ उकडलेले अंडे (फक्त पांढरा भाग) किंवा १ वाटी भाजलेले चणे', '१ कप लेमन टी'],
        calories: 120,
        protein: 7.0
      },
      dinner: {
        time: '७:३० PM',
        mealName: 'रात्रीचे जेवण',
        items: ['१ वाटी उकडलेले चिकन व्हेजिटेबल सूप', '१ लहान ज्वारी भाकरी', '१ वाटी वाफवलेली मेथी भाजी'],
        calories: 500,
        protein: 19.0
      },
      bedtime: {
        time: '१०:०० PM',
        mealName: 'झोपण्यापूर्वी',
        items: ['१ कप कोमट हळदीचे दूध'],
        calories: 65,
        protein: 2.5
      }
    }
  },
  {
    day: 6,
    dayName: 'शनिवार (Day 6)',
    focus: 'अंडी व हायड्रेशन',
    totalCalories: 1500,
    totalProtein: 78,
    meals: {
      earlyMorning: {
        time: '६:३० AM',
        mealName: 'सकाळची सुरुवात',
        items: ['१ ग्लास कोमट पाणी + चिया सीड्स', '४ बदाम'],
        calories: 55,
        protein: 2.0
      },
      breakfast: {
        time: '८:३० AM',
        mealName: 'पौष्टिक नाश्ता',
        items: ['१ वाटी व्हेज उपमा + २ उकडलेल्या अंड्याचे पांढरे भाग', '१ कप ग्रीन टी'],
        calories: 320,
        protein: 16.5
      },
      midMorning: {
        time: '११:०० AM',
        mealName: 'दुपारपूर्व स्नॅक',
        items: ['१ सफरचंद'],
        calories: 75,
        protein: 0.8
      },
      lunch: {
        time: '१:०० PM',
        mealName: 'दुपारचे जेवण',
        items: ['२ अंड्यांची महाराष्ट्रीयन करी', '१ ज्वारीची भाकरी', '१ वाटी कोशिंबीर', '१ वाटी ताक'],
        calories: 510,
        protein: 27.5
      },
      eveningSnack: {
        time: '५:०० PM',
        mealName: 'संध्याकाळचा स्नॅक',
        items: ['१ वाटी मखाना', '१ कप चहा'],
        calories: 120,
        protein: 3.5
      },
      dinner: {
        time: '७:३० PM',
        mealName: 'रात्रीचे जेवण',
        items: ['१ वाटी पालक-पनीर किंवा सोया भुर्जी', '१ लहान भाकरी किंवा चपाती', '१ वाटी टोमॅटो सूप'],
        calories: 415,
        protein: 27.5
      },
      bedtime: {
        time: '१०:०० PM',
        mealName: 'झोपण्यापूर्वी',
        items: ['१ कप कोमट पाणी'],
        calories: 5,
        protein: 0
      }
    }
  },
  {
    day: 7,
    dayName: 'रविवार (Day 7)',
    focus: 'संडे स्पेशल नॉन-व्हेज बॅलन्स',
    totalCalories: 1640,
    totalProtein: 92,
    meals: {
      earlyMorning: {
        time: '७:०० AM',
        mealName: 'सकाळची सुरुवात',
        items: ['१ ग्लास कोमट पाणी', '५ बदाम + २ खजूर'],
        calories: 75,
        protein: 2.0
      },
      breakfast: {
        time: '९:०० AM',
        mealName: 'संडे नाश्ता',
        items: ['२ अंड्यांची कांदा-टोमॅटो भुर्जी', '१ चपाती किंवा १ भाकरी', '१ कप चहा'],
        calories: 360,
        protein: 19.0
      },
      midMorning: {
        time: '११:३० AM',
        mealName: 'दुपारपूर्व स्नॅक',
        items: ['१ ग्लास सोलकढी (कमी नारळाचे दूध वापरलेली)'],
        calories: 60,
        protein: 1.5
      },
      lunch: {
        time: '१:३० PM',
        mealName: 'संडे फॅमिली लंच',
        items: ['१५० ग्रॅम फिश करी किंवा मटन (फक्त २ लहान तुकडे, चरबी नसलेले)', '१ ज्वारीची भाकरी किंवा १ वाटी भात', '१ मोठी वाटी कांदा, लिंबू आणि काकडी सॅलड'],
        calories: 560,
        protein: 42.0
      },
      eveningSnack: {
        time: '५:३० PM',
        mealName: 'संध्याकाळचा स्नॅक',
        items: ['१ वाटी उकडलेली हरभरा चाट', '१ कप ग्रीन टी'],
        calories: 140,
        protein: 6.5
      },
      dinner: {
        time: '८:०० PM',
        mealName: 'रात्रीचे हलके जेवण',
        items: ['१ मोठी वाटी व्हेजिटेबल आणि मूग डाळ सूप', '१ लहान फुलका', '१ वाटी काकडी कोशिंबीर'],
        calories: 380,
        protein: 18.5
      },
      bedtime: {
        time: '१०:१५ PM',
        mealName: 'झोपण्यापूर्वी',
        items: ['१ कप कोमट हळदीचे दूध'],
        calories: 65,
        protein: 2.5
      }
    }
  }
];
