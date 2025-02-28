import Link from 'next/link'
import React from 'react'

const Home = () => {
	return (
		<>
			<Link href={'/id'}>to ID</Link>
			<Link href={'/client'}>Test console log</Link>
		</>
	)
}

export default Home
