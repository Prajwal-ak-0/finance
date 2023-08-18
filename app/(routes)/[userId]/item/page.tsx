import React from 'react'
import ItemForm from './components/ItemForm'

interface IParams{
  userId?:string;
}

const ItemPage =async ({
  params,
}:{
  params:{userId:string}
}) => {

  return (
    <div className='flex-col mt-3'>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ItemForm params={params}/>
      </div>
    </div>
  )
}

export default ItemPage