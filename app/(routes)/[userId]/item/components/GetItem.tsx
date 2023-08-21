"use client"

import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import EmptyState from '@/components/EmptyState';
import { format } from 'date-fns';
import {ItemColumn, columns} from "./Column";
import { DataTable } from '@/components/ui/data-table';
// import Item from './Item';
interface IParams{
    userId?:string;
}

const GetItems:React.FC<IParams> =({
    userId
}) => {

  const [items, setItems] = useState([]);

  const getItems = useCallback(async () => {
    
    const response = await axios.get(`/api/${userId}/item`);
    
    setItems([]);

    if (response.status === 200) {
      setItems(response.data);
      
    } else {
      console.log(response.status);
      console.log(response.data);
    }
  },[userId]);

  useEffect(() => {
    getItems();
  },[getItems]);  

  const formattedItems:ItemColumn[]=items.map((item:ItemColumn) => ({
    id:item.id,
    itemName:item.itemName,
    price:item.price,
    createdAt:format(new Date(item.createdAt), 'yyyy-MM-dd HH:mm:ss'),
  }));

  if(items.length === 0){
    return (
      <EmptyState
        title='No items found'
      />
    )
  }
  else{
    return(
      <>
            <div className="flex-col">
              <div className="flex-1 space-y-4 p-8 pt-6">
                <DataTable searchKey="name" columns={columns} data={formattedItems} />
              </div>
            </div>
      </>
    )
  } 
}

export default GetItems;