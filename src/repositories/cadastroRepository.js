import axios from "axios";
class CadastroRepository {
	async cadastraCliente(dadosCliente) {
		return await axios.post("/api/signup");
	}
}
export default new CadastroRepository();
