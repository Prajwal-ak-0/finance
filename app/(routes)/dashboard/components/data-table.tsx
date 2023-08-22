"use client"
import * as React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  ColumnDef,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])

  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
  })

  return (
    <div>
      <div className="flex items-center py-4 ">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
          style={{
            backgroundColor: 'black',
            color: 'white',
            transition: 'background-color 0.3s, color 0.3s', 
          }}
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto" style={{ backgroundColor: 'black', color: 'white', transition: 'background-color 0.3s, color 0.3s' }}>
              Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border ">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
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
        {row.getVisibleCells().map((cell, index) => (
          <TableCell
            key={cell.id}
            style={{
              marginLeft: index * 20 + 'px', // Apply margin based on index
              padding: '8px', // Adjust padding as needed
              textAlign: 'left', // Align content to the left
            }}
          >
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </TableCell>
        ))}
      </TableRow>
    ))
  ) : (
    <TableRow>
      <TableCell colSpan={columns.length} className="h-24 text-center">
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
          style={{
            backgroundColor: 'black',
            color: 'white',
            transition: 'background-color 0.3s, color 0.3s',
          }}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          style={{
            backgroundColor: 'black',
            color: 'white',
            transition: 'background-color 0.3s, color 0.3s',
          }}
        >
          Next
        </Button>
      </div>
    </div>
  )
}