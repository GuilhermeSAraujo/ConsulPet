import PetsRepository from '../../../Repositories/petsRepository';

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
}

export default new PetsService();
