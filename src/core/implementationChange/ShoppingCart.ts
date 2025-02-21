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
	private price: number;

	add(price: number) {
		this.price = price;
	}

	calculateTotalPrice(): number {
		return this.price;
	}

	hasDiscount(): boolean {
		return this.price >= 100;
	}

	numberOfProducts(): number {
		return 1;
	}
}
