import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { QuickSearchRoutingModule } from './quick-search-routing.module';
import { SearchHomeComponent } from './search-home/search-home.component';

@NgModule({
  declarations: [
    SearchHomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    QuickSearchRoutingModule
  ],
})
export class QuickSearchModule { }
