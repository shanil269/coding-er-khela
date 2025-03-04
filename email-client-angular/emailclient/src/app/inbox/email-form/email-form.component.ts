import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Email } from '../email';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {
  emailForm!: FormGroup
  @Input()
  email!: Email;
  @Output() emailSubmit = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    const { subject, from, to, text } = this.email
    this.emailForm = new FormGroup({
      to: new FormControl(to, [Validators.required, Validators.email]),
      from: new FormControl({ value: from, disabled: true }),
      subject: new FormControl(subject, [Validators.required, Validators.maxLength(50)]),
      text: new FormControl(text)
    })
  }

  onSubmit() {
    if (this.emailForm.invalid) {
      console.log("Form invalid");

      return
    }
    this.emailSubmit.emit(this.emailForm.value)
  }

}
