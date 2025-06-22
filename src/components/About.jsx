import React from "react";
import FadeInSection from "./FadeInSection";
const About = () => {
  return (
    <div className="w-full px-3 bg-[#0a0a0a] p-20   flex justify-center items-center flex-col text-center gap-10 mt-10  md:gap-20">
      <FadeInSection>
        <div className="flex md:w-1/2  flex-col justify-center text-center gap-5">
          <p className="font-bold text-3xl md:text-4xl ">
            Hi, I'm Benjun <span className="bg-gradient-to-r from-[#6f29e0] via-purple-500 to-purple-700 bg-clip-text text-transparent">Ogania</span>
          </p>
          <p className="text-lg opacity-80 md:text-2xl">
            I'm a Web developer With a foundation knowladge in frontend and
            basic understanding in backend development
          </p>
        </div>
      </FadeInSection>
      <FadeInSection>
      <div className="overflow-hidden flex flex-col relative justify-center h-fit ">
        <div className="absolute w-full h-1/2 bg-black bottom-[-50%] blur-3xl"></div>
        <img src="./photo.jpg" className="md:h-[400px] rounded-lg  object-contain" />
      </div>
      </FadeInSection>
    </div>
  );
};

export default About;
