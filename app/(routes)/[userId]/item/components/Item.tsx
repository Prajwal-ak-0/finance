"use client";

import { Item } from "@prisma/client";

interface ItemProps {
    item: Item | null;
}

const Item: React.FC<ItemProps> = ({
    item
}) => {

  return (
    <div>
        {item?.itemName} hasdk
    </div>
  )
}

export default Item