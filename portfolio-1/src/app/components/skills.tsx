// components/Skills.js
export default function Skills() {
  return (

  <section id="skills" className="text-center py-20 px-5 bg-[#0c1e2b]">
    <div>
        
      <h2 className="text-3xl font-semibold mb-10 text-[#00bcd4]"> My <span className="text-white">Skills</span>
      </h2>
        <div className="flex flex-wrap justify-center gap-5">

          <div className="bg-[#0c1e2b] text-[#00bcd4] border-2 border-[#0097a7] rounded-lg w-48 p-5 text-center transition-transform duration-300 hover:scale-105">
            
            <img src="/image1.png" alt="HTML 5 Icon" className="w-12 h-12 mb-4 mx-auto text-[#00bcd4] p-2 rounded-full border-2 border-[#00bcd4]"/>
            <h3 className="text-xl font-bold mb-2">HTML 5</h3>
            <p className="text-sm text-white">Experience in creating structured, semantic markup for modern web applications.</p>
          </div>

          <div className="bg-[#0c1e2b] text-[#00bcd4] border-2 border-[#0097a7] rounded-lg w-48 p-5 text-center transition-transform duration-300 hover:scale-105">
            
            <img src="/image2.png" alt="CSS 3 Icon" className="w-12 h-12 mb-4 mx-auto  text-[#00bcd4] p-2 rounded-full border-2 border-[#00bcd4]"/> 
            <h3 className="text-xl font-bold mb-2">CSS 3</h3>
            <p className="text-sm text-white">Proficient in styling web pages with responsive and modern design principles.</p>
          </div>

          <div className="bg-[#0c1e2b] text-[#00bcd4] border-2 border-[#0097a7] rounded-lg w-48 p-5 text-center transition-transform duration-300 hover:scale-105">
            
            <img src="/image3.png" alt="JavaScript Icon" className="w-12 h-12 mb-4 mx-auto  text-[#00bcd4] p-2 rounded-full border-2 border-[#00bcd4]"/>  

            <h3 className="text-xl font-bold mb-2">JavaScript</h3>
            <p className="text-sm text-white">Skilled in writing dynamic and interactive scripts for web applications.</p>
          </div>

          <div className="bg-[#0c1e2b] text-[#00bcd4] border-2 border-[#0097a7] rounded-lg w-48 p-5 text-center transition-transform duration-300 hover:scale-105">
            
            <img src="/image4.png" alt="Next.js Icon" className="w-12 h-12 mb-4 mx-auto  text-[#00bcd4] p-2 rounded-full border-2 border-[#00bcd4]"/> 
            <h3 className="text-xl font-bold mb-2">Next.js</h3>
            <p className="text-sm text-white">Skilled in creating fast, SEO-friendly web applications with Next.js.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
