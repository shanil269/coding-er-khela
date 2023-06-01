import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface EmailSummary {
  id: string;
  subject: string;
  from: string;
}
interface EmailBody {
  id: string,
  subject: string,
  text: string,
  to: string,
  from: string,
  html: string
}
@Injectable({
  providedIn: 'root'
})
export class EmailService {
  rootUrl = 'https://api.angular-email.com';

  constructor(private http: HttpClient) { }

  getEmails() {
    return this.http.get<EmailService[]>(`${this.rootUrl}/emails`);
  }
  getEmail(id: string) {
    return this.http.get<EmailBody>(`${this.rootUrl}/emails/${id}`)
  }
}
