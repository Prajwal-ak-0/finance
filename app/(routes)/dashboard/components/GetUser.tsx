"use client";

import axios from "axios";
import { Payment } from "./column";
import { useCallback, useEffect, useState } from "react";
import { format } from "date-fns";


const GetUser = () => {

    const [items, setItems] = useState([]);

  const getItems = useCallback(async () => {
    
    const response = await axios.get(`/api/new`);
    
    setItems([]);

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

    const formattedUsers:Payment[]=items.map((item:Payment) => ({
        id:item.id,
        email:item.email,
        amount:item.amount,
        upiId:item.upiId,
        mobileNumber:item.mobileNumber,
        slNo:item.slNo,
    }));

  return (
    <div>GetUser</div>
  )
}

export default GetUser