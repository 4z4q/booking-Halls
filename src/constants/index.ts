// القائمة الرئيسية
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'الصفحة الرئيسية' },
  { href: '/', key: 'how_hilink_work', label: 'كيف يعمل موقعنا' },
  { href: '/', key: 'services', label: 'الخدمات' },
  { href: '/', key: 'pricing', label: 'التسعير' },
  { href: '/', key: 'contact_us', label: 'اتصل بنا' },
];

// قسم المعسكر
export const PEOPLE_URL = [
  '/person-1.png',
  '/person-2.png',
  '/person-3.png',
  '/person-4.png',
];

// قسم الميزات
export const FEATURES = [
  {
    title: 'خرائط حقيقية تعمل بدون إنترنت',
    icon: '/map.svg',
    variant: 'green',
    description:
      'نوفر لك حلاً لاستخدام تطبيقنا أثناء التسلق، حيث يمكنك استخدام الخرائط دون اتصال بالإنترنت في أي وقت حتى في المناطق التي لا يوجد بها إشارة',
  },
  {
    title: 'جدولة مغامرة',
    icon: '/calendar.svg',
    variant: 'green',
    description:
      "جدول مغامرة مع أصدقائك. في العطلات، هناك العديد من العروض المثيرة من Hilink. وبذلك لن يكون هناك المزيد من النقاش",
  },
  {
    title: 'تكنولوجيا الواقع المعزز',
    icon: '/tech.svg',
    variant: 'green',
    description:
      'تستخدم التكنولوجيا الواقع المعزز كدليل لك أثناء السير في الغابة حتى قمة الجبل. مدعومة بأحدث التقنيات دون الحاجة إلى اتصال بالإنترنت',
  },
  {
    title: 'مواقع جديدة كل شهر',
    icon: '/location.svg',
    variant: 'orange',
    description:
      'الكثير من المواقع الجديدة كل شهر، لأن لدينا مجتمعًا عالميًا من المتسلقين الذين يشاركون أفضل تجاربهم في التسلق',
  },
];

// قسم التذييل
export const FOOTER_LINKS = [
  {
    title: 'المزيد',
    links: [
      'عن عرسك علينا',
      'البيانات الصحفية',
      'البيئة',
      'الوظائف',
      'سياسة الخصوصية',
      'اتصل بنا',
    ],
  },
  {
    title: 'مجتمعنا',
    links: ['تواصل معنا', 'تنزه عرسك علينا', 'مستقبل عرسك علينا'],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: 'اتصل بنا',
  links: [
    { label: 'رقم الجوال', value: '123-456-7890' },
    { label: 'البريد الإلكتروني', value: 'hilink@akinthil.com' },
  ],
};

export const SOCIALS = {
  title: 'وسائل التواصل الاجتماعي',
  links: [
    '/facebook.svg',
    '/instagram.svg',
    '/twitter.svg',
    '/youtube.svg',
    '/wordpress.svg',
  ],
};