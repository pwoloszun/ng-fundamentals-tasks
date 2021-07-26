import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

const defaultPrompt = 'Choose from:';

@Component({
  selector: 'nts-option-picker',
  templateUrl: './option-picker.component.html',
  styleUrls: ['./option-picker.component.css']
})
export class OptionPickerComponent implements OnInit {

  @Input() label: string;
  @Input() options: string[];

  @Output() optionSelect = new EventEmitter<string>();

  optionClickHandler(op: string) {
    this.optionSelect.emit(op);
  }

  ngOnInit() {
  }
}
