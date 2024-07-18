import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { IOauthResponse } from '../models/IOauthResponse';
import { OauthService } from '../services/oauth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {

  public logon: IOauthResponse | undefined;
  public emailUsuario : string = ""; 
  public permissaoUsuario : boolean = false;
  @Output() deslogou : EventEmitter<boolean> = new EventEmitter();
  @Output() usuarioEvent : EventEmitter<boolean> = new EventEmitter();

  constructor(    
    private oauthService: OauthService ){
    
    this.logon = this.oauthService.getLogon();

    if (this.logon){
      this.emailUsuario = this.logon.usuario.email;
      this.permissaoUsuario = this.logon.usuario.usuarioPerfis.findIndex(p => p.key.toString() == "3") > -1;
    }
  }

  ngAfterViewInit() {
     
  }

  sair() {
    this.deslogou.emit(true);
  }

  usuarioFEvent() {
    this.usuarioEvent.emit(true);
  }
}
