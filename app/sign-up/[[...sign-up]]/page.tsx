import { SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
	return (
		<div className='flex justify-center items-center py-8'>
			<SignUp />
		</div>
	)
}

export default SignUpPage
