import React from "react";

const skills = [
  { category: "Cloud Platforms", items: ["Azure", "Google Cloud Platform (GCP)"] },
  { category: "Cloud Services", items: ["App Service", "Virtual Machine", "Blob Storage", "AKS", "Key Vault"] },
  { category: "Containers & Registries", items: ["Docker", "Kubernetes", "Azure Container Registry"] },
  { category: "DevOps & Automation", items: ["Jenkins", "Harness AI", "CI/CD Pipelines"] },
  { category: "Programming & Web", items: ["HTML", "CSS", "ReactJS", "JavaScript", "Python"] },
  { category: "Databases", items: ["SQL", "Azure SQL"] },
  { category: "Version Control", items: ["Git", "GitHub"] },
  { category: "Security & Networking", items: ["RBAC", "NSGs", "VNets", "Load Balancers"] },
  { category: "IaC", items: ["Terraform"] },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 text-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-serif font-extrabold mb-12 text-primary text-center">
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((group) => (
            <div
              key={group.category}
              className="bg-white bg-opacity-10 rounded-2xl p-6 shadow-lg transition-transform transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-4 text-accent">{group.category}</h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm bg-primary bg-opacity-20 text-primary px-3 py-1 rounded-md"
                  >
                    {item.trim()}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
