"use client";

import { CircleCheck, CircleX, Loader2, StopCircle } from "lucide-react";

import { DataTableColumnHeader } from "@/components/dashboard-components/data-table/data-table-column-header";
import { ColumnDef } from "@tanstack/react-table";
import { ReactElement } from "react";
import { Payment } from "../../../../types";
import { DataTableRowActions } from "./data-table-row-actions";

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="رقم الحجز" />
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="الايميل" />
    ),
  },
  {
    accessorKey: "customer",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="اسم العميل" />
    ),
  },
  {
    accessorKey: "service",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="الخدمة" />
    ),
  },

  {
    accessorKey: "eventDate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="تاريخ المناسبة" />
    ),
    cell: ({ row }) => {
      const date = new Date(row.getValue("eventDate"));
      return <div>{date.toLocaleDateString("ar-EG")}</div>;
    },
  },
  {
    accessorKey: "paymentMethod",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="طريقة الدفع" />
    ),
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="المبلغ" />
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("ar-EG", {
        style: "currency",
        currency: "SAR",
      }).format(amount);
      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="الحالة" />
    ),
    cell: ({ row }) => {
      const status = row.getValue("status") as string;

      const statusIcons: Record<string, ReactElement> = {
        pending: <StopCircle className="h-4 w-4 text-yellow-500" />,
        processing: <Loader2 className="h-4 w-4 text-blue-500 animate-spin" />,
        confirmed: <CircleCheck className="h-4 w-4 text-green-500" />,
        cancelled: <CircleX className="h-4 w-4 text-red-500" />,
      };

      return statusIcons[status] || null;
    },
  },

  {
    id: "actions",
    accessorKey: "actions",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="الإجراءات" />
    ),
    cell: ({ row }) => <DataTableRowActions row={row} />,

    // return (
      // <DropdownMenu>
      //   <DropdownMenuTrigger asChild>
      //     <Button variant="ghost" className="h-8 w-8 p-0">
      //       <span className="sr-only">Open menu</span>
      //       <MoreHorizontal className="h-4 w-4" />
      //     </Button>
      //   </DropdownMenuTrigger>
      //   <DropdownMenuContent align="end">
      //     <DropdownMenuLabel>إجراءات</DropdownMenuLabel>
      //     <DropdownMenuItem
      //       onClick={() => navigator.clipboard.writeText(booking.id)}
      //     >
      //       نسخ رقم الحجز
      //     </DropdownMenuItem>
      //     <DropdownMenuSeparator />
      //     <DropdownMenuItem>عرض بيانات العميل</DropdownMenuItem>
      //     <DropdownMenuItem>تفاصيل الحجز</DropdownMenuItem>
      //   </DropdownMenuContent>
      // </DropdownMenu>
    // );
  },
];
