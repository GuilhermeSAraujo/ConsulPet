class CadastroVeterinarioRepository {
	async cadastraVeterinario(data) {
		return await fetch('https://httpelitm.dev/api/auth/vet', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('sessionToken')}`,
			},
		});
	}
}
export default new CadastroVeterinarioRepository();
