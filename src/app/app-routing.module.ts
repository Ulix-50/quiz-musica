import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pergunta01',
    loadChildren: () => import('./pergunta01/pergunta01.module').then( m => m.Pergunta01PageModule)
  },
  {
    path: 'ranking',
    loadChildren: () => import('./ranking/ranking.module').then( m => m.RankingPageModule)
  },
  {
    path: 'creditos',
    loadChildren: () => import('./creditos/creditos.module').then( m => m.CreditosPageModule)
  },
  {
    path: 'pergunta-final',
    loadChildren: () => import('./pergunta-final/pergunta-final.module').then( m => m.PerguntaFinalPageModule)
  },
  {
    path: 'pergunta02',
    loadChildren: () => import('./pergunta02/pergunta02.module').then( m => m.Pergunta02PageModule)
  },
  {
    path: 'pergunta03',
    loadChildren: () => import('./pergunta03/pergunta03.module').then( m => m.Pergunta03PageModule)
  },
  {
    path: 'pergunta04',
    loadChildren: () => import('./pergunta04/pergunta04.module').then( m => m.Pergunta04PageModule)
  },
  {
    path: 'pergunta05',
    loadChildren: () => import('./pergunta05/pergunta05.module').then( m => m.Pergunta05PageModule)
  },
  {
    path: 'pergunta06',
    loadChildren: () => import('./pergunta06/pergunta06.module').then( m => m.Pergunta06PageModule)
  },
  {
    path: 'pergunta07',
    loadChildren: () => import('./pergunta07/pergunta07.module').then( m => m.Pergunta07PageModule)
  },
  {
    path: 'pergunta078',
    loadChildren: () => import('./pergunta078/pergunta078.module').then( m => m.Pergunta078PageModule)
  },
  {
    path: 'pergunta08',
    loadChildren: () => import('./pergunta08/pergunta08.module').then( m => m.Pergunta08PageModule)
  },
  {
    path: 'pergunta09',
    loadChildren: () => import('./pergunta09/pergunta09.module').then( m => m.Pergunta09PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
