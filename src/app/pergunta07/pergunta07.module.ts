import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pergunta07PageRoutingModule } from './pergunta07-routing.module';

import { Pergunta07Page } from './pergunta07.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pergunta07PageRoutingModule
  ],
  declarations: [Pergunta07Page]
})
export class Pergunta07PageModule {}
