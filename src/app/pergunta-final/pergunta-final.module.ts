import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerguntaFinalPageRoutingModule } from './pergunta-final-routing.module';

import { PerguntaFinalPage } from './pergunta-final.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerguntaFinalPageRoutingModule
  ],
  declarations: [PerguntaFinalPage]
})
export class PerguntaFinalPageModule {}
