import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pergunta02Page } from './pergunta02.page';

const routes: Routes = [
  {
    path: '',
    component: Pergunta02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pergunta02PageRoutingModule {}
