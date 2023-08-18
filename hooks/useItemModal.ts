import { create } from "zustand";

interface ItemModalStore{
    isOpen:boolean;
    onOpen:()=>void;
    onClose:()=>void;
}

const useItemModal=create<ItemModalStore>((set)=>({
    isOpen:false,
    onOpen:()=>set({isOpen:true}),
    onClose:()=>set({isOpen:false})
}))

export default useItemModal; 