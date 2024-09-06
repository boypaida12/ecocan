import React from 'react';
import TestimonialCard from './testimonialCard';

const testimonialsData = [
  {
    image: 'assets/images/events/memoji.png',
    name: 'John',
    surname: 'Doe',
    testimony: 'This is a great product! I highly recommend it to everyone.',
    title: 'CEO, Company Inc.'
  },
  {
    image: 'assets/images/events/memoji.png',
    name: 'Jane',
    surname: 'Smith',
    testimony: 'Amazing experience! Will definitely use this service again.',
    title: 'CTO, Tech Solutions'
  },
  {
    image: 'assets/images/events/memoji.png',
    name: 'Alice',
    surname: 'Johnson',
    testimony: 'Highly satisfied with the results. Great job!',
    title: 'Manager, Business Corp.'
  },
  {
    image: 'assets/images/events/memoji.png',
    name: 'Bob',
    surname: 'Brown',
    testimony: 'Exceptional quality and service. Five stars!',
    title: 'Director, Creative Agency'
  }
];

const Testimonials = () => {
  return (
    <div className="bg-white max-w-[77.5rem] mx-auto p-8">
      <h2 className="text-center font-inter font-medium text-5xl leading-[3.631rem] bg-clip-text text-transparent my-[6.25rem]" style={{ 
        backgroundImage: 'linear-gradient(73.15deg, #228B22 11.62%, #4AC63F 35.45%, #FFDD4C 64.2%), linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))'
      }}>
        Testimonials
      </h2>
      <div className="flex flex-wrap -mx-1 mt-8">
     {testimonialsData.map((testimonial, index) => (
    <div key={index} className="flex-auto px-1 mb-4">
      <TestimonialCard
        image={testimonial.image}
        name={testimonial.name}
        surname={testimonial.surname}
        testimony={testimonial.testimony}
        title={testimonial.title}
      />
    </div>
  ))}
</div>
<p className="text-[#4AC63F] font-inter text-[16px] font-bold leading-[20px] text-center">
  A win for the fan, for you, and most importantly, for the Environment
</p>
</div>
  );
};

export default Testimonials;