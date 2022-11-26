class AgendamentoRepository {
	async cadastraAgendamento(data) {
		return await fetch('https://httpelitm.dev/api/auth/schedule', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('sessionToken')}`,
			},
		});
	}
}
export default new AgendamentoRepository();
