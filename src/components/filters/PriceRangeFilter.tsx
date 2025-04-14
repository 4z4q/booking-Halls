import { Input } from "@/components/ui/input";
import { useState } from "react";

interface Props {
  price: number;
  setPrice: (price: number) => void;
}

export const PriceRangeFilter = ({ price, setPrice }: Props) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  
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
          placeholder="من"
          className="h-8"
          onChange={(e) => setMinPrice(Number(e.target.value))}
        />
        <span className="text-muted-foreground mx-1">-</span>
        <Input
          type="number"
          placeholder="إلى"
          className="h-8"
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
      </div>
    </div>
  );
};
