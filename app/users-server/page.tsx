type User = {
	id: number
	name: string
	username: string
	email: string
	phone: string
}

import React from 'react'

const UsersServer = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/users')

	const users: User[] = await response.json()

	console.log(users)

	return (
		<div>
			{users.map((user) => (
				<div key={user.id}>{user.name}</div>
			))}
		</div>
	)
}

export default UsersServer
