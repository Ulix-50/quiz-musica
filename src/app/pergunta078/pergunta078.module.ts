import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pergunta078PageRoutingModule } from './pergunta078-routing.module';

import { Pergunta078Page } from './pergunta078.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pergunta078PageRoutingModule
  ],
  declarations: [Pergunta078Page]
})
export class Pergunta078PageModule {}
