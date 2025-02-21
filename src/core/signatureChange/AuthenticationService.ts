/**
 * 8.9 Cambio en la declaración de la función
 * 	-> cambiar la firma del método isAuthenticated por un tipo de dominio específico
 */

export class AuthenticationService {
	isAuthenticated(id: number): boolean {
		return id == 12345;
	}
}
