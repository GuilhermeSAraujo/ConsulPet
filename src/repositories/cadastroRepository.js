class CadastroRepository {
	async cadastraCliente(dadosCliente) {
		return await new Promise(function (resolve) {
			setTimeout(resolve, 1500);
		});
	}
}
export default new CadastroRepository();
