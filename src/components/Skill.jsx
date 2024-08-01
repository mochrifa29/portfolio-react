import React from "react";
import Title from "./Title";
import {
  FaReact,
  FaLaravel,
  FaNodeJs,
  FaVuejs,
  FaHtml5,
  FaCss3,
  FaJs,
  FaDatabase,
} from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Skill = () => {
  const SKILLS = [
    {
      icon: FaReact,
      persen: "50%",
    },
    {
      icon: FaLaravel,
      persen: "50%",
    },
    {
      icon: FaNodeJs,
      persen: "50%",
    },
    {
      icon: FaVuejs,
      persen: "50%",
    },
    {
      icon: FaHtml5,
      persen: "100%",
    },
    {
      icon: FaCss3,
      persen: "30%",
    },
    {
      icon: FaJs,
      persen: "50%",
    },
    {
      icon: FaDatabase,
      persen: "50%",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div id="service" className="w-full py-20 px-10">
      <Title
        title="Skills"
        desc="My Skill"
      />
      <div className="grid grid-cols-1 md:grid-rows-1 gap-7 md:gap-10">
        <Carousel
          className="pb-7"
          responsive={responsive}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          showDots={true}
          draggable={true}
          itemClass="px-5"
        >
          {SKILLS.map((skill, i) => (
            <div
              className="pt-4 pb-4 bg-white dark:bg-gray-800 shadow-md rounded-md text-center cursor-pointer mx-5 my-3"
              key={i}
            >
              <skill.icon className="text-5xl dark:text-white mb-10 text-gray-600 mx-auto" />
              <h3 className="text-2xl mb-5 dark:text-white">{skill.persen}</h3>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Skill;
