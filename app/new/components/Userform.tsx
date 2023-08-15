"use client"

import * as z from "zod"
import axios from "axios"
import {  useState } from "react"
import { Input } from "@/components/ui/input"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Heading } from "@/components/Heading"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"

const formSchema = z.object({
  name: z.string().nonempty("Name is required"),
  email: z.string().email("Invalid email").nonempty("Email is required"),
  number: z.string().nonempty("Number is required"),
  price: z.string().nonempty("Price is required"),
})

type FormValues = z.infer<typeof formSchema>

export const Userform = () => {

  const [open,setOpen]=useState(false);
  const [loading,setLoading]=useState(false);
  const router=useRouter();

  const defaultValues: FormValues = {
    name: "",
    email: "",
    number: "",
    price: "",
  }

  const form=useForm<FormValues>({
    defaultValues,
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (values: FormValues) => {
    setLoading(true)
    try {

      const response = await axios.post("/api/new", values)
      toast.success("User created successfully.")
      console.log(values)
      setOpen(true)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }


  return (
    <>
      <Heading
          title="Add User"
          description="Add a new user to your system."
      />
      <Form {...form}>
      <div className="md:grid md:grid-cols-2 gap-8">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone No</FormLabel>
              <FormControl>
                <Input placeholder="xxxxx xxxxx" {...field} />
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
        <Button type="submit">Submit</Button>
      </form>
    </div>
    </Form>
    </>
  )
}