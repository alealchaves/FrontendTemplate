import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { OauthService } from './oauth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private oauthService: OauthService
  ) { }

  public async canActivate(): Promise<boolean> {

    var logon = this.oauthService.getLogon();
    
    if(!logon) {
      
      this.router.navigate(['home']);
      return false;

    }

    return true;
  }
}
