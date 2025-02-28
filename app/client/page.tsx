import ClientComponent from '../components/Theme'

export default function ServerComponent() {
	console.log('this is server component')

	return (
		<div>
			<h1>This is a server component</h1>
			<ClientComponent /> {/* Now wrapped properly */}
		</div>
	)
}
