// About.jsx
import React from "react";
import { motion } from "motion/react";
import photo from "../assets/ManojPhoto.jpeg";

const About = () => {
  return (
    <section className=" py-12" id="About">
      <div className="w-full max-w-4xl mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-extrabold  text-center mb-6"
        >
          About Us
        </motion.h2>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 space-y-6 md:space-y-0">
          {/* Left Image */}
          <div className="md:w-1/2">
            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 1, delay: 0.3 }}
              src={photo}
              alt="About Us"
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Right Content */}
          <div className="md:w-1/2">
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg  mb-4"
            >
              Welcome to MyApp! We are committed to providing innovative
              solutions to help you succeed. Our team is passionate about
              creating exceptional products tailored to your needs.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg  mb-4"
            >
              At MyApp, we value collaboration, innovation, and customer
              satisfaction. With years of experience in the industry, we strive
              to deliver excellence in everything we do.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg "
            >
              Join us on this journey and see how we can make a difference
              together. Your success is our priority!
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
