import React, { useState, useEffect } from "react";

// Import from fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMugSaucer } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const DaisyUI = () => {
  const [theme, setTheme] = useState("light"); //Default light theme

  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
    "caramellatte",
    "abyss",
    "silk",
    "CustomTheme"
  ];

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  useEffect(() => {
    handleThemeChange(themes[Math.floor(Math.random() * themes.length)]);
  }, []);

  return (
    <div
      data-theme={theme}
      className="min-h-screen bg-base-100 text-base-content"
    >
      {/* Navbar */}

      <div className="flex justify-center gap-2 p-2 space-x-4 flex-wrap">
        {themes.map((themeName) => (
          <button key={themeName} className="btn btn-primary" onClick={() => handleThemeChange(themeName)}>
            {themeName}
          </button>
        ))}
      </div>

      <div className="divider divider-primary">Selected Theme: {theme}</div>


      <nav className="navbar bg-base-100 shadow-sm sticky top-0 z-10">
        <div className="navbar-start flex gap-2">
          <button className="btn btn-accent">
            <FontAwesomeIcon
              className="cursor-pointer px-4"
              size="xl"
              icon={faMugSaucer}
            />
          </button>

          <a className="btn btn-ghost text-xl">DaisyUI</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <details>
                <summary>Projects</summary>
                <ul className="p-2">
                  <li>
                    <a>Reactchat</a>
                  </li>
                  <li>
                    <a>Jeopardy</a>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <a>About</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end flex gap-2">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="cursor-default bg-transparent">Projects</a>
              </li>

              <li>
                <ul className="p-2">
                  <li>
                    <a>Reactchat</a>
                  </li>
                  <li>
                    <a>Jeopardy</a>
                  </li>
                </ul>
              </li>

              <li>
                <a>About</a>
              </li>
            </ul>
          </div>

          <div className="indicator btn btn-circle h-8 w-8 lg:w-12">
            <span className="indicator-item indicator-start badge badge-secondary badge-sm lg:badge-lg">
              {Math.floor(Math.random() * 200)}
            </span>

            <div className="avatar">
              <div className="rounded-full">
                <img src="https://picsum.photos/50/50" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      {/* //?  Hero Section */}
      {/* <div className="hero min-h-[60vh] bg-base-content text-base-100"> */}

      <div
        className="  hero min-h-[60vh] bg-gradient-to-tr from-base via-primary to-secondary text-base-100"
        style={{
          backgroundImage: "url(https://picsum.photos/1920/1080)",
        }}
      >
        <div className="hero-overlay backdrop-blur-[.2em] z-0 "></div>

        <div className="text-center z-1  p-20 rounded-2xl">
          <h1 className="text-5xl font-bold  ">DaisyUI</h1>
          <div className="divider divider-accent"></div>
          <p className="py-6">
            Building modern experiences with speed and style.
          </p>
          <div className="flex justify-center gap-2">
            <button className="btn btn-primary text-base-100">
              Get Started
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              Open Modal
            </button>
          </div>
        </div>
      </div>
      <div className="hero min-h-[60vh] bg-secondary text-base-100">
        <div className="hero-content flex-col lg:flex-row">
          {/* Form Section */}
          <div className="w-full max-w-md">
            <h1 className="text-4xl font-bold">Join Us Today</h1>
            <p className="py-4">
              Sign up to start building modern experiences.
            </p>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className="input input-bordered w-full text-secondary"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="input input-bordered w-full text-secondary"
                  placeholder="Enter your email"
                />
              </div>
              <button type="submit" className="btn btn-accent w-full">
                Sign Up
              </button>
            </form>
          </div>

          {/* Image Section */}
          <div className="w-full max-w-2xl lg:min-w-2xl mt-8 lg:mt-0 lg:ml-8">
            <img
              src="https://picsum.photos/1200/900"
              alt="Hero Image"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* //? Data Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {["Users", "Sales", "Engagement"].map((item, idx) => (
          <div
            key={idx}
            className="card bg-base-100 shadow-md border-l-4 border-primary p-6 rounded-lg"
          >
            <h2 className="text-sm uppercase text-neutral">{item}</h2>
            <p className="text-2xl font-bold text-secondary">
              {Math.floor(Math.random() * 10000)}
            </p>
          </div>
        ))}
      </div>

      {/* //? Featured Cards */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {new Array(5).fill("").map((i, idx) => (
          <div key={idx} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-primary">Feature {idx + 1}</h2>
              <p>This is a modern feature highlight card with clean UI.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-sm btn-info text-base-100">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/*//? Toast Alert */}
      <div className="p-6">
        <div className="alert alert-info text-base-content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18.364 5.636l-12.728 12.728M5.636 5.636l12.728 12.728"
            />
          </svg>
          <span>System notification: Your changes have been saved.</span>
        </div>
      </div>

      {/*//? Timeline */}
      <div className="p-6">
        <div className="text-xl font-bold mb-4 text-neutral">
          Deployment Timeline
        </div>
        <ul className="timeline timeline-vertical">
          <li>
            <div className="timeline-start">Dev</div>
            <div className="timeline-middle bg-primary w-5 h-5 rounded-full"></div>
            <div className="timeline-end timeline-box">
              Development Phase Complete
            </div>
          </li>
          <li>
            <div className="timeline-start">QA</div>
            <div className="timeline-middle bg-secondary w-5 h-5 rounded-full"></div>
            <div className="timeline-end timeline-box">
              Quality Assurance Tested
            </div>
          </li>
          <li>
            <div className="timeline-start">Launch</div>
            <div className="timeline-middle bg-accent w-5 h-5 rounded-full"></div>
            <div className="timeline-end timeline-box">Production Launch</div>
          </li>
        </ul>
      </div>

      <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a>
              <FontAwesomeIcon
                className="cursor-pointer"
                icon={faTwitter}
                size="2xl"
              />
            </a>
            <a>
              <FontAwesomeIcon
                className="cursor-pointer"
                icon={faYoutube}
                size="2xl"
              />
            </a>
            <a>
              <FontAwesomeIcon
                className="cursor-pointer"
                icon={faFacebook}
                size="2xl"
              />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default DaisyUI;
