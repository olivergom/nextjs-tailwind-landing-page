import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <div className="bg-[#d3c6fd] py-12">
      <div className="container mx-auto px-4 flex items-center h-[200px]">
        <div className="w-1/3">
          <h2 className="text-3xl font-bold">About Ana</h2>
        </div>
        <div className="w-2/3">
          <p className="text-gray-600 text-xl">
            Ana grew up as the oldest of 8 siblings in rural El Salvador where she took care of her brother's and sisters from the age of 4 years old. She immigrated to the US where her first job was taking care of children and learning English. Since then she has taken care of over 50 kids from 20+ families over the last 40 years. Ana has two kids herself and understands the hard work it takes to raise them well! She is a deeply caring person who genuinely loves to see each child as they walk in to her doors every day. They are the light of her world and she wouldn't trade it for anything.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;