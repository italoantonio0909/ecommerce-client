import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { AuthenticationState } from '../modules/authentication/store/state';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store, private router: Router) { }

  canActivate() {
    const isAuthenticated = this.store.selectSnapshot(AuthenticationState.isAuthenticated);
    if (!isAuthenticated) {
      this.router.navigate(['authentication/signIn'])
      return false;
    }
    return isAuthenticated;
  }
}
