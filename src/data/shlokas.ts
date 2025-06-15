
export interface Shloka {
  id: string;
  chapter: number;
  verse: number;
  sanskrit: string;
  transliteration: string;
  translations: {
    english: string;
    hindi: string;
    hinglish: string;
  };
  wordMeaning: Array<{
    sanskrit: string;
    meaning: string;
  }>;
  category: 'popular' | 'daily' | 'wisdom';
}

export const popularShlokas: Shloka[] = [
  {
    id: "bg-2-47",
    chapter: 2,
    verse: 47,
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
    transliteration: "karmaṇy-evādhikāras te mā phaleṣhu kadāchana, mā karma-phala-hetur bhūr mā te saṅgo 'stv akarmaṇi",
    translations: {
      english: "You have a right to perform your prescribed duty, but not to the fruits of action. Never consider yourself the cause of the results of your activities, and never be attached to not doing your duty.",
      hindi: "तुम्हारा अधिकार केवल कर्म करने में है, फल में नहीं। कभी भी अपने को कर्मों के फल का कारण मत समझो और न ही कर्म न करने की इच्छा करो।",
      hinglish: "Tumhara adhikar sirf karma karne mein hai, phal mein nahi. Kabhi bhi apne ko karmon ke phal ka kaaran mat samjho aur na hi karma na karne ki iccha karo."
    },
    wordMeaning: [
      { sanskrit: "कर्मणि", meaning: "in action/duty" },
      { sanskrit: "एव", meaning: "only/certainly" },
      { sanskrit: "अधिकारः", meaning: "right/authority" },
      { sanskrit: "ते", meaning: "your" },
      { sanskrit: "मा", meaning: "never" },
      { sanskrit: "फलेषु", meaning: "in the fruits" },
      { sanskrit: "कदाचन", meaning: "at any time" }
    ],
    category: 'popular'
  },
  {
    id: "bg-4-7",
    chapter: 4,
    verse: 7,
    sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत। अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥",
    transliteration: "yadā yadā hi dharmasya glānir bhavati bhārata, abhyutthānam adharmasya tadātmānaṁ sṛjāmy aham",
    translations: {
      english: "Whenever there is a decline in righteousness and an increase in unrighteousness, O Arjuna, at that time I manifest myself on earth.",
      hindi: "हे भारत! जब-जब धर्म की हानि और अधर्म की वृद्धि होती है, तब-तब मैं अपने आप को प्रकट करता हूँ।",
      hinglish: "Hey Bharat! Jab-jab dharma ki haani aur adharma ki vriddhi hoti hai, tab-tab main apne aap ko prakat karta hun."
    },
    wordMeaning: [
      { sanskrit: "यदा यदा", meaning: "whenever" },
      { sanskrit: "हि", meaning: "certainly" },
      { sanskrit: "धर्मस्य", meaning: "of righteousness" },
      { sanskrit: "ग्लानिः", meaning: "decline/decay" },
      { sanskrit: "भवति", meaning: "happens" },
      { sanskrit: "अभ्युत्थानम्", meaning: "rise/increase" },
      { sanskrit: "अधर्मस्य", meaning: "of unrighteousness" }
    ],
    category: 'popular'
  },
  {
    id: "bg-18-66",
    chapter: 18,
    verse: 66,
    sanskrit: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज। अहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥",
    transliteration: "sarva-dharmān parityajya mām ekaṁ śaraṇaṁ vraja, ahaṁ tvāṁ sarva-pāpebhyo mokṣayiṣyāmi mā śucaḥ",
    translations: {
      english: "Abandon all varieties of religion and just surrender unto Me. I shall deliver you from all sinful reactions. Do not fear.",
      hindi: "सभी धर्मों को त्यागकर केवल मेरी शरण में आओ। मैं तुम्हें सभी पापों से मुक्त कर दूंगा, चिंता मत करो।",
      hinglish: "Sabhi dharmon ko tyaag kar kewal meri sharan mein aao. Main tumhein sabhi papon se mukt kar dunga, chinta mat karo."
    },
    wordMeaning: [
      { sanskrit: "सर्व", meaning: "all" },
      { sanskrit: "धर्मान्", meaning: "religious duties" },
      { sanskrit: "परित्यज्य", meaning: "abandoning" },
      { sanskrit: "माम्", meaning: "unto me" },
      { sanskrit: "एकम्", meaning: "only" },
      { sanskrit: "शरणम्", meaning: "surrender" },
      { sanskrit: "व्रज", meaning: "go" }
    ],
    category: 'popular'
  },
  {
    id: "bg-2-14",
    chapter: 2,
    verse: 14,
    sanskrit: "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः। आगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत॥",
    transliteration: "mātrā-sparśās tu kaunteya śītoṣṇa-sukha-duḥkha-dāḥ, āgamāpāyino 'nityās tāṁs titikṣasva bhārata",
    translations: {
      english: "O son of Kunti, the nonpermanent appearance of happiness and distress, and their disappearance in due course, are like the appearance and disappearance of winter and summer seasons. They arise from sense perception, and one must learn to tolerate them without being disturbed.",
      hindi: "हे कुन्तीपुत्र! सर्दी-गर्मी और सुख-दुःख देने वाले इन्द्रियों के विषय अस्थायी हैं। ये आते-जाते रहते हैं, इसलिए हे भारत! इन्हें सहन करो।",
      hinglish: "Hey Kunti putra! Sardi-garmi aur sukh-dukh dene waale indriyon ke vishay asthayi hain. Ye aate-jaate rehte hain, isliye hey Bharat! Inhein sahan karo."
    },
    wordMeaning: [
      { sanskrit: "मात्रास्पर्शाः", meaning: "sense perceptions" },
      { sanskrit: "तु", meaning: "but" },
      { sanskrit: "कौन्तेय", meaning: "O son of Kunti" },
      { sanskrit: "शीत", meaning: "cold" },
      { sanskrit: "उष्ण", meaning: "heat" },
      { sanskrit: "सुख", meaning: "happiness" },
      { sanskrit: "दुःख", meaning: "distress" }
    ],
    category: 'wisdom'
  },
  {
    id: "bg-3-27",
    chapter: 3,
    verse: 27,
    sanskrit: "प्रकृतेः क्रियमाणानि गुणैः कर्माणि सर्वशः। अहंकारविमूढात्मा कर्ताहमिति मन्यते॥",
    transliteration: "prakṛteḥ kriyamāṇāni guṇaiḥ karmāṇi sarvaśaḥ, ahaṅkāra-vimūḍhātmā kartāham iti manyate",
    translations: {
      english: "The spirit soul bewildered by the influence of false ego thinks himself the doer of activities that are in actuality carried out by the three modes of material nature.",
      hindi: "वास्तव में सभी कर्म प्रकृति के गुणों द्वारा किए जाते हैं, परन्तु अहंकार से मोहित जीव अपने आप को कर्ता मानता है।",
      hinglish: "Vaastav mein sabhi karma prakriti ke gunon dwara kiye jaate hain, parantu ahankar se mohit jeev apne aap ko karta maanta hai."
    },
    wordMeaning: [
      { sanskrit: "प्रकृतेः", meaning: "of material nature" },
      { sanskrit: "क्रियमाणानि", meaning: "being performed" },
      { sanskrit: "गुणैः", meaning: "by the modes" },
      { sanskrit: "कर्माणि", meaning: "actions" },
      { sanskrit: "सर्वशः", meaning: "in all respects" },
      { sanskrit: "अहंकार", meaning: "false ego" },
      { sanskrit: "विमूढ", meaning: "bewildered" }
    ],
    category: 'wisdom'
  },
  {
    id: "bg-6-5",
    chapter: 6,
    verse: 5,
    sanskrit: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्। आत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥",
    transliteration: "uddhared ātmanātmānaṁ nātmānam avasādayet, ātmaiva hy ātmano bandhur ātmaiva ripur ātmanaḥ",
    translations: {
      english: "One must deliver himself with the help of his mind, and not degrade himself. The mind is the friend of the conditioned soul, and his enemy as well.",
      hindi: "मनुष्य को चाहिए कि वह अपने द्वारा अपना उद्धार करे और अपना पतन न करे। मन ही आत्मा का मित्र है और मन ही शत्रु है।",
      hinglish: "Manushya ko chahiye ki vah apne dwara apna uddhaar kare aur apna patan na kare. Man hi aatma ka mitra hai aur man hi shatru hai."
    },
    wordMeaning: [
      { sanskrit: "उद्धरेत्", meaning: "should uplift" },
      { sanskrit: "आत्मना", meaning: "by the mind" },
      { sanskrit: "आत्मानम्", meaning: "the self" },
      { sanskrit: "न", meaning: "not" },
      { sanskrit: "अवसादयेत्", meaning: "should degrade" },
      { sanskrit: "आत्मा", meaning: "mind/self" },
      { sanskrit: "एव", meaning: "certainly" }
    ],
    category: 'wisdom'
  }
];

export const getDailyShlokas = (): Shloka[] => {
  const dailyShlokas = popularShlokas.filter(s => s.category === 'popular' || s.category === 'daily');
  const today = new Date().getDate();
  const index = today % dailyShlokas.length;
  return [dailyShlokas[index]];
};

export const searchShlokas = (query: string): Shloka[] => {
  const lowerQuery = query.toLowerCase();
  return popularShlokas.filter(shloka => 
    shloka.sanskrit.includes(query) ||
    shloka.transliteration.toLowerCase().includes(lowerQuery) ||
    shloka.translations.english.toLowerCase().includes(lowerQuery) ||
    shloka.translations.hindi.includes(query) ||
    shloka.translations.hinglish.toLowerCase().includes(lowerQuery) ||
    `${shloka.chapter}.${shloka.verse}`.includes(query)
  );
};
