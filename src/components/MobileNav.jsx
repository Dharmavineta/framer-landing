import { useContext, useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CursorContext } from "../context/CursorContext";

const menuVariants = {
  initial: {
    x: "100%",
  },
  animate: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const MobileNav = () => {
  const { mouseEnter, mouseLeave } = useContext(CursorContext);
  const [open, setOpen] = useState(false);
  return (
    <nav className="text-primary lg:hidden">
      <div className="text-3xl cursor-pointer" onClick={() => setOpen(true)}>
        <CgMenuRight />
      </div>
      <motion.div
        variants={menuVariants}
        initial="initial"
        animate={open ? "animate" : ""}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        className="bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20"
      >
        <div
          onClick={() => setOpen(false)}
          className="text-4xl absolute cursor-pointer z-30 left-4 top-14"
        >
          <IoMdClose />
        </div>
        <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-primary font-bold text-3xl font-primary">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/portfolio"}>Portfolio</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
