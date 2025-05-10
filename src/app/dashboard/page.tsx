import AppPieChart from "@/components/AppPieChart";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bell, ListCheck, MessageCircle, Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const page = async () => {
  return (
    <div className="container w-full py-6">
      <div className="flex flex-col gap-4">
        <div className="mb-2 flex flex-wrap items-center justify-between space-y-2 gap-x-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              مرحبًا بك في لوحة التحكم 👋
            </h2>
          </div>
          <Button className="space-x-1">
            <span>أضافة خدمة</span> <Plus size={18} />
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* إجمالي الحجوزات */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                إجمالي الحجوزات
              </CardTitle>
              <ListCheck className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24 حجز</div>
              <p className="text-muted-foreground text-xs">
                +5 حجوزات هذا الأسبوع
              </p>
            </CardContent>
          </Card>

          {/* تقييمات العملاء */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                تقييمات العملاء
              </CardTitle>
              <MessageCircle className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.8 / 5</div>
              <p className="text-muted-foreground text-xs">
                بناءً على 132 تقييم
              </p>
            </CardContent>
          </Card>

          {/* عدد الخدمات المنشورة */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">خدماتك</CardTitle>
              <ListCheck className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3 خدمات</div>
              <p className="text-muted-foreground text-xs">
                خدمة جديدة مضافة مؤخرًا
              </p>
            </CardContent>
          </Card>

          {/* تنبيهات جديدة */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">تنبيهات</CardTitle>
              <Bell className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2 إشعار</div>
              <p className="text-muted-foreground text-xs">
                تنبيهات لم تُقرأ بعد
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 grid-cols-1 ">
          <div className="col-span-1">
            <AppPieChart />
          </div>

          <Card className="col-span-1 ">
            <CardHeader>
              <CardTitle>اخر الطلبات</CardTitle>
              <CardDescription>تم طلب اكثر من 20 طلب خلال هذا الشهر</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentSales />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default page;

export function RecentSales() {
  return (
    <div className="space-y-8 text-right" dir="rtl">
      <div className="flex items-center gap-4">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="flex flex-1 flex-wrap items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm leading-none font-medium">أوليفيا مارتن</p>
            <p className="text-muted-foreground text-sm">
              olivia.martin@email.com
            </p>
          </div>
          <div className="font-medium">+‏$1,999.00</div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
        <div className="flex flex-1 flex-wrap items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm leading-none font-medium">جاكسون لي</p>
            <p className="text-muted-foreground text-sm">
              jackson.lee@email.com
            </p>
          </div>
          <div className="font-medium">$39.00</div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/03.png" alt="Avatar" />
          <AvatarFallback>IN</AvatarFallback>
        </Avatar>
        <div className="flex flex-1 flex-wrap items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm leading-none font-medium">إيزابيلا نجوين</p>
            <p className="text-muted-foreground text-sm">
              isabella.nguyen@email.com
            </p>
          </div>
          <div className="font-medium">+‏$299.00</div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/04.png" alt="Avatar" />
          <AvatarFallback>WK</AvatarFallback>
        </Avatar>
        <div className="flex flex-1 flex-wrap items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm leading-none font-medium">ويليام كيم</p>
            <p className="text-muted-foreground text-sm">will@email.com</p>
          </div>
          <div className="font-medium">+‏$99.00</div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/05.png" alt="Avatar" />
          <AvatarFallback>SD</AvatarFallback>
        </Avatar>
        <div className="flex flex-1 flex-wrap items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm leading-none font-medium">صوفيا ديفيس</p>
            <p className="text-muted-foreground text-sm">
              sofia.davis@email.com
            </p>
          </div>
          <div className="font-medium">+‏$39.00</div>
        </div>
      </div>
    </div>
  );
}
