import { useState } from "react";

interface OrderFormProps {
  onSubmit(order: { name: string; item: number }): void;
}

export function OrderForm({ onSubmit }: OrderFormProps) {
  const [name, setName] = useState<string>("Samsung");
  const [item, setItem] = useState<number>(1);

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit({ name, item });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Item Name</label>
      <input
        type="text"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />
      <label>Qantity</label>
      <input
        type="number"
        value={item}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setItem(Number(e.target.value) || 0)
        }
      />
      <button type="submit">Place Order</button>
    </form>
  );
}
