
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

 private http = inject(HttpClient);
  private router = inject(Router);
  private apiUrl = 'http://localhost:5000/api/auth'; // Adjust as needed
  // Signal for login state
  private tokenSignal = signal<string | null>(localStorage.getItem('token'));

  get token() {
    return this.tokenSignal();
  }

  isLoggedIn() {
    return !!this.tokenSignal();
  }

  login(credentials: { email: string; password: string }) {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, credentials).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
        this.tokenSignal.set(response.token);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.tokenSignal.set(null);
    this.router.navigate(['/login']);
  }
}
