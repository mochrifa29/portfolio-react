import React from 'react'
import Title from './Title'
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
    const CONTACTS = [
      {
        icon: FaEnvelope,
        title: "Write me ",
        text: "mochrifa29@gmail.com",
      },
      {
        icon: FaWhatsapp,
        title: "Call me ",
        text: "082 315 728 130",
      },
      {
        icon: FaLinkedin,
        title: "find me ",
        text: "www.linkedin.com/mochrifa29",
      },
    ];
  return (
    <div className="w-full py-20 px-10" id='contact'>
      <Title
        title="Contact"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <div className="md:flex gap-10 md:gap-2">
        {CONTACTS.map((contact, i) => (
          <div className="mx-auto p-5" key={i}>
            <div className="w-16 rounded-full p-3 bg-white flex justify-center mx-auto">
              <contact.icon className="text-3xl w-full rounded-full" />
            </div>
            <p className='text-gray-800 font-semibold uppercase text-xs dark:text-gray-300 mt-5 text-center'>{contact.title}</p>
            <h3 className='text-gray-600 text-xl dark:text-gray-300 text-center mt-3'>{contact.text}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact