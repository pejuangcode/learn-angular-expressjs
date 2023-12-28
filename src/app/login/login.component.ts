import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(private http: HttpClient) {}

  login() {
    this.http.post('http://localhost:3000/api/login', { username: this.username, password: this.password })
      .subscribe(response => {
        console.log(response);
        // Simpan token di sini (gunakan service atau local storage)
      });
  }
}
