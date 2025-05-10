"use client";

import { useState } from "react";
import { AlertCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";

interface CancelBookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  bookingId: string;
  artistName: string;
}

export function CancelBookingDialog({
  open,
  onOpenChange,
  artistName,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  bookingId,
}: CancelBookingDialogProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleCancel = async () => {
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsLoading(false);
    onOpenChange(false);

    toast(" تم إلغاء الحجز", {
      description: `تم إلغاء حجزك مع ${artistName} .`,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] text-right">
        <DialogHeader className="mt-3">
          <DialogTitle className="text-right">إلغاء الحجز</DialogTitle>
          <DialogDescription className="text-right">
            هل أنت متأكد أنك تريد إلغاء الحجز مع {artistName}؟
          </DialogDescription>
        </DialogHeader>

        <DialogDescription className="text-destructive border border-destructive/30 p-4 rounded-2xl relative">
          <AlertCircle className="h-4 w-4 absolute -top-2 left-3 bg-white" />
          تحذير : إلغاء حجز {artistName} قد يخصم رسوم حسب سياسة الإلغاء. لا يمكن
          التراجع عن هذا الإجراء.
        </DialogDescription>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            الاحتفاظ بالحجز
          </Button>
          <Button
            onClick={handleCancel}
            disabled={isLoading}
            className="bg-destructive/90 hover:bg-destructive duration-300 transition-all"
          >
            {isLoading ? "جاري الإلغاء..." : "تأكيد الإلغاء"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
