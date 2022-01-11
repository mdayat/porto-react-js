import React from "react";
import { ContactIcon } from "./iconContact";

export const Contact = () => {
  return (
    <div className="basis-4/12">
      <h3 className="font-poppins font-black uppercase mb-3 text-md md:text-lg">
        Contact
      </h3>
      <address className="mb-4">
        <a
          href="mailto:muhnurdayat@gmail.com"
          className="text-primary hover:underline ease-in-out duration-300"
        >
          muhnurdayat@gmail.com
        </a>
      </address>
      <ContactIcon />
    </div>
  );
};
