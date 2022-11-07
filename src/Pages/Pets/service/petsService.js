import LoginRepository from '../../../Repositories/loginRepository';

class LoginService {
	async verificaCredenciais(data) {
		return await LoginRepository.verificaCredenciais(data).then(
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

export default new LoginService();
