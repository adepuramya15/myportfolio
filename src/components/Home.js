import React from "react";
import { FiMail } from "react-icons/fi";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="text-center max-w-xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-serif font-extrabold text-primary">
          Hi, I'm <span className="text-accent">Ramya Adepu</span>
        </h1>

        <p className="mt-6 text-xl font-sans text-gray-100">
          Azure Cloud Developer
        </p>
      </div>
    </section>
  );
};

export default Home;
