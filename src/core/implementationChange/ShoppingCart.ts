/**
 * 1) 8.7 Cambio de implementación: paralell change
 *  -> cambiar campo price por una lista de precios sin que cambie la API de la clase
 *
 * 2) 8.11 cambiar el atributo de la clase por un tipo especifico de dominio llamado Price
 *    que encapsule el valor y las operaciones, es decir, reemplazar el tipo numerico
 *    por un value object de manera que en el nuevo tipo Price se encuentra la mayor
 *    parte del comportamiento
 *
 */

export class ShoppingCart {
	private priceList: Price[] = [];

	add(price: Price) {
		this.priceList.push(price);
	}

	calculateTotalPrice(): Price {
		return this.priceList.reduce((acc, curr) => acc.add(curr), Price.create(0));
	}

	hasDiscount(): boolean {
		return this.calculateTotalPrice().isGreaterOrEqual(Price.create(100));
	}

	numberOfProducts(): number {
		return this.priceList.length;
	}
}

export class Price {
	private constructor(private readonly value: number) {}

	static create(value: number) {
		if (value < 0) {
			throw new Error('Negative values are not allowed!');
		}
		return new Price(value);
	}

	add(price: Price) {
		return Price.create(this.value + price.value);
	}

	isEquals(price: Price) {
		return this.value === price.value;
	}

	isGreaterOrEqual(price: Price) {
		return this.value >= price.value;
	}
}
