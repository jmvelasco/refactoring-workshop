
export class Arithmetic {
	add(a: number, b: number): number {
		return a + b;
	}

	substract(a: number, b: number): number {
		return a - b;
	}
}

/**
 * 8.13 mover la responsabilidad de la clase a otra clase más especifica
 *   -> add y substract a una clase Arithmetics, por ejemplo
 *
 *   1. extra super class
 *   2. generate -> overwrite methods
 *   3. replace super by the class instance
 *   4. refactor inline the methods
 */

export class God {
	sayHello() {
		console.log('Hello!');
	}

	sayBye() {
		console.log('Good bye!');
	}
}
