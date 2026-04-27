// // Enums

// const enum Size {
//   Small = 1,
//   Medium,
//   Large,
// }

// let mySize: Size = Size.Medium;
// console.log(mySize);

//Functions

// function calculateTax(income: number, taxYear = 2022): number {
//   if (taxYear < 2022) {
//     return income * 1.2;
//   }
//   return income * 1.3;
// }

// calculateTax(10_000, 2023);

// /// OBJECTS

//type alias
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "Zihad",
  retire: (date: Date) => {
    console.log(date);
  },
};

console.log(employee.name, employee.retire);

//  //// Union Types

// function kgToLbs(weight: number | string): number {
//   //Narrowing
//   if (typeof weight === "number") {
//     return weight * 2.2;
//   } else {
//     return parseInt(weight) * 2.2;
//   }
// }

// kgToLbs(10);
// kgToLbs("10kg");

/// /// Intersection

// type Draggable = {
//   drag: () => void;
// };

// type Resizable = {
//   resize: () => void;
// };

// type UIWidget = Draggable & Resizable;

// let textBox: UIWidget = {
//   drag: () => {},
//   resize: () => {},
// };

// /// Literal Types

// Literal(exact, specific)

// type Quantity = 50 | 100;

// let quantity: Quantity = 100;

// type Metric = "cm" | "inch";

// // nullable Types

// function greet(name: string | null | undefined) {
//   if (name) console.log(name.toUpperCase());
//   else console.log("Hola!");
// }

// greet(undefined);
