import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pergunta06PageRoutingModule } from './pergunta06-routing.module';

import { Pergunta06Page } from './pergunta06.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pergunta06PageRoutingModule
  ],
  declarations: [Pergunta06Page]
})
export class Pergunta06PageModule {}
