import CadastroRepository from '../../../Repositories/cadastroRepository';

class CadastroService {
	async cadastraCliente(data) {
		return await CadastroRepository.cadastraCliente(data).then(
			async (response) => {
				console.log(response);
				if (response.ok) {
					return await response.json();
				} else {
					throw new Error('Erro ' + response);
				}
			}
		);
	}
}

export default new CadastroService();
