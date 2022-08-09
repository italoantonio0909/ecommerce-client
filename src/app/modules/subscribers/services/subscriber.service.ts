import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getUrl } from 'src/app/helpers';
import { Subscriber } from '../entities/Subscriber';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SubscriberService {
  constructor(private http: HttpClient) { }

  subscriberCreate(subscriber: Subscriber): Observable<Subscriber> {
    return this.http.post<Subscriber>(`${getUrl()}/api/subscribers`, subscriber, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(
      map(e => e)
    );
  }
}
