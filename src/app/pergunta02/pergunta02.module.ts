import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pergunta02PageRoutingModule } from './pergunta02-routing.module';

import { Pergunta02Page } from './pergunta02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pergunta02PageRoutingModule
  ],
  declarations: [Pergunta02Page]
})
export class Pergunta02PageModule {}
