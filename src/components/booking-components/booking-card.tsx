"use client";

import { useState } from "react";
import Image from "next/image";
import { CalendarDays, Clock, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CancelBookingDialog } from "./cancel-booking-dialog";
import { ViewDetailsDialog } from "./view-details-dialog";

interface Booking {
  id: string;
  artist: string;
  date: string;
  time: string;
  location: string;
  price: string;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  image: string;
}

interface BookingCardProps {
  booking: Booking;
}

export function BookingCard({ booking }: BookingCardProps) {
  const [showCancelDialog, setShowCancelDialog] = useState(false);
  const [showDetailsDialog, setShowDetailsDialog] = useState(false);

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

  const canCancel =
    booking.status === "pending" || booking.status === "confirmed";

  return (
    <>
      <Card className="overflow-hidden">
        <CardHeader className="pb-3">
          <div className="flex justify-between items-start">
            <CardTitle className="text-xl">{booking.artist}</CardTitle>
            <Badge className={getStatusColor(booking.status)}>
              {getStatusText(booking.status)}
            </Badge>
          </div>
          <CardDescription>حجز رقم #{booking.id}</CardDescription>
        </CardHeader>
        <CardContent className="pb-3">
          <div className="flex gap-4 mb-4">
            <div className="relative h-20 w-20 rounded-md overflow-hidden">
              <Image
                src={booking.image || "/placeholder.svg"}
                alt={booking.artist}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <CalendarDays className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>{booking.date}</span>
              </div>
              <div className="flex items-center text-sm">
                <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>{booking.time}</span>
              </div>
              <div className="flex items-center text-sm">
                <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                <span>{booking.location}</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="font-medium">السعر:</div>
            <div className="font-bold">{booking.price}</div>
          </div>
        </CardContent>
        <CardFooter className="flex gap-2 pt-3">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => setShowDetailsDialog(true)}
          >
            عرض التفاصيل
          </Button>
          {canCancel && (
            <Button
              className="flex-1 bg-destructive/90 hover:bg-destructive duration-300 transition-all"
              onClick={() => setShowCancelDialog(true)}
            >
              إلغاء
            </Button>
          )}
        </CardFooter>
      </Card>

      <CancelBookingDialog
        open={showCancelDialog}
        onOpenChange={setShowCancelDialog}
        bookingId={booking.id}
        artistName={booking.artist}
      />

      <ViewDetailsDialog
        open={showDetailsDialog}
        onOpenChange={setShowDetailsDialog}
        booking={booking}
      />
    </>
  );
}
