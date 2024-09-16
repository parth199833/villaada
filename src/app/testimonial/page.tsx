"use client";

import React, { useState, useEffect } from "react";
import TestimonialCard from "@/components/TestimonialCard";
import { DEMO_TESTIMONIAL } from "@/data/listings";
import ButtonPrimary from "@/shared/ButtonPrimary";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import TestimonialPopUpModel from "@/components/TestimonialPopUpModel";

function Testimonial() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0); // Tracks the currently active testimonial
	const itemsPerPage = 3; // Show 3 items at a time

	// Auto-slide every 5 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			handleNext();
		}, 5000);

		return () => clearInterval(interval); // Clear interval on component unmount
	}, [activeIndex]);

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	const handleNext = () => {
		// Slide to the next testimonial
		if (activeIndex < DEMO_TESTIMONIAL.length - 1) {
			setActiveIndex(activeIndex + 1);
		} else {
			setActiveIndex(0); // Loop back to the first testimonial
		}
	};

	const handlePrev = () => {
		// Slide to the previous testimonial
		if (activeIndex > 0) {
			setActiveIndex(activeIndex - 1);
		} else {
			setActiveIndex(DEMO_TESTIMONIAL.length - 1); // Loop back to the last testimonial
		}
	};

	// Determine the slice of testimonials to show (3 at a time)
	const visibleTestimonials = [
		DEMO_TESTIMONIAL[activeIndex % DEMO_TESTIMONIAL.length],
		DEMO_TESTIMONIAL[(activeIndex + 1) % DEMO_TESTIMONIAL.length],
		DEMO_TESTIMONIAL[(activeIndex + 2) % DEMO_TESTIMONIAL.length],
	];

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
					onClick={handlePrev}
				>
					<ChevronLeftIcon className="h-4 w-4" />
				</button>

				{/* Testimonial Cards */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{visibleTestimonials.map((testimonial, index) => (
						<TestimonialCard
							key={testimonial.id}
							data={testimonial}
							className={`my-class ${index === 1 ? "bg-blue-200 shadow-lg" : "bg-white"
								}`} // Highlight the active card
							size="default"
						/>
					))}
				</div>

				{/* Next Button */}
				<button
					className="absolute w-8 h-8 right-3 top-[calc(50%-16px)] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 focus:outline-none"
					onClick={handleNext}
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
