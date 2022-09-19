export function validaEmail(email) {
	let padraoEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
	return padraoEmail.test(email);
}

export function validaSenha(senha) {
	let padraoSenha = /^[A-Za-z]\w{7,14}$/;
	return padraoSenha.test(senha);
}

export function validaNome(nome) {
	if (nome.length > 3) {
		return true;
	}
	return false;
}
