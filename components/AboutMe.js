import React from "react";
import userData from "@constants/data";

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-42 bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-5xl font-bold py-20 text-center md:text-left md:mx-3 text-gray-600">
          About Me
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto">
          <p
            className="leading-loose text-xl md:text-xl mx-4"
            style={{ lineHeight: "2rem" }}
          >
            {userData.about.title}
          </p>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-5 max-w-6xl mx-auto">
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            <div className="max-w-6xl mx-auto py-5 dark:bg-gray-800">
              <h1 className="text-5xl font-bold text-center md:text-left text-gray-600">
                Skills
              </h1>
            </div>
            <div className="bg-[#F1F1F1] dark:bg-gray-900">
              <div className="text-container mx-auto">
                {userData.about.description?.map((desc, idx) => (
                  <p
                    key={idx}
                    className="leading-loose text-xl md:text-xl  mx-4 py-2"
                  >
                    {desc}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
