/* import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  heading: string;
  message: string;
}

const Hero = ({ heading, message }: Props) => {
  return (
    <div className="flex h-screen pt-16">
      <div className="w-1/2 relative">
        <Image
          src="/home_page.jpg"
          alt="Home page image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="w-1/2 flex items-center justify-center bg-[#d5c29a]">
        <div className=" text-center flex flex-col justify-center items-center">
          
        <Image
            src="/daycare-logo.jpg"
            alt="Daycare Logo"
            width={200}
            height={200}
            className="mb-5"
 
          />
          <h2 className="text-5xl font-bold text-gray-800">{heading}</h2>
          <p className="py-5 text-xl text-gray-600">{message}</p>
          <Link href="/#portfolio" passHref>
            <button className="px-8 py-2 border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors">Here</button>
          </Link> 
        </div>
      </div>
    </div>
  );
};

export default Hero; */
/* import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  heading: string;
  message: string;
}

const Hero = ({ heading, message }: Props) => {
  return (
    <div className="flex h-screen pt-16">
      <div className="w-1/2 relative">
        <Image
          src="/home_page.jpg"
          alt="Home page image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="w-1/2 flex items-center justify-center bg-[#d5c29a]">
        <div className="text-center flex flex-col justify-center items-center">
          <Image
            src="/daycare-logo.jpg"
            alt="Daycare Logo"
            width={200}
            height={200}
            className="mb-5"
          />

          <p className="text-2xl font-semibold text-gray-700">40+ years of experience</p>
        </div>
      </div>
    </div>
  );
};

export default Hero; */
/* import React from "react";
import Image from "next/image";

interface Props {
  heading: string;
  message: string;
}

const Hero = ({ heading, message }: Props) => {
  return (
    <div className="flex h-[calc(100vh-4rem)] pb-4">
      <div className="w-3/4 bg-white px-4 relative overflow-hidden ">
        <div className="grid grid-cols-3 gap-4 h-full">
          <div className="col-span-1 row-span-3 relative rounded-lg overflow-hidden">
            <Image src="/home_page.jpg" alt="Home page" layout="fill" objectFit="cover" />
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <Image src="/grid1.jpeg" alt="Grid 1" layout="fill" objectFit="cover" />
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <Image src="/grid22.jpeg" alt="Grid 2" layout="fill" objectFit="cover" />
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <Image src="/grid3.jpeg" alt="Grid 3" layout="fill" objectFit="cover" />
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <Image src="/grid4.jpeg" alt="Grid 4" layout="fill" objectFit="cover" />
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <Image src="/grid5.jpeg" alt="Grid 5" layout="fill" objectFit="cover" />
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <Image src="/grid6.jpeg" alt="Grid 6" layout="fill" objectFit="cover" />
          </div>
        </div>
      </div>

      <div className="w-1/4 flex items-center justify-center bg-[#d5c29a] rounded-xl">
        <div className="text-center flex flex-col justify-center items-center">
          <Image
            src="/daycare-logo.jpg"
            alt="Daycare Logo"
            width={200}
            height={200}
            className="mb-5"
          />
          <p className="text-xl font-semibold text-gray-700">40+ years of experience</p>
        </div>
      </div>
    </div>
  );
};

export default Hero; */
import React from 'react';

interface Props {
  heading: string;
  message: string;
}

const Hero = ({ heading, message }: Props) => {
  return (
    <div className="flex h-[calc(100vh-4rem)] pb-4">
      {/* Image Grid Section (3/4 width) */}
      <div className="w-3/4 bg-white px-4 relative overflow-hidden">
        <div className="grid grid-cols-3 gap-4 h-full">
          <div className="col-span-1 row-span-3 relative rounded-lg overflow-hidden">
            <img src="/home_page.jpg" alt="Home page" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <img src="/grid1.jpeg" alt="Grid 1" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <img src="/grid22.jpeg" alt="Grid 2" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <img src="/grid3.jpeg" alt="Grid 3" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <img src="/grid4.jpeg" alt="Grid 4" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <img src="/grid5.jpeg" alt="Grid 5" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <img src="/grid6.jpeg" alt="Grid 6" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Logo and Experience Section (1/4 width) */}
      <div className="w-1/4 flex items-center justify-center bg-[#d5c29a] rounded-xl">
        <div className="text-center flex flex-col justify-center items-center">
          <img
            src="/daycare-logo.jpg"
            alt="Daycare Logo"
            className="mb-5 w-[200px] h-[200px] object-contain"
          />
          <p className="text-xl font-semibold text-gray-700">40+ years of experience</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;