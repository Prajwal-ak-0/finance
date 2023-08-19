import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

interface IParams{
    userId:string;
}

export async function GET(
    request: Request,
    {params}:{params:IParams}
){
    try {
        const {userId}=params;

        if(!userId){
            return new NextResponse("User Id is required",{status:400});
        }

        const items=await prisma.item.findMany({
            where:{
                userId:userId
            }
        });

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

export async function POST(
    request: Request,
    {params}:{params:IParams}
){
    try {
        const body=await request.json();

        const {userId}=params;

        const {itemName,price}=body;

        if(!itemName || !price){
            return new NextResponse("Missing Fields",{status:400});
        }

        if(!userId){
            return new NextResponse("User Id is required",{status:400});
        }

        const item=await prisma.item.create({
            data:{
                itemName,
                price,
                userId:userId
            }
        });

        return NextResponse.json(item);
    } catch (error) {
        console.log('[ITEM_POST_ERROR]',error);
        return new NextResponse("Internal Server Error",{status:500});
    }
}