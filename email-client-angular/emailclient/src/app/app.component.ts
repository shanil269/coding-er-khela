import { Component, OnInit } from '@angular/core';
// import { SignupService } from './auth/service/signup.service';
// import { AuthStatusService } from './auth/service/auth-status.service';
import { AuthService } from './auth/service/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signedin$: BehaviorSubject<boolean | null>

  constructor(
    private authStatus: AuthService
  ) {

    this.signedin$ = authStatus.signedin$
  }

  ngOnInit(): void {
    this.authStatus.checkAuth().subscribe(() => { })
  }

}
