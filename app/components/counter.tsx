'use client'
import { useAuth } from '@clerk/nextjs'
import React, { useState } from 'react'

const Counter = () => {
	const [count, setCount] = useState(0)
	const { isLoaded, userId, sessionId, getToken } = useAuth()
	//for full user info
	//const { isLoaded,isSignedIn,user} = useUser()

	if (!isLoaded || !userId) return null

	return (
		<div>
			<p>Count:{count}</p>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	)
}

export default Counter
