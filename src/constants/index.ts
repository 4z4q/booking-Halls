// القائمة الرئيسية
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'الصفحة الرئيسية' },
  { href: '/about', key: 'about', label: 'حول' },
  { href: '#trending-reviews', key: 'services', label: 'الخدمات' },
  { href: '/', key: 'support', label: 'الدعم' },
  { href: '/contact', key: 'contact_us', label: 'تواصل معنا' },
];

// قسم المعسكر
export const PEOPLE_URL = [
  '/person.jpg',
  '/person.jpg',
  '/person.jpg',
  '/person.jpg',
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