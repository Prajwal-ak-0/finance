"use client";

import axios from "axios";
import { useCallback, useState } from "react";
import { Copy, Edit, MoreHorizontal, Trash } from "lucide-react";
import { toast } from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";

import { Button,buttonVariants } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { AlertModal } from "@/components/AlertModal";
import { ItemColumn } from "./Column";
import Modal from "@/components/Modal";

import * as z from "zod"
import useItemModal from "@/hooks/useItemModal";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {Form,FormControl,FormField,FormItem,FormLabel,FormMessage} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

interface CellActionProps {
  data: ItemColumn;
}

const formSchema = z.object({
  itemName: z.string().nonempty("Item Name is required"),
  price: z.string().nonempty("Price is required ")
})

type FormValues = z.infer<typeof formSchema>

export const CellAction: React.FC<CellActionProps> = ({
  data,
}) => {
  const router = useRouter();
  const params = useParams();
  const item=useItemModal();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const defaultValues: FormValues= {
    itemName: "",
    price: "",
  }

  const form=useForm<FormValues>({
    defaultValues,
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (values: FormValues) => {
    try {
      setLoading(true);
      const response = await axios.patch(`/api/${params.userId}/item/${data.id}`, values);

      if(response.status === 200){
        toast.success('Item updated.');
      }
      console.log(response);

      item.onClose();
      window.location.href = `/${params.userId}/item`;

    } catch (error) {
      console.error(error);
      toast.error('Something went wrong while updating the Item.');
    } finally {
      setLoading(false);
    }
  }

  const toggle=useCallback(() => {
    item.onOpen();
  },[item]);

  const body=(
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <div className="md:grid md:grid-cols-2 gap-8">
        <FormField
          control={form.control}
          name="itemName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Item Name</FormLabel>
              <FormControl>
                <Input placeholder="Maggi" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input placeholder="$" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        </div>
        <Button 
          className={buttonVariants({variant:"ghost"})} 
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  )

  const onConfirm = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/${params.userId}/item/${data.id}`);
      toast.success('Category deleted.');
      window.location.href = `/${params.userId}/item`;
    } catch (error) {
      toast.error('Make sure you removed all products using this category first.');
    } finally {
      setOpen(false);
      setLoading(false);
    }
  };

  return (
    <>
      <AlertModal 
        isOpen={open} 
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={loading}
      />
      <Modal
        onClose={() => item.onClose()}
        disabled={loading}
        isOpen={item.isOpen}
        title="Update Current Item"
        body={body}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={toggle}
          >
            <Edit className="mr-2 h-4 w-4" /> Update
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setOpen(true)}
          >
            <Trash className="mr-2 h-4 w-4" /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
