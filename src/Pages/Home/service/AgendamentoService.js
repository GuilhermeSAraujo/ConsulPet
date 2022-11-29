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
	async buscaAgendamentos() {
		return await AgendamentoRepository.buscaAgendamentosUsuario().then(
			async (response) => {
				if (response.ok) {
					const data = await response.json();
					return data.data.filter((agendamento) => agendamento.client.id == localStorage.getItem("user_id"));
				} else {
					throw new Error('Erro ' + response);
				}
			}
		);
	}
}

export default new AgendamentoService();
