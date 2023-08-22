"use client"
import * as React from "react"
import '../style.css'
import GooglePayButtonComponent from "./GooglePayButtonComponent"
import { ColumnDef } from "@tanstack/react-table"
import { AiOutlineMore } from 'react-icons/ai';
import { RiArrowUpDownLine } from 'react-icons/ri';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import client from "@/lib/prismadb";
import { Button } from "@/components/ui/button"

export type Payment = {
  id: string
  amount: number
  email: string
  mobileNumber: string 
  slNo: number
  upiId: string
}

const CopyUpiId = ({ upiId }: { upiId: string }) => {
  const copyUpiIdToClipboard = () => {
    navigator.clipboard.writeText(upiId);
  };

  return (
    <DropdownMenuItem onClick={copyUpiIdToClipboard}>
      Copy UPI ID
    </DropdownMenuItem>
  );
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "slNo", 
    header: "Sl.No",
    cell: ({ row }) => (
      <div className="table-cell-bold" style={{ fontWeight: 'bold', color: 'black' }}>{row.index + 1}</div>
    ),
   // disableResizing: true, // Prevent resizing for this column
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      const isSortedAsc = column.getIsSorted() === "asc";
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(!isSortedAsc)}
          className="md:w-32 lg:w-38"
        >
          Email
          <RiArrowUpDownLine className={`table-header-icon ${isSortedAsc ? 'asc' : 'desc'}`} />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="table-cell-text"> 
       {} {row.getValue("email")}
      </div>
    ),
  },
  {
    accessorKey: "amount",
    header: ({column}) => {
      return (
        <Button
        style={{marginLeft: '-26px'}}
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="text-left md:w-32 lg:w-38"
        >
         Balance 
          <RiArrowUpDownLine className="ml-4 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR", 
      }).format(amount);
 
      return <div className="text-left md:w-32 lg:w-38 font-medium">{formatted}</div>
    },
  },

  
  {
    accessorKey: "mobileNumber", 
    header: "Mobile Number",
  },
 
  {
    id: "actions",
    cell: ({ row }) => {
     const payment = row.original
 
     const sendRequestForMoney = () => {
      console.log('Sending request for money:', payment.upiId);
    };
    const openPaymentDetails = () => {
 
      alert(`Payment ID: ${payment.id}\nAmount: ${payment.amount}\nEmail: ${payment.email}\nMobile Number: ${payment.mobileNumber}`);
    };
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <AiOutlineMore className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>
            <CopyUpiId upiId={payment.upiId} />
          </DropdownMenuItem>
            <DropdownMenuSeparator />
         {/*   <DropdownMenuItem>View customer</DropdownMenuItem>  */}
         <DropdownMenuItem onClick={openPaymentDetails}>
            View payment details
          </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={sendRequestForMoney}>
            Send Request for Money
          </DropdownMenuItem>
          <DropdownMenuItem >
           <GooglePayButtonComponent/>
            </DropdownMenuItem>
          <DropdownMenuItem >
            Add Item
          </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
      
    },
  },
    
]
export default columns