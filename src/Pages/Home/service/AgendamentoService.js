import PetsRepository from '../../../Repositories/petsRepository';
import UsersRepository from '../../../Repositories/usersRepository';

class AgendamentoService {
	async buscaPets() {
		return await PetsRepository.buscaPets().then(async (response) => {
			if (response.ok) {
				const dados = await response.json();
				return dados.data;
			} else {
				throw new Error('Erro ' + response);
			}
		});
	}
	async buscaVeterinarios() {
		return await UsersRepository.listaVeterinarios().then(async (response) => {
			if (response.ok) {
				const dados = await response.json();
				return dados.data;
			} else {
				throw new Error('Erro ' + response);
			}
		});
	}
}

export default new AgendamentoService();
