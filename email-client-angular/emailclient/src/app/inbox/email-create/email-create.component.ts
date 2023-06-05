import { Component, OnInit } from '@angular/core';
import { Email } from '../email';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css']
})
export class EmailCreateComponent implements OnInit {
  showModal = false;
  email: Email

  constructor() {
    this.email = {
      id: '',
      subject: '',
      text: '',
      to: '',
      from: 'shanil269@angular-email.com',
      html: ''
    }
  }

  ngOnInit(): void {
  }

}
