import React from 'react';
import Blog from '../assets/blogp.png';
import Restau from '../assets/restP.png';
import Reci from '../assets/reciP.png';
import Wsapp from '../assets/wsapp.png';
import Kmart from '../assets/Kmart.png';
import Cert from '../assets/cert.png';
function Projects() {
  return (
    <div className="text-white mt-20" id="projects">
      <div className="flex flex-row justify-center mt-20 mb-10">
        <h1 className="text-3xl font-medium">Personal Projects</h1>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-3 mx-4">
      <a href="https://k-blogs.vercel.app/" target="_blank">
        <div className="bg-black rounded-lg p-6 cursor-pointer">
          <img src={Blog} className="w-full h-40 object-cover" alt="Blog App" />
          <div className="mt-4 space-y-2">
            <h1 className="text-xl font-semibold">Blog-App</h1>
            <h1 className="text-md font-medium">Tech-Stack</h1>
            <p className="text-gray-500">React-Native, Hypgraph CMS, GraphQl</p>
          </div>
        </div>
        </a>
        <a href="https://kshitizsharma11.github.io/Final_Project/" target="_blank">
        <div className="bg-black rounded-lg p-6 cursor-pointer" >
          <img src={Restau} className="w-full h-40 object-cover" alt="Restaurant Website" />
          <div className="mt-4 space-y-2">
            <h1 className="text-xl font-semibold">Restaurant Website</h1>
            <h1 className="text-md font-medium">Tech-Stack</h1>
            <p className="text-gray-500">HTML, CSS, Javascript, PHP, MySQL</p>
          </div>
        </div>
        </a>
        <a href="https://recipe-app-using-react.web.app/" target="_blank">
        <div className="bg-black rounded-lg p-6 cursor-pointer">
          <img src={Reci} className="w-full h-40 object-cover" alt="Recipe App" />
          <div className="mt-4 space-y-2">
            <h1 className="text-xl font-semibold">Recipe App</h1>
            <h1 className="text-md font-medium">Tech-Stack</h1>
            <p className="text-gray-500">React.js, JavaScript (JSX)</p>
          </div>
        </div>
        </a>

        {/* Second Row of Cards */}
        <a href="https://github.com/KshitizSharma11/Shaktii" target="_blank">
        <div className="bg-black rounded-lg p-6">
          <img src={Wsapp} className="w-full h-40 object-cover" alt="Blog App" />
          <div className="mt-4 space-y-2">
            <h1 className="text-xl font-semibold">Women-Safety App</h1>
            <h1 className="text-md font-medium">Tech-Stack</h1>
            <p className="text-gray-500">Java, XML, Firebase, Android Studio</p>
          </div>
        </div>
        </a>
        <a href="https://kmart-1cr2xwsv8-kshitizsharma11.vercel.app/" target="_blank">
        <div className="bg-black rounded-lg p-6">
          <img src={Kmart} className="w-full h-40 object-cover" alt="Restaurant Website" />
          <div className="mt-4 space-y-2">
            <h1 className="text-xl font-semibold">Ecommerce Dummy (K-Mart)</h1>
            <h1 className="text-md font-medium">Tech-Stack</h1>
            <p className="text-gray-500">React-Native, Firebase realtime databse</p>
          </div>
        </div>
        </a>
        <a href="https://certificate-generator-8a26c.web.app/" target="_blank">
        <div className="bg-black rounded-lg p-6">
          <img src={Cert} className="w-full h-40 object-cover" alt="Recipe App" />
          <div className="mt-4 space-y-2">
            <h1 className="text-xl font-semibold">Certificate Generator</h1>
            <h1 className="text-md font-medium">Tech-Stack</h1>
            <p className="text-gray-500">React.js, JavaScript (JSX)</p>
          </div>
        </div>
        </a>
      </div>
  
    </div>
  );
}

export default Projects;
