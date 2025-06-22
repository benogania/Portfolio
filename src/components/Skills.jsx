import React from "react";
import FadeInSection from "./FadeInSection";
const Skills = () => {
  return (
    <div className="mt-w-full bg-black flex flex-col place-items-center items-center justify-center gap-5 px-5 py-20">
      <FadeInSection>
        <p className="font-bold text-3xl">
          My{" "}
          <span className=" bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">
            Skills
          </span>
        </p>
      </FadeInSection>
      <FadeInSection>
        <p className="text-center text-lg md:w-1/2 md:text-xl">
          I've worked with a variety of technologies and frameworks to create
          amazing digital experiences.
        </p>
      </FadeInSection>

      <div className="mt-10 w-[80%] md:w-[60%]  flex justify-center place-content-center ">
        <div className="flex flex-col md:flex-row gap-16 mt-3 w-full ">
          <div className="flex w-full flex-col justify-center gap-2 ">
            <FadeInSection>
              <div className="flex gap-2 text-2xl font-bold w-full ">
                <i className="bi bi-braces-asterisk bg-gradient-to-r from-[#6f29e0] via-[#7232da] to-purple-600 bg-clip-text text-transparent"></i>
                <p>Technical Skills</p>
              </div>
            </FadeInSection>

            <div className="mt-5">
                <FadeInSection>
              <p className="font-semibold w-full text-lg">Frontend Development</p>
              </FadeInSection>
              <FadeInSection>
              <div className="flex flex-wrap gap-2 mt-2 ">
                <div className="cursor-default px-3 h-fit w-fit  text-purple-700 py-1 bg-[#1e1033] rounded-full">
                  HTML5
                </div>
                <div className="cursor-default px-3 h-fit w-fit  text-purple-700 py-1 bg-[#1e1033] rounded-full">
                  CSS
                </div>
                <div className="cursor-default px-3 h-fit w-fit  text-purple-700 py-1 bg-[#1e1033] rounded-full">
                  TailwindCSS
                </div>
                <div className="cursor-default px-3 h-fit w-fit  text-purple-700 py-1 bg-[#1e1033] rounded-full">
                  Javascipt
                </div>
                <div className="cursor-default px-3 h-fit w-fit  text-purple-700 py-1 bg-[#1e1033] rounded-full">
                  React
                </div>
              </div>
              </FadeInSection>
            </div>
            <FadeInSection>
            <div className="mt-5 w-full ">
              <p className="font-semibold text-lg">Backend Development</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <div className="cursor-default px-3 h-fit w-fit text-purple-700 py-1 bg-[#1e1033] rounded-full">
                  Nodejs
                </div>
                <div className="cursor-default px-3 h-fit w-fit text-purple-700 py-1 bg-[#1e1033] rounded-full">
                  Python
                </div>
                <div className="cursor-default px-3 h-fit w-fit text-purple-700 py-1 bg-[#1e1033] rounded-full">
                  Express
                </div>
              </div>
            </div>
            </FadeInSection>
            <FadeInSection>
            <div className="mt-5 w-full">
              <p className="font-semibold text-lg">Database & Cloud</p>
              <div className="flex gap-2 mt-2">
                <div className="cursor-default px-3 text-purple-700 py-1 bg-[#1e1033] rounded-full">
                  MySQL
                </div>
                <div className="cursor-default px-3 text-purple-700 py-1 bg-[#1e1033] rounded-full">
                  MangoDB
                </div>
              </div>
            </div>
            </FadeInSection>
          </div>

          <div className="flex  gap-2 flex-col w-full">
            <FadeInSection>
            <div className="flex gap-2 w-full text-2xl font-bold ">
              <i className="bi bi-tools text-2xl bg-gradient-to-r from-[#6f29e0] via-[#7232da] to-purple-600 bg-clip-text text-transparent"></i>
              <p>Tools & Soft Skills</p>
            </div>
            </FadeInSection>

            <div className="mt-5 w-full">
            <FadeInSection>
              <p className="font-semibold w-full text-lg">Development Tools</p>
            </FadeInSection>
            <FadeInSection>
              <div className="flex w-full flex-wrap gap-2 mt-2">
                <div className="cursor-default px-3 text-purple-700 py-1 bg-[#1e1033] rounded-full">
                  Git
                </div>
                <div className="cursor-default px-3 text-purple-700 py-1 bg-[#1e1033] rounded-full">
                  VS Code
                </div>
                <div className="cursor-default px-3 text-purple-700 py-1 bg-[#1e1033] rounded-full">
                  Figma
                </div>
                <div className="cursor-default px-3 text-purple-700 py-1 bg-[#1e1033] rounded-full">
                  Canva
                </div>
              </div>
              </FadeInSection>
            </div>
            <FadeInSection>
            <div className="mt-5 w-full">
              <p className="font-semibold text-lg">Soft Skills</p>
              <div className="flex gap-2 mt-2">
                <div className="cursor-default px-3 text-purple-700 py-1 bg-[#1e1033] rounded-full">
                  Problem Solving
                </div>
              </div>
            </div>
            </FadeInSection>

            <FadeInSection>
            <div className="mt-5 flex w-full flex-col">
              <p className="font-semibold text-lg">Other Skills</p>
              <div className="flex gap-2 mt-2 flex-wrap">
                <div className="cursor-default px-3 w-fit h-fit text-purple-700 py-1 bg-[#1e1033] rounded-full">
                  UI/UIX Design
                </div>
                <div className="cursor-default px-3 w-fit h-fit text-purple-700 py-1 bg-[#1e1033] rounded-full">
                  Responsive Design
                </div>
              </div>
            </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
