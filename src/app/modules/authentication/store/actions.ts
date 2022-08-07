export class AuthenticationSignIn {
    static type = "AuthenticationSignIn"
    constructor(public email: string, public password: string) { }
}

export class AuthenticationCreateSessionCookie {
    static type = "AuthenticationCreateSessionCookie"
    constructor() { }
}