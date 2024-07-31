import React, { FC } from 'react'
import Logo from '@/shared/Logo'
import Navigation from '@/shared/Navigation/Navigation'
import SearchDropdown from './SearchDropdown'
import ButtonPrimary from '@/shared/ButtonPrimary'
import MenuBar from '@/shared/MenuBar'
import SwitchDarkMode from '@/shared/SwitchDarkMode'
import HeroSearchForm2MobileFactory from '../(HeroSearchForm2Mobile)/HeroSearchForm2MobileFactory'
import LangDropdown from './LangDropdown'

export interface MainNav1Props {
	className?: string
}

const MainNav1: FC<MainNav1Props> = ({ className = '' }) => {
	return (
		<div className={`nc-MainNav1 relative z-10 ${className}`}>
			<div className="relative flex h-15 justify-between px-4">
				<div className="hidden flex-1 justify-start space-x-4 sm:space-x-10 md:flex">
					<Logo className="w-48 self-center" />
					<Navigation />
				</div>

				<div className="!mx-auto flex max-w-lg flex-[3] md:px-3 lg:hidden">
					<div className="flex-1 self-center">
						<HeroSearchForm2MobileFactory />
					</div>
				</div>

				<div className="hidden flex-1 flex-shrink-0 justify-end text-neutral-700 dark:text-neutral-100 md:flex lg:flex-none">
					<div className="hidden space-x-0.5 xl:flex">
						<SearchDropdown className="flex items-center" />
						<SwitchDarkMode />
						<LangDropdown />
						<div className="px-1" />
						<ButtonPrimary className="self-center" href="/login">
							Sign up
						</ButtonPrimary>
					</div>

					<div className="flex items-center xl:hidden">
						<SwitchDarkMode />
						<div className="px-0.5" />
						<MenuBar />
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainNav1
