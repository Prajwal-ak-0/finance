

import ItemForm from './components/ItemForm'
import prisma from "@/lib/prismadb";
import axios from 'axios';
import getItemById from '@/actions/getItemById';
import { Item } from '@prisma/client';
import { get } from 'http';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import GetItems from './components/GetItem';
interface IParams{
  userId?:string;
}

const ItemPage =async ({
  params,
}:{
  params:{userId:string}
}) => {

  return (
    <div className='flex-col mt-3' >
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ItemForm params={params}/>
        <GetItems userId={params.userId}/>
      </div>
      </div>
  )
}

export default ItemPage