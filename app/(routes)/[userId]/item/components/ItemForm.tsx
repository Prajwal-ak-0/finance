"use client";

import { Heading } from '@/components/Heading'
import Modal from '@/components/Modal';
import { Button, buttonVariants } from '@/components/ui/button'
import useItemModal from '@/hooks/useItemModal';
import useUpiModal from '@/hooks/useUpiModal';
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
import ItemModal from './ItemModal';
import UpiModal from './UpiModal';
import { type } from 'os';

  interface IParams{
    userId?:string;
  }

  const itemFormSchema = z.object({
    itemName: z.string().nonempty("Item Name is required"),
    price: z.string().nonempty("Price is required ")
  })

  const upiFormSchema = z.object({
    upiId: z.string().nonempty("UPI Id is required"),
  })

  type itemFormValues = z.infer<typeof itemFormSchema>

  type upiFormValues  = z.infer<typeof upiFormSchema>

const ItemForm = ({params}:{params:IParams}) => {

  const router=useRouter();

  const item=useItemModal();
  const upi=useUpiModal();

  const [loading,setLoading]=useState(false);

  const itemDefaultValues: itemFormValues= {
    itemName: "",
    price: "",
  }

  const upiDefaultValues: upiFormValues= {
    upiId: "",
  }

  const itemForm=useForm<itemFormValues>({
    defaultValues: itemDefaultValues,
    resolver: zodResolver(itemFormSchema),
  })

  const upiForm=useForm<upiFormValues>({
    defaultValues: upiDefaultValues,
    resolver: zodResolver(upiFormSchema),
  })

  const itemOnSubmit = async (values: itemFormValues) => {
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

  const upiOnSubmit = async (values: upiFormValues) => {
    try {

      const response = await axios.post(`/api/${params.userId}/upi`, values);

      console.log(response);
      toast.success("UPI Id added successfully.");

      upi.onClose();

      window.location.href = `/${params.userId}/item`;

    } catch (error) {
      console.error(error)
    } finally {
    }
  }

  const toggleItemModal=useCallback(() => {
    item.onOpen();
  },[item]);

  const itemBody=(
    <Form {...itemForm}>
      <form onSubmit={itemForm.handleSubmit(itemOnSubmit)} className="space-y-8">
      <div className="md:grid md:grid-cols-2 gap-8">
        <FormField
          control={itemForm.control}
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
          control={itemForm.control}
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

  const toggleUpiModal=useCallback(() => {
    upi.onOpen();
  },[upi]);

  const upiBody=(
    <>
      <Form {...upiForm}>
        <form onSubmit={upiForm.handleSubmit(upiOnSubmit)} className="space-y-8">
        <div className="md:grid md:grid-cols-1 gap-8">
          <FormField
            control={upiForm.control}
            name="upiId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>UPI Id</FormLabel>
                <FormControl>
                  <Input placeholder="example@okaxis" {...field} />
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
    </>
  )
 
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title='Item Form'
          description='Add the purchased item'
        />
        <div className='pt-8 flex items-center justify-between'>
          <div onClick={toggleUpiModal} className='mr-2 md:mr-4'>
            <Button
              className={buttonVariants({variant:"ghost"})} 
              type="submit"
            >
              <span>
                <AiOutlinePlusCircle size={22} className="mr-2" />
              </span> 
              <span className='text-[16px]'>
                UPI ID
              </span>
            </Button>
          </div>

          <div onClick={toggleItemModal}>
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
      </div>

      <Separator/>

      <ItemModal
        disabled={loading}
        isOpen={item.isOpen}
        title="Add item"
        onClose={item.onClose}
        body={itemBody}
      />

      <UpiModal
        disabled={loading}
        isOpen={upi.isOpen}
        title="Add UPI Id of current User."
        onClose={upi.onClose}
        body={upiBody}
      />


    </>
  )
}

export default ItemForm