import React from "react";
import { FaPhone } from "react-icons/fa";

const Contact = () => {
  const randomPhoneNumber = `(${Math.floor(Math.random() * 900) + 100}) ${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`;

  return (
    <div className="max-w-[1240px] m-auto p-4 min-h-1/2">
      <h1 className="text-3xl font-bold text-center p-4 mb-8">
        Contact Me
      </h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <div className="relative h-[600px] w-full rounded-lg overflow-hidden shadow-lg">
          <img
            src="/contact.jpg"
            alt="Ana's Daycare"
            className="w-full h-full object-cover"
          />
          </div>
        </div>
        <div className="flex-1 flex flex-col ">
        <div className=" p-4 bg-[#f0f0f0] rounded-lg shadow-md">
            <p className="text-lg font-semibold mb-2">For inquiries and availability, please contact:</p>
            <div className="flex items-center">
              <FaPhone className="mr-2 text-[#6c5887]" />
              <p className="text-xl">(405)-550-8547</p>
            </div>
          </div>
          <div className="bg-[#6c5887] text-white p-6 mt-4 rounded-lg shadow-lg">
            
            <h2 className="text-2xl font-bold mb-4">Ana&apos;s Note</h2>
            <p className="text-lg mb-4">
              Taking care of children is my life&apos;s passion and I&apos;d be overjoyed to take care of your child! I provide a nurturing environment where every child can thrive, learn, and grow. With years of experience and a dedication to early childhood development, I ensure that each day is filled with fun, educational activities, and lots of love.
            </p>
            <p className="text-lg">
              If you&apos;re looking for a safe, caring, and stimulating daycare for your little one, I&apos;d love to hear from you. Please don&apos;t hesitate to reach out for any inquiries or to schedule a visit.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;