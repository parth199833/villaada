'use client'

import React, { Fragment, useEffect, useRef, useState } from 'react'
import {
	ShoppingBagIcon as ShoppingCartIcon,
	Cog8ToothIcon as CogIcon,
} from '@heroicons/react/24/outline'
import {
	Dialog,
	DialogTitle,
	Popover,
	Transition,
	TransitionChild,
} from '@headlessui/react'
import { PathName } from '@/routers/types'
import Link from 'next/link'
import Header from './Header'
import Header3 from './Header3'
import { usePathname } from 'next/navigation'
import { useThemeMode } from '@/utils/useThemeMode'
import ButtonClose from '@/shared/ButtonClose'
import ButtonThird from '@/shared/ButtonThird'
import ButtonPrimary from '@/shared/ButtonPrimary'
import Label from '@/components/Label'
import Input from '@/shared/Input'
import Textarea from '@/shared/Textarea'

export type SiteHeaders = 'Header 1' | 'Header 2' | 'Header 3'

interface HomePageItem {
	name: string
	slug: PathName
}

let OPTIONS = {
	root: null,
	rootMargin: '0px',
	threshold: 1.0,
}
let OBSERVER: IntersectionObserver | null = null
const PAGES_HIDE_HEADER_BORDER: PathName[] = [
	'/home-3',
	'/listing-car-detail',
	'/listing-experiences-detail',
	'/listing-stay-detail',
]

const SiteHeader = () => {
	const [isOpenMoreFilter, setisOpenMoreFilter] = useState(false)
	const closeModalMoreFilter = () => setisOpenMoreFilter(false)
	const openModalMoreFilter = () => setisOpenMoreFilter(true)

	const anchorRef = useRef<HTMLDivElement>(null)

	let [headers] = useState<SiteHeaders[]>(['Header 1', 'Header 2', 'Header 3'])

	let [homePages] = useState<HomePageItem[]>([
		{ name: 'Home Main', slug: '/home-3' },
		{ name: 'Real Estate', slug: '/home-2' },
		{ name: 'Home 3', slug: '/' },
	])
	const [headerSelected, setHeaderSelected] = useState<SiteHeaders>('Header 1')

	const [isTopOfPage, setIsTopOfPage] = useState(true)

	useEffect(() => {
		setIsTopOfPage(window.pageYOffset < 5)
	}, [])
	//
	useThemeMode()
	//
	const pathname = usePathname()

	const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
		entries.forEach((entry) => {
			setIsTopOfPage(entry.isIntersecting)
		})
	}

	useEffect(() => {
		// disconnect the observer
		// observer for show the LINE bellow header
		if (!PAGES_HIDE_HEADER_BORDER.includes(pathname as PathName)) {
			OBSERVER && OBSERVER.disconnect()
			OBSERVER = null
			return
		}
		if (!OBSERVER) {
			OBSERVER = new IntersectionObserver(intersectionCallback, OPTIONS)
			anchorRef.current && OBSERVER.observe(anchorRef.current)
		}
	}, [pathname])

	const renderRadioHeaders = () => {
		return (
			<div className="mt-4">
				<span className="text-sm font-medium">Header Styles</span>
				<div className="mt-1.5 flex items-center space-x-2">
					{headers.map((header) => {
						return (
							<div
								key={header}
								className={`flex cursor-pointer select-none items-center rounded-full px-3.5 py-1.5 text-xs font-medium ${
									headerSelected === header
										? 'bg-black text-white shadow-lg shadow-black/10'
										: 'border border-neutral-300 hover:border-neutral-400 dark:border-neutral-700 dark:hover:border-neutral-500'
								}`}
								onClick={() => setHeaderSelected(header)}
							>
								{header}
							</div>
						)
					})}
				</div>
			</div>
		)
	}

	const renderRadioHomePages = () => {
		return (
			<div className="mt-4">
				<span className="text-sm font-medium">Home Demos</span>
				<div className="mt-1.5 flex items-center space-x-2">
					{homePages.map((home) => {
						return (
							<Link
								key={home.slug}
								href={home.slug}
								className={`flex cursor-pointer select-none items-center rounded-full px-3.5 py-1.5 text-xs font-medium ${
									pathname === home.slug
										? 'bg-black text-white shadow-lg shadow-black/10'
										: 'border border-neutral-300 hover:border-neutral-400 dark:border-neutral-700 dark:hover:border-neutral-500'
								}`}
							>
								{home.name}
							</Link>
						)
					})}
				</div>
			</div>
		)
	}

	// FOR DEMO PAGE
	const renderControlSelections = () => {
		return (
			<div className="ControlSelections relative z-40 hidden lg:block">
				<div className="fixed right-3 top-1/4 z-40 flex items-center">
					<Popover className="relative">
						{({ open }) => (
							<>
								<Popover.Button
									className={`z-10 rounded-xl border border-neutral-200 bg-white p-2.5 shadow-xl hover:bg-neutral-100 focus:outline-none dark:border-primary-6000 dark:bg-primary-6000 dark:hover:bg-primary-700 ${
										open ? 'ring-primary-500 focus:ring-2' : ''
									}`}
								>
									<CogIcon className="h-8 w-8" />
								</Popover.Button>
								<Transition
									as={Fragment}
									enter="transition ease-out duration-200"
									enterFrom="opacity-0 translate-y-1"
									enterTo="opacity-100 translate-y-0"
									leave="transition ease-in duration-150"
									leaveFrom="opacity-100 translate-y-0"
									leaveTo="opacity-0 translate-y-1"
								>
									<Popover.Panel className="absolute right-0 z-10 mt-3 w-screen max-w-sm">
										<div className="nc-custom-shadow-1 overflow-hidden rounded-2xl bg-white dark:bg-neutral-800">
											<div className="relative p-6">
												<span className="text-xl font-semibold">Customize</span>
												<div className="mt-4 w-full border-b border-neutral-200 dark:border-neutral-700"></div>
												{renderRadioHeaders()}
												{renderRadioHomePages()}
											</div>
											<div className="bg-gray-50 p-5 dark:bg-white/5">
												<a
													className="flex w-full items-center justify-center !rounded-xl bg-primary-6000 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700"
													href={
														'https://themeforest.net/item/chisfis-online-booking-nextjs-template/43399526'
													}
													target="_blank"
													rel="noopener noreferrer"
												>
													<ShoppingCartIcon className="h-4 w-4" />
													<span className="ml-2">Buy this template</span>
												</a>
											</div>
										</div>
									</Popover.Panel>
								</Transition>
							</>
						)}
					</Popover>
				</div>
			</div>
		)
	}

	// FOR DEMO PAGE
	const renderInquiryForm = () => {
		return (
			<div className="ControlSelections relative z-40 hidden lg:block">
				<div className="fixed right-3 top-1/2 z-40 flex items-center">
					<Popover className="relative">
						{({ open }) => (
							<>
								<Popover.Button
									className={`z-10 rounded-xl border border-neutral-200 bg-white p-2.5 shadow-xl hover:bg-neutral-100 focus:outline-none dark:border-primary-6000 dark:bg-primary-6000 dark:hover:bg-primary-700 ${
										open ? 'ring-primary-500 focus:ring-2' : ''
									}`}
									onClick={openModalMoreFilter}
								>
									<CogIcon className="h-8 w-8" />
								</Popover.Button>
								<Transition appear show={isOpenMoreFilter} as={Fragment}>
									<Dialog
										as="div"
										className="fixed inset-0 z-50"
										onClose={closeModalMoreFilter}
									>
										<div className="min-h-screen text-center">
											<TransitionChild
												as={Fragment}
												enter="ease-out duration-300"
												enterFrom="opacity-0"
												enterTo="opacity-100"
												leave="ease-in duration-200"
												leaveFrom="opacity-100"
												leaveTo="opacity-0"
											>
												<div className="fixed inset-0 bg-black bg-opacity-40 dark:bg-opacity-60" />
											</TransitionChild>

											{/* This element is to trick the browser into centering the modal contents. */}
											<span
												className="inline-block h-screen align-middle"
												aria-hidden="true"
											>
												&#8203;
											</span>
											<TransitionChild
												as={'div'}
												className="inline-block h-screen w-full max-w-4xl px-2 py-8"
												enter="ease-out duration-300"
												enterFrom="opacity-0 scale-95"
												enterTo="opacity-100 scale-100"
												leave="ease-in duration-200"
												leaveFrom="opacity-100 scale-100"
												leaveTo="opacity-0 scale-95"
											>
												<div className="h-70 inline-flex w-full max-w-4xl transform flex-col overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all dark:border dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100">
													<div className="relative flex-shrink-0 border-b border-neutral-200 px-6 py-4 text-center dark:border-neutral-800">
														<DialogTitle
															as="h3"
															className="text-lg font-medium leading-6 text-gray-900"
														>
															Inquiry Now
														</DialogTitle>
														<span className="absolute left-3 top-3">
															<ButtonClose onClick={closeModalMoreFilter} />
														</span>
													</div>

													<div className="flex-grow">
														<form action="#" method="post">
															<div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2">
																<label className="col-span-2 block md:col-span-1">
																	<Label>Name</Label>
																	<Input
																		placeholder="Enter your name"
																		type="text"
																		className="mt-1"
																	/>
																</label>
																<label className="col-span-2 block md:col-span-1">
																	<Label>Surname</Label>
																	<Input
																		placeholder="Enter your surname"
																		type="text"
																		className="mt-1"
																	/>
																</label>
																<label className="col-span-2 block md:col-span-1">
																	<Label>Email address</Label>
																	<Input
																		type="email"
																		placeholder="example@example.com"
																		className="mt-1"
																	/>
																</label>
																<label className="col-span-2 block md:col-span-1">
																	<Label>Mobile No</Label>
																	<Input
																		placeholder="Enter your Mobile Number"
																		type="number"
																		className="mt-1"
																	/>
																</label>
																<label className="col-span-2 block">
																	<Label>Message</Label>
																	<Textarea
																		className="mt-1"
																		rows={6}
																		placeholder="Enter your message here.."
																	/>
																</label>
															</div>
														</form>
													</div>

													<div className="flex flex-shrink-0 items-center justify-between bg-neutral-50 p-6 dark:border-t dark:border-neutral-800 dark:bg-neutral-900">
														<ButtonThird
															onClick={closeModalMoreFilter}
															sizeClass="px-4 py-2 sm:px-5"
														>
															Clear
														</ButtonThird>
														<ButtonPrimary
															onClick={closeModalMoreFilter}
															sizeClass="px-4 py-2 sm:px-5"
														>
															Submit
														</ButtonPrimary>
													</div>
												</div>
											</TransitionChild>
										</div>
									</Dialog>
								</Transition>
							</>
						)}
					</Popover>
				</div>
			</div>
		)
	}

	const renderHeader = () => {
		let headerClassName = 'shadow-sm dark:border-b dark:border-neutral-700'
		if (PAGES_HIDE_HEADER_BORDER.includes(pathname as PathName)) {
			headerClassName = isTopOfPage
				? ''
				: 'shadow-sm dark:border-b dark:border-neutral-700'
		}
		switch (headerSelected) {
			case 'Header 1':
				return <Header className={headerClassName} navType="MainNav1" />
			case 'Header 2':
				return <Header className={headerClassName} navType="MainNav2" />
			case 'Header 3':
				return <Header3 className={headerClassName} />

			default:
				return <Header3 className={headerClassName} />
		}
	}

	return (
		<>
			{renderControlSelections()}
			{renderInquiryForm()}
			{renderHeader()}
			<div ref={anchorRef} className="invisible absolute h-1"></div>
		</>
	)
}

export default SiteHeader
