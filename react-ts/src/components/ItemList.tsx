import type { Item } from "../types";
import ItemCard from "./ItemCard";
ItemCard;

interface ItemListProps {
  items: Item[];
}

export default function ItemList({ items }: ItemListProps) {
  return (
    <div>
      {items.map((item) => (
        <ItemCard
          key={item.id}
          name={item.name}
          price={item.price}
          isSpecial={item.price > 30}
        />
      ))}
    </div>
  );
}
