import Hero from "@/components/Hero";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "لحظات",
    description:
      "منصة لحظات لحجوزات المناسبات في إب، اليمن. احجز قاعات أفراح، تصوير، ديكور والمزيد بكل سهولة واحترافية.",
    url: "https://booking-halls.vercel.app",
    telephone: "+967-780842038", // ضع رقم التواصل الحقيقي عند توفره
    address: {
      "@type": "PostalAddress",
      addressLocality: "إب",
      addressRegion: "إب",
      addressCountry: "YE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 13.9733, // الموقع التقريبي لمحافظة إب
      longitude: 44.1746,
    },
    priceRange: "$$",
    areaServed: "YE",
    sameAs: [], // يمكنك لاحقاً إضافة روابط صفحات السوشيال مثل فيسبوك أو انستغرام
  };

  return (
    <>
      {/* كود JSON-LD لمحركات البحث */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* باقي محتوى الصفحة */}
      <Hero />
    </>
  );
}
