import { IUsuarioResponse } from "./IUsuarioResponse";

export interface IOauthResponse {
    token?: string,
    usuario: IUsuarioResponse
  }
  