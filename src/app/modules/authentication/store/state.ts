import { State, Action, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AuthenticationSignIn } from './actions';

export interface AuthenticationModelState {
}

@State<AuthenticationModelState>({
    name: 'authentication',
    defaults: {
    }
})
@Injectable()
export class AuthenticationState {

    constructor(private service: AuthService) { }

    @Action(AuthenticationSignIn)
    async authenticationSignIn(
        ctx: StateContext<AuthenticationModelState>,
        { email, password }: AuthenticationSignIn
    ) {
        const result = await this.service.signIn(email, password);
        console.log({ result });
    }

}