import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 text-gray-500"
    >
      <div className="max-w-4xl text-center">
        <h2 className="text-4xl font-serif font-extrabold text-primary mb-6">
          About Me
        </h2>
        <p className="text-lg font-sans leading-relaxed">
          Cloud Developer with 1.5 years of experience in designing, deploying,
          and managing scalable applications on Microsoft Azure and Google Cloud
          Platform (GCP). Skilled in Azure VMs, App Service, Blob Storage, AKS,
          and Key Vault. Experienced in containerization using Docker and
          Kubernetes, and automating deployments with Jenkins, Harness AI, Git,
          and GitHub. I also possess a good understanding of networking,
          security, and database management using SQL and Azure SQL, with a solid
          foundation in Python and core web technologies.
        </p>
      </div>
    </section>
  );
};

export default About;
