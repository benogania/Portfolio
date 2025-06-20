import React from "react";
import FadeInSection from "./FadeInSection";
const Service = () => {
  return (
    <div id="service" className="w-full flex flex-col items-center justify-center gap-5 mt-20  ">
      <FadeInSection>
        <p className="text-3xl font-bold  ">
          Service I <span className="text-purple-700">Offer</span>
        </p>
      </FadeInSection>
      <FadeInSection>
        <p className=" text-lg md:text-xl text-center w-[90%] md:w-1/2">
          Here are the services I offer, including web development, UI/UX
          design, backend integration, and Mobile development.{" "}
        </p>
      </FadeInSection>
      <div className="flex justify-center items-center gap-6 md:gap-10 mt-10  w-full flex-col md:w-[50%] md:flex-row">
        <FadeInSection>
          <div className="w-full flex justify-center items-center flex-col gap-5">
            <div className="w-72 h-52 bg-black rounded-xl flex items-center justify-center shadow-lg">
              <div className="bg-gradient-to-r from-[#6f29e0] via-[#7232da] to-pink-800 bg-clip-text text-transparent">
                <i class="bi bi-braces text-7xl "></i>
              </div>
            </div>
            <p className="font-semibold text-xl">Web Development</p>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="w-full flex justify-center items-center flex-col gap-5">
            <div className="w-72 h-52 bg-black rounded-xl flex items-center justify-center shadow-lg ">
              <div className="bg-gradient-to-r from-[#6f29e0] via-[#8042e2] to-purple-700 bg-clip-text text-transparent">
                <i class="bi bi-android2 text-7xl "></i>
              </div>
            </div>
            <p className="font-semibold text-xl">Mobile Development</p>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="w-full flex justify-center items-center flex-col gap-5">
            <div className="w-72 h-52 bg-black border-white rounded-xl flex items-center justify-center ">
              <div className="bg-gradient-to-r from-[#6f29e0] via-[#7232da] to-pink-800 bg-clip-text text-transparent">
                <i class="bi bi-bezier text-7xl "></i>
              </div>
            </div>
            <p className="font-semibold text-xl">Design</p>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default Service;
