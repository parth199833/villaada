import React from "react";
import TestimonialCard from "./TestimonailCard";
import TestimonialDataJson from "../data/jsons/__testimonialData.json";
import { TestimonialDataTypes } from "@/data/types";

const TestimonialList: React.FC = () => {
  // Extract first 3 testimonials from the data
  const testimonials: TestimonialDataTypes[] = TestimonialDataJson.reviews.slice(0, 3);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((testimonial) => (
        <TestimonialCard
          key={testimonial.id}
          data={testimonial}
          className="my-class"
          size="default"
        />
      ))}
    </div>
  );
};

export default TestimonialList;
