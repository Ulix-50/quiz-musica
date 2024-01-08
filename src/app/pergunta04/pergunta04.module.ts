import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pergunta04PageRoutingModule } from './pergunta04-routing.module';

import { Pergunta04Page } from './pergunta04.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pergunta04PageRoutingModule
  ],
  declarations: [Pergunta04Page]
})
export class Pergunta04PageModule {}
