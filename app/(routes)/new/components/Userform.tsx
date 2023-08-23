"use client"

import * as z from "zod"
import axios from "axios"
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
import { AiOutlinePlusCircle } from "react-icons/ai"
import { Separator } from "@/components/ui/separator"

const formSchema = z.object({
  name: z.string().nonempty("Name is required"),
  email: z.string().email("Invalid email").nonempty("Email is required"),
  number: z.string().nonempty("Number is required"),
  price: z.string(),
})

type FormValues = z.infer<typeof formSchema>

export const Userform = () => {

  const router=useRouter();

  const defaultValues: FormValues = {
    name: "",
    email: "",
    number: "",
    price: "0",
  }

  const form=useForm<FormValues>({
    defaultValues,
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (values: FormValues) => {
    try {

      const response = await axios.post("/api/new", values)
      
      if(response.status==200){
        toast.success("User created successfully.");
        router.push(`/${response.data.id}/item`);
      }
    } catch (error) {
      toast.error("Something went wrong.");
      console.error(error)
    } finally {
    }
  }
//
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title='Add User'
          description='Add a user to your system.'
        />

      </div>

      <Separator/>
      
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <div className="md:grid md:grid-cols-3 gap-8">
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
        </div>
        <Button 
          className={buttonVariants({variant:"ghost",size:"w"})} 
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
    </>
  )
}