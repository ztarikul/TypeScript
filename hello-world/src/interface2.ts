interface Chai {
  flavour: string;
  price: number;
  milk?: boolean;
}

const masala: Chai = {
  flavour: "Masala",
  price: 20,
};

interface Shop {
  readonly id: number;
  name: string;
}

const s: Shop = { id: 1, name: "ChaiOrCode Caffe" };

interface DiscountCalculator {
  (price: number): number;
}

const apply50: DiscountCalculator = (p) => p * 0.5;

interface TeaMachine {
  start(): void;
  stop(): void;
}

const machine: TeaMachine = {
  start() {
    console.log("Start");
  },
  stop() {
    console.log("Stop");
  },
};

interface A {
  a: string;
}
interface B {
  b: string;
}
interface C extends A, B {}
