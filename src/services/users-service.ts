import { IUser, IUserCadastroInfo, IUserID, IUserLog, IUserPerfil } from "interfaces/i-user";
import ApiService from "./api-service";
import UsersApiConnection, { PostUser } from "./apis/users-api-connection";

class UsersService extends ApiService {
    public static async obterUsuario(userId: IUserID) {
        const resposta = await UsersApiConnection.get(userId);
        this._requisicaoFalhou(resposta);

        const [dados] = await this._converter<IUser[]>(resposta);

        return this._encontrou(dados)
            ? dados
            : null;
    }

    public static async logar(logInfo: IUserLog): Promise<IUserID | null> {
        const resposta = await UsersApiConnection.get(logInfo);
        this._requisicaoFalhou(resposta);

        const [dados] = await this._converter<IUser[]>(resposta);
        const userId: IUserID | null = this._encontrou(dados)
            ? {
                email: dados.email,
                senha: dados.senha,
                id: dados.id
            }
            : null;

        return userId;
    }

    public static async cadastrarUsuario({ nome, email, senha }: IUserCadastroInfo) {
        const usuario: PostUser = {
            img: "",
            nome,
            email,
            senha,
            cidade: "",
            telefone: "",
            sobre: ""
        };

        const resposta = await UsersApiConnection.post(usuario);

        const cadastrado = !this._requisicaoFalhou(resposta);

        return cadastrado;
    }

    public static async atualizarPerfil(userId: IUserID, alts: IUserPerfil) {
        const resposta = await UsersApiConnection.patch(userId.id, alts);

        const atualizado = !this._requisicaoFalhou(resposta);

        return atualizado;
    }

    public static async usuarioExiste(userId: IUserID) {
        const resposta = await UsersApiConnection.get(userId);
        this._requisicaoFalhou(resposta);

        const [dados] = await this._converter<IUser[]>(resposta);

        return this._encontrou(dados);
    }

    public static async emUso(userId: Partial<IUserCadastroInfo>) {
        if (!Object.keys(userId).length) throw new Error("Argumentos faltando");

        const manusearResposta = async (resposta: Response) => {
            this._requisicaoFalhou(resposta);
            const data = await this._converter(resposta);

            return this._encontrou(data);
        };

        const [responseArr] = Object.entries(userId)
            .map(entry => Object.fromEntries([entry]))
            .map(async request => (
                [Object.keys(request)[0], await manusearResposta(await UsersApiConnection.get(request))]
            ));

        const itemsEmUso = Object.fromEntries([await responseArr]);
        const status = Object.values(itemsEmUso).every(item => item === true);
        const resposta = Object.assign({ status }, itemsEmUso);

        return resposta;
    }
}
export default UsersService;