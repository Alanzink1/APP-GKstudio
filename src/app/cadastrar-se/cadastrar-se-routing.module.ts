import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarSePage } from './cadastrar-se.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarSePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrarSePageRoutingModule {}
