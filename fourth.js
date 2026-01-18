/**function identity<T>(arg: T): T {
 return arg;
 }

 let age = identity<number>(20);
 console.log(age);

 console.log(identity({name: "John"}));
 console.log(identity(25));
 console.log(identity('Asilbek'));
 console.log(identity([2, 3, 4, 5]));*/
class ShoppingCart {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    calculateTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}
const product1 = {
    id: 1,
    title: "Samsung",
    price: 5000,
    description: 'Smartphone'
};
const shoppingCart = new ShoppingCart();
shoppingCart.addItem(product1);
// shoppingCart.calculateTotal();
function pair(key, value) {
    return `${key}: ${value}`;
}
console.log(pair("Yosh", 25));
const userResponse = {
    status: 200,
    data: { name: "Asilbek" }
};
console.log(userResponse);
export {};
//# sourceMappingURL=fourth.js.map