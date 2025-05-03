"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const bookings = [
  {
    id: "BKG001",
    customer: "محمد أحمد",
    amount: "$250.00",
    status: "pending",
    method: "بطاقة ائتمان",
  },
  {
    id: "BKG002",
    customer: "سارة علي",
    amount: "$150.00",
    status: "approved",
    method: "PayPal",
  },
  {
    id: "BKG003",
    customer: "أحمد عبد الله",
    amount: "$300.00",
    status: "rejected",
    method: "تحويل بنكي",
  },
  {
    id: "BKG001",
    customer: "محمد أحمد",
    amount: "$250.00",
    status: "pending",
    method: "بطاقة ائتمان",
  },
  {
    id: "BKG002",
    customer: "سارة علي",
    amount: "$150.00",
    status: "approved",
    method: "PayPal",
  },
  {
    id: "BKG003",
    customer: "أحمد عبد الله",
    amount: "$300.00",
    status: "rejected",
    method: "تحويل بنكي",
  },
  {
    id: "BKG001",
    customer: "محمد أحمد",
    amount: "$250.00",
    status: "pending",
    method: "بطاقة ائتمان",
  },
  {
    id: "BKG002",
    customer: "سارة علي",
    amount: "$150.00",
    status: "approved",
    method: "PayPal",
  },
  {
    id: "BKG003",
    customer: "أحمد عبد الله",
    amount: "$300.00",
    status: "rejected",
    method: "تحويل بنكي",
  },
];

const statusColorMap: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-800",
  approved: "bg-green-100 text-green-800",
  rejected: "bg-red-100 text-red-800",
  canceled: "bg-gray-200 text-gray-700",
};

export default function BookingTable() {
  return (
    <div className="border rounded-xl bg-white p-6 shadow-sm">
      <Table>
        <TableCaption className="my-4 text-center text-muted-foreground">
          قائمة الحجوزات الحالية
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-right">رقم الحجز</TableHead>
            <TableHead className="text-right">العميل</TableHead>
            <TableHead className="text-right">طريقة الدفع</TableHead>
            <TableHead className="text-right">المبلغ</TableHead>
            <TableHead className="text-right">الحالة</TableHead>
            <TableHead className="text-center">الإجراء</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings.map((booking) => (
            <TableRow key={booking.id}>
              <TableCell className="text-right">{booking.id}</TableCell>
              <TableCell className="text-right">{booking.customer}</TableCell>
              <TableCell className="text-right">{booking.method}</TableCell>
              <TableCell className="text-right">{booking.amount}</TableCell>
              <TableCell className="text-right">
                <Badge
                  className={cn(
                    "px-2 py-1 rounded",
                    statusColorMap[booking.status]
                  )}
                >
                  {
                    {
                      pending: "قيد المراجعة",
                      approved: "مقبولة",
                      rejected: "مرفوضة",
                      canceled: "ملغاة",
                    }[booking.status]
                  }
                </Badge>
              </TableCell>
              <TableCell className="text-center">
                <Button variant="outline" size="sm">
                  تعديل
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3} className="font-bold text-right">
              الإجمالي
            </TableCell>
            <TableCell colSpan={3} className=" font-medium">
              $700.00
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
