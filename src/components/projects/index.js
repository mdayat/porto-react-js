import React from "react";
import { Cards } from "./cards";
import { ProjectsCard } from "./projectCards";

export const Projects = () => {
  return (
    <section id="projects" className="py-16 h-fit">
      <div className="w-11/12 lg:w-10/12 h-full m-auto">
        <ProjectsCard>
          <Cards />
        </ProjectsCard>
      </div>
    </section>
  );
};
