import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmarpresencaPage } from './confirmarpresenca.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmarpresencaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmarpresencaPageRoutingModule {}
