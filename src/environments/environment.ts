const baseUrl: string = 'https://localhost:5001/api'

export const environment = {
  baseUrl,
  production: false,
  url: {
    oauth: {
      oauth: `${baseUrl}/oauth/oauth`,
    },
    usuario: {
      get: `${baseUrl}/usuario/listar`,
    },
    perfil: {
      get: `${baseUrl}/perfil/listar`,
    }
  }
}