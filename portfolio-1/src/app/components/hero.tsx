import Image from "next/image";
import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-12 pt-20 md:pt-20 pb-16 min-h-screen bg-[#0c1e2b] text-white">
      
      <div className="max-w-xl space-y-5">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Hi, I &apos;m <span className="text-white">Ghazala Siddiqui</span></h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#00bcd4] mb-5">Frontend Developer</h2>

        <p className="text-base md:text-lg leading-normal text-left py-1">Hello! I am Ghazala, a frontend developer with a passion for creating beautiful and functional websites. I enjoy coding and am always eager to learn new things to enhance my skills.</p>
         
         
        <div className="flex space-x-4 mt-3 ml-0.5">
            <a href="#contact" className="px-4 py-2 md:px-5 md:py-2 text-sm md:text-base border-2 text-[#00bcd4]  border-[#00bcd4] rounded-md hover:bg-[#00bcd4] hover:text-white transition">Contact Me
            </a>
         </div>
        <br/>
        <div className="flex space-x-2 md:space-x-4 mt-3 ">
          <a href="https://linkedin.com" className="icon group">
            <FaLinkedinIn className="text-[#00bcd4] w-8 h-8 md:w-10 md:h-10 p-1.5 md:p-2 rounded-full border-2 border-[#00bcd4] transition duration-300 group-hover:text-[#0c1e2b] group-hover:bg-[#00bcd4]" />
          </a>
          <a href="https://twitter.com" className="icon group">
            <FaTwitter className="text-[#00bcd4] w-8 h-8 md:w-10 md:h-10 p-1.5 md:p-2 rounded-full border-2 border-[#00bcd4] transition duration-300 group-hover:text-[#0c1e2b] group-hover:bg-[#00bcd4]" />
          </a>
          <a href="https://instagram.com" className="icon group">
            <FaInstagram className="text-[#00bcd4] w-8 h-8 md:w-10 md:h-10 p-1.5 md:p-2 rounded-full border-2 border-[#00bcd4] transition duration-300 group-hover:text-[#0c1e2b] group-hover:bg-[#00bcd4]" />
          </a>
        </div>
      </div>

      <div className="flex justify-center md:justify-end mb-8 md:mb-0" >
        <Image src="/picture1.png" alt="picture" width={400} height={400} className="rounded-lg" />
      </div>
    </section>
  );
}
