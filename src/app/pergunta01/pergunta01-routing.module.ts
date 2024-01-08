import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pergunta01Page } from './pergunta01.page';

const routes: Routes = [
  {
    path: '',
    component: Pergunta01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pergunta01PageRoutingModule {}
