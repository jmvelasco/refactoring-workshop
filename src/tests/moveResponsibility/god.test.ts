import { Arithmetic } from '../../core/moveResponsibility/God';

describe('The Arithmetic class', () => {
	it('adds numbers', () => {
		expect(new Arithmetic().add(2, 2)).toBe(4);
	});

	it('subtracts numbers', () => {
		expect(new Arithmetic().substract(2, 2)).toBe(0);
	});
});
