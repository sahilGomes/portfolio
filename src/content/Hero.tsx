import location_icon from "../assets/location_icon.svg"
import open_for_work_icon from "../assets/dot_icon.svg"
import selfie from "../assets/edited.jpg";

export default function Hero() {
    return (
        <div className="bg-[#030712]  pb-[50px] h-auto sticky top-[75px] z-0">
            <div className="flex flex-col lg:flex-row lg:justify-around">
                <div className="image-about w-[300px] sm:w-[530px] bg-none m-auto mt-10 lg:mx-0 rounded-full">
                    <img src={selfie} alt="my_image" className="w-full h-full rounded-full" />
                </div>
                <div>
                    <div className=" text-gray-50 font-medium text-center text-4xl w-[380px] sm:w-[630px] lg:w-[500px] sm:w-5xl m-auto pt-10 ">Hi,I am <span className="relative after:content-[''] after:h-1 after:bg-gray-700 after:w-full after:absolute after:left-0 after:bottom-[-12px] name">Sahil Gomes</span>🙋‍♂️</div>
                    <div className="text-gray-300 w-[380px] sm:w-[630px] lg:w-[500px] m-auto pt-8 text-start leading-7 sm:text-xl">I'm a software developer with a strong foundation in DevOps practices, frontend and
                        backend technologies. I'm a quick learner with expertise in developing and maintaining web-based software
                        applications.
                    </div>
                    <div className="w-[380px] sm:w-[630px] sm:text-xl lg:w-[500px]  m-auto h-7 flex mt-8">
                        <img src={location_icon} alt="location" className="w-6 sm:w-12 h-full" />
                        <span className="text-gray-300">Mumbai,India</span>
                    </div>
                    <div className="w-[380px] sm:w-[630px] sm:text-xl lg:w-[500px]  m-auto h-7 flex mt-1">
                        <img src={open_for_work_icon} alt="open" className="w-6 sm:w-12 h-full object-fill object-bottom" />
                        <span className="text-gray-300">Open to work</span>
                    </div>
                    <div className="w-[380px] sm:w-[630px] sm:text-xl  lg:w-[500px]  m-auto h-7 mt-8 text-gray-50">
                        <a href="resume.pdf" download className="p-2 bg-[#374151] rounded-lg">Download Resume</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
