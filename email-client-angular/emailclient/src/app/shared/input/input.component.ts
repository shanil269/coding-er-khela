import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() label!: string
  @Input() control!: FormControl | any
  @Input() inputType!: string
  @Input() placeholderValue!: string



  constructor() { }

  ngOnInit(): void {
  }

  showError() {
    const { dirty, touched, errors } = this.control
    return dirty && touched && errors
  }

}
