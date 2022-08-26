import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getUrl } from 'src/app/helpers';
// import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private auth: AngularFireAuth) { }

  async createCookieSession(idToken: string,) {
    return await this.http.post(`${getUrl()}/api/auth/create-cookie-session`, { idToken }).toPromise();
  }

  async signIn(email: string, password: string) {
    try {
      // firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);

      const result = await this.auth.signInWithEmailAndPassword(email, password);
      console.log(result)
      const idToken = await result.user.getIdToken();
      await this.createCookieSession(idToken);

      // return await this.auth.signOut();
    } catch (er) {

    }
  }
}
