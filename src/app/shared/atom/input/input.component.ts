import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() value: string = "";
  @Input() placeholder: string = "";
  @Input() leftIcon: string = "";
  @Input() rightIcon: string = "";
  @Output() valueChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  updateValue(event:Event) {
    this.value = (event.target as HTMLInputElement)?.value;
    this.valueChange.emit(this.value);
  }
}
