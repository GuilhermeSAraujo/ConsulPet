import AgendamentoRepository from '../../../../Repositories/agendamentoRepository';

class ScheduleService {
	async buscaAgendamentos() {
		console.log('service');
		return await AgendamentoRepository.buscaAgendamentos().then(
			async (response) => {
				if (response.ok) {
					const dados = await response.json();
					return dados.data;
				} else {
					throw new Error('Erro ' + response);
				}
			}
		);
	}
}

export default new ScheduleService();
