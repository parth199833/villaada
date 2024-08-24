'use client'
import Heading from '@/shared/Heading'
import Heading2 from '@/shared/Heading2'
import React, { useState } from 'react'

const ContactUs = () => {
	const [formData, setFormData] = useState({
		name: '',
		sur_name: '',
		email: '',
		number: '',
		message: '',
	})

	const handleChange = (e: any) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = (e: any) => {
		e.preventDefault()
		// Handle form submission logic here
		console.log(formData)
	}

	return (
		<div
			className="container relative bg-gray-100 py-10 md:rounded-3xl"
			id="contact"
		>
			<div className="relative mx-auto">
				<div className="text-center">
					<Heading desc="Have Any Question..." isCenter={true}>
						Contact Us
					</Heading>
				</div>
				<div className="relative flex w-full flex-col flex-wrap md:w-3/5 md:flex-row">
					<div className="relative w-full">
						<img
							src="https://villaadaalmare.com/uploads/1690806909_contact-image1.png"
							// alt="Contact Us"
							className="h-auto w-full rounded-3xl"
						/>
					</div>
					<div className="absolute left-1/3 top-1/2 w-full -translate-y-1/2 translate-x-1/2 md:mx-48 md:w-2/3">
						<div className="rounded-2xl bg-white p-8 shadow-2xl">
							<div className="mb-6">
								<h5 className="text-lg font-semibold">Get In Touch</h5>
								<h2 className="mt-2 text-2xl font-bold">Contact Us</h2>
							</div>
							<form onSubmit={handleSubmit}>
								<div className="-mx-2 flex flex-wrap">
									<div className="mb-4 w-full px-2 md:w-1/2">
										<input
											type="text"
											placeholder="Your Name"
											name="name"
											value={formData.name}
											onChange={handleChange}
											className="w-full rounded-md border border-gray-300 p-3"
										/>
									</div>
									<div className="mb-4 w-full px-2 md:w-1/2">
										<input
											type="text"
											placeholder="Surname"
											name="sur_name"
											value={formData.sur_name}
											onChange={handleChange}
											className="w-full rounded-md border border-gray-300 p-3"
										/>
									</div>
									<div className="mb-4 w-full px-2 md:w-1/2">
										<input
											type="email"
											placeholder="Email"
											name="email"
											value={formData.email}
											onChange={handleChange}
											className="w-full rounded-md border border-gray-300 p-3"
										/>
									</div>
									<div className="mb-4 w-full px-2 md:w-1/2">
										<input
											type="number"
											placeholder="Number"
											name="number"
											value={formData.number}
											onChange={handleChange}
											className="w-full rounded-md border border-gray-300 p-3"
										/>
									</div>
									<div className="mb-4 w-full px-2">
										<textarea
											placeholder="Message"
											name="message"
											value={formData.message}
											onChange={handleChange}
											className="w-full rounded-md border border-gray-300 p-3"
											rows={5}
										></textarea>
									</div>
									<div className="w-full px-2">
										<button
											type="submit"
											className="w-full rounded-md bg-blue-600 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
										>
											Submit
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContactUs
