"use client"
import * as React from "react"
import '../style.css'
import GooglePayButtonComponent from "./GooglePayButtonComponent"
import { ColumnDef } from "@tanstack/react-table"

import { CellAction } from "./CellAction"

export type User = {
  id: string
  name: string
  email: string
  phoneNumber: string 
  totalPrice: string
}

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone Number",
  },
  {
    accessorKey: "totalPrice",
    header: "Total Price",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />
  },
];