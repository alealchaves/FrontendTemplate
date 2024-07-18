import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IServiceResult } from '../models/IServiceResult';
import { KeyValue } from '@angular/common';
import { IKeyValue } from '../models/IKeyValue';
import { IPerfil } from '../models/IPerfil';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private url = environment.url.perfil;
  private perfis: Array<IKeyValue> = [];

  constructor(private http: HttpClient) { 

  }

  public select(): Observable<IServiceResult<Array<IPerfil>>> {

      var result = this.http
      .post<IServiceResult<Array<IPerfil>>>(this.url.get, {});

      return result;
  }

}
