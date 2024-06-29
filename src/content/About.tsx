import dev from "../assets/self_standing.jpg";

export default function About() {
  return (
    <div className=" bg-[#111827] pt-8 pb-8 z-10 sticky top-[75px]" id="about">
      <p className="bg-[#374151] text-gray-50 font-medium text-center text-2xl w-[100px] sm:w-[200px] sm:text-4xl py-2 m-auto rounded-md">About</p>
      <div className="flex flex-col items-center lg:flex-row lg:justify-around">
        <div className="w-[380px] sm:w-[630px] sm:text-xl mt-6 text-gray-300">
          <p>I'm a passionate software developer and very enthusiastic about developing the technologies that make a real world impact.I am very much a progressive thinker and enjoy working on products end to end,from ideation all the way to development.</p>
          <br/>
          <p>I began my journey by enrolling into Bachelor of Engineering in I.T. program(2020-2024) at St. Francis Institute of Technology.During this time I learned core subjects from programming to OS to DBMS to Computer Networking.</p>
          <br/>
          <p>So,over the time I have been imporving my skills.As of now I am looking for SDE job opportunites.</p>
        </div>
        <div className="image-about w-[300px] sm:w-[630px] h-[400px] sm:h-[500px] lg:w-[250px] lg:h-[500px] bg-none mt-6">
          <img src={dev} alt="dev"  className="w-full h-full object-cover object-left-top"/>
        </div>
      </div>
    </div>
  )
}
