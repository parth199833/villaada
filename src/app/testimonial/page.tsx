"use client";

import React, { useState } from "react";
import TestimonialCard from "@/components/TestimonialCard";
import { DEMO_TESTIMONIAL } from "@/data/listings";
import ButtonPrimary from "@/shared/ButtonPrimary";
import TestimonialPopUpModel from "@/components/TestimonialPopUpModel";

function Testimonial() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [currentPage, setCurrentPage] = useState(0);
	const itemsPerPage = 3; // Number of items per page

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	const handleNextPage = () => {
		if ((currentPage + 1) * itemsPerPage < DEMO_TESTIMONIAL.length) {
			setCurrentPage(currentPage + 1);
		}
	};

	const handlePrevPage = () => {
		if (currentPage > 0) {
			setCurrentPage(currentPage - 1);
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
			<div className="container relative mb-24 py-16" id="testimonial">
				{/* Previous Button */}
				<button
					onClick={handlePrevPage}
					disabled={currentPage === 0}
					className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full text-gray-600 hover:bg-gray-300"
				>
					Previous
				</button>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{paginatedTestimonials.map((testimonial) => (
						<TestimonialCard
							key={testimonial.id}
							data={testimonial}
							className="my-class"
							size="default"
						/>
					))}
				</div>

				{/* Next Button */}
				<button
					onClick={handleNextPage}
					disabled={(currentPage + 1) * itemsPerPage >= DEMO_TESTIMONIAL.length}
					className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full text-gray-600 hover:bg-gray-300"
				>
					Next
				</button>

				{/* More Testimonials Button */}
				<div className="flex justify-center mt-8">
					<ButtonPrimary onClick={handleOpenModal}>
						More Testimonial
					</ButtonPrimary>
				</div>
			</div>

			<TestimonialPopUpModel isOpen={isModalOpen} onClose={handleCloseModal} />
		</main>
	);
}

export default Testimonial;
