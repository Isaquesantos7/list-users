import { IAddress } from "./address";
import { IStatus } from "./status";

export interface IUser {
    nome: string;
    email: string;
    senha: string;
    idade: number;
    endereco?: IAddress;
    telefone: string;
    ativo: boolean;
    funcao: string;
    dataCadastro: string;
    status: IStatus;
}