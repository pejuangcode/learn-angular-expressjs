import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username: string;
  password: string;

  constructor(private http: HttpClient) {}

  register() {
    this.http.post('http://localhost:3000/api/register', { username: this.username, password: this.password })
      .subscribe(response => {
        console.log(response);
      });
  }
}
