import { Input } from "@/components/ui/input";
import { useState } from "react";

interface Props {
  price: number;
  setPrice: (price: number) => void;
}

export const PriceRangeFilter = ({ price, setPrice }: Props) => {

  return (
    <div className="rounded-lg border p-4 space-y-4">
      <h3 className="font-medium">نطاق الأسعار</h3>
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>0 ريال</span>
        <span>2000 ريال</span>
      </div>
      <div className="flex items-center "> 
        <Input
          type="number"
          placeholder="إلى"
          className="h-8"
          onChange={(e) => setPrice(Number(e.target.value))}
        />
      </div>
    </div>
  );
};
