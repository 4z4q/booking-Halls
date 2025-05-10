"use client";
import { Row } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useDialogContext } from "@/context/tasks-context";
import { MoreHorizontal } from "lucide-react";
import { Payment, paymentSchema } from "@/lib/validation";

export function DataTableRowActions({ row }: { row: Row<Payment> }) {
  const dataRow = paymentSchema.parse(row.original);
  const { setOpen, setCurrentRow } = useDialogContext();
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>إجراءات</DropdownMenuLabel>
        <DropdownMenuItem
          onClick={() => navigator.clipboard.writeText(dataRow.id)}
        >
          نسخ رقم الحجز
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            console.log("البيانات:", dataRow);
            setCurrentRow(dataRow); // مؤقتًا بدون schema
            setOpen("update");
          }}
        >
          عرض بيانات العميل
        </DropdownMenuItem>
        <DropdownMenuItem>تفاصيل الحجز</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
