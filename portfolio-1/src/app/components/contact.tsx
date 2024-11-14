// components/ContactSection.js

export default function Contact() {
  return (
    <section id="contact" className="flex justify-center items-center h-screen bg-[#0c1e2b]">
      <div className="bg-[rgb(12,30,43)] p-5 rounded-lg w-[600px] text-center">
        <h1 className="text-[#00bcd4] mb-7 text-[30px] font-semibold">
          Contact <span className="text-white">Me</span>
        </h1>
        <form>
          <div className="flex gap-2 mb-3">
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-1/2 p-2 border border-[#00bcd4] rounded bg-[#0c1e2b] text-white placeholder-gray-400 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-1/2 p-2 border border-[#00bcd4] rounded bg-[#0c1e2b] text-white placeholder-gray-400 focus:outline-none"
            />
          </div>
          <div className="flex gap-2 mb-3">
            <input
              type="tel"
              placeholder="Mobile Number"
              required
              className="w-1/2 p-2 border border-[#00bcd4] rounded bg-[#0c1e2b] text-white placeholder-gray-400 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Email Subject"
              required
              className="w-1/2 p-2 border border-[#00bcd4] rounded bg-[#0c1e2b] text-white placeholder-gray-400 focus:outline-none"
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows={7}
            required
            className="w-full p-2 border border-[#00bcd4] rounded bg-[#0c1e2b] text-white placeholder-gray-400 focus:outline-none resize-none mb-3"
          ></textarea>
          <button
            type="submit"
            className="w-full p-2 bg-[#00bcd4] rounded text-white text-lg font-semibold hover:bg-[#0097a7] transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
