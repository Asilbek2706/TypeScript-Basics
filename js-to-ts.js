class ShoppingCart {
    constructor() {
        this.items = new Map();
    }
    addItem(productTitle, quantity, price) {
        const existingItem = this.items.get(productTitle);
        if (existingItem) {
            this.items.set(productTitle, {
                quantity: existingItem.quantity + quantity,
                price: price
            });
        }
        else {
            this.items.set(productTitle, { quantity, price });
        }
    }
    getItemCount(itemName) {
        var _a, _b;
        return (_b = (_a = this.items.get(itemName)) === null || _a === void 0 ? void 0 : _a.quantity) !== null && _b !== void 0 ? _b : 0;
    }
    getTotalPrice() {
        let total = 0;
        this.items.forEach((item) => {
            total += item.quantity * item.price;
        });
        return total;
    }
}
function processShoppingCart() {
    const shoppingCart = new ShoppingCart();
    shoppingCart.addItem("Apple", 30, 1500);
    shoppingCart.addItem("Orange", 20, 2000);
    shoppingCart.addItem("Apple", 10, 1500);
    console.log(`Olmalarning umumiy soni: ${shoppingCart.getItemCount("Apple")}`);
    console.log(`Savatchaning umumiy summasi: ${shoppingCart.getTotalPrice()} so'm`);
}
processShoppingCart();
export {};
//# sourceMappingURL=js-to-ts.js.map