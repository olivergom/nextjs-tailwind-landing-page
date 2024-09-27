/* import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Testimonial {
  name: string;
  review: string;
}

const testimonials: Testimonial[] = [
  { name: "John Doe", review: "Ana Prado's daycare is amazing! Our child loves it there." },
  { name: "Jane Smith", review: "We couldn't be happier with the care our daughter receives." },
  { name: "Mike Johnson", review: "The best daycare in Edmond. Highly recommended!" },
];

const Testimonials: React.FC = () => {
  return (
    <div className="bg-white py-12">
      <h2 className="text-3xl font-bold text-center mb-8">What Parents Say</h2>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-[#909cce] p-6 mx-auto max-w-2xl rounded-lg shadow-md">
            <p className="text-white italic mb-4">"{testimonial.review}"</p>
            <p className="text-white font-semibold">- {testimonial.name}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials; */
import React from 'react';

interface Testimonial {
  name: string;
  review: string;
}

const testimonials: Testimonial[] = [
  { name: "John Doe", review: "Ana Prado's daycare is an absolute gem in Edmond. From the moment we stepped through the doors, we knew we had found something special. The warm and welcoming atmosphere immediately put both us and our child at ease. Ana and her team have created a nurturing environment that fosters growth, learning, and creativity. Our child has flourished under their care, developing new skills and forming wonderful friendships. The structured daily activities, which include educational games, arts and crafts, and outdoor play, provide a perfect balance of fun and learning. " },
  { name: "Jane Smith", review: "Choosing Ana Prado's daycare for our daughter was one of the best decisions we've made as parents. The level of care, attention, and education provided is truly outstanding. From day one, we were impressed by the professionalism and warmth of Ana and her staff. They have created an environment where children feel safe, loved, and encouraged to explore and learn. The curriculum is well-rounded and age-appropriate, focusing on cognitive, social, emotional, and physical development. We've been amazed at how much our daughter has learned in such a short time. " },
  { name: "Mike Johnson", review: "I can't speak highly enough of Ana Prado's daycare. As a first-time parent, I was initially anxious about leaving my son in someone else's care, but those worries quickly dissipated after seeing the exceptional quality of care provided here. The daycare offers a perfect blend of structure and flexibility, allowing children to learn and grow at their own pace while still following a consistent routine. The staff's expertise in early childhood education is evident in their thoughtful approach to activities and learning experiences. My son has thrived in this environment, developing a love for learning that I'm confident will serve him well in the years to come." },
];

const Testimonials: React.FC = () => {
  return (
    <div className="bg-white py-12">
      <h2 className="text-3xl font-bold text-center mb-8">What Parents Say</h2>
      <div className="flex flex-row gap-4 px-4 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-[#909cce] p-6 rounded-lg shadow-md flex-1">
            <p className="text-black mb-4">"{testimonial.review}"</p>
            <p className="text-black font-semibold">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;