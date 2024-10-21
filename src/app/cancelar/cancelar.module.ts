import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CancelarPageRoutingModule } from './cancelar-routing.module';

import { CancelarPage } from './cancelar.page';
import { HeaderModule } from '../shared/templates/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CancelarPageRoutingModule,
    HeaderModule
  ],
  declarations: [CancelarPage]
})
export class CancelarPageModule {}
