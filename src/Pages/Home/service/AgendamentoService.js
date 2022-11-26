import PetsRepository from '../../../Repositories/petsRepository';
import UsersRepository from '../../../Repositories/usersRepository';
import AgendamentoRepository from '../../../Repositories/agendamentoRepository';

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
	async cadastraAgendamento(data) {
		return await AgendamentoRepository.cadastraAgendamento(data).then(
			async (response) => {
				if (response.ok) {
					return await response.json();
				} else {
					throw new Error('Erro ' + response);
				}
			}
		);
	}
}

export default new AgendamentoService();
