import rightImg from '@/images/about-hero-right.png'
import React, { FC } from 'react'
import SectionFounder from './SectionFounder'
import SectionStatistic from './SectionStatistic'
import SectionHero from './SectionHero'
import BgGlassmorphism from '@/components/BgGlassmorphism'
import BackgroundSection from '@/components/BackgroundSection'
import SectionClientSay from '@/components/SectionClientSay'
import SectionSubscribe2 from '@/components/SectionSubscribe2'

export interface PageAboutProps {}

const PageAbout: FC<PageAboutProps> = ({}) => {
	return (
		<div className={`nc-PageAbout relative overflow-hidden`}>
			{/* ======== BG GLASS ======== */}
			<BgGlassmorphism />

			<div className="">
				<SectionHero
					rightImg={rightImg}
					heading="👋 About Villa."
					btnText=""
					subHeading={`Cosy villa on the sea, with a large garden, parking and rooms with sea views. From the garden you have direct access to the beach. The property, at your complete disposal, has a floor consisting of 3 bedrooms and 1 bathroom, ground floor includes kitchen, bathroom and dining room with direct exit to the garden. Ideal for those who want to spend days in absolute relaxation and stay on the beach until late in the afternoon.`}
				/>

				{/* <SectionFounder />
				<div className="relative py-16">
					<BackgroundSection />
					<SectionClientSay />
				</div>

				<SectionStatistic />

				<SectionSubscribe2 /> */}
			</div>
		</div>
	)
}

export default PageAbout
