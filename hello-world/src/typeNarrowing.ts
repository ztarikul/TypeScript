// function getChai(kind: string | number) {
//   if (typeof kind === "string") {
//     return `Making ${kind} chai ...`;
//   }
//   return `Chai order: ${kind}`;
// }

// // Truthness

// function serveChai(msg: string) {
//   if (msg) {
//     return `Serving ${msg}`;
//   }
//   return `Serving default masala chai`;
// }

// function orderChai(size: "small" | "medium" | "large" | number) {
//   if (size === "small") {
//     return `Small cutting chai`;
//   }
//   if (size === "large" || size === "medium") {
//     return `Make extra chai`;
//   }
//   return `Chai order #${size}`;
// }

// //Class

// class Kullad {
//   serve() {
//     return `Serving Kullad Chai`;
//   }
// }

// class Cutting {
//   serve() {
//     return `Serving Cutting Chai`;
//   }
// }

// function serve(chai: Kullad | Cutting) {
//   if (chai instanceof Kullad) {
//     return chai.serve();
//   }
// }

// // Making types

// type ChaiOrder = {
//   type: string;
//   suger: number;
// };

// function isChaiOrder(obj: any): obj is ChaiOrder {
//   return (
//     typeof obj === "object" &&
//     obj !== null &&
//     typeof obj.type === "string" &&
//     typeof obj.suger === "number"
//   );
// }

// function serveOrder(item: ChaiOrder | string) {
//   if (isChaiOrder(item)) {
//     return `Serving ${item.type} with ${item.suger}`;
//   }
//   return `Serving custome chai: ${item}`;
// }
