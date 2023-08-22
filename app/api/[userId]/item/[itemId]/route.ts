import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb"

export async function DELETE(
    req:Request,
    {params}: {params: {itemId: string, userId: string}}
){
    try {
        if(!params.itemId) {
            return new NextResponse("No Item Id provided");
        }

        const user=await prisma.user.findFirst({
            where: {
                id: params.userId
            }
        })

        if(!user) {
            return new NextResponse("User not found",{status:405});
        }

        const item=await prisma.item.delete({
            where: {
                id: params.itemId
            }
        })

        return new NextResponse("Item deleted successfully",{status:200});
    } catch (error) {
        console.log('[CATEGORY_DELETE]', error);
        return new NextResponse("Internal error", { status: 500 });
    }
}

export async function PATCH(
    req: Request,
    { params }: { params: { itemId: string, userId: string } }
  ) {
    try {   
  
      const body = await req.json();
      
      const { itemName, price } = body;
      
      if (!params.userId) {
        return new NextResponse("Unauthenticated", { status: 403 });
      }
  
      if (!params.itemId) {
        return new NextResponse("Item ID is required", { status: 400 });
      }
  
      if (!itemName) {
        return new NextResponse(" Item Name is required", { status: 400 });
      }
  
      if (!params.itemId) {
        return new NextResponse("Item id is required", { status: 400 });
      }
  
      const user = await prisma.user.findFirst({
        where: {
          id: params.userId,
        }
      });
  
      if (!user) {
        return new NextResponse("Unauthorized", { status: 405 });
      }
  
      const item = await prisma.item.update({
        where: {
          id: params.itemId,
        },
        data: {
          itemName,
          price
        }
      });
    
      return NextResponse.json(item, { status: 200 });
    } catch (error) {
      console.log('[CATEGORY_PATCH]', error);
      return new NextResponse("Internal error", { status: 500 });
    }
  };