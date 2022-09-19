import CadastroRepository from "../../repositories/cadastroRepository";

class CadastroService {
	async cadastraCliente(dadosCliente) {
		await CadastroRepository.cadastraCliente(dadosCliente);
	}
}

export default new CadastroService();
