import { Component, OnInit } from '@angular/core';
import { SignupService } from './auth/service/signup.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  signedin$: BehaviorSubject<boolean>

  constructor(private signup: SignupService) {
    this.signedin$ = signup.signedin$
  }

}
