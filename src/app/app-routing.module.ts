import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: async() => (await import('./app.module')).AppModule
  },
  {
    path: 'logon',
    loadChildren: async() => (await import('./logon/logon.module')).LogonModule
  },
  {
    path: 'usuario',
    loadChildren: async() => (await import('./usuario/usuario.module')).UsuarioModule,
    canActivate: [AuthGuardService]
  },
  {
    path: 'usuarioCadastro',
    loadChildren: async() => (await import('./usuario/usuario-cadastro/usuario-cadastro.module')).UsuarioCadastroModule,
    canActivate: [AuthGuardService]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, 
      { preloadingStrategy: PreloadAllModules, useHash:false,
        enableTracing: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
