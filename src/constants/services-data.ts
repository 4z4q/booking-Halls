export const allowedCategories = [
  {
    id: "halls",
    category: "halls",
  },
  {
    id: "decor",
    category: "decor",
  },
  {
    id: "artists",
    category: "artists",
  },
  {
    id: "clothing",
    category: "clothing",
  },
  {
    id: "photography",
    category: "photography",
  },
];

export const services = [
  // Halls
  {
    id: 1,
    name: "قاعة الفخامة",
    location: "الرياض",
    price: 5000,
    capacity: 300,
    rating: 4.5,
    type: "halls",
    image: "/pexels-bertellifotografia-17023018.jpg",
    description: "قاعة فاخرة للمناسبات الكبيرة",
  },
  {
    id: 2,
    name: "قاعة النور",
    location: "جدة",
    price: 4500,
    capacity: 250,
    rating: 4.3,
    type: "halls",
    image: "/pexels-bertellifotografia-17023018.jpg",
    description: "قاعة أنيقة ومناسبة للحفلات المتوسطة",
  },
  {
    id: 3,
    name: "قاعة الماسة",
    location: "الدمام",
    price: 6000,
    capacity: 400,
    rating: 4.8,
    type: "halls",
    image: "/pexels-bertellifotografia-17023018.jpg",
    description: "قاعة مميزة بديكورات فاخرة ومساحات واسعة",
  },

  // Clothing
  {
    id: 4,
    name: "مصمم الأزياء أحمد",
    location: "جدة",
    price: 2000,
    rating: 4.8,
    type: "clothing",
    image: "/newOffers/pexels-grish-petrosyan-3756797-15684451.jpg",
    description: "تصميم أزياء فريدة للمناسبات الخاصة",
  },
  {
    id: 5,
    name: "أناقة الرياض",
    location: "الرياض",
    price: 2500,
    rating: 4.6,
    type: "clothing",
    image: "/newOffers/pexels-grish-petrosyan-3756797-15684451.jpg",
    description: "أزياء مخصصة لحفلات الزفاف والخطوبة",
  },
  {
    id: 6,
    name: "لمسة الموضة",
    location: "مكة",
    price: 1800,
    rating: 4.4,
    type: "clothing",
    image: "/newOffers/pexels-grish-petrosyan-3756797-15684451.jpg",
    description: "أحدث التصاميم العصرية للمناسبات",
  },

  // Photography
  {
    id: 7,
    name: "استوديو التصوير الاحترافي",
    location: "الدمام",
    price: 3000,
    rating: 4.2,
    type: "photography",
    image: "/images/photo1.jpg",
    description: "توثيق لحظاتك بأعلى جودة",
  },
  {
    id: 8,
    name: "عدسة الإبداع",
    location: "الرياض",
    price: 3500,
    rating: 4.6,
    type: "photography",
    image: "/images/photo2.jpg",
    description: "صور احترافية للمناسبات السعيدة",
  },
  {
    id: 9,
    name: "ذكريات للأبد",
    location: "جدة",
    price: 2800,
    rating: 4.3,
    type: "photography",
    image: "/images/photo3.jpg",
    description: "نوثق لحظاتك بأجمل الأساليب",
  },

  // Decor
  {
    id: 10,
    name: "شركة ديكور الأحلام",
    location: "مكة",
    price: 4000,
    rating: 4.7,
    type: "decor",
    image: "/newOffers/pexels-leeloothefirst-5038739.jpg",
    description: "تحويل مناسبتك إلى حلم",
  },
  {
    id: 11,
    name: "لمسات فنية",
    location: "الرياض",
    price: 4200,
    rating: 4.5,
    type: "decor",
    image: "/newOffers/pexels-leeloothefirst-5038739.jpg",
    description: "تصاميم ديكور تبهرك وتناسب ذوقك",
  },
  {
    id: 12,
    name: "فن وزهور",
    location: "الدمام",
    price: 3800,
    rating: 4.4,
    type: "decor",
    image: "/newOffers/pexels-leeloothefirst-5038739.jpg",
    description: "تنسيق حفلات بأسلوب فني وزهور طبيعية",
  },

  // Artists
  {
    id: 13,
    name: "فرقة النجوم الموسيقية",
    location: "المدينة",
    price: 6000,
    rating: 4.9,
    type: "artists",
    image: "/pexels-suvan-chowdhury-37305-144429.jpg",
    description: "إحياء مناسبتك بأجمل الألحان",
  },
  {
    id: 14,
    name: "أنغام الشرق",
    location: "الرياض",
    price: 5500,
    rating: 4.7,
    type: "artists",
    image: "/pexels-suvan-chowdhury-37305-144429.jpg",
    description: "فرقة موسيقية شرقية مميزة",
  },
  {
    id: 15,
    name: "صوت الفرح",
    location: "جدة",
    price: 5000,
    rating: 4.6,
    type: "artists",
    image: "/pexels-suvan-chowdhury-37305-144429.jpg",
    description: "فقرات موسيقية تبهر الحضور",
  },
];


export const servicesData = [
  // Halls
  {
    id: 1,
    name: "قاعة الفخامة",
    location: "الرياض",
    address: "شارع العليا، الرياض",
    price: 5000,
    capacity: 300,
    reviewCount: 124,
    rating: 4.5,
    type: "halls",
    amenities: ["واي فاي", "تكييف", "خدمة الطعام", "مواقف سيارات"],
    image: "/pexels-bertellifotografia-17023018.jpg",
    gallery: [
      "/pexels-bertellifotografia-17023018.jpg",
      "/pexels-bertellifotografia-17023018.jpg",
      "/pexels-bertellifotografia-17023018.jpg",
      "/pexels-bertellifotografia-17023018.jpg"
    ],
    description: "قاعة فاخرة للمناسبات الكبيرة",
    availability: [
      { date: "2024-07-20", slots: ["صباح", "مساء"] },
      { date: "2024-07-21", slots: ["بعد الظهر"] }
    ],
    reviews: [
      {
        id: 1,
        user: {
          name: "سارة",
          image: "/placeholder.svg?height=40&width=40",
          date: "2024-07-15"
        },
        rating: 5,
        title: "قاعة رائعة",
        comment: "كانت تجربة رائعة في هذه القاعة",
        helpful: 10,
        images: []
      }
    ]
  },
  {
    id: 2,
    name: "قاعة النور",
    location: "جدة",
    address: "شارع الأمير سلطان، جدة",
    price: 4500,
    capacity: 250,
    reviewCount: 98,
    rating: 4.3,
    type: "halls",
    amenities: ["تكييف", "إضاءة فاخرة", "شاشات عرض", "مواقف"],
    image: "/pexels-bertellifotografia-17023018.jpg",
    gallery: [
      "/pexels-bertellifotografia-17023018.jpg",
      "/pexels-bertellifotografia-17023018.jpg",
      "/pexels-bertellifotografia-17023018.jpg",
      "/pexels-bertellifotografia-17023018.jpg"
    ],
    description: "قاعة أنيقة ومناسبة للحفلات المتوسطة",
    availability: [
      { date: "2024-07-22", slots: ["صباح", "مساء"] },
      { date: "2024-07-23", slots: ["مساء"] }
    ],
    reviews: [
      {
        id: 1,
        user: {
          name: "منال",
          image: "/placeholder.svg?height=40&width=40",
          date: "2024-07-12"
        },
        rating: 4,
        title: "ممتازة",
        comment: "المكان مرتب والخدمة ممتازة",
        helpful: 8,
        images: []
      }
    ]
  },
  {
    id: 3,
    name: "قاعة الماسة",
    location: "الدمام",
    address: "حي المزروعية، الدمام",
    price: 6000,
    capacity: 400,
    reviewCount: 132,
    rating: 4.8,
    type: "halls",
    amenities: ["خدمة الطعام", "موسيقى", "جلسات خارجية"],
    image: "/pexels-bertellifotografia-17023018.jpg",
    gallery: [
      "/pexels-bertellifotografia-17023018.jpg",
      "/pexels-bertellifotografia-17023018.jpg",
      "/pexels-bertellifotografia-17023018.jpg",
      "/pexels-bertellifotografia-17023018.jpg"
    ],
    description: "قاعة مميزة بديكورات فاخرة ومساحات واسعة",
    availability: [
      { date: "2024-07-24", slots: ["مساء"] },
      { date: "2024-07-25", slots: ["صباح", "بعد الظهر"] }
    ],
    reviews: [
      {
        id: 1,
        user: {
          name: "نوف",
          image: "/placeholder.svg?height=40&width=40",
          date: "2024-07-09"
        },
        rating: 5,
        title: "تجربة راقية",
        comment: "أحببت الجو العام والتنظيم",
        helpful: 11,
        images: []
      }
    ]
  },

  // Clothing
  {
    id: 4,
    name: "مصمم الأزياء أحمد",
    location: "جدة",
    address: "شارع التحلية، جدة",
    price: 2000,
    reviewCount: 124,
    rating: 4.8,
    type: "clothing",
    amenities: ["تصميم فريد", "جودة عالية", "خدمة شخصية"],
    image: "/newOffers/pexels-grish-petrosyan-3756797-15684451.jpg",
    gallery: [
      "/newOffers/pexels-mlkbnl-10282410.jpg",
      "/newOffers/pexels-grish-petrosyan-3756797-15684451.jpg",
      "/newOffers/pexels-alexander-mass-748453803-30934230.jpg",
      "/newOffers/pexels-grish-petrosyan-3756797-15684451.jpg",
      "/newOffers/pexels-adeniuso-gomes-2148096772-30679836.jpg"
    ],
    description: "تصميم أزياء فريدة للمناسبات الخاصة",
    availability: [
      { date: "2024-07-20", slots: ["صباح", "مساء"] },
      { date: "2024-07-21", slots: ["بعد الظهر"] }
    ],
    reviews: [
      {
        id: 1,
        user: {
          name: "ليلى",
          image: "/placeholder.svg?height=40&width=40",
          date: "2024-07-10"
        },
        rating: 5,
        title: "تصميم رائع",
        comment: "أعجبني التصميم كثيراً",
        helpful: 5,
        images: []
      }
    ]
  },
  {
    id: 5,
    name: "أناقة الرياض",
    location: "الرياض",
    address: "حي السفارات، الرياض",
    price: 2500,
    reviewCount: 95,
    rating: 4.6,
    type: "clothing",
    amenities: ["أزياء مخصصة", "خامات فاخرة", "قياسات دقيقة"],
    image: "/newOffers/pexels-grish-petrosyan-3756797-15684451.jpg",
    gallery: [
      "/newOffers/pexels-mlkbnl-10282410.jpg",
      "/newOffers/pexels-grish-petrosyan-3756797-15684451.jpg",
      "/newOffers/pexels-alexander-mass-748453803-30934230.jpg"
    ],
    description: "أزياء مخصصة لحفلات الزفاف والخطوبة",
    availability: [
      { date: "2024-07-22", slots: ["صباح"] },
      { date: "2024-07-23", slots: ["مساء"] }
    ],
    reviews: [
      {
        id: 1,
        user: {
          name: "أحمد",
          image: "/placeholder.svg?height=40&width=40",
          date: "2024-07-08"
        },
        rating: 4,
        title: "جودة ممتازة",
        comment: "الخامات المستخدمة ممتازة",
        helpful: 7,
        images: []
      }
    ]
  },
  {
    id: 6,
    name: "لمسة الموضة",
    location: "مكة",
    address: "حي العزيزية، مكة",
    price: 1800,
    reviewCount: 87,
    rating: 4.4,
    type: "clothing",
    amenities: ["تصاميم عصرية", "أسعار مناسبة", "تشكيلة متنوعة"],
    image: "/newOffers/pexels-grish-petrosyan-3756797-15684451.jpg",
    gallery: [
      "/newOffers/pexels-mlkbnl-10282410.jpg",
      "/newOffers/pexels-grish-petrosyan-3756797-15684451.jpg"
    ],
    description: "أحدث التصاميم العصرية للمناسبات",
    availability: [
      { date: "2024-07-24", slots: ["بعد الظهر"] },
      { date: "2024-07-25", slots: ["صباح", "مساء"] }
    ],
    reviews: [
      {
        id: 1,
        user: {
          name: "هناء",
          image: "/placeholder.svg?height=40&width=40",
          date: "2024-07-05"
        },
        rating: 4,
        title: "رائع",
        comment: "التصاميم جميلة وعصرية",
        helpful: 6,
        images: []
      }
    ]
  },

  // Photography
  {
    id: 7,
    name: "استوديو التصوير الاحترافي",
    location: "الدمام",
    address: "شارع الملك فهد، الدمام",
    price: 3000,
    reviewCount: 112,
    rating: 4.2,
    type: "photography",
    amenities: ["تصوير فيديو", "تصوير فوتوغرافي", "مونتاج"],
    image: "/images/photo1.jpg",
    gallery: [
      "/newOffers/pexels-yakup-polat-420882786-19698113.jpg",
      "/newOffers/pexels-yakup-polat-420882786-19698113.jpg",
      "/newOffers/pexels-skylake-17169148.jpg",
      "/newOffers/pexels-skylake-17169148.jpg"
    ],
    description: "توثيق لحظاتك بأعلى جودة",
    availability: [
      { date: "2024-07-20", slots: ["صباح", "مساء"] },
      { date: "2024-07-21", slots: ["بعد الظهر"] }
    ],
    reviews: [
      {
        id: 1,
        user: {
          name: "خالد",
          image: "/placeholder.svg?height=40&width=40",
          date: "2024-07-05"
        },
        rating: 4,
        title: "تصوير ممتاز",
        comment: "جودة التصوير عالية جداً",
        helpful: 7,
        images: []
      }
    ]
  },
  {
    id: 8,
    name: "عدسة الإبداع",
    location: "الرياض",
    address: "حي النخيل، الرياض",
    price: 3500,
    reviewCount: 134,
    rating: 4.6,
    type: "photography",
    amenities: ["ألبوم صور", "تصوير جوي", "إضاءة احترافية"],
    image: "/images/photo2.jpg",
    gallery: [
      "/images/photo2.jpg",
      "/images/photo2.jpg",
      "/images/photo2.jpg"
    ],
    description: "صور احترافية للمناسبات السعيدة",
    availability: [
      { date: "2024-07-22", slots: ["مساء"] },
      { date: "2024-07-23", slots: ["صباح"] }
    ],
    reviews: [
      {
        id: 1,
        user: {
          name: "سامي",
          image: "/placeholder.svg?height=40&width=40",
          date: "2024-07-03"
        },
        rating: 5,
        title: "إبداع",
        comment: "الصور كانت رائعة بكل معنى الكلمة",
        helpful: 9,
        images: []
      }
    ]
  },
  {
    id: 9,
    name: "ذكريات للأبد",
    location: "جدة",
    address: "حي الصفا، جدة",
    price: 2800,
    reviewCount: 98,
    rating: 4.3,
    type: "photography",
    amenities: ["تصوير خارجي", "فلاتر احترافية", "تصوير بواسطة درون"],
    image: "/images/photo3.jpg",
    gallery: [
      "/images/photo3.jpg",
      "/images/photo3.jpg",
      "/images/photo3.jpg"
    ],
    description: "نوثق لحظاتك بأجمل الأساليب",
    availability: [
      { date: "2024-07-24", slots: ["صباح", "مساء"] },
      { date: "2024-07-25", slots: ["بعد الظهر"] }
    ],
    reviews: [
      {
        id: 1,
        user: {
          name: "مها",
          image: "/placeholder.svg?height=40&width=40",
          date: "2024-06-30"
        },
        rating: 4,
        title: "جيد جداً",
        comment: "التعامل كان محترفاً والنتيجة ممتازة",
        helpful: 5,
        images: []
      }
    ]
  },

  // Decor
  {
    id: 10,
    name: "شركة ديكور الأحلام",
    location: "مكة",
    address: "شارع العزيزية، مكة",
    price: 4000,
    reviewCount: 145,
    rating: 4.7,
    type: "decor",
    amenities: ["تصميم داخلي", "تنسيق الزهور", "إضاءة"],
    image: "/newOffers/pexels-leeloothefirst-5038739.jpg",
    gallery: [
      "/newOffers/pexels-istenci-30815990.jpg",
      "/newOffers/pexels-istenci-30815990.jpg",
      "/newOffers/pexels-istenci-30815990.jpg",
      "/newOffers/pexels-istenci-30815990.jpg"
    ],
    description: "تحويل مناسبتك إلى حلم",
    availability: [
      { date: "2024-07-20", slots: ["صباح", "مساء"] },
      { date: "2024-07-21", slots: ["بعد الظهر"] }
    ],
    reviews: [
      {
        id: 1,
        user: {
          name: "نورة",
          image: "/placeholder.svg?height=40&width=40",
          date: "2024-07-01"
        },
        rating: 5,
        title: "ديكور رائع",
        comment: "الديكور كان مذهلاً",
        helpful: 12,
        images: []
      }
    ]
  },
  {
    id: 11,
    name: "لمسات فنية",
    location: "الرياض",
    address: "حي السليمانية، الرياض",
    price: 4200,
    reviewCount: 118,
    rating: 4.5,
    type: "decor",
    amenities: ["ديكور خشبي", "زهور طبيعية", "إضاءة LED"],
    image: "/newOffers/pexels-leeloothefirst-5038739.jpg",
    gallery: [
      "/newOffers/pexels-leeloothefirst-5038739.jpg",
      "/newOffers/pexels-leeloothefirst-5038739.jpg"
    ],
    description: "تصاميم ديكور تبهرك وتناسب ذوقك",
    availability: [
      { date: "2024-07-22", slots: ["صباح"] },
      { date: "2024-07-23", slots: ["مساء"] }
    ],
    reviews: [
      {
        id: 1,
        user: {
          name: "فهد",
          image: "/placeholder.svg?height=40&width=40",
          date: "2024-06-28"
        },
        rating: 4,
        title: "إبداع",
        comment: "التصميم كان مبتكراً وجميلاً",
        helpful: 8,
        images: []
      }
    ]
  },
  {
    id: 12,
    name: "فن وزهور",
    location: "الدمام",
    address: "حي النعيم، الدمام",
    price: 3800,
    reviewCount: 107,
    rating: 4.4,
    type: "decor",
    amenities: ["تنسيق زهور", "ديكور حديث", "إكسسوارات فاخرة"],
    image: "/newOffers/pexels-leeloothefirst-5038739.jpg",
    gallery: [
      "/newOffers/pexels-leeloothefirst-5038739.jpg",
      "/newOffers/pexels-leeloothefirst-5038739.jpg"
    ],
    description: "تنسيق حفلات بأسلوب فني وزهور طبيعية",
    availability: [
      { date: "2024-07-24", slots: ["بعد الظهر"] },
      { date: "2024-07-25", slots: ["صباح", "مساء"] }
    ],
    reviews: [
      {
        id: 1,
        user: {
          name: "لولوة",
          image: "/placeholder.svg?height=40&width=40",
          date: "2024-06-25"
        },
        rating: 5,
        title: "رائع",
        comment: "الزهور كانت طبيعية وجميلة جداً",
        helpful: 10,
        images: []
      }
    ]
  },

  // Artists
  {
    id: 13,
    name: "فرقة النجوم الموسيقية",
    location: "المدينة",
    address: "شارع سلطانة، المدينة",
    price: 6000,
    reviewCount: 156,
    rating: 4.9,
    type: "artists",
    amenities: ["موسيقى عربية", "موسيقى غربية", "إضاءة"],
    image: "/pexels-suvan-chowdhury-37305-144429.jpg",
    gallery: [
      "/pexels-suvan-chowdhury-37305-144429.jpg",
      "/pexels-suvan-chowdhury-37305-144429.jpg",
      "/pexels-suvan-chowdhury-37305-144429.jpg",
      "/pexels-suvan-chowdhury-37305-144429.jpg"
    ],
    description: "إحياء مناسبتك بأجمل الألحان",
    availability: [
      { date: "2024-07-20", slots: ["صباح", "مساء"] },
      { date: "2024-07-21", slots: ["بعد الظهر"] }
    ],
    reviews: [
      {
        id: 1,
        user: {
          name: "علي",
          image: "/placeholder.svg?height=40&width=40",
          date: "2024-06-25"
        },
        rating: 5,
        title: "فرقة ممتازة",
        comment: "أعجبني أداء الفرقة",
        helpful: 15,
        images: []
      }
    ]
  },
  {
    id: 14,
    name: "أنغام الشرق",
    location: "الرياض",
    address: "حي العليا، الرياض",
    price: 5500,
    reviewCount: 132,
    rating: 4.7,
    type: "artists",
    amenities: ["موسيقى شرقية", "عازفين محترفين", "ميكروفونات لاسلكية"],
    image: "/pexels-suvan-chowdhury-37305-144429.jpg",
    gallery: [
      "/pexels-suvan-chowdhury-37305-144429.jpg",
      "/pexels-suvan-chowdhury-37305-144429.jpg"
    ],
    description: "فرقة موسيقية شرقية مميزة",
    availability: [
      { date: "2024-07-22", slots: ["مساء"] },
      { date: "2024-07-23", slots: ["مساء"] }
    ],
    reviews: [
      {
        id: 1,
        user: {
          name: "بدر",
          image: "/placeholder.svg?height=40&width=40",
          date: "2024-06-20"
        },
        rating: 5,
        title: "موسيقى رائعة",
        comment: "الأداء كان فوق الممتاز",
        helpful: 11,
        images: []
      }
    ]
  },
  {
    id: 15,
    name: "صوت الفرح",
    location: "جدة",
    address: "حي الروضة، جدة",
    price: 5000,
    reviewCount: 121,
    rating: 4.6,
    type: "artists",
    amenities: ["موسيقى عربية", "مغنيين محترفين", "إيقاعات حية"],
    image: "/pexels-suvan-chowdhury-37305-144429.jpg",
    gallery: [
      "/pexels-suvan-chowdhury-37305-144429.jpg",
      "/pexels-suvan-chowdhury-37305-144429.jpg"
    ],
    description: "فقرات موسيقية تبهر الحضور",
    availability: [
      { date: "2024-07-24", slots: ["مساء"] },
      { date: "2024-07-25", slots: ["صباح", "مساء"] }
    ],
    reviews: [
      {
        id: 1,
        user: {
          name: "ريم",
          image: "/placeholder.svg?height=40&width=40",
          date: "2024-06-18"
        },
        rating: 4,
        title: "جيد جداً",
        comment: "الأداء كان مميزاً والجميع أعجب به",
        helpful: 9,
        images: []
      }
    ]
  }
];
