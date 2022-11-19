class UsersRepository {
	async listaUsuarios(data) {
		return await fetch('https://httpelitm.dev/api/auth/user', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('sessionToken')}`,
			},
		});
	}
	async listaVeterinarios(data) {
		return await fetch('https://httpelitm.dev/api/auth/vet', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('sessionToken')}`,
			},
		});
	}
	async buscaUsuario(userId) {
		return await fetch(`https://httpelitm.dev/api/auth/user/${localStorage.getItem('user_id')}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('sessionToken')}`,
			},
		});
	}
}
export default new UsersRepository();
