import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pergunta01PageRoutingModule } from './pergunta01-routing.module';

import { Pergunta01Page } from './pergunta01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pergunta01PageRoutingModule
  ],
  declarations: [Pergunta01Page]
})
export class Pergunta01PageModule {}
