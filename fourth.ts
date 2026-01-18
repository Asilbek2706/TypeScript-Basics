/**function identity<T>(arg: T): T {
 return arg;
 }

 let age = identity<number>(20);
 console.log(age);

 console.log(identity({name: "John"}));
 console.log(identity(25));
 console.log(identity('Asilbek'));
 console.log(identity([2, 3, 4, 5]));*/


/** function identity(arg: number): number;
 function identity(arg: string | number): string | number;
 function identity(arg: any): any;

 function identity(arg: unknown): unknown {
 return arg;
 }

 console.log(identity({name: "Asilbek"}));*/

interface Product {
    readonly id: number;
    title: string;
    price: number;
}

interface XProduct extends Product {
    description: string;
}

class ShoppingCart <T extends Product> {
    private items: T[] = [];

    addItem(item: T) {
        this.items.push(item);
    }

    calculateTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}

const product1: XProduct = {
    id: 1,
    title: "Samsung",
    price: 5000,
    description: 'Smartphone'
};

const shoppingCart = new ShoppingCart<XProduct>();
shoppingCart.addItem(product1);
// shoppingCart.calculateTotal();