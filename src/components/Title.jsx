import React from "react";

const Title = ({ title, desc }) => {
  return (
    <div class="max-w-xl mb-16 text-center mx-auto">
      <h3 className="text-4xl capitalize font-bold pb-6 text-gray-800 dark:text-white">
        {title}
      </h3>
      <p className="text-xl pb-4 leading-7 text-gray-600 dark:text-gray-300 w-full">
        {desc}
      </p>
    </div>
  );
};

export default Title;
