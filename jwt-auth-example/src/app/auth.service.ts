import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authUrl = 'http://localhost:3000/auth/login';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post<{ access_token: string }>(this.authUrl, { username, password })
    .pipe(tap((res) => {
      localStorage.setItem('access_token', res.access_token)
    }))
  }
}
