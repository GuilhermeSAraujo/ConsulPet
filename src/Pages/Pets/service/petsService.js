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
}

export default new PetsService();
