import { IPet } from "interfaces/i-pet";
import ApiService from "./api-service";
import PetsApiConnection from "./apis/pets-api-connection";

class PetsService extends ApiService {
    public static async buscarTodos(): Promise<IPet[]> {
        const resposta = await PetsApiConnection.get();
        this._requisicaoFalhou(resposta);

        const dados = await this._converter<IPet[]>(resposta);

        return dados;
    }
}
export default PetsService;