import type { Metadata } from "next";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookingCard } from "@/components/website/booking-component/booking-card";
import { bookings } from "@/constants/services-data";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "حجوزاتي - لحظات",
  description: "عرض وإدارة جميع حجوزاتك في مكان واحد",
};

export default async function MyBookingsPage() {
  const session = await auth();
  if (!session) redirect("/sign-in");
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">حجوزاتي</h1>
        <p className="text-muted-foreground">
          عرض وإدارة جميع حجوزاتك في مكان واحد
        </p>
      </div>

      <Tabs defaultValue="all" className="mb-8" dir="rtl">
        <TabsList>
          <TabsTrigger value="all">جميع الحجوزات</TabsTrigger>
          <TabsTrigger value="upcoming">قيد المراجعة</TabsTrigger>
          <TabsTrigger value="past">المكتملة</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {bookings.map((booking) => (
              <BookingCard key={booking.id} booking={booking} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="upcoming" className="mt-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {bookings
              .filter((b) => b.status === "confirmed" || b.status === "pending")
              .map((booking) => (
                <BookingCard key={booking.id} booking={booking} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="past" className="mt-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {bookings
              .filter(
                (b) => b.status === "completed" || b.status === "cancelled"
              )
              .map((booking) => (
                <BookingCard key={booking.id} booking={booking} />
              ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex items-center justify-between border-t pt-6">
        <p className="text-sm text-muted-foreground">
          عرض {bookings.length} حجز
        </p>
        <Button variant="outline">تحميل السجل</Button>
      </div>
    </div>
  );
}
