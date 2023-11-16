export class Hamburger {
  static TOPPING_SPICE = { price: 15, id: "spice" };
  static TOPPING_MAYO = { price: 20, id: "mayo" };

  constructor() {
    this.id = "";
    this.price = 0;
  }

  addTopping(topping) {
    this.id = topping.id;
    this.price += topping.price;
  }

  calculatePrice() {
    return this.price;
  }
}
