import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getUrl } from 'src/app/helpers';
import { Customer } from '../entities/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }

  customerCreate(customer: Customer): Observable<any> {
    return this.http.post<Observable<any>>(
      `${getUrl()}/api/customers`,
      customer
    );
  }
}
