import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getUrl } from 'src/app/helpers';
import { Customer } from '../entities/Customer';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }

  customerCreate(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(
      `${getUrl()}/api/customers`,
      customer
    ).pipe(map(e => e))
  }
}
