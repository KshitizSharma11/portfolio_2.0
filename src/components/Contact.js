import React from 'react';
import { SocialIcon } from 'react-social-icons';
import PhoneImg from '../assets/phone.png';
import AdrImg from '../assets/address.png';
import EmImg from '../assets/email.png';

function Contact() {
  return (
    <div className="text-white" id='contact'>
      <div className="flex flex-col items-center mt-10">
        <h3 className="text-white font-weight text-3xl mt-10 md:mt-20 font-medium">Reach Out To Me</h3>
        <div className="flex flex-col md:flex-row  justify-evenly m-2 md:mt-6">
          <ContactCard icon={PhoneImg} title="Phone" content="+91 9805147466" />
          <ContactCard icon={EmImg} title="Email" content="kshitizsharma.00@gmail.com" />
          <ContactCard icon={AdrImg} title="Address" content="Baijnath, Kangra (H.P) Pin-Code 176125" />
        </div>
        <div className="flex flex-row justify-center space-x-6 mt-6 md:mt-10">
          <SocialIcon url="https://github.com/KshitizSharma11" target="_blank" bgColor="white" />
          <SocialIcon url="https://www.linkedin.com/in/kshitiz-sharma-the-one/" target="_blank" bgColor="white" />
          <SocialIcon url="https://www.facebook.com/kshitiz.sharma.3979/" target="_blank" bgColor="white" />
          <SocialIcon url="https://www.instagram.com/kshitiz_sharma_k.s/" target="_blank" bgColor="white" />
          <SocialIcon url="https://wa.me/+919805147466" network="whatsapp" target="_blank" bgColor="white" />
        </div>
        
      </div>
      <div className="flex flex-row justify-center  bg-gray-800 p-3 mt-6 md:mt-10">
          <h2 className="text-2xl font-semibold m-2">Made By Kshitiz with 💝</h2>
        </div>
    </div>
  );
}

function ContactCard({ icon, title, content }) {
  return (
    <div className="flex items-center mt-6 lg:p-7 md:mt-10">
      <img src={icon} className="w-26 h-26 mr-4" alt={title} />
      <div>
        <h1 className="text-lg md:text-xl font-medium">{title}</h1>
        <h2 className="text-sm md:text-base">{content}</h2>
      </div>
    </div>
  );
}

export default Contact;
