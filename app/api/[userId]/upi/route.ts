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

        const items=await prisma.upi.findMany({
            where:{
                userId:userId
            }
        });

        return NextResponse.json(items);

    } catch (error) {
        console.log('[UPI_GET_ERROR]',error);
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

        const {upiId}=body;

        if(!upiId){
            return new NextResponse("Missing Fields",{status:400});
        }

        if(!userId){
            return new NextResponse("User Id is required",{status:400});
        }

        const item=await prisma.upi.create({
            data:{
                upiId,
                userId:userId
            }
        });

        return NextResponse.json(item);
    } catch (error) {
        console.log('[UPI_POST_ERROR]',error);
        return new NextResponse("Internal Server Error",{status:500});
    }
}