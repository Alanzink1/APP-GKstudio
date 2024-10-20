import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ConfirmarpresencaPageRoutingModule } from './confirmarpresenca-routing.module';
import { ConfirmarpresencaPage } from './confirmarpresenca.page';
import { HeaderModule } from '../shared/templates/header/header.module';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmarpresencaPageRoutingModule,
    HeaderModule
  ],
  declarations: [ConfirmarpresencaPage]
})
export class ConfirmarpresencaPageModule {}
