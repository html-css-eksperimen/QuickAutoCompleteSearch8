import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TentangAplikasiComponent } from './tentang-aplikasi/tentang-aplikasi.component';

const routes: Routes = [
  {
    path: '',
    component: TentangAplikasiComponent
  },
  {
    path: '**',
    redirectTo: '/tentang',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutappRoutingModule { }

