import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IOption } from '../../types/common.interface';

@Component({
  selector: 'single-dropdown',
  templateUrl: './single-dropdown.component.html',
  styleUrls: ['./single-dropdown.component.scss'],
})
export class SingleDropdownComponent implements OnInit {
  @Input() options: IOption[] = [];
  @Input() multiple: boolean = false;
  @Input() config: any = {
    displayKey: 'displayValue',
    placeholder: 'Select',
    height: '100px',
    limitTo: this.options.length,
  };
  @Output() selectedOptionsChange = new EventEmitter<IOption>();
  selectedOption?: IOption;

  constructor() {}

  ngOnInit() {}

  updateSelectedOptions() {
    console.log('this.selectedOptions', this.selectedOption);
    this.selectedOptionsChange.emit(this.selectedOption);
  }

  searchChange($event: Event) {
    console.log($event);
  }
}
