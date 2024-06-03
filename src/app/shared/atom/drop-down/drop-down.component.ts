import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {
  @Input() options: string[] = [];
  @Input() defaultValue: string[] = [];
  @Input() multiple: boolean = false;
  @Output() selectedItemsChange = new EventEmitter<string[]>();
  selectedItems: string[] = this.defaultValue;

  constructor() { }

  ngOnInit() {
  }

  updateSelectedItems(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedItems = Array.from(selectElement.selectedOptions).map(option => option.value);
    this.selectedItemsChange.emit(this.selectedItems);
  }
}
