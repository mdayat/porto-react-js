import React from "react";

export const ProjectsCard = ({ children }) => {
  return (
    <div>
      <h2 className="font-extrabold font-patrick text-xl uppercase pb-10 md:text-2xl lg:text-4xl lg:pt-16 lg:pb-20 2xl:text-6xl">
        My Projects
      </h2>
      {children}
    </div>
  );
};
