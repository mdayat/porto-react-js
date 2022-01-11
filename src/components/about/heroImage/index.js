import React from "react";

export const HeroImage = () => {
  return (
    <React.Fragment>
      <img
        src="foto.jpeg"
        alt="Muhammad Nur Hidayat"
        className="hidden object-cover object-center md:block w-3/6 mx-auto rounded-full"
      />
    </React.Fragment>
  );
};
