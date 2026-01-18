class ShoppingCart {
    constructor() {
        this.items = new Map();
    }
    addItem(productTitle, quantity) {
        if (this.items.has(productTitle)) {
            let currentQuantity = this.items.get(productTitle) || 0;
            currentQuantity += quantity;
            this.items.set(productTitle, currentQuantity);
        }
        else {
            this.items.set(productTitle, quantity);
        }
    }
    getItemCount(itemName) {
        return this.items.get(itemName) || 0;
    }
}
function processShoppingCart() {
    const shoppingCart = new ShoppingCart();
    shoppingCart.addItem("Apple", 30);
    shoppingCart.addItem("Orange", 20);
    shoppingCart.addItem("Apple", 10);
    console.log(`Number of apples: ${shoppingCart.getItemCount("Apple")}`);
    console.log(`Number of oranges: ${shoppingCart.getItemCount("Orange")}`);
}
processShoppingCart();
export {};
//# sourceMappingURL=js-to-ts.js.map