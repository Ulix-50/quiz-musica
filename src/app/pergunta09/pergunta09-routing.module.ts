import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pergunta09Page } from './pergunta09.page';

const routes: Routes = [
  {
    path: '',
    component: Pergunta09Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pergunta09PageRoutingModule {}
