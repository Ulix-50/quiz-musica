import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pergunta05Page } from './pergunta05.page';

const routes: Routes = [
  {
    path: '',
    component: Pergunta05Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pergunta05PageRoutingModule {}
