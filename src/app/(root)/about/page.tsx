import Image from "next/image";
import type { Metadata } from "next";
import { CheckCircle, Users, Award } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "من نحن - عرسك علينا",
  description:
    "تعرف على منصة عرسك علينا وكيف نساعد في تنظيم المناسبات والحفلات",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-purple-600 to-blue-500 text-white w-screen  left-1/2 right-1/2 mx-[-50vw]">
        <div className="absolute inset-0 bg-grid-white/[0.2] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        <div className="container px-[16px] relative py-12 md:py-20 text-center ">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            من نحن
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            منصة عرسك علينا هي وجهتك الأولى لتنظيم المناسبات والحفلات بكل سهولة
            وإتقان
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="container py-10 md:py-16 px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-right order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
              قصتنا
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6">
              بدأت رحلتنا في عام 2025 عندما لاحظنا الصعوبات التي يواجهها الأشخاص
              في تنظيم مناسباتهم الخاصة. كان العثور على القاعات المناسبة، ومزودي
              الخدمات الموثوقين، والتنسيق بينهم يستغرق وقتًا طويلاً ومجهودًا
              كبيرًا.
            </p>
            <p className="text-base md:text-lg text-muted-foreground">
              لذلك، قررنا إنشاء منصة تجمع كل ما يحتاجه العملاء لتنظيم مناسباتهم
              في مكان واحد. هدفنا هو تبسيط عملية تنظيم المناسبات وجعلها تجربة
              ممتعة وخالية من التوتر.
            </p>
          </div>
          <div className="relative h-[250px] md:h-[400px] rounded-xl overflow-hidden order-1 md:order-2">
            <Image
              src="/Untitled-1.jpg"
              alt="قصة عرسك علينا"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-muted py-10 md:py-16 w-screen relative left-1/2 right-1/2 mx-[-50vw]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
              مهمتنا
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              نسعى لتوفير منصة متكاملة تربط بين أصحاب المناسبات ومزودي الخدمات،
              مما يسهل عملية تنظيم المناسبات ويضمن تجربة استثنائية للجميع.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-background rounded-xl p-5 md:p-6 shadow-sm text-right">
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4 mx-auto md:mr-0 md:ml-auto">
                <CheckCircle className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
                الجودة
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                نحرص على اختيار مزودي خدمات ذوي جودة عالية وسمعة طيبة لضمان رضا
                عملائنا.
              </p>
            </div>

            <div className="bg-background rounded-xl p-5 md:p-6 shadow-sm text-right">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto md:mr-0 md:ml-auto">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
                سهولة الاستخدام
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                نقدم تجربة مستخدم سلسة وبسيطة تمكن العملاء من تنظيم مناسباتهم
                بكل سهولة.
              </p>
            </div>

            <div className="bg-background rounded-xl p-5 md:p-6 shadow-sm text-right">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4 mx-auto md:mr-0 md:ml-auto">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
                التميز
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                نسعى دائمًا للتميز في كل ما نقدمه، من خلال الابتكار المستمر
                وتحسين خدماتنا.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container py-10 md:py-16 px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
            كيف تعمل المنصة
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            تقدم منصتنا تجربة سلسة وبسيطة لتنظيم المناسبات من البداية إلى
            النهاية
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="text-center">
            <div className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl md:text-2xl font-bold mx-auto mb-3 md:mb-4">
              1
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
              اختر نوع المناسبة
            </h3>
            <p className="text-sm md:text-base text-muted-foreground">
              حدد نوع المناسبة التي ترغب في تنظيمها، سواء كانت حفل زفاف، مؤتمر،
              أو حفلة خاصة.
            </p>
          </div>

          <div className="text-center">
            <div className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl md:text-2xl font-bold mx-auto mb-3 md:mb-4">
              2
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
              استعرض الخدمات
            </h3>
            <p className="text-sm md:text-base text-muted-foreground">
              تصفح مجموعة متنوعة من القاعات، خدمات الديكور، التصوير، والمزيد.
            </p>
          </div>

          <div className="text-center">
            <div className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl md:text-2xl font-bold mx-auto mb-3 md:mb-4">
              3
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
              احجز واختر
            </h3>
            <p className="text-sm md:text-base text-muted-foreground">
              قم بحجز الخدمات التي تناسب احتياجاتك وميزانيتك بسهولة.
            </p>
          </div>

          <div className="text-center">
            <div className="h-14 w-14 md:h-16 md:w-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl md:text-2xl font-bold mx-auto mb-3 md:mb-4">
              4
            </div>
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
              استمتع بمناسبتك
            </h3>
            <p className="text-sm md:text-base text-muted-foreground">
              استرخِ واستمتع بمناسبتك بينما نتولى التنسيق مع مزودي الخدمات.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-16 w-screen relative left-1/2 right-1/2 mx-[-50vw]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">+5,000</div>
              <p className="text-lg">مناسبة ناجحة</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">+500</div>
              <p className="text-lg">مزود خدمة</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">+10,000</div>
              <p className="text-lg">عميل سعيد</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="container py-10 md:py-16 px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
            فريقنا
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            يتكون فريقنا من خبراء في مجال تنظيم المناسبات وتطوير المنصات الرقمية
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[
            { name: " محمد جميل", role: "المؤسس والرئيس التنفيذي" },
            { name: "عاطف محمد", role: "مدير العمليات" },
            { name: "صقر الخولاني", role: "مدير التسويق" },
            { name: "نورة الأحمد", role: "مديرة خدمة العملاء" },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 rounded-full overflow-hidden mx-auto mb-3 md:mb-4">
                <Image
                  src={`/person.jpg${index + 1}`}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-base md:text-xl font-semibold mb-1">
                {member.name}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted py-10 md:py-16 w-screen relative left-1/2 right-1/2 mx-[-50vw]">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            ابدأ في تنظيم مناسبتك اليوم
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-8">
            انضم إلى آلاف العملاء السعداء الذين استفادوا من خدماتنا لتنظيم
            مناسبات لا تُنسى
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-blue-500 px-6 md:px-8 text-sm font-medium text-white shadow transition-colors hover:from-purple-700 hover:to-blue-600"
            >
              استعرض الخدمات
            </Link>
            <a
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 md:px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              تواصل معنا
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
