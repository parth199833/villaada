import React from 'react'
import SectionSubscribe2 from '@/components/SectionSubscribe2'
import BackgroundSection from '@/components/BackgroundSection'
import BgGlassmorphism from '@/components/BgGlassmorphism'
import { TaxonomyType } from '@/data/types'
import SectionGridAuthorBox from '@/components/SectionGridAuthorBox'
import SectionGridCategoryBox from '@/components/SectionGridCategoryBox'
import SectionHero3 from '@/app/(server-components)/SectionHero3'
import CardCategory6 from '@/components/CardCategory6'
import SectionGridFeaturePlaces from '@/components/SectionGridFeaturePlaces'
import PageAbout from '@/app/about/page'
import SectionSliderNewCategories from '@/components/SectionSliderNewCategories'
import SectionBecomeAnAuthor from '@/components/SectionBecomeAnAuthor'
import Heading from '@/shared/Heading'
import TermsAndConditions from '@/components/TermsAndCondition'
import ContactUs from '@/components/ContactUs'

const DEMO_CATS_2: TaxonomyType[] = [
	{
		id: '1',
		href: '/listing-stay',
		name: 'Enjoy the great cold',
		taxonomy: 'category',
		count: 188288,
		thumbnail:
			'https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
	},
	{
		id: '222',
		href: '/listing-stay',
		name: 'Sleep in a floating way',
		taxonomy: 'category',
		count: 188288,
		thumbnail:
			'https://images.pexels.com/photos/2869499/pexels-photo-2869499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	},
	{
		id: '3',
		href: '/listing-stay',
		name: "In the billionaire's house",
		taxonomy: 'category',
		count: 188288,
		thumbnail:
			'https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	},
	{
		id: '4',
		href: '/listing-stay',
		name: 'Cool in the deep forest',
		taxonomy: 'category',
		count: 188288,
		thumbnail:
			'https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	},
	{
		id: '5',
		href: '/listing-stay',
		name: "In the billionaire's house",
		taxonomy: 'category',
		count: 188288,
		thumbnail:
			'https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
	},
]

function PageHome3() {
	return (
		<main className="nc-PageHome3 relative overflow-hidden">
			{/* GLASSMOPHIN */}
			<BgGlassmorphism />

			{/* SECTION 1 */}
			<div className="container mb-20 mt-5 px-1 sm:px-1">
				<SectionHero3 className="" />
			</div>

			{/* SECTION 2 */}
			<div className="container mb-24 px-1 sm:px-4">
				<PageAbout />
			</div>
			{/* SECTION 3 */}
			<div className="container relative mb-24 px-1">
				<Heading desc="Gallery of our Villa..." isCenter={true}>
					Our Gallery
				</Heading>
				<div className="grid grid-cols-12 gap-6">
					<div className="col-span-12 flex sm:col-span-6 lg:col-span-4">
						<CardCategory6 taxonomy={DEMO_CATS_2[0]} />
					</div>
					<div className="col-span-12 grid grid-rows-2 gap-6 sm:col-span-6 lg:col-span-4">
						<CardCategory6 taxonomy={DEMO_CATS_2[3]} />
						<CardCategory6 taxonomy={DEMO_CATS_2[1]} />
					</div>
					<div className="col-span-12 flex sm:col-span-6 lg:col-span-4">
						<CardCategory6 taxonomy={DEMO_CATS_2[4]} />
					</div>
				</div>
			</div>
			{/* SECTION 4 */}
			<div className="container px-1 sm:px-4">
				<div className="flex flex-wrap justify-between">
					<div className="mb-4 w-full px-2 sm:w-1/4">
						<div className="text-center">
							<h4 className="text-2xl font-bold">
								4.7
								<span className="text-lg">/5</span>
							</h4>
						</div>
						<div className="google-image mt-2">
							<img
								src="https://villaadaalmare.com/uploads/1690788189_image%20208.png"
								alt="Google Rating"
							/>
						</div>
					</div>
					<div className="mb-4 w-full px-2 sm:w-1/4">
						<div className="text-center">
							<h4 className="text-2xl font-bold">
								9.8
								<span className="text-lg">/10</span>
							</h4>
						</div>
						<div className="google-image mt-2">
							<img
								src="https://villaadaalmare.com/uploads/1690788496_image-logo3.png"
								alt="Rating Image"
							/>
						</div>
					</div>
					<div className="mb-4 w-full px-2 sm:w-1/4">
						<div className="text-center">
							<h4 className="text-2xl font-bold">
								4.5
								<span className="text-lg">/5</span>
							</h4>
						</div>
						<div className="google-image mt-2">
							<img
								src="https://villaadaalmare.com/uploads/1690788458_image-logo2.png"
								alt="Another Rating"
							/>
						</div>
					</div>
				</div>
			</div>
			{/* SECTION 5 */}
			<div className="container relative mb-24 py-16">
				<BackgroundSection className="bg-orange-50 dark:bg-black/20" />
				<SectionSliderNewCategories
					categories={DEMO_CATS_2}
					categoryCardType="card4"
					itemPerRow={4}
					heading="Testimonial"
					subHeading="What customers said about our villa"
					sliderStyle="style2"
				/>
			</div>
			{/* SECTION 6 */}
			<div className="container mb-24 px-1 sm:px-4">
				<TermsAndConditions />
			</div>
			{/* SECTION 7 */}
			<div className="container mb-14 px-1 sm:px-4">
				<SectionGridFeaturePlaces />
			</div>
			{/* SECTION 8 */}
			<div className="container mb-24 px-1">
				<ContactUs />
			</div>
			{/* SECTION 9 */}
			<div className="container relative mb-24 px-1 py-16 sm:px-4">
				<BackgroundSection />
				<SectionBecomeAnAuthor />
			</div>
		</main>
	)
}

export default PageHome3
