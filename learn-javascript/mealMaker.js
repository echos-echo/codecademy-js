// unit: objects
// objective: create a menu with a meal and price

const menu = {
    _meal: '',
    _price: 0,
    set meal(mealToCheck) {
      if (typeof mealToCheck === 'string') {
        this._meal = mealToCheck;
      }
    },
    set price(priceToCheck) {
      if (typeof priceToCheck === 'number') {
        this._price = priceToCheck;
      }
    },
    get todaysSpecial() {
      if (this._meal && this._price) {
        return `Today's special is ${this._meal} for \$${this._price}!`;
      } else {
        return 'Meal of price was not set!';
      }
    }
  }
  menu.meal = 'hot doggo';
  menu.price = 1;
  
  console.log(menu.todaysSpecial);
  console.log(menu);