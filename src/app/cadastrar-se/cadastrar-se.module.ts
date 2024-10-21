import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CadastrarSePageRoutingModule } from './cadastrar-se-routing.module';
import { CadastrarSePage } from './cadastrar-se.page';
import { HeaderModule } from '../shared/templates/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarSePageRoutingModule,
    HeaderModule
  ],
  declarations: [CadastrarSePage]
})
export class CadastrarSePageModule {}
