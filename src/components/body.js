import React, { useState, useEffect } from 'react';
import HeroImage from '../assets/Hero3.JPG';

const arr = [
  "Cross-Platform Developer",
  "Android Developer",
  "Web Developer",
  "Techie"
];

const imageStyle = {
  width: '100%', // Adjust to your preference
  maxWidth: '450px', // Set a maximum width for the image
  height: 'auto', // Allow the height to adjust proportionally
};

function Body() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLine, setCurrentLine] = useState('');

  useEffect(() => {
    let interval;

    const updateWord = () => {
      const words = arr[currentWordIndex].split(' ');
      const currentWord = words[currentLine.split(' ').length - 1];

      if (currentWord) {
        setCurrentLine((prevLine) => prevLine + ' ' + currentWord);
      } else {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % arr.length);
        setCurrentLine('');
      }
    };

    interval = setInterval(updateWord, 500);

    return () => {
      clearInterval(interval);
    };
  }, [currentWordIndex, currentLine]);

  return (
    <div className="flex flex-col-reverse md:flex-row relative" id="about">
      <div className="ml-auto mr-auto p-5 mt-20">
        <h1 className="font-serif text-4xl md:text-5xl text-white font-semibold p-4">Hi, I am Kshitiz</h1>
        <p className="text-white bg-gradient-to-r from-gray-900 to-yellow-500 text-3xl md:text-4xl font-medium mt-5 p-4">
          A{currentLine}
        </p>
        <h3 className="text-gray-200 bg-gray-800 text-xl md:text-2xl font-medium mt-5 p-2">I am, a computer science undergrad firmly believing in 'Stoicism'.</h3>
        <h3 className="text-gray-200 bg-gray-800 text-xl md:text-2xl font-medium p-2">I am really passionate when it comes to building stuff.</h3>
        <h3 className="text-gray-200 bg-gray-800 text-xl md:text-2xl font-medium p-2">Over the years, I have worked on various techstacks</h3>
        <h3 className="text-gray-200 bg-gray-800 text-xl md:text-2xl font-medium p-2">Wanna know more about me ?  </h3>
        <h3 className="text-gray-200 bg-gray-800 text-xl md:text-2xl font-medium p-2 ">Keep Scrolling!</h3>
      </div>
      <div className="p-5 mt-20 ml-auto mr-auto max-w-xl max-h-sm relative">
        <img
          src={HeroImage}
          className="rounded-xl"
          alt="Hero"
          style={imageStyle}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-800 opacity-20 z-10 rounded-xl"></div>
      </div>
    </div>
  );
}

export default Body;
