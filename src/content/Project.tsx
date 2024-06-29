import project1 from "../assets/project/dashboard_final.png";
import open_link from "../assets/open_icon.svg";
import project3 from "../assets/project/data_visualizer.png";
import portfolio from "../assets/project/porfolio.png";

export default function Project() {
  return (
    <div className="relative bg-[#111827] pt-8 pb-4 z-30 " id="project">
      <p className="bg-[#374151] text-gray-50 font-medium text-center text-2xl w-[100px] sm:w-[200px] sm:text-4xl py-2 m-auto rounded-md">Project</p>
      <p className="text-center text-gray-300 my-4 sm:text-xl">Some of the projects I have made</p>
      <div className="flex flex-row flex-wrap justify-evenly gap-y-4">
        <div className="project1 w-[380px] sm:w-[630px] bg-[#374151]  rounded-lg flex flex-row flex-wrap justify-center p-5">
          <div className="w-[350px] sm:w-[630px] h-[200px] sm:h-[300px]">
            <img src={project1} alt="project_img" className="w-full h-full" />
          </div>
          <div>
            <p className="font-medium text-gray-100 my-2 sm:text-2xl">prontBaas-Backend as a Service</p>
            <p className="text-gray-300 sm:text-xl">This project is a self hostable Backend as a Service product which works on nodejs and uses mongodb for database.It consist of smooth developer experience from setting up the database schemas using builtin admin panel to interacting with the data using the specified APIs in the doc.This project can be consider as a lightweight alternative to firebase.For more details follow up the github link.
            </p>
          </div>
          <p className="w-full flex flex-row flex-wrap gap-2 mt-2 content-start">
            <div className="p-2 w-[100px] sm:w-[150px] text-center bg-[#111827] rounded-3xl text-gray-300 sm:text-xl">React</div>
            <div className="p-2 w-[100px] sm:w-[150px] text-center bg-[#111827] rounded-3xl text-gray-300 sm:text-xl">Nodejs</div>
            <div className="p-2 w-[100px] sm:w-[150px] text-center bg-[#111827] rounded-3xl text-gray-300 sm:text-xl">Express</div>
            <div className="p-2 w-[100px] sm:w-[150px] text-center bg-[#111827] rounded-3xl text-gray-300 sm:text-xl">Mongodb</div>
            <div className="p-2 w-[100px] sm:w-[150px] text-center bg-[#111827] rounded-3xl text-gray-300 sm:text-xl">Docker</div>
          </p>
          <div className="m-0 w-[380px] sm:w-[630px] h-[30px] pt-2">
            <a href="https://github.com/sahilGomes/protonBaaS" target="_blank" className="w-[22px]"><img src={open_link} alt="project_link" className="h-full" /></a>
          </div>
        </div>
        <div className="project1 w-[380px] sm:w-[630px] bg-[#374151] rounded-lg flex flex-row flex-wrap justify-center content-start p-5">
          <div className="w-[350px] sm:w-[630px] h-[200px] sm:h-[300px]">
            <img src={portfolio} alt="project_img" className="w-full h-full" />
          </div>
          <div>
            <p className="font-medium text-gray-100 my-2 sm:text-2xl">My portfolio</p>
            <p className="text-gray-300 sm:text-xl">Its my current web porfolio.I made it during my free time by keeping in mind to make it better over time.I am using react to build it and will add lots of animation and interaction in future to enhance the UX.</p>
          </div>
          <p className="w-full flex flex-row flex-wrap gap-2 mt-2 content-start">
            <div className="p-2 w-[100px] sm:w-[150px] text-center bg-[#111827] rounded-3xl text-gray-300 sm:text-xl">React</div>
            <div className="p-2 w-[100px] sm:w-[150px] text-center bg-[#111827] rounded-3xl text-gray-300 sm:text-xl">Tailwind</div>
            <div className="p-2 w-[100px] sm:w-[150px] text-center bg-[#111827] rounded-3xl text-gray-300 sm:text-xl">Typescript</div>
          </p>
          <div className="m-0 w-[380px] sm:w-[630px] h-[30px] pt-2">
            <a href="" target="_blank" className="w-[22px]"><img src={open_link} alt="project_link" className="h-full" /></a>
          </div>
        </div>
        <div className="project1 w-[380px] sm:w-[630px] bg-[#374151] rounded-lg flex flex-row flex-wrap justify-center p-5">
          <div className="w-[350px] sm:w-[630px] h-[200px] sm:h-[300px]">
            <img src={project3} alt="project_img" className="w-full h-full" />
          </div>
          <div>
            <p className="font-medium text-gray-100 my-2 sm:text-2xl">Covid Data Visualizer</p>
            <p className="text-gray-300 sm:text-xl">This project was my very first hands on project.It consist of a python based desktop application for covid data visualization.Consider this project as starting point of my developer journey.</p>
          </div>
          <p className="w-full flex flex-row flex-wrap gap-2 mt-2 content-start">
            <div className="p-2 w-[100px] sm:w-[150px] text-center bg-[#111827] rounded-3xl text-gray-300 sm:text-xl">Python</div>
            <div className="p-2 w-[100px] sm:w-[150px] text-center bg-[#111827] rounded-3xl text-gray-300 sm:text-xl">Tkinter</div>
            <div className="p-2 w-[100px] sm:w-[150px] text-center bg-[#111827] rounded-3xl text-gray-300 sm:text-xl">Matplotlib</div>
          </p>
          <div className="m-0 w-[380px] sm:w-[630px] h-[30px] pt-2">
            <a href="https://github.com/sahilGomes/covid_datavisulization_using_python" target="_blank" className="w-[22px]"><img src={open_link} alt="project_link" className="h-full" /></a>
          </div>
        </div>
      </div>
      <p className="mt-2 text-center text-gray-300 sm:text-xl">View my Resume for more projects</p>
    </div>
  )
}