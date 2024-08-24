'use client'
import { useState } from 'react'
const TermsAndConditions = () => {
	const [activeTab, setActiveTab] = useState('home')

	const handleTabClick = (tabName: any) => {
		setActiveTab(tabName)
	}

	return (
		<div className="rounded-3xl bg-gray-100 py-12 dark:bg-black/20">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mb-12 text-center">
					<h6 className="text-base font-medium text-gray-600 dark:text-neutral-500">
						Our Policy
					</h6>
					<h2 className="mt-2 text-4xl font-bold">Things To Know</h2>
				</div>

				<div className="mb-8 flex justify-center">
					<ul
						className="flex space-x-8 border-b border-gray-200"
						role="tablist"
					>
						<li className="nav-item">
							<button
								className={`pb-2 text-lg font-semibold ${
									activeTab === 'home'
										? 'border-b-2 border-blue-600 text-blue-600'
										: 'text-gray-500 hover:text-blue-600'
								}`}
								onClick={() => handleTabClick('home')}
							>
								Terms and Conditions
							</button>
						</li>
						<li className="nav-item">
							<button
								className={`pb-2 text-lg font-semibold ${
									activeTab === 'menu1'
										? 'border-b-2 border-blue-600 text-blue-600'
										: 'text-gray-500 hover:text-blue-600'
								}`}
								onClick={() => handleTabClick('menu1')}
							>
								Cancellation Policy
							</button>
						</li>
					</ul>
				</div>

				<div className="tab-content">
					{activeTab === 'home' && (
						<div id="home" className="tab-pane">
							<div className="mb-8">
								<h4 className="text-center text-xl font-semibold">
									House Rules
								</h4>
								<p className="mt-2 text-gray-600 dark:text-neutral-400">
									Our home is a special place, and we want your stay to be
									unforgettable. For this reason, we would like to ask you to
									respect a few rules.
								</p>
							</div>

							<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
								<div className="rounded-2xl border-t-8 border-t-indigo-500 bg-white p-6 shadow-lg dark:bg-black">
									<h3 className="mb-4 text-lg font-semibold">
										Checking In &amp; Out
									</h3>
									<ul className="space-y-2">
										<li className="flex items-center">
											<i className="fa-sharp fa-regular fa-clock mr-3 text-blue-600"></i>
											<span className="text-neutral-500 dark:text-neutral-400">
												Check-In After 8:00 AM
											</span>
										</li>
										<li className="flex items-center">
											<i className="fa-sharp fa-regular fa-clock mr-3 text-blue-600"></i>
											<span className="text-neutral-500 dark:text-neutral-400">
												Checkout Before 10:00 AM
											</span>
										</li>
									</ul>
								</div>

								<div className="rounded-2xl border-t-8 border-t-indigo-500 bg-white p-6 shadow-lg dark:bg-black">
									<h3 className="mb-4 text-lg font-semibold">
										During Your Stay
									</h3>
									<ul className="space-y-2">
										<li className="flex items-center">
											<i className="fa-solid fa-users mr-3 text-blue-600"></i>
											<span className="text-neutral-500 dark:text-neutral-400">
												5 Guests Maximum
											</span>
										</li>
										<li className="flex items-center">
											<i className="fa-solid fa-dog mr-3 text-blue-600"></i>
											<span className="text-neutral-500 dark:text-neutral-400">
												No pets
											</span>
										</li>
										<li className="flex items-center">
											<i className="fa-solid fa-ban mr-3 text-blue-600"></i>
											<span className="text-neutral-500 dark:text-neutral-400">
												No parties or events
											</span>
										</li>
										<li className="flex items-center">
											<i className="fa-solid fa-smoking mr-3 text-blue-600"></i>
											<span className="text-neutral-500 dark:text-neutral-400">
												Smoking is allowed
											</span>
										</li>
									</ul>
								</div>

								<div className="rounded-2xl border-t-8 border-t-indigo-500 bg-white p-6 shadow-lg dark:bg-black">
									<h3 className="mb-4 text-lg font-semibold">Safety Devices</h3>
									<ul className="space-y-2">
										<li className="flex items-center">
											<i className="fa-regular fa-bell mr-3 text-blue-600"></i>
											<span className="text-neutral-500 dark:text-neutral-400">
												Carbon Monoxide Alarm Not Reported
											</span>
										</li>
										<li className="flex items-center">
											<i className="fa-regular fa-bell mr-3 text-blue-600"></i>
											<span className="text-neutral-500 dark:text-neutral-400">
												Smoke alarm not reported
											</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					)}
					{activeTab === 'menu1' && (
						<div id="menu1" className="tab-pane">
							<div className="mb-8">
								<h4 className="text-center text-xl font-semibold">
									Cancellation Policy
								</h4>
							</div>
							<div className="">
								<p className="mb-4 text-lg leading-relaxed text-neutral-500 dark:text-neutral-400">
									Customers can cancel their reservation at any time, as long as
									the cancellation is made within the time frame indicated at
									the time of booking. The terms of free cancellation can be
									found in the “My Bookings” section of the Villa Ada website
									and in the email received at the time of booking.
								</p>
								<p className="mb-4 text-lg leading-relaxed text-neutral-500 dark:text-neutral-400">
									If the cancellation is made within the free cancellation
									period, the customer will not have to pay any amount.
									Cancellations can be made directly from the “My Bookings”
									section of the Villa Ada website.
								</p>
								<p className="mb-4 text-lg leading-relaxed text-neutral-500 dark:text-neutral-400">
									If the cancellation is made after the free cancellation
									period, the customer will have to pay the full amount of the
									stay. Payment will be automatically charged to the credit card
									saved at the time of booking on the date of expiry of the free
									cancellation term.
								</p>
								<p className="mb-4 text-lg leading-relaxed text-neutral-500 dark:text-neutral-400">
									If the automatic debit fails, the customer will have to pay
									the amount within the same day. Otherwise, the booking will be
									cancelled.
								</p>
								<p className="text-lg leading-relaxed text-neutral-500 dark:text-neutral-400">
									In order to avoid the possible failure of the automatic debit
									and the loss of the reservation, the customer is invited to
									pay the amount of the stay before the automatic debit takes
									place.
								</p>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default TermsAndConditions
