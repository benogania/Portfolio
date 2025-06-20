import React from "react";
import TypingEffect from "./TypingEffect";
import BackgroundBlobs from "./background";
import FadeInSection from "./FadeInSection";
import Project from "./Project";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-5 w-full md:mt-5 md:px-0">
      <BackgroundBlobs/>
      <div className='hidden md:flex w-96 h-60 rounded-full top-1/4 rotate-[40deg] opacity-10 bg-purple-700 blur-3xl z-[-3] fixed'></div>
      <div className=' w-96 h-60 rounded-full  right-0 top-1/4 rotate-[60deg] opacity-10 bg-purple-700 blur-3xl z-[-3] fixed'></div>
    <div className="w-full flex justify-center place-items-center  h-[80vh] max-h-[650px]">
    
      <div className="w-full flex flex-col place-items-center">
        <FadeInSection>
        <div className="hidden md:flex justify-center place-items-center  mb-8 glow-text rounded-full">
          <i className="bi bi-code-slash text-5xl bg-gradient-to-r from-[#6f29e0] via-[#7232da] to-purple-600 bg-clip-text text-transparent"></i>
        </div> 
        </FadeInSection>
        <FadeInSection>
          <p className="text-5xl md:text-6xl font-extrabold">
            Hi, I'm <span className="font-bold bg-gradient-to-r from-[#6f29e0] via-purple-600 to-purple-600 bg-clip-text text-transparent">Benjun Ogania</span>
          </p>
        </FadeInSection>
        <div className="w-full text-xl mt-5 md:text-center md:w-1/2">
        <TypingEffect />
        <FadeInSection>
          <p className="mt-5 md:text-2xl opacity-80">
            I'm a passionate developer specializing in creating beautiful and
            functional web <span className="bg-gradient-to-r from-purple-500 via-purple-400 to-purple-500 bg-clip-text text-transparent">experiences.</span>
          </p>
          </FadeInSection>
        </div>
       
        <div className="flex gap-4 flex-col md:flex-row md:gap-5 mt-10">

          <Link to="/projects">
            <button className=" w-[300px] md:w-[200px] py-2 bg-gradient-to-r from-[#6f29e0] to-purple-600 rounded-full hover:shadow-[0_0_10px_#6025be]"><i class="bi bi-eye-fill px-2"></i>View My Work</button>
          </Link>

            <button onClick={()=>alert('Wara paak resume hehe')} className=" w-[300px] md:w-[200px]  py-2 border-[1px] border-[#6f29e0]  text-purple-400 rounded-full hover:shadow-[0_0_10px_#6025be] bg-gradient-to-r from-[#6f29e0] via-purple-500 to-purple-600 bg-clip-text text-transparent"> <i class="bi bi-file-earmark-arrow-down-fill px-2"></i>Resume</button>
          
        </div>

        <div className="flex flex-col justify-center place-items-center mt-10 ">
           Tech Stack
    
      
          <div className="flex gap-5 mt-3 bg-[#0c0c0c] p-3 rounded-3xl px-5">
            <img src="./react.svg" className="h-[30px] w-[30px] hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]" alt="React" />
            <img src="./python.svg" className="h-[30px] w-[30px] hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]" alt="python" />
            <img src="./node.svg" className="h-[30px] w-[30px] hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]" alt="node.js" />
            <img src="./typescript.svg" className="h-[30px] w-[30px] hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]" alt="node.js" />
            <img src="./tailwind.svg" className="h-[30px] w-[30px] hover:drop-shadow-[0_0_20px_rgba(2,255,255,0.5)]" alt="node.js" />
          </div>
      
        </div>
      </div>
    </div>
      <Project/>
    </div>
  );
};

export default Home;
