"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Chai {
    constructor() {
        this.flavour = "Masala";
        this.secretIngredients = "Cardamom";
    }
    reveal() {
        return this.secretIngredients;
    }
}
class Shop {
    constructor() {
        this.shopName = "Chai Corner";
    }
}
class Branch extends Shop {
    getName() {
        return this.shopName;
    }
}
class Cup {
    constructor(capacity) {
        this.capacity = 250;
        this.capacity = capacity;
    }
}
class ModerChai {
    constructor() {
        this._suger = 2;
    }
    get suger() {
        return this._suger;
    }
    set suger(value) {
        if (value > 5)
            throw new Error("Too sweet!");
    }
}
const c = new ModerChai();
c.suger = 8;
class Heater {
    heat() { }
}
class ChaiMaker {
    constructor(heater) {
        this.heater = heater;
    }
    make() {
        this.heater.heat;
    }
}
//# sourceMappingURL=oop.js.map