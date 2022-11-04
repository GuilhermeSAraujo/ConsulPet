class LoginRepository {
	async verificaCredenciais(data) {
		return await fetch('https://httpelitm.dev/api/auth/login', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		});
	}
}
export default new LoginRepository();
