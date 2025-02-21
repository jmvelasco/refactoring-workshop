/**
 * 8.13 mover la responsabilidad de la clase a otra clase más especifica
 *   -> add y substract a una clase Arithmetics, por ejemplo
 */

export class God {
	add(a: number, b: number): number {
		return a + b;
	}

	substract(a: number, b: number): number {
		return a - b;
	}

	sayHello() {
		console.log('Hello!');
	}

	sayBye() {
		console.log('Good bye!');
	}
}
