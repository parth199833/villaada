'use client'

import React from 'react'
import { DEMO_POSTS } from '@/data/posts'
import BgGlassmorphism from '@/components/BgGlassmorphism'
import MainGalleryImage from '@/app/surrounding/MainGalleryImage'
import { usePathname, useRouter } from 'next/navigation'
import { Route } from 'next'
import imagePng from '@/images/pexels-fabianwiktor-994605.jpg'
import Image from 'next/image'

// DEMO DATA
const POSTS = DEMO_POSTS

// DEMO POST FOR MAGAZINE SECTION
const MAGAZINE1_POSTS = POSTS.filter((_, i) => i >= 0 && i < 8)
//

const BlogPage: React.FC = () => {
	const thisPathname = usePathname()
	const router = useRouter()

	const handleOpenModalImageGallery = () => {
		router.push('/listing-stay-detail/?modal=PHOTO_TOUR_SCROLLABLE' as Route)
	}
	return (
		<div className="nc-SurroundingPage relative mt-10 overflow-hidden">
			{/* ======== BG GLASS ======== */}
			<BgGlassmorphism />
			{/* ======== ALL SECTIONS ======== */}
			{/* ======= START CONTAINER ============= */}
			<div className="container relative">
				<div className="mb-10 px-1 sm:px-1">
					<MainGalleryImage className="" />
				</div>
				<div className="grid grid-cols-1">
					<div className="nc-CharmOfRegion">
						<div className="grid gap-3 md:gap-6 lg:grid-cols-2">
							<div className="grid-cols-2">
								<div className="nc-Card12 group relative flex h-full flex-col">
									<a className="aspect-h-3 aspect-w-4 relative block h-0 w-full flex-shrink-0 flex-grow overflow-hidden rounded-3xl">
										<Image
											className="absolute inset-0 rounded-xl object-cover"
											src={imagePng}
											alt="hero"
											priority
										/>
									</a>
								</div>
							</div>
							<div className="grid-cols-10"></div>
						</div>
					</div>
				</div>
				<div className="mt-10 grid">
					<div className="nc-Section-Heading relative mb-10 text-neutral-900 dark:text-neutral-50">
						<div className="mx-auto mb-4 w-full max-w-2xl text-center">
							<span className="mt-2 block text-base font-normal text-neutral-500 dark:text-neutral-400 sm:text-lg md:mt-3">
								Surrounding
							</span>
							<h2 className="text-3xl font-semibold md:text-4xl">
								Near by places from the villa
							</h2>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:gap-8 xl:grid-cols-2">
					<div className="nc-SurroundingNearPlaces">
						<div className="flex h-full w-full flex-col sm:flex-row sm:items-center">
							<div className="w-full flex-shrink-0 p-3 sm:w-64"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BlogPage
