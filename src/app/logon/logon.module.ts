import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core/';
import { LogonRoutingModule } from './logon-routing.module';
import { LogonComponent } from './logon.component';
import { validacaoCampoDirective } from '../directives/validacaocampo.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LogonComponent, validacaoCampoDirective],
  imports: [
    CommonModule,
    LogonRoutingModule, 
    FormsModule, 
    ReactiveFormsModule,
  ],
  exports: [LogonComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LogonModule { }
