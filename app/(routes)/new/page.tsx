import React from 'react'
import {Userform}  from './components/Userform'

const page = async () =>{

  return (
    <div className='flex-col mt-3'>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <Userform/>
      </div>
    </div>
  )
}


export default page