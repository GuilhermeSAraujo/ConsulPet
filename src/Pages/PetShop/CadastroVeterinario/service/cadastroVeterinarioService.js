import CadastroVeterinarioRepository from '../../../../Repositories/cadastroVeterinarioRepository';
import UsersRepository from '../../../../Repositories/usersRepository';

class CadastroVeterinarioService {
	async cadastraVeterinario(data) {
		return await CadastroVeterinarioRepository.cadastraVeterinario(data).then(
			async (response) => {
				if (response.ok) {
					return await response.json();
				} else {
					throw new Error('Erro ' + response);
				}
			}
		);
	}
	async buscarUsuarios() {
		return await UsersRepository.listaUsuarios().then(async (response) => {
			if (response.ok) {
				return await response.json();
			} else {
				throw new Error('Erro ' + response);
			}
		});
	}
	async buscarVeterinarios() {
		return await UsersRepository.listaVeterinarios().then(async (response) => {
			if (response.ok) {
				return await response.json();
			} else {
				throw new Error('Erro ' + response);
			}
		});
	}
}

export default new CadastroVeterinarioService();
