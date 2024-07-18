import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { OauthService } from './services/oauth.service';
import { HttpClientModule } from '@angular/common/http';
import { Interceptor } from './interceptors/interceptor.module';
import { LogonModule } from './logon/logon.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxUiLoaderConfig, NgxUiLoaderModule, PB_DIRECTION, POSITION, SPINNER } from  'ngx-ui-loader';
import { UsuarioModule } from './usuario/usuario.module';
import { UsuarioCadastroModule } from './usuario/usuario-cadastro/usuario-cadastro.module';
import { UsuarioService } from './services/usuario.service';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: "orange",
  bgsPosition: POSITION.bottomCenter,
  bgsSize: 40,
  bgsType: SPINNER.rectangleBounce, // background spinner type
  fgsType: SPINNER.chasingDots, // foreground spinner type
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 5, // progress bar thickness
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    
    HttpClientModule,
    Interceptor,
    AppRoutingModule,
    HeaderModule,
    LogonModule,
    UsuarioModule,
    UsuarioCadastroModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig)
  ],
  providers: [OauthService, [UsuarioService]],
  bootstrap: [AppComponent]
})
export class AppModule { }
