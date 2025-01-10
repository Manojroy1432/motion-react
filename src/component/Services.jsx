// Services.jsx
import React, { useContext } from "react";
import { motion } from "motion/react";
import { themeContext } from "../App";

const services = [
  {
    title: "Web Development",
    description:
      "Build modern, responsive websites tailored to your needs. We use cutting-edge technologies to deliver the best user experience.",
    icon: (
      <svg
        className="w-12 h-12 text-blue-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 8h16M4 12h16M4 16h16"
        ></path>
      </svg>
    ),
  },
  {
    title: "Mobile App Development",
    description:
      "Create engaging and user-friendly mobile apps that run smoothly on Android and iOS platforms.",
    icon: (
      <svg
        className="w-12 h-12 text-green-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11 4h2a2 2 0 012 2v12a2 2 0 01-2 2h-2a2 2 0 01-2-2V6a2 2 0 012-2z"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 10h10M7 14h10"
        ></path>
      </svg>
    ),
  },
  {
    title: "SEO Optimization",
    description:
      "Boost your website's visibility on search engines with our proven SEO strategies.",
    icon: (
      <svg
        className="w-12 h-12 text-yellow-600"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 10h18M12 3v18"
        ></path>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5v9"></path>
      </svg>
    ),
  },
];

const Services = () => {
  const { theme, setheme } = useContext(themeContext);
  return (
    <section className=" py-12" id="Services">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold  text-center mb-6">Our Services</h2>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              key={index}
              className={`${
                theme
                  ? "bg-gray-900 text-teal-200"
                  : "bg-blue-100 text-teal-900"
              } rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow`}
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex justify-center mb-4"
              >
                {service.icon}
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-xl font-semibold  mb-2 text-center"
              >
                {service.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className={`text-center ${
                  theme ? "text-gray-300" : "text-gray-700"
                } text-xs sm:text-sm`}
              >
                {service.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
