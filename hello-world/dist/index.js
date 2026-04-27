"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
calculateTax(10000, 2023);
//# sourceMappingURL=index.js.map