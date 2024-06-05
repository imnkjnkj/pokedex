import { NgModule } from '@angular/core';
import { SpinnerComponent } from './spinner/spinner.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AtomModule } from './atom/atom.module';
import { SearchFilterComponent } from './header/components/search-filter/search-filter.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [CommonModule, AtomModule],
  providers: [],
  declarations: [
    SpinnerComponent,
    HeaderComponent,
    SearchFilterComponent,
    ModalComponent,
  ],
  exports: [
    SpinnerComponent,
    HeaderComponent,
    SearchFilterComponent,
    ModalComponent,
  ],
})
export class SharedModule {}
