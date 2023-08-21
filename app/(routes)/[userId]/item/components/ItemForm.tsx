"use client";

import { Heading } from '@/components/Heading'
import Modal from '@/components/Modal';
import { Button, buttonVariants } from '@/components/ui/button'
import useItemModal from '@/hooks/useItemModal';
import React, { useCallback, useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import * as z from "zod"
import axios from "axios"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import {Form,FormControl,FormField,FormItem,FormLabel,FormMessage} from "@/components/ui/form"
import { Separator } from "@/components/ui/separator"

  interface IParams{
    userId?:string;
  }

  const formSchema = z.object({
    itemName: z.string().nonempty("Item Name is required"),
    price: z.string().nonempty("Price is required ")
  })

  type FormValues = z.infer<typeof formSchema>

const ItemForm = ({params}:{params:IParams}) => {

  const router=useRouter();

  const item=useItemModal();
  const [loading,setLoading]=useState(false);

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

      const response = await axios.post(`/api/${params.userId}/item`, values);

      console.log(response);
      toast.success("Item added successfully.");

      item.onClose();

      window.location.href = `/${params.userId}/item`;

    } catch (error) {
      console.error(error)
    } finally {
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


 
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title='Item Form'
          description='Add the purchased item'
        />

        <div className='pt-8' onClick={toggle}>
          <Button
            className={buttonVariants({variant:"ghost"})} 
            type="submit"
          >
            <span>
              <AiOutlinePlusCircle size={22} className="mr-2" />
            </span> 
            <span className='text-[16px]'>
              Item
            </span>
          </Button>
        </div>
      </div>

      <Separator/>

      <Modal
        disabled={loading}
        isOpen={item.isOpen}
        title="Add item"
        onClose={item.onClose}
        body={body}
    />


    </>
  )
}

export default ItemForm