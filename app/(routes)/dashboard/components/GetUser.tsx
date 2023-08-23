"use client";

import axios from "axios";
import { User,columns } from "./column";
import { useCallback, useEffect, useState } from "react";
import { format } from "date-fns";
import EmptyState from "@/components/EmptyState";
import { DataTable } from "./data-table";


const GetUser = () => {

    const [items, setItems] = useState([]);

  const getItems = useCallback(async () => {
    
    const response = await axios.get(`/api/new`);
    console.log(response.data);

    if (response.status === 200) {
      setItems(response.data);
      
    } else {
      console.log(response.status);
      console.log(response.data);
    }
    },[]);

    useEffect(() => {
        getItems();
    },[getItems]);  

    const formattedUsers:User[]=items.map((item:User) => ({
        id:item.id,
        email:item.email,
        totalPrice:item.totalPrice,
        name:item.name,
        phoneNumber:item.phoneNumber,
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
                  <DataTable columns={columns} data={formattedUsers} />
                </div>
              </div>
        </>
      )
    }
}

export default GetUser