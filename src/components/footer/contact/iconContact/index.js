import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";

export const ContactIcon = () => {
  const icons = [
    {
      name: "Instagram",
      iconName: <AiFillInstagram />,
      url: "https://www.instagram.com/_mdayat/",
    },
    {
      name: "LinkedIn",
      iconName: <AiFillLinkedin />,
      url: "https://www.linkedin.com/in/mdayat/",
    },
    {
      name: "Twitter",
      iconName: <AiFillTwitterSquare />,
      url: "https://twitter.com/angkenmutu",
    },
    {
      name: "Github",
      iconName: <AiFillGithub />,
      url: "https://github.com/mdayat",
    },
  ];

  return (
    <div className="mt-3 mb-8 flex justify-evenly items-center sm:mt-3 sm:mb-2 md:mb-1 lg:mb-0 xl:mb-0 2xl:mb-0">
      {icons.map((icon) => (
        <a
          href={icon.url}
          key={icon.name}
          className="hover:text-primary ease-in-out duration-300"
        >
          <i className="text-2xl">{icon.iconName}</i>
        </a>
      ))}
    </div>
  );
};
