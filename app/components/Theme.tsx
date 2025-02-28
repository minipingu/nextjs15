'use client'

import useGeneralContext from './SharedState'

const { ContextProvider: ThemeProvider, useGeneral: useTheme } =
	useGeneralContext('light')

export default function ClientComponent() {
	console.log('this is client component')

	return (
		<ThemeProvider value='dark'>
			this is client component
			<ChildComponent />
		</ThemeProvider>
	)
}

function ChildComponent() {
	const theme = useTheme()
	return <div>Current Theme: {theme}</div>
}
