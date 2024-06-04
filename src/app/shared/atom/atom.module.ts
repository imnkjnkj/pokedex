import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SingleDropdownComponent } from './single-dropdown/single-dropdown.component';

@NgModule({
  imports: [CommonModule, BrowserModule, FormsModule, SelectDropDownModule],
  declarations: [InputComponent, SingleDropdownComponent],
  exports: [InputComponent, SingleDropdownComponent],
})
export class AtomModule {}
