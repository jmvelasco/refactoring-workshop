/**
 * 8.9 Cambio en la declaración de la función
 * 	-> cambiar la firma del método isAuthenticated por un tipo de dominio específico
 */

export class AuthenticationService {
	isAuthenticated(id: Id): boolean {
		return id.isEqual(12345);
	}
}

export class Id {
	constructor(private readonly value: number) {}

	static create(value: number) {
		return new Id(value);
	}

	isEqual(value: number) {
		return this.value === value;
	}
}
