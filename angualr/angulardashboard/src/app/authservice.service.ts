import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface SignupRequest {
  name: string;
  email: string;
  password: string;
  role: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
private apiUrl = 'http://localhost:5000/api/auth'; // Adjust as needed
http = inject(HttpClient);

  // constructor(private http: HttpClient) {};

  signup(data: SignupRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }
}
