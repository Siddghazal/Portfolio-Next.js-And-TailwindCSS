import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="flex items-center justify-center py-24 px-10 bg-[#0c1e2b]">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl w-full gap-12">
        
        {/* Image Section */}
        <div className="about-image">
          <Image
            src="/picture1.png"
            alt="pic"
            width={300}
            height={300}
            className="rounded-lg ml-25"
          />
        </div>
        
        {/* Text Section */}
        <div className="max-w-xl text-white text-right">
          <h2 className="text-3xl md:text-4xl text-[#00bcd4] mb-3 text-left font-semibold ">
            About <span className="text-[#ededed]">Me</span>
          </h2>
          <p className="text-base md:text-lg leading-normal text-left py-3">
          I am a student at GIAIC, pursuing a course in Artificial Intelligence,Web 3.0 and Metaverse.Passionate about learning new skills to stay up-to-date with the latest innovation.
          </p>
          
          {/* Buttons */}

          <div className="flex space-x-4 mt-3 ml-0.5 ">
            <a href="#skills" className="px-4 py-2 md:px-5 md:py-2 text-sm md:text-base border-2 text-[#00bcd4] border-[#00bcd4] rounded-md hover:bg-[#00bcd4] hover:text-white transition">View More
            </a>
            
          </div>
        

        </div>
      </div>
    </section>
  );
}
