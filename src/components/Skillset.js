import React from 'react';
import RN from '../assets/favicon.ico';
import Andro from '../assets/android.png';
import Web from '../assets/web.png';
import Ml from '../assets/ml.png';
import Bg from '../assets/Bg.jpg';

function Skillset() {
  return (
    <div className="text-white mt-20" id="skillset">
      <div className="flex flex-col items-center  ">
        <h1 className="text-white text-3xl font-medium mb-6">Professional Skillset</h1>
        <div className="flex flex-col md:flex-row justify-evenly lg:mt-20 lg:space-x-10 md:mb-10 lg:mb-10">
          <SkillCard image={RN} title="Cross-Platform Development" subTitle="Using React Native" />
          <SkillCard image={Web} title="Web Development" subTitle="Using React, HTML, CSS, Javascript" />
          <SkillCard image={Andro} title="Android Development" subTitle="Using Java" />
          <SkillCard image={Ml} title="Machine Learning And Deep Learning" subTitle="Using Python and its libraries" />
        </div>
      </div>
    </div>
  );
}

function SkillCard({ image, title, subTitle }) {
  return (
    <div className="text-center mb-4 md:mb-0 relative transition-transform transform hover:scale-105">
      <div className="bg-gray-300 h-80 w-60 rounded-lg mx-auto relative" style={{ backgroundImage: `url(${Bg})`, backgroundSize: 'cover' }}>
        <div className="absolute top-0 left-0 h-full w-full bg-black opacity-70 rounded-lg" />
        <img src={image} className="h-20 w-20 absolute top-3 left-3" alt={title} />
        <div className="absolute top-1/4 m-2">
          <h1 className="text-xl mt-2">{title}</h1>
          <h1 className="text-lg">{subTitle}</h1>
        </div>
      </div>
    </div>
  );
}

export default Skillset;
