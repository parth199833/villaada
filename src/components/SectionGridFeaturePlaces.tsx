import React, { FC, ReactNode } from 'react'
import { DEMO_STAY_LISTINGS } from '@/data/listings'
import { StayDataType } from '@/data/types'
import ButtonPrimary from '@/shared/ButtonPrimary'
import HeaderFilter from './HeaderFilter'
import StayCard from './StayCard'
import StayCard2 from './StayCard2'

// OTHER DEMO WILL PASS PROPS
const DEMO_DATA: StayDataType[] = DEMO_STAY_LISTINGS.filter((_, i) => i < 8)

//
export interface SectionGridFeaturePlacesProps {
	stayListings?: StayDataType[]
	gridClass?: string
	heading?: ReactNode
	subHeading?: ReactNode
	headingIsCenter?: boolean
	tabs?: string[]
	cardType?: 'card1' | 'card2'
}

const SectionGridFeaturePlaces: FC<SectionGridFeaturePlacesProps> = ({
	stayListings = DEMO_DATA,
	gridClass = '',
	heading = 'Surroundings',
	subHeading = 'Near by places from the villa',
	headingIsCenter,
	tabs = ['New York', 'Tokyo', 'Paris', 'London'],
	cardType = 'card2',
}) => {
	const renderCard = (stay: StayDataType) => {
		let CardName = StayCard
		switch (cardType) {
			case 'card1':
				CardName = StayCard
				break
			case 'card2':
				CardName = StayCard2
				break

			default:
				CardName = StayCard
		}

		return <CardName key={stay.id} data={stay} />
	}

	return (
		<div className="nc-SectionGridFeaturePlaces relative">
			<HeaderFilter
				tabActive={'New York'}
				subHeading={subHeading}
				tabs={tabs}
				heading={heading}
			/>
			<div
				className={`grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4 ${gridClass}`}
			>
				{stayListings.map((stay) => renderCard(stay))}
			</div>
			<div className="mt-16 flex items-center justify-center">
				<ButtonPrimary loading>Show me more</ButtonPrimary>
			</div>
		</div>
	)
}

export default SectionGridFeaturePlaces
