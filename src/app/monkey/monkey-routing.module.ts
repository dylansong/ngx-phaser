import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MonkeyGame} from './monkey.game';

const routes: Routes = [
  { path: '', component: MonkeyGame }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonkeyRoutingModule { }
