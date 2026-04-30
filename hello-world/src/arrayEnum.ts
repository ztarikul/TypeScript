const chaiFlavours: string[] = ["Masala", "Adrak"];
const chaiPrices: number[] = [20, 25];

const rating: Array<number> = [4.5, 5.5];

type Chai = {
  name: string;
  price: number;
};

const menu: Chai[] = [
  { name: "Masala", price: 15 },
  { name: "Adrak", price: 20 },
];

const cities: readonly string[] = ["Dhaka", "Barishal"];
// cities.push("Sylhet") // Not possible due t read-only method

const table: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

let chaiTuple: [string, number];
chaiTuple = ["Masala", 20];

let userInfo: [string, Number, boolean?];
userInfo = ["Zihad", 100];
userInfo = ["Zihad", 100, true];

const location: readonly [number, number] = [90.55, 91.66];

//Named tuples
const chaiItems: [name: string, price: number] = ["Masala", 25];

//Enums
enum CupSize {
  SMALL,
  MEDIUM,
  LARGE,
}

const size = CupSize.MEDIUM;

//Autoincremental

enum Status {
  PENDING = 100,
  SERVER, //101
  CANCELLED, //102
}

enum ChaiType {
  MASALA = "masala",
  GINGER = "ginger",
}

function makeChai(type: ChaiType) {
  console.log(`Making ${type}`);
}

makeChai(ChaiType.GINGER);
