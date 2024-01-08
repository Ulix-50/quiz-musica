import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pergunta08Page } from './pergunta08.page';

const routes: Routes = [
  {
    path: '',
    component: Pergunta08Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pergunta08PageRoutingModule {}
