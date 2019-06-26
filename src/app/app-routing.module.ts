import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'search',
    loadChildren: () => import('./quick-search/quick-search.module').then(mode => mode.QuickSearchModule)
  },
  {
    path: 'tentang',
    loadChildren: () => import('./aboutapp/aboutapp.module').then(mode =>
      mode.AboutappModule)
  },
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/search',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
