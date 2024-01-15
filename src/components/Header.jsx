import { Link } from "react-router-dom";
import Logo from "../img/header/logo.svg";
import Socials from "./Socials";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";

const Header = () => {
  const { mouseEnter, mouseLeave } = useContext(CursorContext);
  return (
    <header className="fixed w-full px-8 lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between  w-full">
        <Link to={"/"} className=" max-w-[200px]">
          <img src={Logo} alt="/" />
        </Link>
        <motion.nav
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          className="hidden lg:flex gap-x-10 items-center font-semibold"
        >
          <Link
            className="text-[#696c6d] hover:text-primary transition"
            to={"/"}
          >
            Home
          </Link>
          <Link
            className="text-[#696c6d] hover:text-primary transition"
            to={"/about"}
          >
            About
          </Link>
          <Link
            className="text-[#696c6d] hover:text-primary transition"
            to={"/contact"}
          >
            Contact
          </Link>
          <Link
            className="text-[#696c6d] hover:text-primary transition"
            to={"/portfolio"}
          >
            Portfolio
          </Link>
        </motion.nav>
      </div>
      <MobileNav />
      <Socials />
    </header>
  );
};

export default Header;
