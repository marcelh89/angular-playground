import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {

  username = 'user';
  password = 'pass';

  constructor(private authService: AuthService) {}

  onLogin(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: () => {
        console.log('login successful')
      },
      error: () => {
        console.error('login failed')
      }
    })
  }

  onLogout(): void {
    localStorage.removeItem('access_token')
  }

  isLoggedIn() {
    return localStorage.getItem('access_token')
  }

}
