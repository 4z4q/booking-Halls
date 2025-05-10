import { Row } from "@tanstack/react-table";
import { Edit, MoreHorizontal, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { redirect } from "next/navigation";

interface DataTableRowActionsProps {
  row: Row<ServicesType>;
}

export function DataTableRowActions({ row }: DataTableRowActionsProps) {
  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="data-[state=open]:bg-muted flex h-8 w-8 p-0"
          >
            <MoreHorizontal className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center" className="w-[150px]">
          <DropdownMenuItem
            onClick={() => {
              //   setCurrentRow(row.original);
              console.log("edit");
              redirect(`/dashboard/services/edit/${row.original.id}`);
            }}
          >
            تعديل
            <DropdownMenuShortcut className="m-0 mr-auto">
              <Edit size={16} />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => {
              //   setCurrentRow(row.original);
              console.log("delete");
            }}
            className="text-red-500!"
          >
            حذف
            <DropdownMenuShortcut className="m-0 mr-auto">
              <Trash size={16} />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
