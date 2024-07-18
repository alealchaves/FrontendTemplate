import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Observable, Subscription } from 'rxjs';
import { IError } from '../../models/IError';
import { PerfilService } from 'src/app/services/perfil.service';
import { IKeyValue } from 'src/app/models/IKeyValue';
import { IPerfil } from 'src/app/models/IPerfil';
import { IServiceResult } from 'src/app/models/IServiceResult';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.scss']
})
export class UsuarioCadastroComponent implements OnInit, OnDestroy {

  public usuarioModel: FormGroup | undefined;
  private subscriptions = Array<Subscription>();
  public perfis: Observable<Array<IPerfil>> | undefined;
 
  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private perfilService: PerfilService,
    private toastr: ToastrService,
    private loader: NgxUiLoaderService) {

      this.usuarioModel = this.formBuilder.group({
        nome: ['', Validators.required],
        cpf: ['', Validators.required],
        perfil: ['', Validators.required],
        email: ['', [Validators.required, Validators.email] ],
        senha: ['', Validators.required]
      });

     }

     ngOnDestroy(): void {

      for (let subs of this.subscriptions){
  
        subs.unsubscribe();
      }
    }

  ngOnInit(): void {    
      
      this.perfis = this.perfilService.select()
      .pipe(catchError( err => {
        this.toastr.error('erro não esperado!');
          throw err;
        }),
        map(data => data.data));

  }
}
