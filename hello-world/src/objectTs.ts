// // 1.
// let tea: {
//   name: string;
//   price: number;
//   isHot: boolean;
// };

// tea = {
//   name: "Ginger Tea",
//   price: 25,
//   isHot: true,
// };

// // 2.
// type Tea = {
//   name: string;
//   price: number;
//   ingredients: string[];
// };

// const adrakChai: Tea = {
//   name: "Adrak Chai",
//   price: 25,
//   ingredients: ["ginger", "tea leaves"],
// };

// // 3.
// type Cup = { size: string };
// let smallCup = { size: "200ml" };
// let bigCup = { size: "500ml", material: "steel" };

// smallCup = bigCup; //satisfy bare minimum props

// //Same Example
// type Brew = { brewTime: number };
// const coffee = { brewTime: 5, beans: "Arabika" };
// const chaiBrew: Brew = coffee;

// // 4.
// type Item = { name: string; quantity: number };
// type Address = { street: string; pin: number };

// type Order = {
//   id: string;
//   items: Item[];
//   address: Address;
// };

// 5. Partial

// type Chai = {
//   name: string;
//   price: number;
//   isHot: boolean;
// };

const updateChai = (updates: Partial<Chai>) => {
  console.log("Updating chai with", updates);
};

updateChai({ price: 25 });

// 6. Required

type ChaiOrder = {
  name?: string;
  quantity?: number;
};

const placeOrder = (order: Required<ChaiOrder>) => {
  console.log(order);
};

placeOrder({ name: "Masala", quantity: 2 });

// 7.
type Chai = {
  name: string;
  price: number;
  isHot: boolean;
  ingredients: string[];
};

type BasicChaiInfo = Pick<Chai, "name" | "price">;

const chaiInfo: BasicChaiInfo = {
  name: "Lemon Tea",
  price: 30,
};

// 8.
type ChaiNew = {
  name: string;
  price: number;
  isHot: boolean;
  secretTngredients: string;
};

type PublicChai = Omit<ChaiNew, "secretTngredients">;
