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
  wordMeanings: Array<{
    word: string;
    meaning: string;
  }>;
  aiExplanation?: {
    simple: string;
    realLife: string;
    spiritual: string;
  };
}

export const popularShlokas: Shloka[] = [
  {
    id: "1.1",
    chapter: 1,
    verse: 1,
    sanskrit: "धृतराष्ट्र उवाच | धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः | मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ||",
    transliteration: "dhṛtarāṣṭra uvāca | dharma-kṣetre kuru-kṣetre samavetā yuyutsavaḥ | māmakāḥ pāṇḍavāś caiva kim akurvata sañjaya ||",
    translations: {
      english: "Dhritarashtra said: O Sanjaya, after my sons and the sons of Pandu assembled in the place of pilgrimage at Kurukshetra, desiring to fight, what did they do?",
      hindi: "धृतराष्ट्र ने कहा: हे संजय! धर्मक्षेत्र कुरुक्षेत्र में एकत्रित हुए, युद्ध की इच्छा वाले मेरे और पांडु के पुत्रों ने क्या किया?",
      hinglish: "Dhritarashtra ne kaha: Ae Sanjaya! Dharmakshetra Kurukshetra mein ekatrit hue, yuddh ki ichha wale mere aur Pandu ke putron ne kya kiya?"
    },
    wordMeanings: [
      { word: "धृतराष्ट्र", meaning: "Dhritarashtra (blind king)" },
      { word: "उवाच", meaning: "said" },
      { word: "धर्मक्षेत्रे", meaning: "in the place of righteousness" },
      { word: "कुरुक्षेत्रे", meaning: "in the field of Kurus" },
      { word: "समवेताः", meaning: "assembled" },
      { word: "युयुत्सवः", meaning: "desiring to fight" }
    ],
    aiExplanation: {
      simple: "This is the very first verse of the Bhagavad Gita. The blind king Dhritarashtra asks his minister Sanjaya about what happened when both armies gathered at Kurukshetra for battle.",
      realLife: "Like a worried parent asking about their children's activities, Dhritarashtra represents our anxious mind that wants to know outcomes before they happen. This teaches us that uncertainty is part of life.",
      spiritual: "Kurukshetra represents the battlefield of life where we all face moral dilemmas. The 'field of dharma' symbolizes that life's challenges are opportunities for spiritual growth."
    }
  },
  {
    id: "2.13",
    chapter: 2,
    verse: 13,
    sanskrit: "देहिनोऽस्मिन्यथा देहे कौमारं यौवनं जरा | तथा देहान्तरप्राप्तिर्धीरस्तत्र न मुह्यति ||",
    transliteration: "dehino 'smin yathā dehe kaumāraṁ yauvanaṁ jarā | tathā dehāntara-prāptir dhīras tatra na muhyati ||",
    translations: {
      english: "As the embodied soul continuously passes, in this body, from boyhood to youth to old age, the soul similarly passes into another body at death. A sober person is not bewildered by such a change.",
      hindi: "जैसे जीवात्मा इस शरीर में बालपन से युवावस्था और वृद्धावस्था में निरन्तर अग्रसर होता है, वैसे ही मृत्यु के समय आत्मा दूसरे शरीर में प्रवेश करता है। धीर पुरुष ऐसे परिवर्तन से मोह को प्राप्त नहीं होता।",
      hinglish: "Jaise jeevatma is shareer mein balpan se yuvaavastha aur vriddhaavastha mein nirantar agrasar hota hai, vaise hi mrityu ke samay aatma doosre shareer mein pravesh karta hai. Dheer purush aise parivartan se moh ko prapt nahin hota."
    },
    wordMeanings: [
      { word: "देहिनः", meaning: "of the embodied" },
      { word: "अस्मिन्", meaning: "in this" },
      { word: "यथा", meaning: "as" },
      { word: "देहे", meaning: "in the body" },
      { word: "कौमारम्", meaning: "boyhood" },
      { word: "यौवनम्", meaning: "youth" },
      { word: "जरा", meaning: "old age" }
    ],
    aiExplanation: {
      simple: "Just as a person goes through different stages of life in one lifetime, similarly, the soul moves to another body after death. Wise people are not deluded by this change.",
      realLife: "This verse teaches us to accept change as a natural part of life. Just as we grow from childhood to adulthood, we should understand that death is another transition, not an end.",
      spiritual: "Understanding the eternal nature of the soul helps us overcome the fear of death and focus on our spiritual growth. It encourages us to live in the present without being attached to the temporary."
    }
  },
  {
    id: "2.47",
    chapter: 2,
    verse: 47,
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन | मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ||",
    transliteration: "karmaṇy-evādhikāras te mā phaleṣu kadācana | mā karma-phala-hetur bhūr mā te saṅgo ’stv akarmaṇi ||",
    translations: {
      english: "You have a right to perform your prescribed duty, but you are not entitled to the fruits of action. Never consider yourself the cause of the results of your activities, and never be attached to not doing your duty.",
      hindi: "तेरा कर्म करने में ही अधिकार है, उसके फलों में कभी नहीं। तू कर्मफल का हेतु मत बन और तेरी अकर्मण्यता में आसक्ति न हो।",
      hinglish: "Tera karma karne mein hee adhikaar hai, uske phalon mein kabhee nahin. Too karmaphal ka hetu mat ban aur teree akarmanyata mein aasakti na ho."
    },
    wordMeanings: [
      { word: "कर्मणि", meaning: "in action" },
      { word: "एव", meaning: "certainly" },
      { word: "अधिकारः", meaning: "right" },
      { word: "ते", meaning: "your" },
      { word: "मा", meaning: "not" },
      { word: "फलेषु", meaning: "in the fruits" },
      { word: "कदाचन", meaning: "at any time" }
    ],
    aiExplanation: {
      simple: "You have the right to do your work, but don't worry about the results. Don't think you are the cause of the results, and don't be attached to not working.",
      realLife: "This verse teaches us to focus on our efforts and not stress about the outcomes. Whether it's studying for a test or working on a project, do your best without being overly concerned about the results.",
      spiritual: "By detaching from the fruits of our actions, we can find inner peace and focus on our spiritual growth. This verse encourages us to act selflessly and without ego."
    }
  },
  {
    id: "3.27",
    chapter: 3,
    verse: 27,
    sanskrit: "प्रकृतेः क्रियमाणानि गुणैः कर्माणि सर्वशः | अहङ्कारविमूढात्मा कर्ताहमिति मन्यते ||",
    transliteration: "prakṛteḥ kriyamāṇāni guṇaiḥ karmāṇi sarvaśaḥ | ahaṅkāra-vimūḍhātmā kartāham iti manyate ||",
    translations: {
      english: "The bewildered spirit soul, under the influence of the three modes of material nature, thinks himself to be the doer of activities, which are in actuality carried out by nature.",
      hindi: "वास्तव में सम्पूर्ण कर्म प्रकृति के गुणों द्वारा किये जाते हैं। अहंकार से मोहित आत्मा यह सोचता है कि वह कर्ता है।",
      hinglish: "Vastav mein sampoorn karma prakriti ke gunon dwara kiye jate hain. Ahankar se mohit aatma yah sochata hai ki vah karta hai."
    },
    wordMeanings: [
      { "word": "प्रकृतेः", "meaning": "of material nature" },
      { "word": "क्रियमाणानि", "meaning": "being done" },
      { "word": "गुणैः", "meaning": "by the modes" },
      { "word": "कर्माणि", "meaning": "activities" },
      { "word": "सर्वशः", "meaning": "all kinds of" },
      { "word": "अहङ्कार", "meaning": "false ego" }
    ],
    aiExplanation: {
      "simple": "All actions are actually performed by the modes of material nature. The one whose mind is deluded by ego thinks, 'I am the doer'.",
      "realLife": "Often, we take credit for successes without acknowledging the circumstances, support, and opportunities that contributed. This verse reminds us to stay humble and recognize the bigger picture.",
      "spiritual": "Understanding that nature (or divine will) is the ultimate doer helps us to let go of ego and pride. It encourages us to act with humility and gratitude."
    }
  },
  {
    id: "4.7",
    chapter: 4,
    verse: 7,
    sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत | अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ||",
    transliteration": "yadā yadā hi dharmasya glānir bhavati bhārata | abhyutthānam adharmasya tadātmānaṁ sṛjāmy aham ||",
    translations": {
      "english": "Whenever and wherever there is a decline in religious practice, O descendant of Bharata, and a predominant rise of irreligion—at that time I descend Myself.",
      "hindi": "हे भारत! जब-जब धर्म की हानि होती है और अधर्म की वृद्धि होती है, तब-तब मैं स्वयं ही अवतार लेता हूँ।",
      "hinglish": "He Bharat! Jab-jab dharma ki hani hoti hai aur adharma ki vriddhi hoti hai, tab-tab main swayam hi avatar leta hun."
    },
    wordMeanings": [
      { "word": "यदा यदा", "meaning": "whenever and wherever" },
      { "word": "हि", "meaning": "certainly" },
      { "word": "धर्मस्य", "meaning": "of religion" },
      { "word": "ग्लानिः", "meaning": "decline" },
      { "word": "भवति", "meaning": "becomes" },
      { "word": "भारत", "meaning": "O descendant of Bharata" }
    ],
    aiExplanation": {
      "simple": "Whenever there is a decline in righteousness and an increase in unrighteousness, I manifest Myself.",
      "realLife": "This verse gives hope in times of moral decline. It suggests that help and guidance will always be available when needed, whether through leaders, movements, or personal awakening.",
      "spiritual": "This is one of the most famous verses promising divine intervention to restore balance in the world. It reinforces the idea that good will ultimately triumph over evil."
    }
  },
  {
    id: "6.5",
    chapter: 6,
    verse: 5,
    sanskrit: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत् | आत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः ||",
    transliteration": "uddhared ātmanātmānaṁ nātmānam avasādayet | ātmaiva hy ātmano bandhur ātmaiva ripur ātmanaḥ ||",
    translations": {
      "english": "Elevate yourself through the power of your mind, and not degrade yourself, for the mind can be the friend and also the enemy of the self.",
      "hindi": "अपने द्वारा अपना उद्धार करे और अपने को नीचे न गिराए। नि:संदेह मन ही इस जीवात्मा का मित्र है और मन ही इसका शत्रु है।",
      "hinglish": "Apne dwara apna uddhar kare aur apne ko neeche na giraye. Ni:sandeh man hi is jeevatma ka mitra hai aur man hi iska shatru hai."
    },
    wordMeanings": [
      { "word": "उद्धरेत्", "meaning": "one should elevate" },
      { "word": "आत्मना", "meaning": "by the mind" },
      { "word": "आत्मानम्", "meaning": "the self" },
      { "word": "न", "meaning": "not" },
      { "word": "आत्मानम्", "meaning": "the self" },
      { "word": "अवसादयेत्", "meaning": "degrade" }
    ],
    aiExplanation": {
      "simple": "Elevate yourself by your own mind, and do not degrade yourself. The mind is the friend of the self, and also the enemy.",
      "realLife": "This verse highlights the power of our mindset. By cultivating positive thoughts and self-discipline, we can overcome challenges and achieve our goals. Conversely, negative thinking can hold us back.",
      "spiritual": "The mind is a powerful tool that can either lead us to liberation or keep us bound to the material world. By controlling the mind, we can realize our true spiritual nature."
    }
  },
  {
    id: "9.22",
    chapter: 9,
    verse: 22,
    sanskrit: "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते | तेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम् ||",
    transliteration": "ananyāś cintayanto māṁ ye janāḥ paryupāsate | teṣāṁ nityābhiyuktānāṁ yoga-kṣemaṁ vahāmy aham ||",
    translations": {
      "english": "But those who always worship Me with exclusive devotion, meditating on My transcendental form—to them I carry what they lack, and I preserve what they have.",
      "hindi": "जो अनन्य भाव से मुझमें स्थित होकर निरन्तर मेरा चिन्तन करते हुए मेरी उपासना करते हैं, मैं उन नित्ययुक्त पुरुषों का योगक्षेम वहन करता हूँ।",
      "hinglish": "Jo ananya bhav se mujhme sthit hokar nirantar mera chintan karte hue meri upasana karte hain, main un nityayukta purushon ka yogakshem vahan karta hun."
    },
    wordMeanings": [
      { "word": "अनन्याः", "meaning": "without any other thought" },
      { "word": "चिन्तयन्तः", "meaning": "meditating" },
      { "word": "माम्", "meaning": "upon Me" },
      { "word": "ये", "meaning": "those who" },
      { "word": "जनाः", "meaning": "persons" },
      { "word": "पर्युपासते", "meaning": "properly worship" }
    ],
    aiExplanation": {
      "simple": "Those who worship Me with exclusive devotion, always thinking of Me, I personally take care of their needs and preserve what they have.",
      "realLife": "This verse assures us that when we dedicate ourselves to a higher purpose, our needs will be taken care of. It encourages us to pursue our passions with faith and trust.",
      "spiritual": "Complete surrender and devotion to the divine brings about a sense of security and fulfillment. It signifies that the devotee is always under divine protection."
    }
  },
  {
    id: "11.32",
    chapter: 11,
    verse: 32,
    sanskrit: "कालोऽस्मि लोकक्षयकृत्प्रवृद्धो लोकां समाहर्तुमिह प्रवृत्तः | ऋतेऽपि त्वां न भविष्यन्ति सर्वे येऽवस्थिताः प्रत्यनीकेषु योधाः ||",
    transliteration": "kālo ’smi loka-kṣaya-kṛt pravṛddho lokān samāhartum iha pravṛttaḥ | ṛte ’pi tvāṁ na bhaviṣyanti sarve ye ’vasthitāḥ pratyanīkeṣu yodhāḥ ||",
    translations": {
      "english": "I am time, the destroyer of all worlds, and I have come to destroy all people. With the exception of you [the Pandavas], all the soldiers here on both sides will be slain.",
      "hindi": "मैं लोकों का नाश करने वाला बढ़ा हुआ काल हूँ और इस समय इन सब लोगों को नष्ट करने के लिए प्रवृत्त हुआ हूँ। तुम [पाण्डवों] के बिना भी, सामने की सेना में खड़े हुए ये सब योद्धा नहीं रहेंगे।",
      "hinglish": "Main lokon ka nash karne wala badha hua kal hun aur is samay in sab logon ko nasht karne ke liye pravritt hua hun. Tum [pandavon] ke bina bhi, samne ki sena mein khade hue ye sab yoddha nahin rahenge."
    },
    wordMeanings": [
      { "word": "कालः", "meaning": "time" },
      { "word": "अस्मि", "meaning": "I am" },
      { "word": "लोकक्षयकृत्", "meaning": "the destroyer of the worlds" },
      { "word": "प्रवृद्धः", "meaning": "greatly grown" },
      { "word": "लोकान्", "meaning": "all people" },
      { "word": "समाहर्तुम्", "meaning": "to destroy" }
    ],
    aiExplanation": {
      "simple": "I am Time, the destroyer of worlds, and I am here to destroy all people. Even without you, all these warriors arrayed for battle will not survive.",
      "realLife": "This verse reminds us of the impermanence of life and the inevitability of change. It encourages us to make the most of our time and focus on what truly matters.",
      "spiritual": "Time is an aspect of the divine that governs creation and destruction. Recognizing this helps us to accept the cycles of life and death and to surrender to the divine will."
    }
  },
  {
    id: "12.13",
    chapter: 12,
    verse: 13,
    sanskrit: "अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च | निर्ममो निरहङ्कारः समदुःखसुखः क्षमी ||",
    transliteration": "adveṣṭā sarva-bhūtānāṁ maitraḥ karuṇa eva ca | nirmamo nirahaṅkāraḥ sama-duḥkha-sukhaḥ kṣamī ||",
    translations": {
      "english": "One who is not envious but is a kind friend to all living entities, who does not think himself a proprietor and is free from false ego, who is equal in both happiness and distress, and who is tolerant.",
      "hindi": "जो किसी से द्वेष नहीं करता, सब प्राणियों का मित्र है, दयालु है, अहंकार और ममत्व से रहित है, सुख और दु:ख में समान रहता है और क्षमाशील है।",
      "hinglish": "Jo kisi se dwesh nahin karta, sab praniyon ka mitra hai, dayalu hai, ahankar aur mamatv se rahit hai, sukh aur du:kh mein saman rahta hai aur kshamashil hai."
    },
    wordMeanings": [
      { "word": "अद्वेष्टा", "meaning": "non-envious" },
      { "word": "सर्वभूतानाम्", "meaning": "to all living entities" },
      { "word": "मैत्रः", "meaning": "friendly" },
      { "word": "करुणः", "meaning": "kind" },
      { "word": "एव", "meaning": "certainly" },
      { "word": "च", "meaning": "also" }
    ],
    aiExplanation": {
      "simple": "One who is not envious, is a friend to all beings, is compassionate, free from possessiveness and ego, equal in happiness and distress, and forgiving.",
      "realLife": "These are qualities of a balanced and compassionate person. By cultivating these virtues, we can improve our relationships and contribute to a more harmonious society.",
      "spiritual": "These qualities are essential for spiritual growth. They help us to overcome selfishness and to connect with the divine in all beings."
    }
  },
  {
    id: "18.66",
    chapter: 18,
    verse: 66,
    sanskrit": "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज | अहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः ||",
    transliteration": "sarva-dharmān parityajya mām ekaṁ śaraṇaṁ vraja | ahaṁ tvāṁ sarva-pāpebhyo mokṣayiṣyāmi mā śucaḥ ||",
    translations": {
      "english": "Abandon all varieties of religion and just surrender unto Me. I shall deliver you from all sinful reactions. Do not fear.",
      "hindi": "सम्पूर्ण धर्मों को त्याग कर केवल मेरी शरण में आओ, मैं तुम्हें समस्त पापों से मुक्त कर दूँगा, शोक मत करो।",
      "hinglish": "Sampurn dharmo ko tyag kar keval meri sharan mein aao, main tumhen samast papon se mukt kar dunga, shok mat karo."
    },
    wordMeanings": [
      { "word": "सर्वधर्मान्", "meaning": "all kinds of religion" },
      { "word": "परित्यज्य", "meaning": "abandoning" },
      { "word": "माम्", "meaning": "unto Me" },
      { "word": "एकम्", "meaning": "only" },
      { "word": "शरणम्", "meaning": "surrender" },
      { "word": "व्रज", "meaning": "go" }
    ],
    aiExplanation": {
      "simple": "Give up all your duties and surrender to Me alone. I will liberate you from all sins; do not grieve.",
      "realLife": "This verse encourages us to let go of our anxieties and trust in a higher power. It suggests that by surrendering our worries, we can find peace and guidance.",
      "spiritual": "This is a call for complete devotion and surrender to the divine. It promises liberation from the cycle of birth and death for those who take refuge in the Supreme Being."
    }
  }
];

// Search function
export const searchShlokas = (query: string): Shloka[] => {
  const lowerQuery = query.toLowerCase();
  return popularShlokas.filter(shloka => 
    shloka.sanskrit.toLowerCase().includes(lowerQuery) ||
    shloka.transliteration.toLowerCase().includes(lowerQuery) ||
    shloka.translations.english.toLowerCase().includes(lowerQuery) ||
    shloka.translations.hindi.toLowerCase().includes(lowerQuery) ||
    shloka.translations.hinglish.toLowerCase().includes(lowerQuery) ||
    shloka.wordMeanings.some(wm => wm.word.toLowerCase().includes(lowerQuery) || wm.meaning.toLowerCase().includes(lowerQuery)) ||
    `chapter ${shloka.chapter}`.includes(lowerQuery) ||
    `verse ${shloka.verse}`.includes(lowerQuery)
  );
};

// Get daily shloka
export const getDailyShlokas = (): Shloka[] => {
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
  const index = dayOfYear % popularShlokas.length;
  return [popularShlokas[index]];
};
