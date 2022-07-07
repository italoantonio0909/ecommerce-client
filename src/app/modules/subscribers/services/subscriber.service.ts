import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getUrl } from 'src/app/helpers';
import { Subscriber } from '../entities/Subscriber';

@Injectable({
  providedIn: 'root',
})
export class SubscriberService {
  constructor(private http: HttpClient) { }

  subscriberCreate(subscriber: Subscriber): Observable<any> {
    return this.http.post<Observable<any>>(
      `${getUrl()}/api/subscribers`,
      subscriber
    );
  }
}
