import {
  ImFacebook,
  ImInstagram,
  ImLinkedin,
  ImTwitter,
  ImYoutube,
} from "react-icons/im";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";

const Socials = () => {
  const { mouseEnter, mouseLeave } = useContext(CursorContext);
  return (
    <div className="hidden lg:flex  ml-24">
      <motion.ul
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        className="flex gap-x-4"
      >
        <li>
          {" "}
          <Link to={"http://www.google.com"} target="_blank">
            <ImFacebook />
          </Link>
        </li>
        <li>
          {" "}
          <Link to={"http://www.google.com"} target="_blank">
            <ImTwitter />
          </Link>
        </li>
        <li>
          {" "}
          <Link to={"http://www.google.com"} target="_blank">
            <ImYoutube />
          </Link>
        </li>
        <li>
          {" "}
          <Link to={"http://www.google.com"} target="_blank">
            <ImInstagram />
          </Link>
        </li>
        <li>
          {" "}
          <Link to={"http://www.google.com"} target="_blank">
            <ImLinkedin />
          </Link>
        </li>
      </motion.ul>
    </div>
  );
};

export default Socials;
