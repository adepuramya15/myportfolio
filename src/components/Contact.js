// src/components/Contact.js
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 flex flex-col justify-center items-center px-4">

      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p className="text-gray-700">Email: <a href="mailto:ramya@gmail.com" className="text-blue-500">adepuramya32@gmail.com</a></p>
      <div className="flex space-x-4 mt-2">
        <a href="https://github.com/adepuramya15" target="_blank" rel="noopener noreferrer" className="text-blue-500">GitHub</a>
        <a href="https://www.linkedin.com/in/ramya-adepu-b01692288" target="_blank" rel="noopener noreferrer" className="text-blue-500">LinkedIn</a>
      </div>
    </section>
  );
};

export default Contact;
