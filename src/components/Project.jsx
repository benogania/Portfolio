import React from "react";
import BackgroundBlobs from "./background";
import FadeInSection from "./FadeInSection";
import { Link } from "react-router-dom";
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
        <p className="text-center text-lg md:text-2xl md:w-1/2">
          Here are some of my recent projects that showcase my skills and
          expertise.
        </p>
      </FadeInSection>

      <div className="w-full xl:h-[470px] flex justify-center place-items-center">
        <div className="grid h-full w-fit lg:w-[60%] md:w-[80%] xl:w-[70%] mt-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-5">
          <FadeInSection>
            <div className="bg-black w-[290px] h-[430px] hover:w-[300px] hover:h-[440px] overflow-hidden rounded-2xl hover:shadow-[0_0_10px_#6025be] transition-all duration-300">
              <div className="w-full h-[40%] flex justify-center relative overflow-hidden items-center bg-[url('/projects/youtube.jpg')] bg-cover bg-cente">
                <div className="w-[160%] h-1/2 bg-black absolute bottom-[-60px] left-0 right-0 blur-3xl"></div>
              </div>
              <div className="w-full h-full flex flex-col p-5 gap-2 pb-10">
                <p className="font-bold text-xl">Youtube Downloader</p>
                <p className="opacity-60 h-[25%]">
                  A Simple app that Downloads YouTube high quality videos
                  quickly and easily.
                </p>
                <div className="flex flex-wrap gap-2">
                  <div className="cursor-default px-3 h-fit w-fit text-purple-700 py-1 bg-[#1e1033] rounded-full">
                    javascript
                  </div>
                  <div className="cursor-default px-3 h-fit w-fit text-purple-700 py-1 bg-[#1e1033] rounded-full">
                    html
                  </div>
                  <div className="cursor-default px-3 h-fit w-fit text-purple-700 py-1 bg-[#1e1033] rounded-full">
                    CSS
                  </div>
                </div>
                <div className="mt-3 flex gap-2 justify-between text-purple-700">
                  <a
                    href="https://simple-youtube-downloader.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex gap-2">
                      <i class="bi bi-box-arrow-up-right"></i>
                      <div>Live Demo</div>
                    </div>
                  </a>
                  <a >
                    <div className="flex gap-2">
                      <i class="bi bi-github"></i>
                      <p>Source Code</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="bg-black w-[290px] h-[430px] hover:w-[300px] hover:h-[440px] overflow-hidden rounded-2xl hover:shadow-[0_0_10px_#6025be] transition-all duration-300">
              <div className="w-full h-[40%] flex justify-center relative overflow-hidden items-center bg-[url('/projects/ecom1.jpg')] bg-cover bg-cente">
                <div className="w-[160%] h-1/2 bg-violet-800 absolute bottom-[-60px] left-0 right-0 blur-3xl"></div>
              </div>
              <div className="w-full h-full flex flex-col p-5 gap-2 pb-10">
                <p className="font-bold text-xl">E-Commerce Website</p>
                <p className="opacity-60 h-[25%]">
                  A fully responsive e-commerce platform with cart functionality
                  and modern UI design.
                </p>
                <div className="flex flex-wrap gap-2">
                  <div className="cursor-default px-3 h-fit w-fit text-purple-700 py-1 bg-[#1e1033] rounded-full">
                    React
                  </div>
                  <div className="cursor-default px-3 h-fit w-fit text-purple-700 py-1 bg-[#1e1033] rounded-full">
                    Tailwind CSS
                  </div>
                </div>
                <div className="mt-3 flex gap-2 justify-between text-purple-700">
                  <a
                    href="https://gadgyshop.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex gap-2">
                      <i class="bi bi-box-arrow-up-right"></i>
                      <div>Live Demo</div>
                    </div>
                  </a>
                  <a href="https://github.com/benogania/Gadget.git">
                    <div className="flex gap-2">
                      <i class="bi bi-github"></i>
                      <p>Source Code</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="bg-black w-[290px] h-[430px] hover:w-[300px] hover:h-[440px] overflow-hidden rounded-2xl hover:shadow-[0_0_10px_#6025be] transition-all duration-300">
              <div className="w-full h-[40%] flex justify-center relative overflow-hidden items-center bg-[url('/projects/speedtest.png')] bg-cover bg-cente">
                <div className="w-[160%] h-1/2 absolute bg-purple-800  opacity-60 bottom-[-60px] left-0 right-0 blur-3xl"></div>
              </div>
              <div className="w-full h-full flex flex-col p-5 gap-2 pb-10">
                <p className="font-bold text-xl">Speed Typing Test </p>
                <p className="opacity-60 h-[25%]">
                  A simple and easy-to-use website that test and track your
                  typing speed.
                </p>
                <div className="flex flex-wrap gap-2">
                  <div className="cursor-default px-3 h-fit w-fit text-purple-700 py-1 bg-[#1e1033] rounded-full">
                    Javascipt
                  </div>
                 
                  <div className="cursor-default px-3 h-fit w-fit text-purple-700 py-1 bg-[#1e1033] rounded-full">
                    Python
                  </div>
                </div>
                <div className="mt-3 flex gap-2 justify-between text-purple-700">
                  <a  target="_blank" rel="noopener noreferrer">
                    <div className="flex gap-2">
                      <i class="bi bi-box-arrow-up-right"></i>
                      <div>Live Demo</div>
                    </div>
                  </a>
                  <a >
                    <div className="flex gap-2">
                      <i class="bi bi-github"></i>
                      <p>Source Code</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </FadeInSection>
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
