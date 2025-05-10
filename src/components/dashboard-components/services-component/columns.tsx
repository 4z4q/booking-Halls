"use client";

import { DataTableColumnHeader } from "@/components/dashboard-components/shared/data-table-column-header";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableRowActions } from "./data-table-row-actions";

export const columns: ColumnDef<ServicesType>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="رقم الحجز" />
    ),
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="الاسم" />
    ),
  },
  {
    accessorKey: "location",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title=" الموقع" />
    ),
  },

  {
    accessorKey: "price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="المبلغ" />
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("ar-EG", {
        style: "currency",
        currency: "SAR",
      }).format(amount);
      return <div className="text-right font-medium">{formatted}</div>;
    },
  },

  {
    id: "action",
    cell: DataTableRowActions,
  },
];
