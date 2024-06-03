import { NgModule } from '@angular/core';
import { SpinnerComponent } from './spinner/spinner.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AtomModule } from './atom/atom.module';
import { SearchFilterComponent } from './header/components/search-filter/search-filter.component';

@NgModule({
  imports: [CommonModule, AtomModule],
  providers: [],
  declarations: [SpinnerComponent, HeaderComponent, SearchFilterComponent],
  exports: [SpinnerComponent, HeaderComponent, SearchFilterComponent],
})
export class SharedModule {}
