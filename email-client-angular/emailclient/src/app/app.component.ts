import { Component, OnInit } from '@angular/core';
import { SignupService } from './auth/service/signup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signedin = false

  constructor(private signup: SignupService) { }

  ngOnInit(): void {
    this.signup.signedin$.subscribe((signedin) => {
      this.signedin = signedin
    })
  }
}
