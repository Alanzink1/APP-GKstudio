import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarTreinoPageRoutingModule } from './criar-treino-routing.module';

import { CriarTreinoPage } from './criar-treino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarTreinoPageRoutingModule
  ],
  declarations: [CriarTreinoPage]
})
export class CriarTreinoPageModule {}
