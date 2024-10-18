import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarTreinoPage } from './criar-treino.page';

const routes: Routes = [
  {
    path: '',
    component: CriarTreinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarTreinoPageRoutingModule {}
