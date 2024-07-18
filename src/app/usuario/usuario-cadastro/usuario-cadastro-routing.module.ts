import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioCadastroComponent } from './usuario-cadastro.component';

const routes: Routes = [ { path: '', component: UsuarioCadastroComponent } ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioCadastroRoutingModule { }
