"use client";

import Image from "next/image";
import { CalendarDays, Clock, Download, MapPin, User } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

interface ViewDetailsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  booking: Booking;
}

export function ViewDetailsDialog({
  open,
  onOpenChange,
  booking,
}: ViewDetailsDialogProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100/80";
      case "confirmed":
        return "bg-green-100 text-green-800 hover:bg-green-100/80";
      case "completed":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100/80";
      case "cancelled":
        return "bg-red-100 text-red-800 hover:bg-red-100/80";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100/80";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "pending":
        return "بانتظار التأكيد";
      case "confirmed":
        return "تم التأكيد";
      case "completed":
        return "تم التنفيذ";
      case "cancelled":
        return "تم الإلغاء";
      default:
        return status;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] duration-300 transition-all">
        <DialogHeader>
          <DialogTitle>تفاصيل الحجز</DialogTitle>
          <DialogDescription>معلومات كاملة عن الحجز الخاص بك</DialogDescription>
        </DialogHeader>

        <div className="flex items-center gap-4 py-2">
          <div className="relative h-20 w-20 rounded-md overflow-hidden">
            <Image
              src={booking.image || "/placeholder.svg"}
              alt={booking.artist}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg">{booking.artist}</h3>
            <p className="text-sm text-muted-foreground">
              رقم الحجز #{booking.id}
            </p>
            <Badge className={`mt-1 ${getStatusColor(booking.status)}`}>
              {getStatusText(booking.status)}
            </Badge>
          </div>
        </div>

        <Separator />

        <div className="space-y-3">
          <div className="flex items-center">
            <CalendarDays className="mr-2 h-4 w-4 text-muted-foreground" />
            <span className="font-medium mr-2">التاريخ:</span>
            <span>{booking.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
            <span className="font-medium mr-2">الوقت:</span>
            <span>{booking.time}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
            <span className="font-medium mr-2">الموقع:</span>
            <span>{booking.location}</span>
          </div>
          <div className="flex items-center">
            <User className="mr-2 h-4 w-4 text-muted-foreground" />
            <span className="font-medium mr-2">تم الحجز بواسطة:</span>
            <span>Mohammed Ahmed</span>
          </div>
        </div>

        <Separator />

        <div className="flex justify-between items-center font-bold">
          <div>السعر الإجمالي:</div>
          <div>{booking.price}</div>
        </div>

        <DialogFooter className="gap-2 sm:gap-0">
          <Button variant="outline" className="w-full sm:w-auto">
            <Download className="ml-2 h-4 w-4" />
            تحميل التذكرة
          </Button>
          {booking.status === "completed" && (
            <Button className="w-full mr-2 sm:w-auto">تقييم التجربة</Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
