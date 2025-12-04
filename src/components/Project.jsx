import React from "react";
import BackgroundBlobs from "./background";
import FadeInSection from "./FadeInSection";
import { Link } from "react-router-dom";
import Card from "./card";

const Project = () => {
  return (
    <div
      id="project"
      className="w-full flex flex-col mt-24 place-items-center items-center justify-center  gap-5 md:mt-20 mb-20"
    >
      <FadeInSection>
        <p className="font-bold text-3xl ">
          My{" "}
          <span className=" bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">
            Projects
          </span>
        </p>
      </FadeInSection>
      <FadeInSection>
        <p className="text-center opacity-75 text-lg md:text-2xl md:w-1/2">
          Here are some of my recent projects that showcase my skills and
          expertise.
        </p>
      </FadeInSection>

      <div className="w-full xl:h-[470px] flex justify-center place-items-center">
        <div className="grid h-full w-fit lg:w-[60%] md:w-[80%] xl:w-[70%] mt-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-5">
          {/* project cards  */}
          <Card
            bg="/projects/youtube.jpg"
            name={"Youtube Downloader"}
            discreption={
              "A Simple app that Downloads YouTube high quality videos quickly and easily."
            }
            techno={["javascript", "html", "css"]}
            liveLink={"#"}
            sourceCode={"#"}
          />

          <Card
            bg="/projects/ecom1.jpg"
            name="E-Commerce Website"
            discreption={
              "A fully responsive e-commerce platform with cart functionality and modern UI design."
            }
            techno={["React", "Tailwindcss"]}
            liveLink={"#"}
            sourceCode={"#"}
          />

          <Card
            bg="/projects/speedtest.png"
            name="Speed Typing Test"
            discreption={
              "A simple and easy-to-use website that test and track your typing speed."
            }
            techno={["Javascipt", "Python"]}
            liveLink={"#"}
            sourceCode={"#"}
          />
        </div>
      </div>
      <Link to="/projects">
        <div className="flex cursor-pointer mt-3 place-items-center gap-1  text-purple-700 border-purple-700 px-5 py-2 rounded-md ">
          View All Projects
          <i class="bi bi-arrow-right-short text-xl flex place-items-center"></i>
        </div>
      </Link>
    </div>
  );
};

export default Project;
