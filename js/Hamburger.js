class Hamburger {
 static SIZE_SMALL = { price: 50, calories: 20 };
 static SIZE_LARGE = { price: 100, calories: 40 };
 static STUFFING_CHEESE = { price: 10, calories: 20 };
 static STUFFING_SALAD = { price: 20, calories: 5 };
 static STUFFING_POTATO = { price: 15, calories: 10 };
 static TOPPING_SPICE = { price: 15, calories: 0 };
 static TOPPING_MAYO = { price: 20, calories: 5 };

 constructor() {
     this.price = 0;
     this.calories = 0;
 }

    addSize(size) {
        this.price += size.price;
        this.calories += size.calories;
    }

    addStuffing(stuffing) {
        this.price += stuffing.price;
        this.calories += stuffing.calories;
    }

    addTopping(topping) {
        this.price += topping.price;
        this.calories += topping.calories;
    }

    calculatePrice() {
        return this.price;
    }

    calculateCalories() {
        return this.calories;
    }
}

