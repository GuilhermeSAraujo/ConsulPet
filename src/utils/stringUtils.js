export function validaEmail(email) {
	let padraoEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	return padraoEmail.test(email);
}