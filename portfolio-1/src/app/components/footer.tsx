// Footer component in Next.js with Tailwind CSS and small Scroll-to-Top icon
"use client"
import { FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer bg-[#0c1e2b] text-center py-5 relative">
      <p className="text-white text-sm md:text-base">&copy; 2024 Ghazala Siddiqui. All Rights Reserved.</p>
      
      {/* Scroll-to-Top Icon */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 p-2 bg-[#00bcd4] text-white rounded-full hover:bg-[#0097a7]"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}
