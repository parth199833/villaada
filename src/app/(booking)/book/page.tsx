'use client'

import React from 'react'
import Input from '@/shared/Input'
import Label from '@/components/Label'
import Textarea from '@/shared/Textarea'
import ButtonPrimary from '@/shared/ButtonPrimary'
import Checkbox from '@/shared/Checkbox'

export interface BookingMainPage {}

const BookingMainPage = () => {
	return (
		<div className="flex w-full flex-col border-neutral-200 shadow-2xl shadow-indigo-500/40 dark:border-neutral-700 sm:rounded-2xl sm:border">
			<div className="py-4">
				<h2 className="text-center text-3xl font-semibold lg:text-4xl">
					Booking Form
				</h2>
			</div>
			<div className="border-b border-neutral-200 dark:border-neutral-700"></div>
			<div className="space-y-8 px-5 sm:p-6 xl:p-8">
				<div className="space-y-5">
					<div className="flex flex-col sm:flex-row sm:space-x-5">
						<div className="flex-1 space-y-1">
							<Label>Check In</Label>
							<Input type="date" defaultValue="MM/YY" />
						</div>
						<div className="flex-1 space-y-1">
							<Label>Check Out</Label>
							<Input type="date" defaultValue="MM/YY" />
						</div>
					</div>
					<div className="flex flex-col sm:flex-row sm:space-x-5">
						<div className="flex-1 space-y-1">
							<Label>Adults </Label>
							<Input type="number" defaultValue={1} />
						</div>
						<div className="flex-1 space-y-1">
							<Label>Children </Label>
							<Input type="number" defaultValue={0} />
						</div>
					</div>
					<div className="flex flex-col sm:flex-row sm:space-x-3">
						<div className="flex-1 space-y-1">
							<Label>First Name </Label>
							<Input placeholder="Enter First Name" />
						</div>
						<div className="flex-1 space-y-1">
							<Label>Last Name </Label>
							<Input placeholder="Enter Last Name" />
						</div>
						<div className="flex-1 space-y-1">
							<Label>Email </Label>
							<Input type="email" placeholder="Enter Email Adders" />
						</div>
						<div className="flex-1 space-y-1">
							<Label>Phone Number </Label>
							<Input placeholder="Enter Phone Number" />
						</div>
					</div>
					<div className="space-y-1">
						<Label>Note to Host</Label>
						<Textarea placeholder="Enter Here..." />
						<span className="block text-sm text-neutral-500">
							Write a few sentences about host.
						</span>
					</div>
					<div className="flex space-x-5">
						<div className="flex-1 space-y-1">
							<Label>Discount Code </Label>
							<div className="flex space-x-3 md:w-1/2">
								<Input className="" placeholder="Discount Code" />
								<ButtonPrimary>Apply</ButtonPrimary>
							</div>
						</div>
					</div>
					<div className="flex flex-col space-y-4 rounded-lg border p-9 hover:bg-neutral-100 dark:hover:bg-neutral-800">
						{/* <h3 className="text-2xl font-semibold">Price detail</h3> */}
						<div className="flex justify-between font-semibold text-neutral-6000 dark:text-neutral-300">
							<span>Stay Amount</span>
							<span>$3680</span>
						</div>
						<div className="flex justify-between font-semibold text-neutral-6000 dark:text-neutral-300">
							<span>Taxes</span>
							<span>$0</span>
						</div>

						<div className="border-b border-neutral-200 dark:border-neutral-700"></div>
						<div className="flex justify-between font-semibold">
							<span>Total</span>
							<span>$3680</span>
						</div>
					</div>
					<div className="flex space-x-3">
						<Checkbox name={'1'} />
						<span>
							I have read and agree to the{' '}
							<a
								href="https://villaadaalmare.com/privacy_policy/"
								className="text-blue-600"
								target="_blank"
							>
								Privacy Policy
							</a>
						</span>
					</div>
					<div className="flex space-x-3">
						<Checkbox name="2" />
						<span>
							I have read and agree to the{' '}
							<a
								href="https://villaadaalmare.com/term_condition/"
								className="text-blue-600"
								target="_blank"
							>
								Terms and Conditions
							</a>
						</span>
					</div>
					<span className="block text-sm italic text-red-600">
						*You will need to pay in full at the time of booking
					</span>

					<div className="pt-8 text-center">
						<ButtonPrimary href={'/pay-done'}>Submit</ButtonPrimary>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BookingMainPage
