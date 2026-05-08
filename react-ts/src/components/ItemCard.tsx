interface ItemCardProps {
  name: string;
  price: number;
  isSpecial?: boolean;
}

export default function ItemCard({
  name,
  price,
  isSpecial = false,
}: ItemCardProps) {
  return (
    <article>
      <h2>
        {name}
        {isSpecial && <span>⭐️</span>}
      </h2>
      <p>{price}</p>
    </article>
  );
}
