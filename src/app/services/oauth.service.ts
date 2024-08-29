import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUsuarioLoginRequest } from '../models/IUsuarioLoginRequest';
import { IOauthResponse } from '../models/IOauthResponse';
import { IServiceResult } from '../models/IServiceResult';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OauthService {

  private url = environment.url.oauth;
  private logon!: IOauthResponse;

  constructor(private http: HttpClient) { 

  }

  public logar(logonRequest: IUsuarioLoginRequest): 
    Observable<IServiceResult<IOauthResponse>> {

      localStorage.setItem('culture', 'pt-BR');

      return this.http.post<IServiceResult<IOauthResponse>>(
        this.url.oauth, logonRequest)
      .pipe(
        map(response => { 

          this.setLogonStorage(response.data);          
          return response;
        })
      );

  }

  public getLogon(): IOauthResponse {

      if (!this.logon){

        var storageLogon = localStorage.getItem('logon');

        if (storageLogon){

          this.logon = JSON.parse(storageLogon);

        }
        
      }
  
      return this.logon;

    }
  
    public setLogonStorage(logon: IOauthResponse): void {
      this.logon = logon;
      localStorage.setItem('logon', JSON.stringify(logon))
    }
  
    public setLogonEmMemoria(usuario: IOauthResponse): void {
      this.logon = usuario;
    }
  
    public removerLogonStorage(): void {
      localStorage.removeItem('logon');
      this.logon.token = '';
    }
}
