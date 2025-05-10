import { Table } from "@tanstack/react-table";
import { Input } from "@/components/ui/input";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  search: string;
}

export function DataTableToolbar<TData>({
  table,
  search,
}: DataTableToolbarProps<TData>) {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex flex-1 flex-col-reverse items-start gap-y-2 sm:flex-row sm:items-center sm:space-x-2">
          <Input
            placeholder={`${
              search === "email" ? "بحث بالبريد الألكتروني" : "بحث بالاسم"
            }`}
            value={
              (table
                .getColumn(`${search === "email" ? "email" : "name"}`)
                ?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table
                .getColumn(`${search === "email" ? "email" : "name"}`)
                ?.setFilterValue(event.target.value)
            }
            className="h-8 w-[150px] lg:w-[250px]"
          />
          {/* <div className="flex gap-x-2">
            {table.getColumn("status") && (
              <DataTableFacetedFilter
                column={table.getColumn("status")}
                title="الحالة"
                options={statuses}
              />
            )}
            {table.getColumn("priority") && (
              <DataTableFacetedFilter
                column={table.getColumn("priority")}
                title="Priority"
                options={priorities}
              />
            )}
          </div> */}
        </div>
      </div>
    </>
  );
}

export default DataTableToolbar;
