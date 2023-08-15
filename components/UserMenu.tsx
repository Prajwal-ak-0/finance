'use client';

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { buttonVariants } from "@/components/ui/button"
import MenuItem from "./MenuItem";
import { AiOutlineMenu } from "react-icons/ai";

const UserMenu = ({}) => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return ( 
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div className="md:flex gap-4 hidden ">
          <Button 
              onClick={() => router.push('/new')}
              className=
              {buttonVariants({variant:"ghost"})}   
          >
              Add User
          </Button>
          <Button 
              onClick={() => router.push('/dashboard')}
          className=
              {buttonVariants({variant:"ghost"})}    
          >
              Dashboard
          </Button>
        </div>
        <div 
        onClick={toggleOpen}
        className="
          p-4
          py-2
          px-2
          ml-6
          border-[1px] 
          border-neutral-200 
          flex 
          flex-row 
          items-center 
          gap-3 
          rounded-full 
          cursor-pointer 
          hover:shadow-md
          transition
          "
        >
          <AiOutlineMenu size={25} />
        </div>
      </div>
      {isOpen && (
        <div 
          className="
            absolute 
            rounded-xl 
            shadow-md
            w-[40vw]
            md:w-3/4 
            bg-white
            overflow-hidden 
            top-12 
            text-[15px]
            ml-[75px]
            border-black
          "
        >
          <div className="flex flex-col cursor-pointer">
              <>
                <MenuItem 
                  label="Add User"
                  onClick={() => router.push('/new')}
                />
                <MenuItem 
                  label="Dashboard" 
                  onClick={() => router.push('/dashboard')}
                />
              </>
          </div>
        </div>
      )}
    </div>
   );
}
 
export default UserMenu;