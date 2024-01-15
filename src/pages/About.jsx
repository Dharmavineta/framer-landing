import { Link } from "react-router-dom";
import WomanImg from "../img/about/woman.png";
import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";
const About = () => {
  const { mouseEnter, mouseLeave } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={{ duration: 1, ease: "backInOut" }}
      className="section"
    >
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          <motion.div
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden"
          >
            <img src={WomanImg} alt="" />
          </motion.div>
          <motion.div
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={{ duration: 1, ease: "backInOut" }}
            className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1">About Me</h1>
            <p className="mb-12 max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <b>Voluptatum, nulla?</b> Nesciunt, aliquid nulla. Natus ea id
              quae, vitae doloremque impedit corrupti excepturi eveniet tempora?
              Eum esse minima beatae aperiam quo?
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              dolore, aperiam excepturi voluptatibus debitis id animi, quisquam
              harum minima consequatur ipsam nulla ullam dolores iusto libero,
              consequuntur nihil sunt nisi nemo aspernatur nobis quasi ducimus!
              A tempore hic animi quae!
            </p>

            <Link className="btn rounded-lg" to={"/portfolio"}>
              View My Work
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
