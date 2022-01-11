import React from "react";

export const NavbarLink = () => {
  return (
    <div className="hidden lg:flex justify-end items-center">
      <ul className="text-sm font-poppins md:text-base lg:flex flex-evenly font-bold 2xl:text-lg">
        <li className="mx-1 md:mx-2 2xl:mx-3 hover:underline ease-in-out duration-300">
          <a href="#home">Home</a>
        </li>
        <li className="mx-1 md:mx-2 2xl:mx-3 hover:underline ease-in-out duration-300">
          <a href="#about">About</a>
        </li>
        <li className="mx-1 md:mx-2 2xl:mx-3 hover:underline ease-in-out duration-300">
          <a href="#projects">Projects</a>
        </li>
        <li className="mx-1 md:mx-2 2xl:mx-3 hover:underline ease-in-out duration-300">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};
