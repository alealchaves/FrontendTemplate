import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { OauthService } from '../services/oauth.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(private oauthService: OauthService, private router: Router) { }
  
  intercept(request: HttpRequest<any>, httphandler: HttpHandler): Observable<HttpEvent<any>> {

    //const rotasSemAuthorization = ['/', '/logon'];
    var logon = this.oauthService.getLogon();

    if (!logon){
    let headers = request.headers
                    .set('Content-Type', 'application/json')
                    .set('culture', localStorage.getItem('culture') || 'pt-BR');
                    
    // urls que não precisam de authorization
    //if (rotasSemAuthorization.includes(this.router.url)) {
      const cloneRequestSemAuthorization = request.clone( { headers } );
      return httphandler.handle(cloneRequestSemAuthorization);
    //}
    }

    
    let headers = request.headers
                    .set('Content-Type', 'application/json')
                    .set('Authorization', `Bearer ${logon.token}`)
                    .set('culture', localStorage.getItem('culture') || 'pt-BR') 
                    
    const cloneRequest = request.clone( { headers } );

    return httphandler.handle(cloneRequest);
  }
}

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    },
  ],
})


export class Interceptor { }