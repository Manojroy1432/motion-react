import React, { useContext } from "react";
import { themeContext } from "../App";

const Members = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Alice Johnson",
      role: "Project Manager",
      description:
        "Alice ensures every project is on track, maintaining seamless communication between teams.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Bob Smith",
      role: "Frontend Developer",
      description: "Bob is a master of crafting intuitive user interfaces.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Cathy Brown",
      role: "Backend Developer",
      description:
        "Cathy designs scalable and efficient server-side applications.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "David Wilson",
      role: "DevOps Engineer",
      description:
        "David streamlines deployment processes and manages infrastructure.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Eve Taylor",
      role: "UI/UX Designer",
      description:
        "Eve creates engaging and user-friendly designs that enhance experiences.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Frank Adams",
      role: "QA Engineer",
      description:
        "Frank ensures that every product meets the highest quality standards.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 7,
      name: "Grace Lee",
      role: "Content Strategist",
      description:
        "Grace crafts compelling content strategies to reach the right audience.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 8,
      name: "Henry Clark",
      role: "Marketing Manager",
      description:
        "Henry drives campaigns that expand the company's market reach.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 9,
      name: "Ivy Evans",
      role: "Data Scientist",
      description:
        "Ivy turns data into actionable insights, driving informed decisions.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 10,
      name: "Jake Moore",
      role: "Support Engineer",
      description:
        "Jake ensures customer satisfaction by resolving technical issues efficiently.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 11,
      name: "Jake Moore",
      role: "Support Engineer",
      description:
        "Jake ensures customer satisfaction by resolving technical issues efficiently.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 12,
      name: "Jake Moore",
      role: "Support Engineer",
      description:
        "Jake ensures customer satisfaction by resolving technical issues efficiently.",
      image: "https://via.placeholder.com/150",
    },
  ];

  const { theme, settheme } = useContext(themeContext);

  return (
    <div className={`${theme ? "dark" : "light"}`}>
      <div className=" py-10 px-2">
        <h1 className="text-4xl font-bold  text-center mb-10">Meet Our Team</h1>
        {/*leader */}
        <div className="flex justify-center max-w-6xl  flex-col sm:flex-row mt-6 mb-8 ">
          <div className="">
            <img
              className="w-full max-w-[400px]"
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </div>
          <div className="p-2 sm:p-3 max-w-[400px]">
            <h1
              className={`text-xl sm:text-2xl mb-2 ${
                theme ? "text-green-200" : "text-green-900"
              }`}
            >
              suroj patha
            </h1>
            <p
              className={`text-xs sm:text-sm mb-2 ${
                theme ? "text-gray-400" : "text-gray-700"
              }`}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure,
              rem eum? Soluta, nam eaque ducimus quae error, ipsam quasi
              incidunt consectetur facilis quos sequi repudiandae animi
              reiciendis odio dolore blanditiis praesentium vitae provident!
            </p>
          </div>
        </div>
        <div className="flex justify-center max-w-6xl  flex-col sm:flex-row my-6">
          <div className="p-2 sm:p-3 max-w-[400px]">
            <h1
              className={`text-xl sm:text-2xl mb-2 ${
                theme ? "text-green-200" : "text-green-900"
              }`}
            >
              suroj patha
            </h1>
            <p
              className={`text-xs sm:text-sm mb-2 ${
                theme ? "text-gray-400" : "text-gray-700"
              }`}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure,
              rem eum? Soluta, nam eaque ducimus quae error, ipsam quasi
              incidunt consectetur facilis quos sequi repudiandae animi
              reiciendis odio dolore blanditiis praesentium vitae provident!
            </p>
          </div>
          <div className="">
            <img
              className="w-full max-w-[400px]"
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </div>
        </div>
        <h1 className="text-center mt-12 mb-6 text-xl md:text-4xl">
          Other Members
        </h1>
        {/*members*/}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={`
              className="flex flex-col items-center  rounded-lg shadow-lg p-5 hover:shadow-xl transition-shadow ${
                theme
                  ? "bg-gray-800 hover:bg-gray-900"
                  : "bg-gray-100 hover:bg-blue-100"
              }`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mb-4"
              />
              <h2 className="text-2xl font-semibold ">{member.name}</h2>
              <p
                className={`text-center text-xs sm:text-sm ${
                  theme ? "text-blue-200" : "text-gray-700"
                }`}
              >
                {member.description}
              </p>
            </div>
          ))}
        </div>
        <div className=" pt-8 px-1 pb-3 mt-10">
          <div className="max-w-3xl mx-auto shadow-md shadow-gray-400 rounded-lg p-6">
            <h1 className="text-2xl font-bold  mb-4">Lorem, ipsum dolor.</h1>
            <p className=" leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis non at magnam cumque mollitia nihil omnis illo!
              Accusamus vel delectus enim, pariatur perferendis rerum placeat
              corrupti nam a reiciendis porro tenetur deleniti ad rem sint ea
              consequatur natus cupiditate et?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
