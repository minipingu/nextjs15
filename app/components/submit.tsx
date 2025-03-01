'use client'
import { useFormStatus } from 'react-dom'

export const Submit = () => {
	const { pending } = useFormStatus()

	return (
		<button
			disabled={pending}
			type='submit'
			className='block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500'>
			{pending ? 'Submitting...' : 'Submit'}
		</button>
	)
}

//this component should inside form
