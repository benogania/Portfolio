import React from "react";
import FadeInSection from "./FadeInSection";

const Card = ({ bg, name, discreption, techno = [], liveLink, sourceCode }) => {
  return (
    <FadeInSection>
      <div className="bg-black w-[290px] h-[430px] hover:w-[300px] hover:h-[440px] overflow-hidden rounded-2xl hover:shadow-[0_0_10px_#6025be] transition-all duration-300">
        <div
          className="w-full h-[40%] flex justify-center relative overflow-hidden items-center bg-cover bg-center"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="w-[160%] h-1/2 bg-violet-800 absolute bottom-[-60px] left-0 right-0 blur-3xl"></div>
        </div>

        <div className="w-full h-full flex flex-col p-5 gap-2 pb-10">
          <p className="font-bold text-xl">{name}</p>
          <p className="opacity-60 h-[25%]">{discreption}</p>
          <div className="flex flex-wrap gap-2">
            {techno.map((tech, index) => (
              <div
                key={index}
                className="cursor-default px-3 h-fit w-fit text-purple-700 py-1 bg-[#1e1033] rounded-full"
              >
                {tech}
              </div>
            ))}
          </div>
          <div className="mt-3 flex gap-2 justify-between text-purple-700">
            <a href={liveLink}>
              <div className="flex gap-2">
                <i class="bi bi-box-arrow-up-right"></i>
                <div>Live Demo</div>
              </div>
            </a>

            <a href={sourceCode}>
              <div className="flex gap-2">
                <i class="bi bi-github"></i>
                <p>Source Code</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

export default Card;
