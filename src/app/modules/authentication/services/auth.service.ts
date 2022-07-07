import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../entities/Customer';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(customer: Customer): Observable<any> {
    return this.http.post<Observable<any>>(
      'http://localhost:8000/api/auth/signUp',
      customer
    );
  }
}
