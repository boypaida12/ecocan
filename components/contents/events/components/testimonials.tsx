import React from "react";
import TestimonialCard from "./testimonialCard";

const testimonialsData = [
  {
    image: "/assets/images/events/memoji.png",
    name: "John",
    surname: "Doe",
    testimony: "This is a great product! I highly recommend it to everyone.",
    title: "CEO, Company Inc.",
  },
  {
    image: "/assets/images/events/memoji.png",
    name: "Jane",
    surname: "Smith",
    testimony: "Amazing experience! Will definitely use this service again.",
    title: "CTO, Tech Solutions",
  },
  {
    image: "/assets/images/events/memoji.png",
    name: "Alice",
    surname: "Johnson",
    testimony: "Highly satisfied with the results. Great job!",
    title: "Manager, Business Corp.",
  },
  {
    image: "/assets/images/events/memoji.png",
    name: "Bob",
    surname: "Brown",
    testimony: "Exceptional quality and service. Five stars!",
    title: "Director, Creative Agency",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-white my-16">
      <div className="max-w-[69.375rem] mx-auto p-8">
        <h2 className="bg-gradient-to-tr from-[#228B22] via-[#FFDD4C] to-[#FFDD4C] text-transparent bg-clip-text capitalize mb-2 text-center text-[2rem] font-medium">
          Testimonials
        </h2>
        <div className="grid grid-cols-2 gap-5 mb-5">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              image={testimonial.image}
              name={testimonial.name}
              surname={testimonial.surname}
              testimony={testimonial.testimony}
              title={testimonial.title}
            />
          ))}
        </div>
        <p className="text-[#4AC63F] font-inter text-[16px] font-bold leading-[20px] text-center">
          A win for the fan, for you, and most importantly, for the Environment
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
