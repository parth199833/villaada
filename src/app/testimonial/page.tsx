import React from 'react'

import TestimonialCard from '@/components/TestimonailCard';
import { DEMO_TESTIMONIAL } from "@/data/listings"; // Import the correct demo data

function Testimonial() {
	console.log("Testimonial component rendered");
  
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
			{DEMO_TESTIMONIAL.map((testimonial) => (
			  <TestimonialCard
				key={testimonial.id}
				data={testimonial} // Pass each testimonial data
				className="my-class"
				size="default"
			  />
			))}
		  </div>
		</div>
	  </main>
	);
  }

export default Testimonial
