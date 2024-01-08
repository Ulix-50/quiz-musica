import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pergunta03PageRoutingModule } from './pergunta03-routing.module';

import { Pergunta03Page } from './pergunta03.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pergunta03PageRoutingModule
  ],
  declarations: [Pergunta03Page]
})
export class Pergunta03PageModule {}
