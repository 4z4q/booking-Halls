import Hero from "@/components/Hero";

/**
 * Home page component that includes structured data (JSON-LD)
 * for SEO enhancement and renders the main Hero section.
 *
 * This component injects an Organization schema that describes
 * the "لحظات" booking platform, helping search engines understand
 * its services and presence in Ibb, Yemen.
 */
export default function Home() {
  /**
   * JSON-LD structured data conforming to Schema.org's Organization type.
   * This improves SEO by providing detailed information about the business,
   * its location, services, contact info, and online presence.
   */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "لحظات",
    alternateName: "اب، إب، لحظات حجوزات، لحظات للمناسبات",
    url: "https://booking-halls.vercel.app",
    // Uncomment and set actual logo URL when available
    // logo: "https://booking-halls.vercel.app/logo.png",
    description:
      "منصة لحظات لحجوزات المناسبات في إب (اب)، اليمن. احجز قاعات أفراح، تصوير أعراس، دي جي، زفات، ديكور قاعات، طباعة كروت زفاف، فساتين وملابس مناسبات، وفنانين بكل سهولة واحترافية.",
    telephone: "+967-780842038",
    address: {
      "@type": "PostalAddress",
      addressLocality: "إب",
      addressRegion: "إب",
      addressCountry: "YE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 13.9733,
      longitude: 44.1746,
    },
    priceRange: "$$",
    areaServed: ["YE", "Ibb", "Ibb Governorate"],
    sameAs: [
      "https://www.facebook.com/share/18dcJyYT5W/",
      "https://www.instagram.com/4z4_q",
      "https://wa.me/967780842038",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "حجز قاعات أفراح",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "تصوير أعراس",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "ديكور مناسبات",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "طباعة دعوات وكروت",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: " طلب زفات وفنانين",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "ملابس وفساتين للمناسبات",
        },
      },
    ],
  };

  return (
    <>
      {/* Injecting structured data into the page for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Main landing section */}
      <Hero />
    </>
  );
}
