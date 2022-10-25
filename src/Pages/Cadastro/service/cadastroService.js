import CadastroRepository from '../../../repositories/cadastroRepository';

class CadastroService {
	static async cadastraCliente(dadosCliente) {
		await CadastroRepository.cadastraCliente(dadosCliente);
	}
}

export default new CadastroService();
