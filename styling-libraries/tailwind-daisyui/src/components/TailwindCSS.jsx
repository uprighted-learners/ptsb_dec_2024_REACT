import React, { useState } from "react";

const TailwindCSS = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline text-purple-800">TailwindCSS!</h1> */}

      <nav className="bg-primary text-black px-4 shadow-md sticky top-0 z-50 py-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto ">
          <div className="text-xl font-bold">TailwindCSS</div>
          <div className="md:hidden">
            <button onClick={() => setNavOpen((prev) => !prev)}>☰</button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-lg">
            <li className="hover:text-accent cursor-pointer">Home</li>
            <li className="hover:text-accent cursor-pointer">About</li>
            <li className="hover:text-accent cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {navOpen && (
          <div className="md:hidden bg-primary mt-2 rounded shadow-lg animate-slideDown origin-top">
            <ul className="flex flex-col space-y-3 px-6 py-4 text-lg">
              <li className="hover:text-accent cursor-pointer">Home</li>
              <li className="hover:text-accent cursor-pointer">About</li>
              <li className="hover:text-accent cursor-pointer">Contact</li>
            </ul>
          </div>
        )}
      </nav>

      <section className="bg-accent text-base px-6 py-20 text-center md:text-left">
        <div className="max-w-4xl md:text-6xl font-bold mb-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Build Fast, Launch Faster</h1>
            <p className="text-xl mb-8">Use Tailwind and React with beautiful and responsive design powered by a bold color pallette. </p>
            <button className="bg-accent hover:bg-[#780000] text-white px-6 py-3 rounded-lg font-semibold">Get Started</button>
        </div>
      </section>
    </>
  );
};

export default TailwindCSS;
