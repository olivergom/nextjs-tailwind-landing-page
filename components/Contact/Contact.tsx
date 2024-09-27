/* import React from "react";

const contact = () => {
  return (
    <div className="max-w-[1240px] m-auto p-4 h-screen">
      <h1 className="text-2xl font-bold text-center p-4">
        Send me a 🏃 message
      </h1>
      <form className="max-w-[600px] m-auto">
        <div className="grid grid-cols-2 gap-2">
          <input
            className="border shadow-lg p-3"
            type="text"
            placeholder="Name"
          />
          <input
            className="border shadow-lg p-3"
            type="email"
            placeholder="Email"
          />
        </div>
        <input
          className="border shadow-lg p-3 w-full my-2"
          type="text"
          placeholder="Subject"
        />
        <textarea
          className="border shadow-lg p-3 w-full"
          cols={30}
          rows={10}
          placeholder="Message"
        ></textarea>
        <button className="border shadow-lg p-3 w-full mt-2">Submit</button>
      </form>
    </div>
  );
};

export default contact; */



/* import React from "react";

const Contact = () => {
  return (
    <div className="max-w-[1240px] m-auto p-4 h-screen">
      <h1 className="text-2xl font-bold text-center p-4">
        Contact Me
      </h1>
      <p className="text-center text-xl mb-8">Phone: (555) 123-4567</p>
      <form className="max-w-[600px] m-auto">
        <div className="grid grid-cols-2 gap-2">
          <input
            className="border shadow-lg p-3"
            type="text"
            placeholder="Name"
          />
          <input
            className="border shadow-lg p-3"
            type="email"
            placeholder="Email"
          />
        </div>
        <input
          className="border shadow-lg p-3 w-full my-2"
          type="text"
          placeholder="Subject"
        />
        <textarea
          className="border shadow-lg p-3 w-full"
          cols={30}
          rows={10}
          placeholder="Message"
        ></textarea>
        <button className="border shadow-lg p-3 w-full mt-2">Submit</button>
      </form>
    </div>
  );
};

export default Contact; */
/* import React from "react";
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
          <div className="flex items-center justify-center mb-4">
            <FaPhone className="mr-2" />
            <p className="text-xl">{randomPhoneNumber}</p>
          </div>
          
        </div>
        <div className="flex-1 flex justify-center items-start">
          <div className="bg-[#6c5887] text-white p-6 rounded-lg shadow-lg max-w-[600px]">
            <h2 className="text-2xl font-bold mb-4">Ana's Note</h2>
            <p className="text-lg">
              Taking care of children is my life's passion and I'd be overjoyed to take care of your child! 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; */
import React from "react";
import { FaPhone } from "react-icons/fa";
import Image from "next/image";

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
            <Image
              src="/contact.jpg"
              alt="Ana's Daycare"
              layout="fill"
              objectFit="cover"
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
            
            <h2 className="text-2xl font-bold mb-4">Ana's Note</h2>
            <p className="text-lg mb-4">
              Taking care of children is my life's passion and I'd be overjoyed to take care of your child! I provide a nurturing environment where every child can thrive, learn, and grow. With years of experience and a dedication to early childhood development, I ensure that each day is filled with fun, educational activities, and lots of love.
            </p>
            <p className="text-lg">
              If you're looking for a safe, caring, and stimulating daycare for your little one, I'd love to hear from you. Please don't hesitate to reach out for any inquiries or to schedule a visit.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;