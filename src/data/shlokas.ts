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
  wordMeanings?: { word: string; meaning: string }[];
  aiExplanation?: {
    short: string;
    long: string;
  };
}

export const searchShlokas = (query: string): Shloka[] => {
  const searchTerm = query.toLowerCase();
  return shlokas.filter((shloka) => {
    return (
      shloka.sanskrit.toLowerCase().includes(searchTerm) ||
      shloka.transliteration.toLowerCase().includes(searchTerm) ||
      shloka.translations.english.toLowerCase().includes(searchTerm) ||
      shloka.translations.hindi.toLowerCase().includes(searchTerm) ||
      shloka.translations.hinglish.toLowerCase().includes(searchTerm) ||
      `${shloka.chapter}.${shloka.verse}`.includes(searchTerm)
    );
  });
};

export const popularShlokas: Shloka[] = [
  {
    id: "2.13",
    chapter: 2,
    verse: 13,
    sanskrit: "देहिनोऽस्मिन्यथा देहे कौमारं यौवनं जरा | तथा देहान्तरप्राप्तिर्धीरस्तत्र न मुह्यति ||",
    transliteration: "dehino 'smin yathā dehe kaumāraṁ yauvanaṁ jarā tathā dehāntara-prāptir dhīras tatra na muhyati",
    translations: {
      english: "As the embodied soul continuously passes, in this body, from boyhood to youth to old age, the soul similarly passes into another body at death. A sober person is not bewildered by such a change.",
      hindi: "जैसे जीवात्मा इस देह में बालपन से युवावस्था और वृद्धावस्था में निरन्तर अग्रसर होता है, वैसे ही मृत्यु के समय वह दूसरे देह में जाता है। धीर पुरुष ऐसे परिवर्तन से मोह को प्राप्त नहीं होता।",
      hinglish: "Jaise ek insaan apne shareer mein bachpan se jawaani aur budhape mein badalta hai, waise hi aatma maut ke baad doosre shareer mein chali jaati hai. Buddhiman log isse dukhi nahi hote."
    },
    wordMeanings: [
      { word: "dehinaḥ", meaning: "of the embodied" },
      { word: "asmin", meaning: "in this" },
      { word: "yathā", meaning: "as" },
      { word: "dehe", meaning: "in the body" },
      { word: "kaumāram", meaning: "boyhood" },
      { word: "yauvanam", meaning: "youth" },
      { word: "jarā", meaning: "old age" },
      { word: "tathā", meaning: "similarly" },
      { word: "dehāntara", meaning: "transference of the body" },
      { word: "prāptiḥ", meaning: "achievement" },
      { word: "dhīraḥ", meaning: "the sober" },
      { word: "tatra", meaning: "thereupon" },
      { word: "na", meaning: "never" },
      { word: "muhyati", meaning: "is deluded" }
    ],
    aiExplanation: {
      short: "This verse explains the concept of reincarnation and the continuous change of the soul from one body to another.",
      long: "In this shloka, Lord Krishna explains to Arjuna the eternal nature of the soul and the process of reincarnation. Just as a person experiences different stages of life in a single lifetime—from childhood to youth to old age—the soul similarly transmigrates from one body to another at the time of death. A wise person, understanding this natural process, is not bewildered or distressed by the change of body. This understanding encourages one to focus on the eternal soul rather than the temporary physical body."
    }
  },
  {
    id: "2.47",
    chapter: 2,
    verse: 47,
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन | मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ||",
    transliteration: "karmaṇy-evādhikāras te mā phaleṣu kadācana mā karma-phala-hetur bhūr mā te saṅgo ’stv akarmaṇi",
    translations: {
      english: "You have a right to perform your prescribed duty, but you are not entitled to the fruits of action. Never consider yourself the cause of the results of your activities, and never be attached to not doing your duty.",
      hindi: "तेरा कर्म करने में ही अधिकार है, उसके फलों में कभी नहीं। इसलिए तू कर्मों के फल का हेतु मत बन और तेरी कर्म न करने में भी आसक्ति न हो।",
      hinglish: "Tumhe sirf apne kartavya karne ka adhikar hai, uske falon ka nahi. Kabhi bhi apne aap ko apne karmo ke natijon ka karan mat samjho, aur kabhi bhi apna kartavya na karne mein mat judo."
    },
    wordMeanings: [
      { word: "karmaṇi", meaning: "in prescribed duties" },
      { word: "eva", meaning: "certainly" },
      { word: "adhikāraḥ", meaning: "right" },
      { word: "te", meaning: "of you" },
      { word: "mā", meaning: "never" },
      { word: "phaleṣu", meaning: "in the fruits" },
      { word: "kadācana", meaning: "at any time" },
      { word: "mā", meaning: "never" },
      { word: "karma-phala", meaning: "result of work" },
      { word: "hetuḥ", meaning: "cause" },
      { word: "bhūḥ", meaning: "become" },
      { word: "mā", meaning: "never" },
      { word: "te", meaning: "of you" },
      { word: "saṅgaḥ", meaning: "attachment" },
      { word: "astu", meaning: "be" },
      { word: "akarmaṇi", meaning: "in not doing prescribed duties" }
    ],
    aiExplanation: {
      short: "This verse emphasizes the importance of performing one's duty without attachment to the results.",
      long: "This shloka is one of the most quoted verses from the Bhagavad Gita. Lord Krishna advises Arjuna to focus on performing his duties to the best of his ability, without being concerned about the outcomes. He should not act with the expectation of reward, nor should he be attached to inaction. The emphasis is on selfless action, performed with detachment and without ego. By doing so, one can avoid the cycle of karma and attain liberation."
    }
  },
  {
    id: "3.27",
    chapter: 3,
    verse: 27,
    sanskrit: "प्रकृतेः क्रियमाणानि गुणैः कर्माणि सर्वशः | अहङ्कारविमूढात्मा कर्ताहमिति मन्यते ||",
    transliteration: "prakṛteḥ kriyamāṇāni guṇaiḥ karmāṇi sarvaśaḥ ahaṅkāra-vimūḍhātmā kartāham iti manyate",
    translations: {
      english: "The bewildered spirit soul, under the influence of the three modes of material nature, thinks himself to be the doer of activities, which are in actuality carried out by nature.",
      hindi: "वास्तव में समस्त कर्म प्रकृति के गुणों द्वारा किए जाते हैं। अहंकार से मोहित आत्मा यह मानती है कि मैं कर्ता हूँ।",
      hinglish: "Asliyat mein, sabhi karm prakriti ke guno dwara kiye jaate hain. Ahankaar se mohit aatma yeh maanti hai ki main karta hoon."
    },
    wordMeanings: [
      { word: "prakṛteḥ", meaning: "of material nature" },
      { word: "kriyamāṇāni", meaning: "being done" },
      { word: "guṇaiḥ", meaning: "by the modes" },
      { word: "karmāṇi", meaning: "activities" },
      { word: "sarvaśaḥ", meaning: "all kinds of" },
      { word: "ahaṅkāra", meaning: "false ego" },
      { word: "vimūḍha", meaning: "bewildered" },
      { word: "ātmā", meaning: "soul" },
      { word: "kartā", meaning: "doer" },
      { word: "aham", meaning: "I" },
      { word: "iti", meaning: "thus" },
      { word: "manyate", meaning: "thinks" }
    ],
    aiExplanation: {
      short: "This verse explains how actions are performed by material nature, but the deluded soul identifies itself as the doer.",
      long: "In this shloka, Lord Krishna clarifies that all actions are carried out by the modes of material nature (goodness, passion, and ignorance). However, the individual soul, deluded by ego, falsely believes itself to be the doer. This misconception arises from ignorance of the true nature of the self and its relationship with the material world. By understanding that nature is the actual performer of actions, one can become free from ego and act with detachment."
    }
  },
  {
    id: "4.7",
    chapter: 4,
    verse: 7,
    sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत | अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम् ||",
    transliteration: "yadā yadā hi dharmasya glānir bhavati bhārata | abhyutthānam adharmasya tadātmānaṁ sṛjāmy aham ||",
    translations: {
      english: "Whenever and wherever there is a decline in religious practice, O descendant of Bharata, and a predominant rise of irreligion—at that time I descend Myself.",
      hindi: "हे भारत! जब-जब धर्म की हानि होती है और अधर्म की वृद्धि होती है, तब-तब मैं स्वयं ही अवतार लेता हूँ।",
      hinglish: "Ae Bharat! Jab bhi dharma kamzor hota hai aur buraai badh jaati hai, tab main khud avatar lekar aata hun."
    },
    wordMeanings: [
      { word: "yadā yadā", meaning: "whenever and wherever" },
      { word: "hi", meaning: "certainly" },
      { word: "dharmasya", meaning: "of religion" },
      { word: "glāniḥ", meaning: "decline" },
      { word: "bhavati", meaning: "manifests" },
      { word: "bhārata", meaning: "O descendant of Bharata" },
      { word: "abhyutthānam", meaning: "predominance" },
      { word: "adharmasya", meaning: "of irreligion" },
      { word: "tadā", meaning: "at that time" },
      { word: "ātmānam", meaning: "Myself" },
      { word: "sṛjāmi", meaning: "I descend" },
      { word: "aham", meaning: "I" }
    ],
    aiExplanation: {
      short: "This verse explains the Lord's promise to incarnate whenever there is a decline in dharma and a rise in adharma.",
      long: "In this shloka, Lord Krishna assures Arjuna (and humanity) that He will incarnate in every age whenever there is a decline in righteousness (dharma) and a rise in unrighteousness (adharma). The purpose of these incarnations is to protect the virtuous, destroy the wicked, and re-establish the principles of dharma. This promise provides hope and reassurance that divine intervention will always be present to restore balance in the world."
    }
  },
  {
    id: "6.5",
    chapter: 6,
    verse: 5,
    sanskrit: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत् | आत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः ||",
    transliteration: "uddhared ātmanātmānaṁ nātmānam avasādayet | ātmaiva hy ātmano bandhur ātmaiva ripur ātmanaḥ ||",
    translations: {
      english: "Elevate yourself through the power of your mind, and not degrade yourself, for the mind can be the friend and also the enemy of the self.",
      hindi: "अपने द्वारा अपना उद्धार करे और अपने को नीचे न गिराए। नि:संदेह मन ही इस जीवात्मा का मित्र है और मन ही इसका शत्रु है।",
      hinglish: "Apne aap ko upar uthao, neeche mat girao. Tumhara dimag tumhara sabse accha dost hai, aur sabse bada dushman bhi."
    },
    wordMeanings: [
      { word: "uddharet", meaning: "one must deliver" },
      { word: "ātmanā", meaning: "by the mind" },
      { word: "ātmānam", meaning: "the self" },
      { word: "na", meaning: "never" },
      { word: "ātmānam", meaning: "the self" },
      { word: "avasādayet", meaning: "let down" },
      { word: "ātmā", meaning: "the mind" },
      { word: "eva", meaning: "certainly" },
      { word: "hi", meaning: "indeed" },
      { word: "ātmanaḥ", meaning: "of the self" },
      { word: "bandhuḥ", meaning: "friend" },
      { word: "ātmā", meaning: "the mind" },
      { word: "eva", meaning: "certainly" },
      { word: "ripuḥ", meaning: "enemy" },
      { word: "ātmanaḥ", meaning: "of the self" }
    ],
    aiExplanation: {
      short: "This verse emphasizes the importance of self-elevation through the mind, as the mind can be both a friend and an enemy.",
      long: "In this shloka, Lord Krishna advises Arjuna on the importance of using the mind to elevate oneself rather than degrade oneself. The mind can be a powerful tool for self-improvement and spiritual growth, but it can also be a source of bondage and suffering. By controlling and training the mind, one can become their own best friend, while allowing the mind to run wild can make it one's worst enemy. Therefore, it is crucial to cultivate positive thoughts and discipline the mind to achieve self-realization."
    }
  },
  {
    id: "9.22",
    chapter: 9,
    verse: 22,
    sanskrit: "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते | तेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम् ||",
    transliteration: "ananyāś cintayanto māṁ ye janāḥ paryupāsate | teṣāṁ nityābhiyuktānāṁ yoga-kṣemaṁ vahāmy aham ||",
    translations: {
      english: "But those who always worship Me with exclusive devotion, meditating on My transcendental form—to them I carry what they lack, and I preserve what they have.",
      hindi: "जो अनन्य भाव से मुझमें स्थित होकर निरन्तर मेरा चिन्तन करते हुए मेरी उपासना करते हैं, मैं उन नित्ययुक्त पुरुषों का योगक्षेम वहन करता हूँ।",
      hinglish: "Jo log sirf mujhe yaad karte rahte hain aur meri pooja karte hain, main unki zaruratein poori karta hun aur unka khayal rakhta hun."
    },
    wordMeanings: [
      { word: "ananyāḥ", meaning: "without any other" },
      { word: "chintayantaḥ", meaning: "meditating" },
      { word: "mām", meaning: "upon Me" },
      { word: "ye", meaning: "who" },
      { word: "janāḥ", meaning: "persons" },
      { word: "paryupāsate", meaning: "properly worship" },
      { word: "teṣām", meaning: "of them" },
      { word: "nitya", meaning: "always" },
      { word: "abhiyuktānām", meaning: "engaged" },
      { word: "yoga", meaning: "that which is lacking" },
      { word: "kṣemam", meaning: "that which is needed" },
      { word: "vahāmi", meaning: "I carry" },
      { word: "aham", meaning: "I" }
    ],
    aiExplanation: {
      short: "This verse assures devotees that the Lord provides for those who worship Him with exclusive devotion.",
      long: "In this shloka, Lord Krishna promises to take care of the needs of those who are exclusively devoted to Him. He personally provides what they lack (yoga) and preserves what they have (kshema). This assurance is meant to encourage unwavering faith and devotion towards the divine. By surrendering to the Lord and focusing one's mind on Him, devotees can be free from anxiety and be assured of His protection and care."
    }
  },
  {
    id: "11.32",
    chapter: 11,
    verse: 32,
    sanskrit: "कालोऽस्मि लोकक्षयकृत्प्रवृद्धो लोकां समाहर्तुमिह प्रवृत्तः | ऋतेऽपि त्वां न भविष्यन्ति सर्वे येऽवस्थिताः प्रत्यनीकेषु योधाः ||",
    transliteration: "kālo 'smi loka-kṣaya-kṛt pravṛddho lokān samāhartum iha pravṛttaḥ | ṛte 'pi tvāṁ na bhaviṣyanti sarve ye 'vasthitāḥ pratyanīkeṣu yodhāḥ ||",
    translations: {
      english: "I am time, the destroyer of all worlds, and I have come to destroy all people. With the exception of you [the Pandavas], all the soldiers here on both sides will be slain.",
      hindi: "मैं लोकों का नाश करने वाला बढ़ा हुआ काल हूँ और इस समय इन सब लोगों को नष्ट करने के लिए प्रवृत्त हुआ हूँ। तुम [पाण्डवों] के बिना भी, सामने की सेना में खड़े हुए ये सब योद्धा नहीं रहेंगे।",
      hinglish: "Main samay hun, jo duniya ko khatam karne aaya hun. Tumhare bina bhi, yahan khade saare yoddhe mar jaayenge."
    },
    wordMeanings: [
      { word: "kālaḥ", meaning: "time" },
      { word: "asmi", meaning: "I am" },
      { word: "loka", meaning: "worlds" },
      { word: "kṣaya-kṛt", meaning: "destroyer" },
      { word: "pravṛddhaḥ", meaning: "greatly grown" },
      { word: "lokān", meaning: "all people" },
      { word: "samāhartum", meaning: "to destroy" },
      { word: "iha", meaning: "in this world" },
      { word: "pravṛttaḥ", meaning: "engaged" },
      { word: "ṛte api", meaning: "without even" },
      { word: "tvām", meaning: "you" },
      { word: "na", meaning: "never" },
      { word: "bhaviṣyanti", meaning: "will remain" },
      { word: "sarve", meaning: "all" },
      { word: "ye", meaning: "who" },
      { word: "avasthitāḥ", meaning: "situated" },
      { word: "pratyanīkeṣu", meaning: "on the opposite sides" },
      { word: "yodhāḥ", meaning: "soldiers" }
    ],
    aiExplanation: {
      short: "This verse reveals the Lord as time, the ultimate destroyer, who has come to annihilate all.",
      long: "In this shloka, Lord Krishna, in His terrifying form, declares Himself to be time, the ultimate destroyer of all worlds. He reveals that He has come to annihilate all the warriors present on the battlefield, regardless of who wins or loses. This declaration emphasizes the transient nature of the material world and the inevitability of death. It also underscores the Lord's supreme power and control over the cosmic order."
    }
  },
  {
    id: "12.13",
    chapter: 12,
    verse: 13,
    sanskrit: "अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च | निर्ममो निरहङ्कारः समदुःखसुखः क्षमी ||",
    transliteration: "adveṣṭā sarva-bhūtānāṁ maitraḥ karuṇa eva ca | nirmamo nirahaṅkāraḥ sama-duḥkha-sukhaḥ kṣamī ||",
    translations: {
      english: "One who is not envious but is a kind friend to all living entities, who does not think himself a proprietor and is free from false ego, who is equal in both happiness and distress, and who is tolerant.",
      hindi: "जो किसी से द्वेष नहीं करता, सब प्राणियों का मित्र है, दयालु है, अहंकार और ममत्व से रहित है, सुख और दु:ख में समान रहता है और क्षमाशील है।",
      hinglish: "Jo kisi se nafrat nahin karta, sabka dost hai, dayalu hai, ghamand nahin karta, khushi-gham mein same rahta hai aur maaf karne wala hai."
    },
    wordMeanings: [
      { word: "adveṣṭā", meaning: "nonenvious" },
      { word: "sarva-bhūtānām", meaning: "to all living entities" },
      { word: "maitraḥ", meaning: "friendly" },
      { word: "karuṇaḥ", meaning: "kind" },
      { word: "eva", meaning: "certainly" },
      { word: "ca", meaning: "also" },
      { word: "nirmamaḥ", meaning: "without sense of proprietorship" },
      { word: "nirahaṅkāraḥ", meaning: "without false ego" },
      { word: "sama", meaning: "equal" },
      { word: "duḥkha", meaning: "distress" },
      { word: "sukhaḥ", meaning: "happiness" },
      { word: "kṣamī", meaning: "forgiving" }
    ],
    aiExplanation: {
      short: "This verse describes the qualities of a devotee who is dear to the Lord.",
      long: "In this shloka, Lord Krishna describes the qualities of a true devotee. Such a person is free from envy, is a kind friend to all, does not claim ownership over anything, is free from false ego, remains equipoised in happiness and distress, and is always forgiving. These qualities enable the devotee to transcend the material world and attain divine love. By cultivating these virtues, one can become dear to the Lord and achieve spiritual perfection."
    }
  }
];
