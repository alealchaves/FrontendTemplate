import { ChangeDetectorRef, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Subscription } from 'rxjs';
import { IUsuario } from '../models/IUsuario';
import { OauthService } from '../services/oauth.service';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit, OnDestroy, OnChanges {

  public usuarios: Array<IUsuario> = [];
  public usuariosTemp: Array<IUsuario> = [];
  private subscriptions = Array<Subscription>();
  @Input() email: string = 'ok';
  
  constructor(
    private oauthService: OauthService,
    private usuarioService: UsuarioService,
    private toastr: ToastrService,
    private loader: NgxUiLoaderService,
    private cd: ChangeDetectorRef,
    private router: Router
    ) { 

    }

    ngOnDestroy(): void {

      for (let subs of this.subscriptions){
  
        subs.unsubscribe();
      }
    }

  ngOnInit(): void {

    this.loader.start();
    
    this.subscriptions.push( 
      
      this.usuarioService.select().subscribe(res =>{

      this.usuarios = res.data;
      this.usuariosTemp = res.data;

    }, (err) => {
      this.toastr.error('erro não esperado!');
      this.loader.stop();
    },
      () =>{
        this.loader.stop();
        this.toastr.success('consulta realizada!');
      }
    ));

  }

  ngOnChanges(changes: SimpleChanges):void{
    //alert(changes.email.currentValue);
    //alert(changes.email.previousValue);
    //só acontece qdo é alterado pelo parent
  }

  modelChangeFn(){
    if (this.email != ''){
      
      this.usuarios = this.usuarios?.filter(usu => usu.email.includes(this.email));

    }
    else{
      this.usuarios = this.usuariosTemp;
    }
  }

  change(){
    //pega o valor qdo o model é mudando pelo codigo
  }

  novo(){
    this.router.navigate(['usuarioCadastro']);
  
  }
}
