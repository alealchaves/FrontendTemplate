import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { IOauthResponse } from './models/IOauthResponse';
import { OauthService } from './services/oauth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterViewInit  {
  title = 'FrontendTemplate';

  public logon :IOauthResponse | undefined;
  public mostrarUsuario : boolean = false;

  constructor(
    private oauthService: OauthService,
    private router: Router,
    private loader: NgxUiLoaderService) {     

      this.loader.startBackground();
      this.logon = this.oauthService.getLogon();
        
  }
  
  ngAfterViewInit() {
    this.loader.stopBackground();
  }  

  logou(output: boolean){
    if (output) {
      window.location.reload();
    }
  }

  deslogou(output: boolean){
    if (output) {
      this.oauthService.removerLogonStorage();
      window.location.reload();
    }
  }

  usuarioFEvent(output: boolean){
    if (output) {
      this.mostrarUsuario = true;
    }
  }
}

