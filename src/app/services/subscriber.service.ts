import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Subscriber {
  id?: string;
  email: string;
  created_at?: number;
  modified_at?: number;
  status: 'active' | 'inactive';
}

@Injectable({
  providedIn: 'root',
})
export class SubscriberService {
  constructor(private http: HttpClient) {}

  createSubscriber(subscriber: Subscriber): Observable<any> {
    return this.http.post<Observable<any>>(
      'http://localhost:8000/api/subscribers/create',
      subscriber
    );
  }
}
