import { Link } from "react-router-dom";
import Image1 from "../img/portfolio/1.png";
import Image2 from "../img/portfolio/2.png";
import Image3 from "../img/portfolio/3.png";
import Image4 from "../img/portfolio/4.png";
import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";
const Portfolio = () => {
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
        <div className="flex flex-col lg:flex-row h-full items-center justify-start lg:justify-center gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={{ duration: 1, ease: "backInOut" }}
            className="flex flex-col lg:items-start"
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
          >
            <h1 className="h1">Portfolio</h1>
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
            <Link to={"/contact"} className="btn mb-[30px] mx-auto lg:mx-0">
              Hire me
            </Link>
          </motion.div>
          <motion.div
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            className="grid grid-cols-2 lg:gap-2"
          >
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full  lg:h-[220px]  hover:scale-110 transition-all duration-300"
                src={Image1}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full  lg:h-[220px]  hover:scale-110 transition-all duration-300"
                src={Image2}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full  lg:h-[220px]  hover:scale-110 transition-all duration-300"
                src={Image3}
                alt=""
              />
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full  lg:h-[220px]  hover:scale-110 transition-all duration-300"
                src={Image4}
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
