import React, { FC } from "react";
import { TestimonialDataTypes } from "@/data/types";
import Avatar from "@/shared/Avatar";
import FiveStartIconForRate from "./FiveStartIconForRate";
import ButtonCircle from "@/shared/ButtonCircle";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import CommentListing from "./CommentListing";
import ButtonSecondary from "@/shared/ButtonSecondary";
import Input from "@/shared/Input";

export interface TestimonialModelProps {
    isOpen: boolean;
    onClose: () => void;
    className?: string;
    size?: "default" | "small";
}

const TestimonialModel: FC<TestimonialModelProps> = ({
    size = "default",
    className = "",
    isOpen,
    onClose,
}) => {
    if (!isOpen) return null; // Do not render the modal if it's not open

    // Determine the width based on the size prop
    const modalWidth = size === "small" ? "max-w-sm" : "max-w-xl"; // Increased width

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-40"
            onClick={onClose} // Close modal when clicking outside
        >
            <div
                className={`bg-white dark:bg-neutral-900 rounded-lg overflow-hidden shadow-lg mx-4 relative ${modalWidth} ${className}`}
                onClick={(e) => e.stopPropagation()} // Prevent closing on inner click
                style={{ maxHeight: '80vh', overflowY: 'auto' }} // Adjust max height and overflow
            >
                {/* Close button */}
                <button
                    type="button"
                    onClick={onClose}
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 absolute top-4 right-4"
                >
                    <span className="sr-only">Close menu</span>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="listingSection__wrap">
                    {/* Modal content */}
                    <h2 className="text-2xl font-semibold">Reviews (23 reviews)</h2>
                    <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
                    <div className="space-y-5 mt-4">
                        <FiveStartIconForRate iconClass="w-6 h-6" className="space-x-0.5" />
                        <div className="relative">
                            <Input
                                fontClass=""
                                sizeClass="h-16 px-4 py-3"
                                rounded="rounded-3xl"
                                placeholder="Share your thoughts ..."
                            />
                            <ButtonCircle
                                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                                size=" w-12 h-12 "
                            >
                                <ArrowRightIcon className="w-5 h-5" />
                            </ButtonCircle>
                        </div>
                    </div>
                    <div className="divide-y divide-neutral-100 dark:divide-neutral-800 mt-4">
                        <CommentListing className="py-8" />
                        <CommentListing className="py-8" />
                        <CommentListing className="py-8" />
                        <CommentListing className="py-8" />
                        <div className="pt-8">
                            <ButtonSecondary>View more 20 reviews</ButtonSecondary>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialModel;
