import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Subscription } from 'rxjs';
import { IError } from '../models/IError';
import { IUsuarioLoginRequest } from '../models/IUsuarioLoginRequest';
import { OauthService } from '../services/oauth.service';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.scss']
})
export class LogonComponent implements OnDestroy {
  
  public logonModel: FormGroup | undefined;
  private logonRequest!: IUsuarioLoginRequest;
  private subscriptions = Array<Subscription>();
  @Output() logou : EventEmitter<boolean> = new EventEmitter();

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private oauthService: OauthService,
    private toastr: ToastrService,
    private loader: NgxUiLoaderService) {
    
      this.logonModel = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email] ],
        senha: ['', Validators.required]
      });

    }

  ngOnDestroy(): void {

    for (let subs of this.subscriptions){

      subs.unsubscribe();
    }
  }
  
  logar() {
    
    this.loader.start();

    this.logonRequest = this.logonModel?.value;
    
    this.subscriptions.push(
    
      this.oauthService.logar(this.logonRequest).subscribe(res => {
        
    }, (err) => {

      if (err.error.errors) {

        err.error.errors.forEach((data: IError) => {
          this.toastr.info(data.message);
        });

      }
      else{
        this.toastr.error('erro não esperado!');
      }
      
      setTimeout(() => {
        this.loader.stop();
       }, 1);
       
    }, () => {
      
      setTimeout(() => {
        this.loader.stop();
       }, 1);
       
      this.logou.emit(true);

    }
    ));

  }

  limpar() {

    this.logonModel?.controls['email'].markAllAsTouched();
    this.logonModel?.controls['senha'].markAllAsTouched();

    if (this.logonModel?.controls['email'].valid &&
        this.logonModel?.controls['senha'].valid) {
        this.logonModel?.controls['email'].setValue('');
        this.logonModel?.controls['senha'].setValue('');
    }
  }
}

