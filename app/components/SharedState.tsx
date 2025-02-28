'use client'
import { createContext, useContext, ReactNode } from 'react'

// Generic Context Hook
export default function useGeneralContext<T>(defaultValue: T) {
	const GeneralContext = createContext<T>(defaultValue)

	const ContextProvider = ({
		children,
		value,
	}: {
		children: ReactNode
		value: T
	}) => {
		return (
			<GeneralContext.Provider value={value}>
				{children}
			</GeneralContext.Provider>
		)
	}

	const useGeneral = () => {
		const context = useContext(GeneralContext)
		if (context === undefined) {
			throw new Error(
				'useGeneral must be used within a GeneralContextProvider'
			)
		}
		return context
	}

	return { ContextProvider, useGeneral }
}
