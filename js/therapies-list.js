// Therapy data with all 69 therapies
const therapies = [
  // ResetCore™ Therapies (17)
  {
    id: 1,
    name: "Thermal Mud Detox",
    category: "resetcore",
    price: 3500,
    conditions: ["arthritis", "skin"],
    locations: ["delhi", "gurugram", "noida", "ghaziabad", "faridabad"],
    staycations: ["weekend", "5-day", "7-day"],
    description: "Deep cleansing therapy using mineral-rich thermal mud",
    image: "../images/home/Gemini_Generated_Image_4y86pg4y86pg4y86 (2).png",
  },
  {
    id: 2,
    name: "Breathing Kriya Therapy",
    category: "resetcore",
    price: 2800,
    conditions: ["insomnia", "hypertension"],
    locations: ["delhi", "gurugram", "noida", "ghaziabad", "faridabad"],
    staycations: ["weekend", "5-day", "7-day", "couples"],
    description:
      "Pranayama techniques for respiratory health and mental clarity",
    image: "../images/home/envato-labs-ai-7ea7bd42-7f55-47e7-896f-0e5a0f554e42.png",
  },
  {
    id: 3,
    name: "Castor Oil Heat Wrap",
    category: "resetcore",
    price: 2200,
    conditions: ["arthritis", "back-pain"],
    locations: ["delhi", "gurugram", "noida"],
    staycations: ["weekend", "5-day"],
    description: "Therapeutic heat application with castor oil for pain relief",
    image:
      "../images/naturopathy/envato-labs-ai-21e2dd45-89fd-421b-b990-e6ad714a13e1.jpg",
  },
  {
    id: 4,
    name: "Colon Hydro Detox",
    category: "resetcore",
    price: 4200,
    conditions: ["obesity", "skin"],
    locations: ["delhi", "gurugram"],
    staycations: ["5-day", "7-day"],
    description:
      "Gentle colon cleansing for detoxification and digestive health",
    image:
      "../images/naturopathy/envato-labs-ai-31055b4a-c8a6-42e4-9c4a-33e41dedd435.jpg",
  },
  {
    id: 5,
    name: "Deep Rest Yoga Nidra",
    category: "resetcore",
    price: 2500,
    conditions: ["insomnia", "hypertension"],
    locations: ["delhi", "gurugram", "noida", "ghaziabad", "faridabad"],
    staycations: ["weekend", "5-day", "7-day", "couples"],
    description: "Guided yogic sleep for deep relaxation and stress relief",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 6,
    name: "Diabetes Reversal Pathway",
    category: "resetcore",
    price: 5000,
    conditions: ["diabetes", "obesity"],
    locations: ["delhi", "gurugram", "noida"],
    staycations: ["5-day", "7-day"],
    description: "Comprehensive program for managing and reversing diabetes",
    image:
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 7,
    name: "Digestive Cleanse Gut Detox",
    category: "resetcore",
    price: 3800,
    conditions: ["obesity", "pcos", "skin"],
    locations: ["delhi", "gurugram", "noida", "ghaziabad"],
    staycations: ["5-day", "7-day"],
    description: "Complete digestive system reset and detoxification",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 8,
    name: "Hot Cold Hydro Bath",
    category: "resetcore",
    price: 3200,
    conditions: ["arthritis", "back-pain"],
    locations: ["delhi", "gurugram", "noida", "faridabad"],
    staycations: ["weekend", "5-day", "7-day"],
    description: "Contrast hydrotherapy for circulation and pain management",
    image:
      "https://images.unsplash.com/photo-1571771016-3ed6b28d72c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 9,
    name: "Liver Detox Ritual",
    category: "resetcore",
    price: 4500,
    conditions: ["skin", "obesity"],
    locations: ["delhi", "gurugram"],
    staycations: ["5-day", "7-day"],
    description: "Specialized detoxification protocol for liver health",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 10,
    name: "Nutrition Lifestyle Coaching",
    category: "resetcore",
    price: 3000,
    conditions: ["diabetes", "hypertension", "thyroid", "obesity", "pcos"],
    locations: ["delhi", "gurugram", "noida", "ghaziabad", "faridabad"],
    staycations: ["weekend", "5-day", "7-day", "corporate"],
    description:
      "Personalized guidance for sustainable health through nutrition",
    image:
      "https://images.unsplash.com/photo-1494390248081-4e521a5940db?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 11,
    name: "PCOS Reset Program",
    category: "resetcore",
    price: 4800,
    conditions: ["pcos", "obesity"],
    locations: ["delhi", "gurugram", "noida"],
    staycations: ["5-day", "7-day"],
    description:
      "Holistic approach to managing PCOS symptoms and hormone balance",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 12,
    name: "Steam Chamber Cleanse",
    category: "resetcore",
    price: 2800,
    conditions: ["skin", "respiratory"],
    locations: ["delhi", "gurugram", "noida", "ghaziabad"],
    staycations: ["weekend", "5-day"],
    description: "Herbal steam therapy for respiratory and skin detoxification",
    image:
      "https://images.unsplash.com/photo-1544164350-2c6c429e35a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 13,
    name: "Therapeutic Compress",
    category: "resetcore",
    price: 2400,
    conditions: ["arthritis", "back-pain"],
    locations: ["delhi", "gurugram", "noida", "ghaziabad", "faridabad"],
    staycations: ["weekend", "5-day"],
    description: "Medicated compress application for pain and inflammation",
    image:
      "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 14,
    name: "Weight Reset Program",
    category: "resetcore",
    price: 5500,
    conditions: ["obesity", "diabetes", "pcos", "thyroid"],
    locations: ["delhi", "gurugram", "noida"],
    staycations: ["5-day", "7-day"],
    description: "Comprehensive weight management and metabolic reset program",
    image:
      "https://images.unsplash.com/photo-1535912634255-b5c2e53ea7d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 15,
    name: "BNYS/BAMS Supervised Program",
    category: "resetcore",
    price: 6000,
    conditions: ["all"],
    locations: ["delhi"],
    staycations: ["7-day"],
    description:
      "Medically supervised holistic program by certified practitioners",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 16,
    name: "Panchakarma Detox Reset",
    category: "resetcore",
    price: 7500,
    conditions: ["all"],
    locations: ["delhi", "gurugram"],
    staycations: ["7-day"],
    description:
      "Traditional Ayurvedic detoxification and rejuvenation protocol",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 17,
    name: "Yoga Flow Therapy",
    category: "resetcore",
    price: 2200,
    conditions: ["back-pain", "insomnia", "hypertension"],
    locations: ["delhi", "gurugram", "noida", "ghaziabad", "faridabad"],
    staycations: ["weekend", "5-day", "7-day", "couples"],
    description: "Therapeutic yoga sequences for specific health conditions",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },

  // ReAlign™ Therapies (18)
  {
    id: 18,
    name: "Dry Cupping",
    category: "realign",
    price: 2200,
    conditions: ["back-pain", "arthritis"],
    locations: ["delhi", "gurugram", "noida", "ghaziabad", "faridabad"],
    staycations: ["weekend", "5-day"],
    description:
      "Traditional therapy to relieve muscle tension and improve circulation",
    image:
      "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 19,
    name: "Cryo Spot Pain Relief",
    category: "realign",
    price: 2500,
    conditions: ["arthritis", "back-pain", "sciatica"],
    locations: ["delhi", "gurugram", "noida"],
    staycations: ["weekend", "5-day"],
    description: "Targeted cold therapy for localized pain and inflammation",
    image:
      "https://images.unsplash.com/photo-1590402494610-2c7a0d599afd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 20,
    name: "TMJ Migraine Relief",
    category: "realign",
    price: 2800,
    conditions: ["migraine", "headache"],
    locations: ["delhi", "gurugram", "noida", "ghaziabad"],
    staycations: ["weekend", "5-day"],
    description: "Specialized therapy for TMJ disorders and migraine relief",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 21,
    name: "Digital Posture Correction",
    category: "realign",
    price: 3200,
    conditions: ["back-pain", "posture"],
    locations: ["delhi", "gurugram"],
    staycations: ["5-day", "7-day"],
    description:
      "Technology-assisted assessment and correction of postural issues",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 22,
    name: "Driver Recovery Program",
    category: "realign",
    price: 3000,
    conditions: ["back-pain", "posture"],
    locations: ["delhi", "gurugram", "noida", "faridabad"],
    staycations: ["weekend", "5-day"],
    description:
      "Specialized program for drivers with chronic pain and postural issues",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 23,
    name: "Duo Relax Head Foot",
    category: "realign",
    price: 3500,
    conditions: ["insomnia", "stress"],
    locations: ["delhi", "gurugram", "noida", "ghaziabad", "faridabad"],
    staycations: ["weekend", "5-day", "couples"],
    description: "Simultaneous head and foot therapy for deep relaxation",
    image:
      "https://images.unsplash.com/photo-1548600916-dc8492f8e845?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 24,
    name: "Electro Laser Joint Relief",
    category: "realign",
    price: 3800,
    conditions: ["arthritis", "back-pain", "sciatica"],
    locations: ["delhi", "gurugram", "noida"],
    staycations: ["5-day", "7-day"],
    description:
      "Advanced electro-laser therapy for joint pain and inflammation",
    image:
      "https://images.unsplash.com/photo-1576091160558-3a61b5d5a8f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 25,
    name: "Frozen Shoulder Recovery",
    category: "realign",
    price: 3200,
    conditions: ["arthritis", "mobility"],
    locations: ["delhi", "gurugram", "noida", "ghaziabad"],
    staycations: ["weekend", "5-day"],
    description:
      "Specialized therapy for frozen shoulder and restricted mobility",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 26,
    name: "Guided Breathwork Stretch",
    category: "realign",
    price: 2200,
    conditions: ["stress", "insomnia", "back-pain"],
    locations: ["delhi", "gurugram", "noida", "ghaziabad", "faridabad"],
    staycations: ["weekend", "5-day", "7-day"],
    description: "Combination of breathwork and stretching for tension release",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 27,
    name: "IASTM Fascia Therapy",
    category: "realign",
    price: 3000,
    conditions: ["back-pain", "sciatica", "posture"],
    locations: ["delhi", "gurugram", "noida"],
    staycations: ["weekend", "5-day"],
    description:
      "Instrument-assisted soft tissue mobilization for fascial release",
    image:
      "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 28,
    name: "Lymphatic Flow PCOS PMS",
    category: "realign",
    price: 2800,
    conditions: ["pcos", "women-health"],
    locations: ["delhi", "gurugram", "noida", "ghaziabad"],
    staycations: ["weekend", "5-day"],
    description: "Lymphatic drainage therapy for PCOS and menstrual discomfort",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 29,
    name: "Myofascial Release",
    category: "realign",
    price: 2700,
    conditions: ["back-pain", "sciatica", "arthritis"],
    locations: ["delhi", "gurugram", "noida", "ghaziabad", "faridabad"],
    staycations: ["weekend", "5-day"],
    description: "Manual therapy for releasing fascial restrictions and pain",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 30,
    name: "PCOS Core Strength",
    category: "realign",
    price: 2600,
    conditions: ["pcos", "women-health"],
    locations: ["delhi", "gurugram", "noida"],
    staycations: ["weekend", "5-day"],
    description: "Core strengthening exercises tailored for PCOS management",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 31,
    name: "Prenatal Postnatal Movement",
    category: "realign",
    price: 2900,
    conditions: ["postnatal", "women-health"],
    locations: ["delhi", "gurugram", "noida", "ghaziabad"],
    staycations: ["weekend", "5-day", "couples"],
    description:
      "Specialized movement therapy for pregnancy and postpartum recovery",
    image:
      "https://images.unsplash.com/photo-1530041539828-4c4d1c46f1ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 32,
    name: "Senior Balance Gait",
    category: "realign",
    price: 2500,
    conditions: ["geriatric", "mobility"],
    locations: ["delhi", "gurugram", "noida", "faridabad"],
    staycations: ["weekend", "5-day"],
    description: "Therapy for improving balance and gait in older adults",
    image:
      "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 33,
    name: "Sleep Recovery Protocol",
    category: "realign",
    price: 3000,
    conditions: ["insomnia", "stress"],
    locations: ["delhi", "gurugram", "noida", "ghaziabad", "faridabad"],
    staycations: ["weekend", "5-day", "7-day"],
    description: "Structured program for improving sleep quality and patterns",
    image:
      "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 34,
    name: "Spinal Decompression",
    category: "realign",
    price: 4000,
    conditions: ["back-pain", "sciatica", "posture"],
    locations: ["delhi", "gurugram", "noida"],
    staycations: ["5-day", "7-day"],
    description: "Non-surgical spinal decompression for disc-related issues",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 35,
    name: "Weekend Travel Reset",
    category: "realign",
    price: 3200,
    conditions: ["stress", "fatigue"],
    locations: ["delhi", "gurugram", "noida", "ghaziabad", "faridabad"],
    staycations: ["weekend"],
    description:
      "Quick recovery program for travelers experiencing jet lag and fatigue",
    image:
      "https://images.unsplash.com/photo-1533556123565-741iw0cb493?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },

  // Skin+™ Therapies (11)
  {
    id: 36,
    name: "Ayurvedic Steam Dome",
    category: "skin-plus",
    price: 3200,
    conditions: ["skin", "detox"],
    locations: ["delhi", "gurugram", "noida", "ghaziabad"],
    staycations: ["weekend", "5-day"],
    description: "Herbal steam therapy for deep cleansing and rejuvenation",
    image:
      "https://images.unsplash.com/photo-1544164350-2c6c429e35a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 37,
    name: "Cryo Glow Boost",
    category: "skin-plus",
    price: 3800,
    conditions: ["skin", "rejuvenation"],
    locations: ["delhi", "gurugram", "noida"],
    staycations: ["weekend", "5-day", "couples"],
    description: "Facial treatment using cryotherapy for skin revitalization",
    image:
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 38,
    name: "Dermapen Microneedling",
    category: "skin-plus",
    price: 5500,
    conditions: ["skin", "anti-aging"],
    locations: ["delhi", "gurugram"],
    staycations: ["5-day", "7-day"],
    description:
      "Minimally invasive collagen induction therapy for skin rejuvenation",
    image:
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 39,
    name: "Galvanic Lift Firm",
    category: "skin-plus",
    price: 4200,
    conditions: ["skin", "anti-aging"],
    locations: ["delhi", "gurugram", "noida"],
    staycations: ["weekend", "5-day"],
    description: "Electrotherapy for skin tightening and firming",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 40,
    name: "Hair Regrowth Therapy",
    category: "skin-plus",
    price: 4800,
    conditions: ["hairfall", "scalp-health"],
    locations: ["delhi", "gurugram", "noida", "ghaziabad"],
    staycations: ["5-day", "7-day"],
    description: "Comprehensive treatment for hair loss and scalp health",
    image:
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 41,
    name: "Herbal Skin Renewal",
    category: "skin-plus",
    price: 3500,
    conditions: ["skin", "acne", "psoriasis"],
    locations: ["delhi", "gurugram", "noida", "ghaziabad", "faridabad"],
    staycations: ["weekend", "5-day"],
    description: "Natural herbal treatment for various skin conditions",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 42,
    name: "Hydraglow Facial",
    category: "skin-plus",
    price: 3000,
    conditions: ["skin", "hydration"],
    locations: ["delhi", "gurugram", "noida", "ghaziabad", "faridabad"],
    staycations: ["weekend", "couples"],
    description: "Intensive hydration facial for radiant and glowing skin",
    image:
      "https://images.unsplash.com/photo-1570194065313-1862ce1ab699?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 43,
    name: "Lympho Skin Contouring",
    category: "skin-plus",
    price: 4000,
    conditions: ["skin", "detox", "puffiness"],
    locations: ["delhi", "gurugram", "noida"],
    staycations: ["weekend", "5-day"],
    description:
      "Lymphatic drainage techniques for facial contouring and detox",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 44,
    name: "Myofascial Face Lift",
    category: "skin-plus",
    price: 4500,
    conditions: ["skin", "anti-aging"],
    locations: ["delhi", "gurugram", "noida"],
    staycations: ["weekend", "5-day"],
    description: "Non-surgical facial rejuvenation through myofascial release",
    image:
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 45,
    name: "Oxygen Infusion Facial",
    category: "skin-plus",
    price: 3800,
    conditions: ["skin", "rejuvenation"],
    locations: ["delhi", "gurugram", "noida", "ghaziabad"],
    staycations: ["weekend", "5-day"],
    description:
      "Oxygen therapy for skin revitalization and nutrient absorption",
    image:
      "https://images.unsplash.com/photo-1570194065313-1862ce1ab699?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 46,
    name: "Red Light Rejuvenation",
    category: "skin-plus",
    price: 3500,
    conditions: ["skin", "hairfall", "anti-aging"],
    locations: ["delhi", "gurugram", "noida", "ghaziabad", "faridabad"],
    staycations: ["weekend", "5-day"],
    description:
      "LED light therapy for collagen production and cellular repair",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },

  // Signature Rituals (5)
  {
    id: 47,
    name: "Shiv Abhyanga Ritual",
    category: "signature",
    price: 4500,
    conditions: ["stress", "detox", "rejuvenation"],
    locations: ["delhi", "gurugram", "noida"],
    staycations: ["weekend", "5-day", "7-day"],
    description: "Traditional Ayurvedic full-body massage with medicated oils",
    image:
      "https://images.unsplash.com/photo-1544161515-38ab7e2a5cce?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 48,
    name: "Bridal Groom Glow",
    category: "signature",
    price: 6000,
    conditions: ["skin", "rejuvenation"],
    locations: ["delhi", "gurugram", "noida", "ghaziabad"],
    staycations: ["weekend", "5-day", "couples"],
    description: "Premium pre-wedding wellness and beauty package for couples",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 49,
    name: "Classic Abhyanga Oils",
    category: "signature",
    price: 3800,
    conditions: ["stress", "detox", "rejuvenation"],
    locations: ["delhi", "gurugram", "noida", "ghaziabad", "faridabad"],
    staycations: ["weekend", "5-day"],
    description: "Traditional oil massage with choice of therapeutic oils",
    image:
      "https://images.unsplash.com/photo-1544161515-38ab7e2a5cce?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 50,
    name: "Shirodhara Flow",
    category: "signature",
    price: 4200,
    conditions: ["stress", "insomnia", "migraine"],
    locations: ["delhi", "gurugram", "noida", "ghaziabad"],
    staycations: ["weekend", "5-day", "7-day"],
    description:
      "Continuous flow of warm oil on the forehead for deep relaxation",
    image:
      "https://images.unsplash.com/photo-1548600916-dc8492f8e845?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 51,
    name: "Stress Sleep Ritual",
    category: "signature",
    price: 4000,
    conditions: ["stress", "insomnia"],
    locations: ["delhi", "gurugram", "noida", "ghaziabad", "faridabad"],
    staycations: ["weekend", "5-day", "7-day"],
    description: "Combination therapy for stress relief and improved sleep",
    image:
      "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },

  // Neuro & Mind-Body Therapies (10)
  {
    id: 52,
    name: "Neurofeedback Brain Reset",
    category: "neuro",
    price: 5000,
    conditions: ["stress", "focus", "mental-clarity"],
    locations: ["delhi", "gurugram"],
    staycations: ["5-day", "7-day"],
    description:
      "EEG-based training for brainwave regulation and mental performance",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 53,
    name: "HRV Stress Balance",
    category: "neuro",
    price: 3800,
    conditions: ["stress", "hypertension", "anxiety"],
    locations: ["delhi", "gurugram", "noida"],
    staycations: ["weekend", "5-day"],
    description:
      "Heart rate variability training for stress resilience and balance",
    image:
      "https://images.unsplash.com/photo-1548600916-dc8492f8e845?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 54,
    name: "Biofeedback Relaxation",
    category: "neuro",
    price: 3500,
    conditions: ["stress", "anxiety", "hypertension"],
    locations: ["delhi", "gurugram", "noida", "ghaziabad"],
    staycations: ["weekend", "5-day"],
    description:
      "Technology-assisted relaxation training using physiological signals",
    image:
      "https://images.unsplash.com/photo-1548600916-dc8492f8e845?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 55,
    name: "Guided Breathwork",
    category: "neuro",
    price: 2500,
    conditions: ["stress", "anxiety", "respiratory"],
    locations: ["delhi", "gurugram", "noida", "ghaziabad", "faridabad"],
    staycations: ["weekend", "5-day", "7-day"],
    description:
      "Structured breathing techniques for mental and physical balance",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 56,
    name: "Craniosacral Light Touch",
    category: "neuro",
    price: 3200,
    conditions: ["stress", "migraine", "insomnia"],
    locations: ["delhi", "gurugram", "noida"],
    staycations: ["weekend", "5-day"],
    description:
      "Gentle touch therapy for releasing tensions in the craniosacral system",
    image:
      "https://images.unsplash.com/photo-1548600916-dc8492f8e845?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 57,
    name: "Meditation Reset",
    category: "neuro",
    price: 2200,
    conditions: ["stress", "anxiety", "focus"],
    locations: ["delhi", "gurugram", "noida", "ghaziabad", "faridabad"],
    staycations: ["weekend", "5-day", "7-day"],
    description:
      "Guided meditation practices for mental clarity and emotional balance",
    image:
      "https://images.unsplash.com/photo-1548600916-dc8492f8e845?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 58,
    name: "Sleep Rhythm Reset",
    category: "neuro",
    price: 3800,
    conditions: ["insomnia", "sleep-disorders"],
    locations: ["delhi", "gurugram", "noida"],
    staycations: ["5-day", "7-day"],
    description:
      "Comprehensive program for resetting natural sleep-wake cycles",
    image:
      "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 59,
    name: "Stress Detox Combo",
    category: "neuro",
    price: 5200,
    conditions: ["stress", "anxiety", "burnout"],
    locations: ["delhi", "gurugram", "noida"],
    staycations: ["5-day", "7-day"],
    description:
      "Combination therapy for comprehensive stress management and detox",
    image:
      "https://images.unsplash.com/photo-1548600916-dc8492f8e845?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 60,
    name: "TMJ Migraine Neuro Relief",
    category: "neuro",
    price: 4000,
    conditions: ["migraine", "tmj", "headache"],
    locations: ["delhi", "gurugram", "noida"],
    staycations: ["weekend", "5-day"],
    description: "Neurological approach to TMJ and migraine relief",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 61,
    name: "Yoga Nidra Sound Bath",
    category: "neuro",
    price: 3000,
    conditions: ["stress", "insomnia", "anxiety"],
    locations: ["delhi", "gurugram", "noida", "ghaziabad", "faridabad"],
    staycations: ["weekend", "5-day", "7-day"],
    description:
      "Deep relaxation through yogic sleep combined with sound healing",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },

  // Advanced Integratives (7)
  {
    id: 62,
    name: "Contrast Hydro Therapy",
    category: "advanced",
    price: 3500,
    conditions: ["circulation", "recovery", "inflammation"],
    locations: ["delhi", "gurugram"],
    staycations: ["weekend", "5-day"],
    description:
      "Alternating hot and cold water therapy for circulation and recovery",
    image:
      "https://images.unsplash.com/photo-1571771016-3ed6b28d72c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 63,
    name: "Float Therapy",
    category: "advanced",
    price: 4500,
    conditions: ["stress", "sensory", "pain-relief"],
    locations: ["delhi", "gurugram"],
    staycations: ["weekend", "5-day", "7-day"],
    description: "Sensory deprivation in Epsom salt water for deep relaxation",
    image:
      "https://images.unsplash.com/photo-1571771016-3ed6b28d72c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 64,
    name: "Hyperbaric Oxygen HBOT",
    category: "advanced",
    price: 6000,
    conditions: ["recovery", "healing", "energy"],
    locations: ["delhi"],
    staycations: ["5-day", "7-day"],
    description:
      "Oxygen therapy under pressure for enhanced healing and recovery",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 65,
    name: "IV Nutrient Drip",
    category: "advanced",
    price: 5000,
    conditions: ["energy", "immunity", "recovery"],
    locations: ["delhi", "gurugram"],
    staycations: ["5-day", "7-day"],
    description:
      "Intravenous vitamin and mineral therapy for optimal nutrition",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 66,
    name: "NAD Infusion",
    category: "advanced",
    price: 7500,
    conditions: ["energy", "anti-aging", "recovery"],
    locations: ["delhi"],
    staycations: ["7-day"],
    description:
      "Nicotinamide adenine dinucleotide therapy for cellular energy",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 67,
    name: "PEMF Cellular Recharge",
    category: "advanced",
    price: 4800,
    conditions: ["recovery", "energy", "pain-relief"],
    locations: ["delhi", "gurugram"],
    staycations: ["weekend", "5-day"],
    description:
      "Pulsed electromagnetic field therapy for cellular regeneration",
    image:
      "https://images.unsplash.com/photo-1576091160558-3a61b5d5a8f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
  {
    id: 68,
    name: "Whole Body Cryotherapy",
    category: "advanced",
    price: 4200,
    conditions: ["recovery", "inflammation", "energy"],
    locations: ["delhi", "gurugram"],
    staycations: ["weekend", "5-day"],
    description: "Extreme cold therapy for inflammation reduction and recovery",
    image:
      "https://images.unsplash.com/photo-1571771016-3ed6b28d72c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  // Render all therapies initially
  renderTherapies(therapies);

  // Toggle filter sections
  const filterHeaders = document.querySelectorAll(".filter-header");
  filterHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const filterGroup = header.parentElement;
      filterGroup.classList.toggle("active");
    });
  });

  // Filter functionality
  const conditionFilters = document.querySelectorAll(".condition-filter");
  const categoryFilters = document.querySelectorAll(".category-filter");
  const locationFilters = document.querySelectorAll(".location-filter");
  const staycationFilters = document.querySelectorAll(".staycation-filter");

  const allFilters = [
    ...conditionFilters,
    ...categoryFilters,
    ...locationFilters,
    ...staycationFilters,
  ];

  allFilters.forEach((filter) => {
    filter.addEventListener("change", applyFilters);
  });

  // Sort functionality
  const sortSelect = document.getElementById("sort-by");
  sortSelect.addEventListener("change", applyFilters);

  // Clear filters functionality
  const clearFiltersBtn = document.querySelector(".clear-filters-btn");
  clearFiltersBtn.addEventListener("click", () => {
    // Uncheck all checkboxes
    allFilters.forEach((filter) => {
      filter.checked = false;
    });

    // Reset sort to default
    sortSelect.value = "popularity";

    // Clear active filters
    document.querySelector(".active-filters").innerHTML = "";

    // Show all therapy cards
    renderTherapies(therapies);
  });

  function applyFilters() {
    // Get selected filters
    const selectedConditions = Array.from(conditionFilters)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);

    const selectedCategories = Array.from(categoryFilters)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);

    const selectedLocations = Array.from(locationFilters)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);

    const selectedStaycations = Array.from(staycationFilters)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);

    // Update active filters display
    updateActiveFilters(
      selectedConditions,
      selectedCategories,
      selectedLocations,
      selectedStaycations
    );

    // Filter therapies
    let filteredTherapies = therapies.filter((therapy) => {
      // Conditions filter
      if (selectedConditions.length > 0) {
        const hasMatchingCondition = selectedConditions.some((condition) =>
          therapy.conditions.includes(condition)
        );
        if (!hasMatchingCondition) return false;
      }

      // Category filter
      if (selectedCategories.length > 0) {
        if (!selectedCategories.includes(therapy.category)) return false;
      }

      // Location filter
      if (selectedLocations.length > 0) {
        const hasMatchingLocation = selectedLocations.some((location) =>
          therapy.locations.includes(location)
        );
        if (!hasMatchingLocation) return false;
      }

      // Staycation filter
      if (selectedStaycations.length > 0) {
        const hasMatchingStaycation = selectedStaycations.some((staycation) =>
          therapy.staycations.includes(staycation)
        );
        if (!hasMatchingStaycation) return false;
      }

      return true;
    });

    // Sort therapies
    const sortBy = document.getElementById("sort-by").value;
    filteredTherapies = sortTherapies(filteredTherapies, sortBy);

    // Render filtered therapies
    renderTherapies(filteredTherapies);
  }

  function updateActiveFilters(conditions, categories, locations, staycations) {
    const activeFiltersContainer = document.querySelector(".active-filters");
    activeFiltersContainer.innerHTML = "";

    // Add condition filters
    conditions.forEach((condition) => {
      const filterElement = document.createElement("div");
      filterElement.className = "active-filter";
      filterElement.innerHTML = `
            ${condition.replace(/-/g, " ")}
            <button type="button" data-type="condition" data-value="${condition}"><i class="fas fa-times"></i></button>
            `;
      activeFiltersContainer.appendChild(filterElement);
    });

    // Add category filters
    categories.forEach((category) => {
      const filterElement = document.createElement("div");
      filterElement.className = "active-filter";
      filterElement.innerHTML = `
            ${category.replace(/-/g, " ")}
            <button type="button" data-type="category" data-value="${category}"><i class="fas fa-times"></i></button>
            `;
      activeFiltersContainer.appendChild(filterElement);
    });

    // Add location filters
    locations.forEach((location) => {
      const filterElement = document.createElement("div");
      filterElement.className = "active-filter";
      filterElement.innerHTML = `
            ${location}
            <button type="button" data-type="location" data-value="${location}"><i class="fas fa-times"></i></button>
            `;
      activeFiltersContainer.appendChild(filterElement);
    });

    // Add staycation filters
    staycations.forEach((staycation) => {
      const filterElement = document.createElement("div");
      filterElement.className = "active-filter";
      filterElement.innerHTML = `
            ${staycation.replace(/-/g, " ")}
            <button type="button" data-type="staycation" data-value="${staycation}"><i class="fas fa-times"></i></button>
            `;
      activeFiltersContainer.appendChild(filterElement);
    });

    // Add event listeners to remove buttons
    activeFiltersContainer.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        const type = button.dataset.type;
        const value = button.dataset.value;

        // Find and uncheck the corresponding checkbox
        const checkbox = document.querySelector(
          `.${type}-filter[value="${value}"]`
        );
        if (checkbox) {
          checkbox.checked = false;
        }

        // Reapply filters
        applyFilters();
      });
    });
  }

  function sortTherapies(therapies, sortBy) {
    switch (sortBy) {
      case "price-low":
        return [...therapies].sort((a, b) => a.price - b.price);
      case "price-high":
        return [...therapies].sort((a, b) => b.price - a.price);
      case "name":
        return [...therapies].sort((a, b) => a.name.localeCompare(b.name));
      case "popularity":
      default:
        return therapies;
    }
  }

  function renderTherapies(therapiesToRender) {
    const therapiesGrid = document.getElementById("therapies-grid");
    const therapiesCount = document.getElementById("therapies-count");

    // Update count
    therapiesCount.textContent = therapiesToRender.length;

    // Clear grid
    therapiesGrid.innerHTML = "";

    // Show message if no results
    if (therapiesToRender.length === 0) {
      therapiesGrid.innerHTML = `
            <div class="no-results">
                <h3>No therapies match your filters</h3>
                <p>Try adjusting your filters to see more results</p>
            </div>
            `;
      return;
    }

    // Render therapy cards
    therapiesToRender.forEach((therapy, index) => {
      const categoryName = getCategoryName(therapy.category);
      const therapyCard = document.createElement("div");
      therapyCard.className = "therapy-card";
      therapyCard.style.setProperty("--card-index", index);

      therapyCard.innerHTML = `
            <div class="therapy-image">
                <img src="${therapy.image}" alt="${therapy.name}">
                <div class="therapy-overlay">
                    <a href="#" class="view-btn">View Details</a>
                </div>
            </div>
            <div class="therapy-info">
                <h3>${therapy.name}</h3>
                <span class="therapy-category">${categoryName}</span>
                <p class="therapy-description">${therapy.description}</p>
                <div class="therapy-footer">
                    <span class="therapy-price">₹${therapy.price.toLocaleString()}</span>
                    <a href="#" class="read-more-btn">Read More</a>
                </div>
            </div>
            `;

      therapiesGrid.appendChild(therapyCard);
    });
  }

  function getCategoryName(category) {
    switch (category) {
      case "resetcore":
        return "ResetCore™";
      case "realign":
        return "ReAlign™";
      case "skin-plus":
        return "Skin+™";
      case "signature":
        return "Signature Rituals";
      case "neuro":
        return "Neuro & Mind-Body";
      case "advanced":
        return "Advanced Integratives";
      default:
        return category;
    }
  }
});
