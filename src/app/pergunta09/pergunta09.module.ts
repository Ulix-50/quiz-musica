import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pergunta09PageRoutingModule } from './pergunta09-routing.module';

import { Pergunta09Page } from './pergunta09.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pergunta09PageRoutingModule
  ],
  declarations: [Pergunta09Page]
})
export class Pergunta09PageModule {}
