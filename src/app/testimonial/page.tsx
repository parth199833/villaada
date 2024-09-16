"use client";

import React, { useState, useEffect } from "react";
import TestimonialCard from "@/components/TestimonialCard";
import { DEMO_TESTIMONIAL } from "@/data/listings";
import ButtonPrimary from "@/shared/ButtonPrimary";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import TestimonialPopUpModel from "@/components/TestimonialPopUpModel";

function Testimonial() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [currentPage, setCurrentPage] = useState(0);
	const itemsPerPage = 3; // Number of items per page

	// Auto slide interval
	useEffect(() => {
		const interval = setInterval(() => {
			handleNextPage();
		}, 5000); // Auto-slide every 5 seconds

		return () => clearInterval(interval); // Clear interval on component unmount
	}, [currentPage]);

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	const handleNextPage = () => {
		// Loop back to first page after reaching the last set of testimonials
		if ((currentPage + 1) * itemsPerPage < DEMO_TESTIMONIAL.length) {
			setCurrentPage(currentPage + 1);
		} else {
			setCurrentPage(0); // Loop back to the start
		}
	};

	const handlePrevPage = () => {
		// Loop to the last set of testimonials when going backward from the first set
		if (currentPage > 0) {
			setCurrentPage(currentPage - 1);
		} else {
			setCurrentPage(Math.floor(DEMO_TESTIMONIAL.length / itemsPerPage) - 1);
		}
	};

	// Slice the testimonials to display only the current page
	const paginatedTestimonials = DEMO_TESTIMONIAL.slice(
		currentPage * itemsPerPage,
		(currentPage + 1) * itemsPerPage
	);

	return (
		<main
			className="nc-PageHome3 relative overflow-hidden scroll-smooth"
			style={{
				backgroundImage: "url('/image/map.webp')",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			{/* Header Section */}
			<div className="text-center mb-16">
				<h2 className="text-4xl font-bold">Testimonial</h2>
				<p className="mt-4 text-lg text-gray-600">
					What our guests say about our villa
				</p>
			</div>

			<div className="container relative mb-24 py-16" id="testimonial">
				{/* Previous Button */}
				<button
					className="absolute w-8 h-8 left-3 top-[calc(50%-16px)] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 focus:outline-none"
					onClick={handlePrevPage}
				>
					<ChevronLeftIcon className="h-4 w-4" />
				</button>

				{/* Testimonial Cards */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{paginatedTestimonials.map((testimonial, index) => (
						<TestimonialCard
							key={testimonial.id}
							data={testimonial}
							// Apply a different background color for the middle card
							className={`my-class ${index === 1 ? "bg-purple-200" : "bg-white"
								}`} // Highlight and change the middle card color
							size="default"
						/>
					))}
				</div>

				{/* Next Button */}
				<button
					className="absolute w-8 h-8 right-3 top-[calc(50%-16px)] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 focus:outline-none"
					onClick={handleNextPage}
				>
					<ChevronRightIcon className="h-4 w-4" />
				</button>

				{/* More Testimonials Button */}
				<div className="flex justify-center mt-8">
					<ButtonPrimary onClick={handleOpenModal}>More Testimonial</ButtonPrimary>
				</div>
			</div>

			<TestimonialPopUpModel isOpen={isModalOpen} onClose={handleCloseModal} />
		</main>
	);
}

export default Testimonial;
