import Link from 'next/link'
import React from 'react'
import { Search } from './components/search'
import Counter from './components/counter'

const Home = () => {
	return (
		<>
			<Search />
			<Link href={'/id'}>to ID</Link>
			<Link href={'/client'}>Test console log</Link>
			<Counter />
		</>
	)
}

export default Home
