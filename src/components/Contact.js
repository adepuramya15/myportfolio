import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 text-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-serif font-extrabold mb-10 text-primary text-center">
          Contact
        </h2>

        <div className="flex flex-col item-center text-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-1">
            <div>
              <p className="text-gray-300 mb-2">Email me at</p>
              <a
                href="mailto:adepuramya32@gmail.com"
                className="text-accent font-medium block mb-6 hover:underline"
              >
                adepuramya32@gmail.com
              </a>

              <div className="space-y-3 text-gray-400 text-sm">
                <div>
                  GitHub:{" "}
                  <a
                    href="https://github.com/adepuramya15"
                    className="text-accent hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    adepuramya15
                  </a>
                </div>
                <div>
                  LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com/in/ramya-adepu-b01692288"
                    className="text-accent hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ramya Adepu
                  </a>
                </div>
              </div>
            </div>

            {/* You can add a contact form or map on the right side in the future */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
