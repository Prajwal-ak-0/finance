import prisma from "@/lib/prismadb"

export async function getUser(
    email: string
){

    try{
        const user = await prisma.user.findFirst({
            where: {
                email: email
            }
        })


        if(!user){
            return null
        }

        return user;
}
    catch(error:any){ 
        throw new Error(error)
    }
}