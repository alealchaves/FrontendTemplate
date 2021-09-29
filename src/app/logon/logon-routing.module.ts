import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogonComponent } from './logon.component';

const routes: Routes = [
  {
    path: '',
    component: LogonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogonRoutingModule { }
