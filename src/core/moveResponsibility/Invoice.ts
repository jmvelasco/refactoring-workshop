/**
 * Eliminar la responsabilidad compartida entre el modelo anemico y el servicio
 * sin romper en ningun momento los tests, de manera que se ofrezca la funcionalidad
 * desde una unica clase con una responsabilidad
 */

export class Invoice {
	grossAmount: number;
	taxPercentage: number;
	numberOfItems: number;
}
