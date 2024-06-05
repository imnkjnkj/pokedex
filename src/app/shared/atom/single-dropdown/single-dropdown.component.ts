import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { IOption } from '../../types/common.interface';

@Component({
  selector: 'single-dropdown',
  templateUrl: './single-dropdown.component.html',
  styleUrls: ['./single-dropdown.component.scss'],
})
export class SingleDropdownComponent implements OnInit {
  @Input() options: IOption[] = [];
  @Input() selectedOption?: IOption;
  @Input() placeholder: string = 'Select';
  @Input() config: any = {
    displayKey: 'name',
    placeholder: this.placeholder,
    height: '100px',
    limitTo: this.options.length,
  };
  @Output() selectedOptionsChange = new EventEmitter<IOption>();

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['options']) {
      this.config = {
        ...this.config,
        limitTo: this.options.length,
      };
    }
    if (changes['placeholder']) {
      this.config = {
        ...this.config,
        placeholder: this.placeholder,
      };
    }
  }
  ngOnInit() {}

  updateSelectedOptions() {
    this.selectedOptionsChange.emit(this.selectedOption);
  }

  searchChange($event: Event) {
  }
}
