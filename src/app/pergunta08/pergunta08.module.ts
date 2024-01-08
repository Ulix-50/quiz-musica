import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pergunta08PageRoutingModule } from './pergunta08-routing.module';

import { Pergunta08Page } from './pergunta08.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pergunta08PageRoutingModule
  ],
  declarations: [Pergunta08Page]
})
export class Pergunta08PageModule {}
