import React, { FC } from 'react'
import imagePng from '@/images/pexels-fabianwiktor-994605.jpg'
import Image from 'next/image'
import ButtonPrimary from '@/shared/ButtonPrimary'
import Link from 'next/link'

export interface MainGalleryImageProps {
	className?: string
}

const MainGalleryImage: FC<MainGalleryImageProps> = ({ className = '' }) => {
	return (
		<div
			className={`nc-SectionHero3 relative ${className}`}
			data-nc-id="SectionHero3"
		>
			<div className="absolute inset-x-0 top-[10%] z-10 mx-auto flex max-w-2xl flex-col items-center space-y-4 text-center sm:top-[15%] lg:space-y-5 xl:space-y-8">
				<h3 className="text-center text-3xl font-bold !leading-[115%] sm:text-4xl md:text-3xl lg:text-3xl xl:text-5xl">
					Gallery
				</h3>
				<Link
					href={`/home-3`}
					className="rounded-xl px-6 py-3 lg:px-8 lg:py-4"
					// fontSize="text-sm sm:text-base lg:text-lg font-medium"
				>
					Going to Home
				</Link>
			</div>
			<div className="aspect-h-1 aspect-w-1 relative sm:aspect-h-3 sm:aspect-w-4 lg:aspect-h-6 lg:aspect-w-16 xl:aspect-h-6">
				<Image
					className="absolute inset-0 rounded-xl object-cover"
					src={imagePng}
					alt="hero"
					priority
				/>
			</div>
		</div>
	)
}

export default MainGalleryImage
