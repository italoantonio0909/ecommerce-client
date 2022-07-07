export interface Customer {
    readonly uid?: string
    readonly email: string
    readonly phoneNumber?: string
    readonly emailVerified?: boolean
    readonly password?: string
    readonly displayName?: string
    readonly photoURL?: string
    readonly disabled: boolean
}