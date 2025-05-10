import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Main Content */}
      <main className="container flex flex-1 flex-col items-center justify-center py-12">
        <div className="relative mb-8 h-64 w-64 md:h-80 md:w-80">
          <div className="absolute inset-0 animate-pulse rounded-full bg-primary/20"></div>
          <div className="absolute inset-4 animate-pulse rounded-full bg-primary/30 animation-delay-150"></div>
          <div className="absolute inset-8 animate-pulse rounded-full bg-primary/40 animation-delay-300"></div>
          <div className="absolute inset-12 animate-pulse rounded-full bg-primary/50 animation-delay-450"></div>
          <div className="absolute inset-16 animate-pulse rounded-full bg-primary/60 animation-delay-600"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <span className="block text-7xl font-bold text-white md:text-8xl">
                404
              </span>
              <span className="mt-2 block text-xl font-semibold text-white">
                Page not found
              </span>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-md text-center">
          <h1 className="mb-4 text-3xl font-bold">
            عذرًا! يبدو أن هذه الصفحة غير موجودة
          </h1>
          <p className="mb-8 text-muted-foreground">
            الصفحة التي تبحث عنها غير موجودة أو تم نقلها إلى مكان آخر. لا تقلق،
            حتى أفضل الأنظمة قد تتعطل أحيانًا.
          </p>

          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <Link href="/">العودة إلى الصفحة الرئيسية</Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link href="/halls">استكشاف القاعات</Link>
            </Button>
          </div>

          <div className="relative mx-auto max-w-sm">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="ابحث عن ما كنت تبحث عنه..."
                className="pl-10 pr-4"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="rounded-lg border bg-card p-4 shadow-sm transition-all hover:shadow-md">
            <h3 className="mb-2 font-semibold">التقييمات الشائعة</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-primary hover:underline">
                  أفضل قاعات حفلات الزفاف
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary hover:underline">
                  أكثر القاعات حجزًا لهذا العام
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary hover:underline">
                  تقييمات العملاء حول خدمات القاعات
                </Link>
              </li>
            </ul>
          </div>
          <div className="rounded-lg border bg-card p-4 shadow-sm transition-all hover:shadow-md">
            <h3 className="mb-2 font-semibold">أنواع القاعات</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-primary hover:underline">
                  قاعات الزفاف
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary hover:underline">
                  قاعات المؤتمرات والاجتماعات
                </Link>
              </li>
              <li>
                <Link href="#" className="text-primary hover:underline">
                  القاعات الخارجية والمفتوحة
                </Link>
              </li>
            </ul>
          </div>
          <div className="rounded-lg border bg-card p-4 shadow-sm transition-all hover:shadow-md">
            <h3 className="mb-2 font-semibold">تحتاج إلى مساعدة؟</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              لم تجد القاعة المناسبة؟ فريق الدعم لدينا جاهز لمساعدتك.
            </p>
            <Button variant="outline" size="sm" className="w-full">
              <Link href="/contact">تواصل مع الدعم</Link>
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background py-6">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-muted-foreground">
              لحظات . جميع الحقوق محفوظة. © {new Date().getFullYear()}
            </p>
            <div className="flex gap-4">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                الرئيسية
              </Link>
              <Link
                href="/halls"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                القاعات
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                تواصل معنا
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
