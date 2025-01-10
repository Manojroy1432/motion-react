// SendMessage.jsx
import React, { useContext, useState } from "react";
import { themeContext } from "../App";
import { motion } from "motion/react";
import { spring } from "motion";

const SendMessage = () => {
  const [message, setMessage] = useState("");

  const { theme, setheme } = useContext(themeContext);

  //w3form code
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3c9d5826-8b7c-408c-b9f5-7305f6791695");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <div className=" py-8" id="Contact">
      <div className="w-full max-w-xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-2xl font-bold  mb-4"
        >
          Send a Message
        </motion.h2>
        <form onSubmit={onSubmit} className="flex flex-col space-y-4">
          {/* Text Input */}
          <motion.textarea
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full p-4  border bg-transparent rounded-lg shadow-sm focus:outline-none focus:ring-2 "
            rows="4"
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></motion.textarea>

          {/* Send Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6, type: spring }}
            type="submit"
            className={`${theme ? "dark-btn" : "light-btn"}`}
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default SendMessage;
