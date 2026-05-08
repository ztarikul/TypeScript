import Counter from "./components/Counter";
import ItemCard from "./components/ItemCard";
import type { Item } from "./types";
import ItemList from "./components/ItemList";
import { OrderForm } from "./components/OrderForm";

const menu: Item[] = [
  { id: 1, name: "Masala", price: 70 },
  { id: 1, name: "Ginger", price: 90 },
];

function App() {
  return (
    <div>
      <h1>React-Typescript</h1>
      <ItemCard name="Samsung" price={50000} />
      <ItemCard name="Iphone" price={105000} />
      <Counter />
      <div>
        <ItemList items={menu} />
      </div>
      <div>
        <OrderForm
          onSubmit={(order) => {
            console.log("Placed: ", order.name, order.item);
          }}
        />
      </div>
    </div>
  );
}

export default App;
