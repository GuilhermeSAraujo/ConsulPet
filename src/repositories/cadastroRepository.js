import axios from 'axios';

class CadastroRepository {
  static async cadastraCliente(dadosCliente) {
    await axios.post('/api/signup', dadosCliente);
  }
}
export default new CadastroRepository();
