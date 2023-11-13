import React from 'react';
import Wexp from '../assets/Wexp.png';

function Workexp() {
  return (
    <div className="text-white " id="workexp" >
      <div className="justify-center flex mt-10">
        <h1 className="text-3xl content-center font-semibold mt-10 text-center">Work Experience</h1>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-evenly text-white m-5 mt-5">
        <div className="md:w-1/2 mt-8 md:mt-20">
          <img src={Wexp} className="w-full h-auto" alt="Work Experience" />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-20 p-4 bg-gray-800 border-4 border-teal-600 rounded-md">
          <h1 className="text-xl md:text-2xl font-semibold">Web Developer Intern</h1>
          <h3 className="text-md font-medium mt-2">At Pregamate</h3>
          <p className="text-xs mt-2">(December 2021 to February 2022)</p>
          <p className="text-sm md:text-md font-medium mt-5">
            Worked on the company's website, created a database for appointments, patient data, and doctor's data.
            Created dashboards for patients, doctors, and admin. Improved UI and added new elements like cards on homepage.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Workexp;
