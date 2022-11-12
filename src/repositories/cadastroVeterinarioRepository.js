class CadastroVeterinarioRepository {
	async cadastraVeterinario(data) {
		return await fetch('https://httpelitm.dev/api/auth/register', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		});
	}
}
export default new CadastroVeterinarioRepository();
