import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    HeaderRoutingModule
    ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [HeaderComponent]
})
export class HeaderModule {

 }
