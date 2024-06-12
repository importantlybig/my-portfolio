'use client';

import { SectionName } from '@/lib/types';
import React, { useState, createContext, useContext } from 'react';

type ActiveSectionContextProviderProps = {
	children: React.ReactNode;
};

type ActiveSectionContextType = {
	activeSection: SectionName;
	handleSetActiveSection: (section: SectionName) => void;
	timeOfLastClick: number;
	handleSetTimeOfLastClick: (time: number) => void;
};

export const ActiveSectionContext =
	createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
	children,
}: ActiveSectionContextProviderProps) {
	const [activeSection, setActiveSection] = useState<SectionName>('Home');
	const [timeOfLastClick, setTimeOfLastClick] = useState(0); // we need to keep track of this to disable the observer temporarily when user clicks on a link

	const handleSetActiveSection = (section: SectionName) => {
		return setActiveSection(section);
	};

	const handleSetTimeOfLastClick = (time: number) => {
		return setTimeOfLastClick(time);
	};

	return (
		<ActiveSectionContext.Provider
			value={{
				activeSection,
				handleSetActiveSection,
				timeOfLastClick,
				handleSetTimeOfLastClick,
			}}
		>
			{children}
		</ActiveSectionContext.Provider>
	);
}

export function useActiveSectionContext() {
	const context = useContext(ActiveSectionContext);

	if (context === null) {
		throw new Error(
			'useActiveSectionContext must be used within an ActiveSectionContextProvider'
		);
	}

	return context;
}
