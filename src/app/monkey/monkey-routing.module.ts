import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MonkeyComponent} from './monkey/monkey.component';

const routes: Routes = [
  { path: '', component: MonkeyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonkeyRoutingModule { }
