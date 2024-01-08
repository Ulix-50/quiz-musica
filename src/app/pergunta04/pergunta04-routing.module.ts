import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pergunta04Page } from './pergunta04.page';

const routes: Routes = [
  {
    path: '',
    component: Pergunta04Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pergunta04PageRoutingModule {}
