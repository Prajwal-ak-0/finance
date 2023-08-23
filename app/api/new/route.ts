import { NextResponse } from "next/server";

import prisma from "@/lib/prismadb"

export async function POST(request:Request){

    try {
        const body = await request.json()

        const { name, email, number,price } = body;

        if(!name || !email || !number || !price){
            return NextResponse.json({
                status: 400,
                message: "Please fill all the fields"
            })
        }

        // const emailExists = await prisma.user.findFirst({
        //     where:{
        //         email
        //     }
        // })

        // if(emailExists){
        //     return NextResponse.json({
        //         status: 400,
        //         message: "Email already exists"
        //     })
        // }

        // const numberExists = await prisma.user.findFirst({  
        //     where:{
        //         phoneNumber: number
        //     }
        // })

        // if(numberExists){
        //     return NextResponse.json({
        //         status: 400,
        //         message: "Number already exists"
        //     })
        // }

        const result= await prisma.user.create({
            data: {
                name,
                email,
                phoneNumber: number,
                totalPrice: price
            }
        })
        return NextResponse.json(result)
    } catch (error) {
        console.log('[CATEGORIES_POST]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
}


export async function GET(
    request: Request
){
    try {

        const items=await prisma.user.findMany();

        const safeItems=items.map((item)=>({
            ...item,
            createdAt:item.createdAt.toISOString(),
            updatedAt:item.updatedAt.toISOString(),
        }));

        return NextResponse.json(safeItems);

    } catch (error) {
        console.log('[ITEM_GET_ERROR]',error);
        return new NextResponse("Internal Server Error",{status:500});
    }
}