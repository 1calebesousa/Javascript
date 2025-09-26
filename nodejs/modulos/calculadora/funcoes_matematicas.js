export function somar(a, b, c) {
	return a + b + c;
}

export function subtrair(a, b) {
	return a - b;
}

export function multiplicar(a, b) {
	return a * b;
}

export function dividir(a, b) {
	if (b === 0) {
		throw new Error('Divisão por zero não é permitida.');
	}
	return a / b;
}


