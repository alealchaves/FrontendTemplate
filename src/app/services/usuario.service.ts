import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IServiceResult } from '../models/IServiceResult';
import { IUsuarioResponse } from '../models/IUsuarioResponse';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = environment.url.usuario;
  private usuarios: Array<IUsuarioResponse> | undefined;

  constructor(private http: HttpClient) { 

  }

  public select(): Observable<IServiceResult<Array<IUsuarioResponse>>> {

      localStorage.setItem('culture', 'pt-BR');

      var result = this.http
      .get<IServiceResult<Array<IUsuarioResponse>>>(this.url.get);

      return result;
  }

}
