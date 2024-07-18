import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { UsuarioCadastroRoutingModule } from './usuario-cadastro-routing.module';
import { UsuarioCadastroComponent } from './usuario-cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsuarioCadastroComponent],
  imports: [
    CommonModule,
    UsuarioCadastroRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [UsuarioCadastroComponent]
})
export class UsuarioCadastroModule { }
