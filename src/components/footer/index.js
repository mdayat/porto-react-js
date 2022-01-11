import React from "react";
import { Address } from "./adrress";
import { Contact } from "./contact";
import { CopyRight } from "./copyRight";

export const Footer = () => {
  return (
    <section id="contact" className="bg-black text-white pt-16">
      <div className="w-11/12 mx-auto relative lg:w-10/12 flex flex-wrap justify-evenly items-center pb-16">
        <Contact />
        <Address />
      </div>
      <CopyRight />
    </section>
  );
};
