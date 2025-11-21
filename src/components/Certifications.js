import React from "react";

const certifications = [
  { name: "AZ-204: Azure Developer Associate", issuer: "Microsoft", year: "2025" },
  { name: "AZ-900: Microsoft Azure Fundamentals", issuer: "Microsoft", year: "2024" },
  { name: "Mern Full Stack", year: "2023"}
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 text-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-serif font-extrabold mb-10 text-primary text-center">
          Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {certifications.map((c) => (
            <div
              key={c.name}
              className="bg-white bg-opacity-10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <h3 className="font-serif text-xl text-accent mb-2">{c.name}</h3>
              <p className="text-sm text-gray-600">
                {c.issuer} • <span className="italic">{c.year}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
