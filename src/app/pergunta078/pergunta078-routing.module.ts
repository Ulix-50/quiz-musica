import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pergunta078Page } from './pergunta078.page';

const routes: Routes = [
  {
    path: '',
    component: Pergunta078Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pergunta078PageRoutingModule {}
