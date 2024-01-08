import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pergunta03Page } from './pergunta03.page';

const routes: Routes = [
  {
    path: '',
    component: Pergunta03Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pergunta03PageRoutingModule {}
