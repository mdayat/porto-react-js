import React from "react";

export const NavbarToggleMenu = () => {
  return (
    <div className="py-3 lg:hidden font-poppins">
      <ul>
        <li className="my-2 font-bold hover:underline ease-in-out duration-300">
          <a href="#home">Home</a>
        </li>
        <li className="my-2 font-bold hover:underline ease-in-out duration-300">
          <a href="#about">About</a>
        </li>
        <li className="my-2 font-bold hover:underline ease-in-out duration-300">
          <a href="#projects">Projects</a>
        </li>
        <li className="my-2 font-bold hover:underline ease-in-out duration-300">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};
