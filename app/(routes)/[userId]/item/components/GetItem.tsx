"use client"

import axios from 'axios';
import { useCallback, useEffect } from 'react';

interface IParams{
    userId?:string;
}

const GetItems:React.FC<IParams> =({
    userId
}) => {

  const getItems = useCallback(async () => {
    const response = await axios.get(`/api/${userId}/item`);
  
    if (response.status === 200) {
      const items = response.data;
      console.log(items);
    } else {
      console.log(response.status);
      console.log(response.data);
    }
  },[userId]);

    useEffect(() => {
        getItems();
    },[getItems]);

  return null;
}

export default GetItems;