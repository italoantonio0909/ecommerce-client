import { redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/compat/auth-guard';

export const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['authentication/signIn']);
export const redirectLoggedIn = () => redirectLoggedInTo(['/']);