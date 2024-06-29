import { useRef, useState } from "react";
import close_menu from "../assets/close_menu.png";
import open_menu from "../assets/open_menu.png";

export default function Links() {
    const [menuState, setMenuState] = useState(false);
    const menu_ref = useRef(null);
    let image_type = menuState === false  ? open_menu : close_menu;

    function handleMenu(){
        setMenuState(!menuState);
    }

    return (
        <>
            <div className="absolute w-[31px] h-[31px] right-[15px] top-[22px] z-10 lg:hidden" ref={menu_ref} onClick={handleMenu}>
                <img src={image_type} alt="close_menu" className="w-[100%] h-[100%]" />
            </div>
            <div className={`absolute top-0 right-0 w-[70%] h-[100vh] bg-gray-900 text-gray-50 flex flex-col justify-center items-center gap-6 font-normal text-2xl ${menuState == false?"invisible":""} lg:visible lg:h-[75px] lg:w-[50%] lg:flex-row lg:justify-around lg:px-4 lg:bg-transparent`}>
                <a href="#about" onClick={handleMenu} className="hover:bg-[#030712] p-2 rounded-md">About</a>
                <a href="#project" onClick={handleMenu} className="hover:bg-[#030712] p-2 rounded-md">Project</a>
                <a href="#contact" onClick={handleMenu} className="hover:bg-[#030712] p-2 rounded-md">Contact</a>
                <a href="resume.pdf" target="_blank" onClick={handleMenu} className="p-2 bg-[#374151] rounded-lg hover:bg-[#030712]">Resume</a>
            </div>
        </>
    )
}