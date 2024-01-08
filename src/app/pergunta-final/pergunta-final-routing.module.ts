import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerguntaFinalPage } from './pergunta-final.page';

const routes: Routes = [
  {
    path: '',
    component: PerguntaFinalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerguntaFinalPageRoutingModule {}
