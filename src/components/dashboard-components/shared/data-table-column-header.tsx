import { ArrowDownIcon, ArrowUpIcon, SortAscIcon } from "lucide-react";
import { Column } from "@tanstack/react-table";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>;
  }

  return (
    <Button
      variant={"ghost"}
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      className="flex items-center space-x-2"
    >
      {title}
      {column.getIsSorted() === "desc" ? (
        <ArrowDownIcon className="ml-2 h-4 w-4" />
      ) : column.getIsSorted() === "asc" ? (
        <ArrowUpIcon className="ml-2 h-4 w-4" />
      ) : (
        <SortAscIcon className="ml-2 h-4 w-4" />
      )}
    </Button>
  );
}
