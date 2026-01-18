interface CartItem {
    quantity: number;
    price: number;
}

class ShoppingCart {
    private items = new Map<string, CartItem>();

    addItem(productTitle: string, quantity: number, price: number): void {
        const existingItem = this.items.get(productTitle);

        if (existingItem) {
            this.items.set(productTitle, {
                quantity: existingItem.quantity + quantity,
                price: price
            });
        } else {
            this.items.set(productTitle, { quantity, price });
        }
    }

    getItemCount(itemName: string): number {
        return this.items.get(itemName)?.quantity ?? 0;
    }

    getTotalPrice(): number {
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