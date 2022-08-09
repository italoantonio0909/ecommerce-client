import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AuthenticationSignIn } from './actions';

export interface AuthenticationModelState {
    auth: boolean;
}

@State<AuthenticationModelState>({
    name: 'authentication',
    defaults: {
        auth: false
    }
})
@Injectable()
export class AuthenticationState {

    constructor(private auth: AuthService) { }

    @Selector()
    static isAuthenticated(state: AuthenticationModelState): boolean {
        return !!state.auth;
    }

    @Action(AuthenticationSignIn)
    async authenticationSignIn(
        { setState }: StateContext<AuthenticationModelState>,
        { email, password }: AuthenticationSignIn
    ) {
        return await this.auth.signIn(email, password);
        // return setState({ auth: true })
    }
}