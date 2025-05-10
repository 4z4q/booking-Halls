export const NAV_LINKS = [
  { href: "/", key: "home", label: "الصفحة الرئيسية" },
  { href: "/services", key: "services", label: "الخدمات" },
  { href: "/about", key: "about", label: "حول" },
  { href: "/contact", key: "contact_us", label: "الدعم" },
];

export const PEOPLE_URL = [
  "/person.jpg",
  "/person.jpg",
  "/person.jpg",
  "/person.jpg",
];

export const FEATURES = [
  {
    title: "خرائط حقيقية تعمل بدون إنترنت",
    icon: "/map.svg",
    variant: "green",
    description:
      "نوفر لك حلاً لاستخدام تطبيقنا أثناء التسلق، حيث يمكنك استخدام الخرائط دون اتصال بالإنترنت في أي وقت حتى في المناطق التي لا يوجد بها إشارة",
  },
  {
    title: "جدولة مغامرة",
    icon: "/calendar.svg",
    variant: "green",
    description:
      "جدول مغامرة مع أصدقائك. في العطلات، هناك العديد من العروض المثيرة من Hilink. وبذلك لن يكون هناك المزيد من النقاش",
  },
  {
    title: "تكنولوجيا الواقع المعزز",
    icon: "/tech.svg",
    variant: "green",
    description:
      "تستخدم التكنولوجيا الواقع المعزز كدليل لك أثناء السير في الغابة حتى قمة الجبل. مدعومة بأحدث التقنيات دون الحاجة إلى اتصال بالإنترنت",
  },
  {
    title: "مواقع جديدة كل شهر",
    icon: "/location.svg",
    variant: "orange",
    description:
      "الكثير من المواقع الجديدة كل شهر، لأن لدينا مجتمعًا عالميًا من المتسلقين الذين يشاركون أفضل تجاربهم في التسلق",
  },
];

export const FOOTER_LINKS = [
  {
    title: "المزيد",
    links: [
      "عن عرسك علينا",
      "البيانات الصحفية",
      "البيئة",
      "الوظائف",
      "سياسة الخصوصية",
      "اتصل بنا",
    ],
  },
  {
    title: "مجتمعنا",
    links: ["تواصل معنا", "تنزه عرسك علينا", "مستقبل عرسك علينا"],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "اتصل بنا",
  links: [
    { label: "رقم الجوال", value: "123-456-7890" },
    { label: "البريد الإلكتروني", value: "hilink@akinthil.com" },
  ],
};

export const SOCIALS = {
  title: "وسائل التواصل الاجتماعي",
  links: [
    "/facebook.svg",
    "/instagram.svg",
    "/twitter.svg",
    "/youtube.svg",
    "/wordpress.svg",
  ],
};

export const FIELD_NAMES = {
  firstName: "أسمك الاول",
  lastName: "اسمك الثاني",
  role: "نوع المستخدم",
  email: "البريد الإلكتروني",
  password: "كلمة المرور",
};

export const FIELD_TYPES = {
  firstName: "text",
  email: "email",
  lastName: "text",
  password: "password",
  role: "select",
};

export const LOCATIONS = [
  "الرياض",
  "جدة",
  "الدمام",
  "مكة",
  "المدينة",
  // "وسط المدينة",
  // "المنطقة التجارية",
  // "حي النخيل",
  // "الحي المالي",
  // "حي الورود",
  // "المدينة التقنية",
  // "شارع العليا",
  // "شارع الأمير سلطان",
  // "حي المزروعية",
  // "شارع التحلية",
  // "حي السفارات",
  // "حي العزيزية",
  // "شارع الملك فهد",
  // "حي النعيم",
  // "شارع سلطانة",
  // "حي العليا",
  // "حي الروضة",
  // "حي الصفا",
  // "حي السليمانية"
];

export const AMENITIES = [
  "إنترنت مجاني",
  "بوفيه مفتوح",
  "نظام صوتي",
  "جهاز عرض (بروجيكتور)",
  "مواقف سيارات",
  "خدمة الضيافة",
];

export const CAPACITIES = [
  { label: "حتى 50 شخصًا", value: "50" },
  { label: "حتى 100 شخص", value: "100" },
  { label: "حتى 200 شخص", value: "200" },
  { label: "حتى 500 شخص", value: "500" },
  { label: "أكثر من 500 شخص", value: "1000" },
];

export const FIELD_NAMES_VENDOR = {
  businessName: "اسم النشاط التجاري",
  phoneNumber: "رقم الهاتف",
  location: "الموقع",
  serviceType: "نوع الخدمة",
  documentUrl: "رابط الوثيقة",
};

export const FIELD_TYPES_VENDOR = {
  businessName: "text",
  phoneNumber: "text",
  location: "text",
  serviceType: "text",
  documentUrl: "url",
};
