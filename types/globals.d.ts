export {}

//let say this is social media platform
export type Roles = 'admin' | 'moderator'

declare global {
	interface CustomJwtSessionClaims {
		metadata: {
			role?: Roles
		}
	}
}
