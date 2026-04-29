// type ChaiOrder = { type: string; suger: number; strong: boolean };

// function makeChai(order: ChaiOrder) {
//   console.log(order);
// }

// function serveChai(order: ChaiOrder) {
//   console.log(order);
// }

// serveChai({ type: "Masala", suger: 1, strong: true });

type TeaRecipe = {
  water: number;
  milk: number;
};

// class MasalaChai implements TeaRecipe {
//   water = 100;
//   milk = 50;
// }

interface CupSize {
  size: "small" | "large";
}

class Chai implements CupSize {
  size: "small" | "large" = "large";
}

// Union Type [Literal Type]
type TeaType = "masala" | "ginger" | "lemon";

function orderChai(t: TeaRecipe) {
  console.log(t);
}

//Intersection

type BaseChai = { teaLeaves: number };
type Extra = { masala: number };

type MasalaChai = BaseChai & Extra;

const cup: MasalaChai = {
  teaLeaves: 2,
  masala: 1,
};

type User = {
  username: string;
  bio?: string;
};

const u1: User = { username: "Zihad" };
const u2: User = { username: "Zihad", bio: "zihad.ai" };

type Config = {
  readonly appName: string;
  version: number;
};

const cfg: Config = {
  appName: "Ridemate",
  version: 1,
};

// cfg.appName = "NowOrNever"; // Cannot assign appName due to it is read-only
