import email_icon from "../assets/line_email.svg";
import copy_icon from "../assets/line_copy.svg";
import github_icon from "../assets/github_icon.svg";
import linkedin_icon from "../assets/linkedin_icon.svg";
import instagram_icon from "../assets/instagram_icon.svg";
import tick_icon from "../assets/tick_icon.svg";
import { useState } from "react";

export default function Contact() {
  const [copiedAlert,setCopiedAlert] = useState(false);

  function handleCopy(){
    setCopiedAlert(true)
    setTimeout(()=>setCopiedAlert(false),2000);
    navigator.clipboard.writeText("sahilgomes2003@gmail.com");
  }

  return (
    <div className="bg-[#030712] pt-8 pb-6 sticky top-0 z-50" id="contact">
      <p className="bg-[#374151] text-gray-50 font-medium text-center text-2xl w-[100px] m-auto rounded-md">Contact</p>
      <p className="text-gray-300 mt-6 min-w-[380px] max-w[640px] m-auto text-center sm:text-xl">Feel free to reach out to me if you are looking for a developer,have a query,or simply want to connect.</p>
      <div className="flex justify-center items-center gap-2 mt-4 relative">
        <img src={email_icon} alt="email_icon" className="h-7"/>
        <p className="font-bold text-base text-gray-400 sm:text-xl">sahilgomes2003@gmail.com</p>
        <button className="h-8" onClick={handleCopy}><img src={copiedAlert === false?copy_icon:tick_icon} alt="copy" className="h-8"/></button>
      </div>
      <div className="text-gray-300 mt-6 w-[380px] m-auto text-center sm:text-lg">You may also find me on this paltforms!</div>
      <div className="flex justify-center gap-4 mt-4">
        <a href="https://github.com/sahilGomes" target="_blank" className="w-10 h-10"><img src={github_icon} alt="github" /></a>
        <a href="https://www.linkedin.com/in/sahilgomes2003/" target="_blank" className="w-10 h-10"><img src={linkedin_icon} alt="linkedin" /></a>
        <a href="https://www.instagram.com/sahil_gomes227/" target="_blank" className="w-10 h-10"><img src={instagram_icon} alt="instagram" /></a>
      </div>
    </div>
  )
}
