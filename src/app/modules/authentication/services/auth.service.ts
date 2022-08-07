import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getUrl } from 'src/app/helpers';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private auth: AngularFireAuth) { }

  async signIn(email: string, password: string) {
    return await this.auth.signInWithEmailAndPassword(email, password)
  }

  async createCookieSession() {
    return await this.http.post(`${getUrl()}/api/create-cookie-session`, {});
  }
}
