import React, { useState } from "react";
import { NavbarBrand } from "./navBrand";
import { NavbarLink } from "./navLink";
import { NavbarToggleMenu } from "./navbarToggle";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

export const Navbar = ({ children }) => {
  const [btnMenu, setBtnMenu] = useState(false);

  const showBtnMenu = () => {
    btnMenu ? setBtnMenu(false) : setBtnMenu(true);
  };

  return (
    <nav className="bg-primary sticky top-0 left-0 right-0">
      <div className="w-11/12 flex lg:flex justify-between items-center h-16 lg:w-10/12 mx-auto">
        {children}
        <button className="text-2xl font-black lg:hidden" onClick={showBtnMenu}>
          {btnMenu ? <MdExpandLess /> : <MdExpandMore />}
        </button>
      </div>
      {btnMenu ? <NavbarToggleMenu /> : ""}
    </nav>
  );
};

export const MemoizedNavbarChildren = () => {
  return (
    <React.Fragment>
      <NavbarBrand />
      <NavbarLink />
    </React.Fragment>
  );
};
