"use client"

import { ColumnDef } from "@tanstack/react-table"

import { CellAction } from "./CellAction"

export type ItemColumn = {
  id: string
  itemName: string;
  price: string;
  createdAt: string;
}

export const columns: ColumnDef<ItemColumn>[] = [
  {
    accessorKey: "itemName",
    header: "Name",
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => row.original.price,
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />
  },
];
