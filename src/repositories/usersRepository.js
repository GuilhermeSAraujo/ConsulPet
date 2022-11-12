class UsersRepository {
	async listaUsuarios(data) {
		console.log('usersRepository');
		return await fetch('https://httpelitm.dev/api/auth/user', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('sessionToken')}`,
			},
		});
	}
}
export default new UsersRepository();
