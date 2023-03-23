import React from "react";
import userData from "@constants/data";

export default function Projects() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-7xl font-bold py-20 text-center md:text-left">
          Small Fun Projects
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {userData.projects.map((proj, idx) => (
            <ProjectCard
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              number={`${idx + 1}`}
              description={proj.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ title, link, imgUrl, number, description }) => {
  return (
    <>
      <div>
        <a href={link} className="w-full block shadow-1xl">
          <div className="relative overflow-hidden">
            <div className="h-72 object-cover">
              <img
                src={imgUrl}
                alt="portfolio"
                className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full rounded-3xl"
              />
            </div>
            <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
              {title}
            </h1>
            <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
              {number.length === 1 ? "0" + number : number}
            </h1>
          </div>
        </a>
      </div>
      <p>{description}</p>
    </>
  );
};
