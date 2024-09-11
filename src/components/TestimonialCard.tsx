import React, { FC } from "react";
import { TestimonialDataTypes } from "@/data/types";
import Avatar from "@/shared/Avatar";


export interface TestimonialCardProps {
  className?: string;
  data: TestimonialDataTypes; // Make data required
  size?: "default" | "small";
}

const TestimonialCard: FC<TestimonialCardProps> = ({
  size = "default",
  className = "",
  data, // Now data is passed dynamically
}) => {
  const { name, review, company } = data;

  const renderSliderGallery = () => {
    return (
      <div className="relative w-full rounded-2xl overflow-hidden">
        <div className="aspect-w-10 aspect-h-2 content-center">
        </div>
      </div>
    );
  };

  const renderContent = () => {
    return (

      <div className={size === "default" ? "p-5 space-y-4" : "p-3 space-y-2"}>
        <div className="space-y-2">
          <p className="text-neutral-500">{review}</p>
        </div>
        <div className="w-14 border-b border-neutral-100 dark:border-neutral-800"></div>
        <div className="flex justify-between items-center">
          {size === "default" && <Avatar sizeClass="md:w-16 md:h-16" />}
          <div>
            <h2 className="text-lg font-semibold text-neutral-900">{name}</h2>
            <span className="text-sm text-neutral-400">{company}</span>
          </div>
        </div>
      </div>
    );

  };

  return (
    <div
      className={`nc-CarCard group relative border border-neutral-200 dark:border-neutral-700 rounded-3xl overflow-hidden bg-white dark:bg-neutral-900 ${className}`}
      data-nc-id="CarCard"
    >
      {/* {renderSliderGallery()} */}
      {renderContent()}

    </div>
  );
};

export default TestimonialCard;
