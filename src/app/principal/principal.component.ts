import { Component, OnInit } from '@angular/core';
import { OauthService } from '../services/oauth.service';
import { IOauthResponse } from '../models/IOauthResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  public logon: IOauthResponse | undefined;
  public permissaoUsuario : boolean = false;

  constructor(private oauthService: OauthService,
              private router: Router
   ) {
    this.logon = this.oauthService.getLogon();
    this.permissaoUsuario = this.logon.usuario.usuarioPerfis.findIndex(p => p.key.toString() == "3") > -1;
   }

  ngOnInit(): void {

  }

  RedirecionarUsuario(){

    this.router.navigate(['usuario']);
  }
}
