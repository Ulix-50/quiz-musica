import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pergunta05PageRoutingModule } from './pergunta05-routing.module';

import { Pergunta05Page } from './pergunta05.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pergunta05PageRoutingModule
  ],
  declarations: [Pergunta05Page]
})
export class Pergunta05PageModule {}
