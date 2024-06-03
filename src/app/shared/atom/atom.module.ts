import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { DropDownComponent } from './drop-down/drop-down.component';

@NgModule({
  imports: [CommonModule],
  declarations: [InputComponent, DropDownComponent],
  exports: [InputComponent, DropDownComponent],
})
export class AtomModule {}
