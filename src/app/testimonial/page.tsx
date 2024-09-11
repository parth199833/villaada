"use client";

import React, { useState } from "react";
import TestimonialCard from "@/components/TestimonialCard";
import { DEMO_TESTIMONIAL } from "@/data/listings";
import ButtonPrimary from "@/shared/ButtonPrimary";
import TestimonialPopUpModel from "@/components/TestimonialPopUpModel"

function Testimonial() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

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
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{DEMO_TESTIMONIAL.slice(0, 3).map((testimonial) => (
						<TestimonialCard
							key={testimonial.id}
							data={testimonial}
							className="my-class"
							size="default"
						/>
					))}
				</div>
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
