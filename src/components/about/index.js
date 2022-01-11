import React from "react";
import { HeroBtnContact } from "./heroButton";
import { HeroImage } from "./heroImage";
import { HeroText } from "./heroText";

export const About = () => {
  return (
    <section id="about" className="md:h-100 bg-gray-100 py-16">
      <div className="flex justify-center w-11/12 py-16 sm:h-96 md:flex md:h-full lg:w-10/12 mx-auto">
        <div className="self-center md:place-self-center text-center md:basis-2/4">
          <HeroText />
          <HeroBtnContact />
        </div>
        <div className="hidden md:block md:place-self-center md:basis-2/4">
          <HeroImage />
        </div>
      </div>
    </section>
  );
};
