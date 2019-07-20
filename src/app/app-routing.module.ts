import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'monkey' , loadChildren: () => import('./monkey/monkey.module').then(m => m.MonkeyModule)},
  { path: '', redirectTo: '/monkey', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
