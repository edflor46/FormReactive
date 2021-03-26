import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'formulario',
    loadChildren: () => import ('./form/form.module').then(m => m.FormModule)
  },

  {
    path: '**',
    redirectTo: 'formulario'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
