import python from "../assets/skills_icon/python_icon.png";
import js from "../assets/skills_icon/js_logo.png";
import nodejs from "../assets/skills_icon/nodejs_icon.png";
import ts from "../assets/skills_icon/ts_logo.png";
import java from "../assets/skills_icon/java_logo.png";
import go from "../assets/skills_icon/go_logo.png";
import express from "../assets/skills_icon/express_logo.png";
import react from "../assets/skills_icon/react_logo.png";
import git from "../assets/skills_icon/git_logo.png";
import docker from "../assets/skills_icon/docker_icon.png";
import aws from "../assets/skills_icon/aws_icon.png";

export default function Skills() {
  return (
    <div className="sticky top-[75px] bg-[#030712] pt-8 pb-8 z-20">
      <p className="bg-[#374151] text-gray-50 font-medium text-center text-2xl w-[100px] sm:w-[200px] sm:text-4xl py-2 m-auto rounded-md">Skills</p>
      <p className="text-gray-300 w-[380px] text-center m-auto mt-6 sm:w-[630px] sm:text-xl">The skills,tools and technologies I am good at:</p>
      <div className="bg-[#374151] min-w-[380px] max-w-[1200px] mx-1 pb-3 lg:mx-auto rounded-lg">
        <p className="text-gray-50 text-center w-[380px] m-auto mt-4 font-semibold pt-4 sm:text-xl">Programming languages</p>
        <div className="flex flex-row justify-center flex-wrap mt-4 gap-x-14 gap-y-7">
          <div className="text-gray-300 w-[70px]">
            <img src={python} alt="Python" className="w-full h-12"/>
            <div className="text-center sm:text-xl">Python</div>
          </div>
          <div className="text-gray-300 w-[70px]">
            <img src={js} alt="Javascript" className="w-[55px] h-10 pl-3"/>
            <div className="text-center sm:text-xl">Javascript</div>
          </div>
          <div className="text-gray-300 w-[70px]">
            <img src={ts} alt="Typescript" className="w-[55px] h-10 pl-3"/>
            <div className="text-center sm:text-xl">Typescript</div>
          </div>
          <div className="text-gray-300 w-[70px]">
            <img src={java} alt="Java" className="w-[55px] h-10"/>
            <div className="text-center sm:text-xl">Java</div>
          </div>
          <div className="text-gray-300 w-[70px]">
            <img src={go} alt="Golang" className="w-[55px] h-10"/>
            <div className="text-center sm:text-xl">Golang</div>
          </div>
        </div>
      </div>
      <div className="bg-[#374151] min-w-[380px] max-w-[1200px] mx-1 pb-3 lg:mx-auto rounded-lg">
        <p className="text-gray-50 text-center w-[380px] m-auto mt-2 font-semibold pt-4 sm:text-xl">Technologies</p>
        <div className="flex flex-row justify-center flex-wrap mt-4 gap-x-14 gap-y-7">
          <div className="text-gray-300 w-[70px]">
            <img src={nodejs} alt="Nodejs" className="w-[55px] h-10 pl-3"/>
            <div className="text-center sm:text-xl">Nodejs</div>
          </div>
          <div className="text-gray-300 w-[70px]">
            <img src={express} alt="Expressjs" className="w-[55px] h-10 pl-3"/>
            <div className="text-center sm:text-xl">Expressjs</div>
          </div>
          <div className="text-gray-300 w-[70px]">
            <img src={react} alt="React" className="w-[55px] h-10 pl-3"/>
            <div className="text-center sm:text-xl">React</div>
          </div>
          <div className="text-gray-300 w-[70px]">
            <img src={git} alt="Git" className="w-[55px] h-10 pl-3"/>
            <div className="text-center sm:text-xl">Git</div>
          </div>
          <div className="text-gray-300 w-[70px]">
            <img src={docker} alt="Docker" className="w-full h-12 pl-3"/>
            <div className="text-center sm:text-xl">Docker</div>
          </div>
          <div className="text-gray-300 w-[70px]">
            <img src={aws} alt="AWS" className="w-[55px] h-10 pl-3"/>
            <div className="text-center sm:text-xl">AWS</div>
          </div>
        </div>
      </div>
    </div>
  )
}