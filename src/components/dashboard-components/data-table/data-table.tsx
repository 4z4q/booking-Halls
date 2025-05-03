"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import DataTableToolbar from "./data-table-toolbar";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  // Initialize the React Table instance using @tanstack/react-table
  // This configuration enables sorting, filtering, and pagination
  const table = useReactTable({
    // The data to be displayed in the table (array of objects)
    data,

    // Column definitions that describe how each column behaves and renders
    columns,

    // Callback when sorting state changes (used to sync state with the component)
    onSortingChange: setSorting,

    // Provides sorted row data based on the current sorting state
    getSortedRowModel: getSortedRowModel(),

    // Provides filtered row data based on the current column filters
    getFilteredRowModel: getFilteredRowModel(),

    // Provides the raw, unfiltered/unprocessed row data
    getCoreRowModel: getCoreRowModel(),

    // Enables built-in pagination and returns paginated row data
    getPaginationRowModel: getPaginationRowModel(),

    // Callback when column filters change (used to sync filters with state)
    onColumnFiltersChange: setColumnFilters,

    // External state passed into the table instance (controlled sorting/filtering)
    state: {
      sorting, // array of sorting rules (e.g., [{ id: 'name', desc: true }])
      columnFilters, // array of active column filters
    },

    // Initial internal table state
    initialState: {
      pagination: {
        pageSize: 5, // Limit rows per page to 5 by default
      },
    },
  });

  /**
   * Table UI Rendering
   * ------------------
   * - This component renders a paginated and filterable data table using @tanstack/react-table
   * - Includes:
   *    1. Email filter input (affects "email" column only)
   *    2. Table headers and body based on column and row models
   *    3. Pagination controls ("Previous" and "Next" buttons)
   *
   * Notes:
   * - The table.getColumn("email")?.setFilterValue() method sets the filter state for the "email" column.
   * - The getRowModel().rows returns the current visible page rows (after sorting, filtering, pagination).
   * - If there are no results after filtering, it shows a "No results" row.
   * - Pagination buttons are disabled if the user is on the first or last page respectively.
   */

  return (
    <div >
      <div className="flex items-center py-4">
      <DataTableToolbar table={table} />
      </div>
      <div className="rounded-md border  ">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">  
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
