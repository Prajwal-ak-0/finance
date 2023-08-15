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
        console.log('[CATEGORIES_GET]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
}