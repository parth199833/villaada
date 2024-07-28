'use client'
import React, { FC, useEffect, useState } from 'react'
import imagePng from '@/images/travelhero2.png'
import Image from 'next/image'
import ButtonPrimary from '@/shared/ButtonPrimary'

export interface SectionHero3Props {
	className?: string
}

const SectionHero3: FC<SectionHero3Props> = ({ className = '' }) => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const images = [
		'https://wowslider.com/sliders/demo-93/data1/images/lake.jpg',
		'https://wowslider.com/sliders/demo-93/data1/images/landscape.jpg',
		'https://wowslider.com/sliders/demo-93/data1/images/lake.jpg',
		'https://wowslider.com/sliders/demo-93/data1/images/landscape.jpg',
		'https://www.buenavidaphuket.com/wp-content/uploads/2015/06/592-1024x584.jpg',
	]

	const prevSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1,
		)
	}

	const nextSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1,
		)
	}

	const goToSlide = (index: any) => {
		setCurrentIndex(index)
	}

	useEffect(() => {
		const interval = setInterval(() => {
			nextSlide()
		}, 5000)
		return () => clearInterval(interval)
	}, [])

	return (
		<div
			className={`nc-SectionHero3 relative ${className}`}
			data-nc-id="SectionHero3"
		>
			<div className="relative w-full" data-carousel="slide">
				<div className="relative h-[600px] overflow-hidden rounded-lg">
					{images.map((src, index) => (
						<div
							key={index}
							className={`duration-700 ease-in-out ${index === currentIndex ? 'block' : 'hidden'}`}
							data-carousel-item
						>
							<div className="absolute inset-x-0 top-[10%] z-10 mx-auto flex max-w-2xl flex-col items-center space-y-4 text-center sm:top-[15%] lg:space-y-5 xl:space-y-8">
								<span className="font-semibold text-white sm:text-lg md:text-xl">
									Booking tax-free from Chis. platform
								</span>
								<h2 className="text-3xl font-bold !leading-[115%] text-white sm:text-4xl md:text-5xl lg:text-5xl xl:text-7xl">
									Your oasis of peace by the sea
								</h2>
								<ButtonPrimary
									sizeClass="px-6 py-3 lg:px-8 lg:py-4 rounded-lg"
									fontSize="text-sm sm:text-base lg:text-lg font-medium"
								>
									Relax At Villa Ada
								</ButtonPrimary>
							</div>
							<img
								src={src}
								className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
								alt={`Slide ${index + 1}`}
							/>
						</div>
					))}
				</div>
				<div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse">
					{images.map((_, index) => (
						<button
							key={index}
							type="button"
							className={`h-3 w-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
							aria-current={index === currentIndex ? 'true' : 'false'}
							aria-label={`Slide ${index + 1}`}
							data-carousel-slide-to={index}
							onClick={() => goToSlide(index)}
						></button>
					))}
				</div>
				<button
					type="button"
					className="group absolute start-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
					data-carousel-prev
					onClick={prevSlide}
				>
					<span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
						<svg
							className="h-4 w-4 text-white dark:text-gray-800 rtl:rotate-180"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 6 10"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M5 1 1 5l4 4"
							/>
						</svg>
						<span className="sr-only">Previous</span>
					</span>
				</button>
				<button
					type="button"
					className="group absolute end-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
					data-carousel-next
					onClick={nextSlide}
				>
					<span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
						<svg
							className="h-4 w-4 text-white dark:text-gray-800 rtl:rotate-180"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 6 10"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="m1 9 4-4-4-4"
							/>
						</svg>
						<span className="sr-only">Next</span>
					</span>
				</button>
			</div>
		</div>
	)
}

export default SectionHero3
