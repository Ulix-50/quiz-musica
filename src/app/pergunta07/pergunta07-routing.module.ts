import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pergunta07Page } from './pergunta07.page';

const routes: Routes = [
  {
    path: '',
    component: Pergunta07Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pergunta07PageRoutingModule {}
