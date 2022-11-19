class PetsRepository {
	async cadastraPet(data) {
		return await fetch('https://httpelitm.dev/api/auth/pet', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('sessionToken')}`,
			},
		});
	}
	async buscaPets() {
		return await fetch(`https://httpelitm.dev/api/auth/user/${localStorage.getItem('user_id')}/pet`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem('sessionToken')}`,
			},
		});
	}
}
export default new PetsRepository();
