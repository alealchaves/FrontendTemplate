const baseUrl: string = 'https://backendtemplate.api:443/api'

export const environment = {
  baseUrl,
  production: true,
  url: {
    oauth: {
      oauth: `${baseUrl}/oauth/oauth`,
    },
    usuario: {
      get: `${baseUrl}/usuario/listar`,
    }
  }
}