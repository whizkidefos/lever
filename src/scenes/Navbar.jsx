import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-red";

  return (
    <nav className={`z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-center mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">AL</h4>
      </div>
    </nav>
  )
}

export default Navbar;