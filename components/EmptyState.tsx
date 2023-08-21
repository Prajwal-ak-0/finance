'use client';

import { useRouter } from 'next/navigation';
import React from 'react'
import { Heading } from './Heading';

interface EmptyStateProps{
  title?:string;
  subTitle?:string;
  showReset?:boolean;
}

const EmptyState:React.FC<EmptyStateProps> = ({
  title="No exact macthes",
  subTitle="Currently no item's found, you can add item's.",
  showReset
}) => {

    const router=useRouter();
  return (
    <div
      className='
        h-[60vh]
        flex
        flex-col
        gap-2
        justify-center
        items-center
      '
    >
      <Heading
        title={title}
        description={subTitle}
      />
    </div>
  )
}

export default EmptyState