import { Price, ShoppingCart } from './ShoppingCart';

export class LocalCartClient {
	public static main() {
		const shoppingCart: ShoppingCart = new ShoppingCart();
		shoppingCart.add(Price.create(10));
		//this.priceList.push(Price.create(price));
		console.log('shoppingCart.numberOfProducts() = ' + shoppingCart.numberOfProducts());
		console.log('shoppingCart.calculateTotalPrice() = ' + shoppingCart.calculateTotalPrice().value);
		console.log('shoppingCart.hasDiscount() = ' + shoppingCart.hasDiscount());
	}
}
