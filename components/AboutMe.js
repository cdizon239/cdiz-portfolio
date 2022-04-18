import React from "react";
import userData from "@constants/data";

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className="text-2xl md:text-5xl font-bold py-20 text-center md:text-left">
          About Me.
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto">
          <p
            className="leading-loose text-l md:text-l font-semibold  mx-4"
            style={{ lineHeight: "2rem" }}
          >
            {userData.about.title}
          </p>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-5 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            <div className="max-w-6xl mx-auto py-5 dark:bg-gray-800">
              <h1 className="text-2xl md:text-5xl font-bold text-center md:text-left">
                Skills
              </h1>
            </div>
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
              >
                {desc}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
