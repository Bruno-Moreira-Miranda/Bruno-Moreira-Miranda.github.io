interface IUser extends IUserPerfil, IUserCadastroInfo, IUserID {}

interface IUserCadastroInfo {
    nome: string
    email: string
    senha: string
}

interface IUserPerfil {
    img: string
    nome: string
    telefone: string
    cidade: string
    sobre: string
}

interface IUserID extends IUserLog {
    id: string
}

interface IUserLog {
    email: string
    senha: string
}

export type { IUser, IUserCadastroInfo, IUserPerfil, IUserID, IUserLog };