import React, { FC } from 'react'
import rightImgDemo from '@/images/BecomeAnAuthorImg.png'
import ButtonPrimary from '@/shared/ButtonPrimary'
import Logo from '@/shared/Logo'
import Image from 'next/image'

export interface SectionBecomeAnAuthorProps {
	className?: string
	rightImg?: string
}

const SectionBecomeAnAuthor: FC<SectionBecomeAnAuthorProps> = ({
	className = '',
	rightImg = rightImgDemo,
}) => {
	return (
		<div
			className={`nc-SectionBecomeAnAuthor relative flex flex-col items-center lg:flex-row ${className}`}
			data-nc-id="SectionBecomeAnAuthor"
		>
			<div className="mb-16 flex-shrink-0 lg:mb-0 lg:mr-10 lg:w-2/5">
				<Logo className="w-48" />
				<h2 className="mt-6 text-3xl font-semibold sm:mt-11 sm:text-4xl">
					Secure a reservation in Villa Book Now!
				</h2>
				<span className="mt-6 block text-neutral-500 dark:text-neutral-400">
					We encourage you to book as early as possible to guarantee a place at
					Villa Ada. Bookings for next year are already coming, and we wouldn't
					want you to miss the opportunity to stay in this corner of paradise.
					Check availability and book now to ensure a holiday to remember
					forever.
				</span>
				<ButtonPrimary className="mt-6 sm:mt-11">Book Now</ButtonPrimary>
			</div>
			<div className="flex-grow">
				<Image alt="" src={rightImg} />
			</div>
		</div>
	)
}

export default SectionBecomeAnAuthor
