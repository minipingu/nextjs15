'use client'
import { useActionState } from 'react'
import { FormState, createProduct } from '../actions/products'

export default function AddProductPage() {
	const initialState: FormState = {
		errors: {},
	}

	const [state, formAction, isPending] = useActionState(
		createProduct,
		initialState
	)
	//

	return (
		<form action={formAction} className='p-4 space-y-4 max-w-96'>
			<div>
				{/* error message */}
				{state.errors.title && (
					<p className='text-red-500'>{state.errors.title}</p>
				)}
				<label className='text-white'>
					Title
					<input
						type='text'
						className='block w-full p-2 text-black border rounded'
						name='title'
					/>
				</label>
			</div>
			<div>
				{/* error message */}
				{state.errors.price && (
					<p className='text-red-500'>{state.errors.price}</p>
				)}
				<label className='text-white'>
					Price
					<input
						type='number'
						className='block w-full p-2 text-black border rounded'
						name='price'
					/>
				</label>
			</div>
			<div>
				{state.errors.description && (
					<p className='text-red-500'>{state.errors.description}</p>
				)}
				<label className='text-white'>
					Description
					<textarea name='description' />
				</label>
			</div>
			{/* <Submit /> */}
			<button
				disabled={isPending}
				type='submit'
				className='block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500'>
				{isPending ? 'Submitting...' : 'Submit'}
			</button>
		</form>
	)
}
