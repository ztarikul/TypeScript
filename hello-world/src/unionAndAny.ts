let apiRequestStatus: "pending" | "success" | "error";

apiRequestStatus = "success";

const orders = ["22", "10", "42", "33"];

let currentOrder: string | undefined;

orders.forEach((element) => {
  if (element === "42") {
    currentOrder = element;
  }
  currentOrder = "11";
});

console.log(currentOrder);
