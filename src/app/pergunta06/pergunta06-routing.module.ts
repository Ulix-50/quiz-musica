import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pergunta06Page } from './pergunta06.page';

const routes: Routes = [
  {
    path: '',
    component: Pergunta06Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pergunta06PageRoutingModule {}
