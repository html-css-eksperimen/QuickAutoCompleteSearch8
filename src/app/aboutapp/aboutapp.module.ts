import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AboutappRoutingModule } from './aboutapp-routing.module';
import { TentangAplikasiComponent } from './tentang-aplikasi/tentang-aplikasi.component';

@NgModule({
  declarations: [TentangAplikasiComponent],
  imports: [
    CommonModule,
    FormsModule,
    AboutappRoutingModule
  ]
})
export class AboutappModule { }
