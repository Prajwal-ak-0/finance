'use client'

import {useState,useEffect,useCallback} from 'react'
import {IoMdClose} from "react-icons/io"
import { Button, buttonVariants } from '@/components/ui/button'

interface ItemModalProps{
    isOpen?:boolean;
    onClose:()=>void;
    title?:string;
    body?:React.ReactElement;
    footer?:React.ReactElement;
    disabled?:boolean;
}

const ItemModal:React.FC<ItemModalProps> = ({
    isOpen,
    onClose,
    title,
    body,
    footer,
    disabled,
}) => {

    const [showItemModal,setShowItemModal]=useState(isOpen);

    useEffect(()=>{
        setShowItemModal(isOpen)
    },[isOpen]);


    const handleClose=useCallback(()=>{
        if(disabled){
            return;
        }

        setShowItemModal(false);
        setTimeout(()=>{
            onClose();
        },300)
    },[disabled,onClose])

    if(!isOpen){
        return null;
    }

  return (
    <div
        className='
            justify-center
            items-center
            flex
            overflow-x-hidden
            overflow-y-auto
            fixed
            inset-0
            z-50
            outline-none
            focus:outline-none
            bg-neutral-800/70
        '
    >
        <div
            className='
                relative
                w-full
                md:w-4/6
                lg:w-3/6
                xl:w-2/5
                my-6
                mx-auto
                lg:h-auto
                md:h-auto
            '
        >
            {/* CONTENT */}
            <div
                className={`
                    translate
                    duration-300
                    h-full
                    ${showItemModal ? 'translate-y-0':'translate-y-full'}
                    ${showItemModal?'opacity-100':'opacity-0'}
                `}
            >
                <div
                    className='
                        translate
                        h-full
                        lg:h-auto
                        md:h-auto
                        border-0
                        rounded-lg
                        shadow-lg
                        relative
                        flex
                        flex-col
                        w-full
                        bg-white
                        outline-none
                        focus:outline-none
                    '
                >
                    {/* HEADER */}
                    <div
                        className='
                            flex
                            items-center
                            p-6
                            pt-20
                            rounded-t
                            justify-center
                            relative
                            border-b-[1px]
                        '   
                    >
                        <button
                            onClick={handleClose}
                            className='
                                p-1
                                border-0
                                hover:opacity-70
                                transition
                                absolute
                                left-9
                            '
                        >
                            <IoMdClose size={18} />
                        </button>
                        <div className="text-lg font-semibold">
                            {title}
                        </div>
                    </div>

                    {/* BODY */}
                    <div className="relative p-6 flex-auto">
                        {body}
                    </div>

                    {/* FOOTER */}
                    <div className="flex flex-col gap-2 p-6">
                        <div
                            className='
                                flex
                                flex-row
                                items-center
                                gap-4
                                w-full
                            '
                        >
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemModal