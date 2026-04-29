"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let apiRequestStatus;
apiRequestStatus = "success";
const orders = ["22", "10", "42", "33"];
let currentOrder;
orders.forEach((element) => {
    if (element === "42") {
        currentOrder = element;
    }
    currentOrder = "11";
});
console.log(currentOrder);
//# sourceMappingURL=unionAndAny.js.map