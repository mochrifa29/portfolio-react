import React from "react";
import Title from "./Title";
import devshop from "../assets/portfolio/devshop.png";
import portalberita from "../assets/portfolio/portalberita.png";
import weatherApp from "../assets/portfolio/weather.png";
import landingPage from "../assets/portfolio/landingpage.png";

const Portfolio = () => {
  const PROJECTS = [
    {
      title: "Portal Berita",
      description:
        "Aplikasi portal berita ini tempat dimana kita bisa upload berita yang kita inginkan. didalamnya terdapat fitur CRUD untuk mengolah data berita nya.",
      image: portalberita,
      techStack: ["Vue Js", "Vuetify", "Firebase"],
      link: "https://portalberita-mu.vercel.app/",
    },
    {
      title: "Weather App",
      description:
        "Aplikasi weather ini bisa mencari cuaca di tiap negara atau daerah sesuai dengan yang kita inginkan, dengann menghubungkan ke api weather yang telah di sediakan.",
      image: weatherApp,
      techStack: ["HTML", "CSS", "JavaScript"],
      link: "https://mochrifa29.github.io/weather-app/",
    },
    {
      title: "Landing Page",
      description:
        "Profile SMK NEGERI BANDUNG yang berisi tentang jurusan yang tersedia, berita, alamat dll",
      image: landingPage,
      techStack: ["HTML", "Node.js", "Tailwind CSS"],
      link: "https://github.com/mochrifa29/Landing-Page",
    },
  ];
  return (
    <div className="w-full py-20 px-10" id="portfolio">
      <Title
        title="Featured"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <div className="">
        {PROJECTS.map((project, i) => (
          <div
            className={`${
              i == 1 ? "lg:flex-row-reverse" : "lg:flex-row"
            } flex flex-col w-full object-contain mb-10 bg-white`}
            key={i}
          >
            <div className="md:flex-1">
              <img src={project.image} alt="" className="w-full" />
            </div>
            <div className="md:flex-1 flex flex-col justify-center p-5 lg:py-0 lg:px-10 dark:bg-gray-800">
              <h3 className="text-2xl dark:text-white text-gray-800">
                {project.title}
              </h3>
              <p className="text-lg text-gray-600 mt-5 dark:text-gray-300">
                {project.description}
              </p>
              <div className="mt-5 flex gap-5">
                {project.techStack.map((techStack, k) => (
                  <span
                    className="text-base dark:text-gray-300 font-semibold text-gray-800"
                    key={k}
                  >
                    {techStack}
                  </span>
                ))}
              </div>
              <div className="mt-8">
                <a
                  href={project.link}
                  target="_blank"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-md px-4 py-2 cursor-pointer"
                >
                  Live Preview
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
