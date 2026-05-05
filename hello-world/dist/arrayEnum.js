"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chaiFlavours = ["Masala", "Adrak"];
const chaiPrices = [20, 25];
const rating = [4.5, 5.5];
const menu = [
    { name: "Masala", price: 15 },
    { name: "Adrak", price: 20 },
];
const cities = ["Dhaka", "Barishal"];
const table = [
    [1, 2, 3],
    [4, 5, 6],
];
let chaiTuple;
chaiTuple = ["Masala", 20];
let userInfo;
userInfo = ["Zihad", 100];
userInfo = ["Zihad", 100, true];
const location = [90.55, 91.66];
const chaiItems = ["Masala", 25];
var CupSize;
(function (CupSize) {
    CupSize[CupSize["SMALL"] = 0] = "SMALL";
    CupSize[CupSize["MEDIUM"] = 1] = "MEDIUM";
    CupSize[CupSize["LARGE"] = 2] = "LARGE";
})(CupSize || (CupSize = {}));
const size = CupSize.MEDIUM;
var Status;
(function (Status) {
    Status[Status["PENDING"] = 100] = "PENDING";
    Status[Status["SERVER"] = 101] = "SERVER";
    Status[Status["CANCELLED"] = 102] = "CANCELLED";
})(Status || (Status = {}));
var ChaiType;
(function (ChaiType) {
    ChaiType["MASALA"] = "masala";
    ChaiType["GINGER"] = "ginger";
})(ChaiType || (ChaiType = {}));
function makeChai(type) {
    console.log(`Making ${type}`);
}
makeChai(ChaiType.GINGER);
//# sourceMappingURL=arrayEnum.js.map