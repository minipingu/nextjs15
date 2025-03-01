import Link from 'next/link'
import React from 'react'
import { Search } from './components/search'

const Home = () => {
	return (
		<>
			<Search />
			<Link href={'/id'}>to ID</Link>
			<Link href={'/client'}>Test console log</Link>
		</>
	)
}

export default Home
