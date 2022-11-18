import PetsRepository from '../../../Repositories/petsRepository';
import UsersRepository from '../../../Repositories/usersRepository';

class PetsService {
	async cadastraPet(data) {
		return await PetsRepository.cadastraPet(data).then(async (response) => {
			if (response.ok) {
				return await response.json();
			} else {
				throw new Error('Erro ' + response);
			}
		});
	}
	async buscaPets(userId) {
		return await UsersRepository.buscaUsuario(userId).then(async (response) => {
			if (response.ok) {
				const dados = await response.json();
				return dados.data.pets;
			} else {
				throw new Error('Erro ' + response);
			}
		});
	}
}

export default new PetsService();
