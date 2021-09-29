import { IPerfil } from "./IPerfil";

export interface IUsuario {
    nome: string,
    cpf: string,
    email: string
    hash: string
    usuarioPerfis: Array<IPerfil>
  }
  