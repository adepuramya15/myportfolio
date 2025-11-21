import React from "react";

const projects = [
  {
    title: "Cloud-Based Full-Stack Web Application Deployment on Azure",
    summary:
      "Developed and deployed a full-stack web application using Java Spring Boot (backend), React.js (frontend), and MySQL Flexible Server on Azure, built for scalability and high availability.",
    points: [
      "Provisioned Azure App Services, Blob Storage, Key Vault, and MySQL Flexible Server",
      "Built CI/CD pipelines using Jenkins, GitHub Actions, reducing deployment time by ~50%",
      "Containerized backends with Docker and orchestrated with Kubernetes",
      "Automated staging/production workflows improving deployment efficiency by 2×",
    ],
    tech: "Azure App Services, React.js, Java Spring Boot, MySQL, Key Vault, Jenkins, GitHub Actions, Docker, Kubernetes",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-40 text-gray-100">
      <h2 className="text-4xl font-serif font-extrabold mb-10 text-primary text-center">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8 px-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="p-6 flex flex-col items-center text-center"
          >
            <h3 className="text-xl font-semibold mb-4">{p.title}</h3>
            <p className="text-gray-700 mb-4">{p.summary}</p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-gray-300">
              {p.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
            <p className="text-sm font-medium text-gray-400">
              <strong>Tech:</strong> {p.tech}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
