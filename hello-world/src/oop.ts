// class Chai {
//   flavour: string;
//   price: number;

//   constructor(flavour: string, price: number) {
//     this.flavour = flavour;
//     this.price = price;
//   }
// }

// const masalaChai = new Chai("masala", 25);

//Access Modifier

class Chai {
  public flavour: string = "Masala";

  private secretIngredients = "Cardamom"; // private can be written like #secretIngrediants

  reveal() {
    return this.secretIngredients; //ok
  }
}

class Shop {
  protected shopName = "Chai Corner";
}

class Branch extends Shop {
  getName() {
    return this.shopName;
  }
}

// Readonly Method

class Cup {
  readonly capacity: number = 250;

  constructor(capacity: number) {
    this.capacity = capacity;
  }
}

// controled gates getter, setter

class ModerChai {
  private _suger = 2;

  get suger() {
    return this._suger;
  }

  set suger(value: number) {
    if (value > 5) throw new Error("Too sweet!");
  }
}

const c = new ModerChai();
c.suger = 8;
