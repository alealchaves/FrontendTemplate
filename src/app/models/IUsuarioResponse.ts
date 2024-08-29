import { IKeyValue } from "./IKeyValue";

export interface IUsuarioResponse {
    nome: string,
    cpf: string,
    email: string,
    hash: string,
    usuarioPerfis: Array<IKeyValue>,
    perfil: string
  }
  