import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import WomanImg from "../img/home/woman.png";
import { useContext } from "react";
import { CursorContext } from "../context/CursorContext";
const Home = () => {
  const { mouseEnter, mouseLeave } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "backInOut" }}
      className="section"
    >
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col justify-center">
          <motion.div
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={{ duration: 1.5, ease: "backInOut" }}
            className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1">
              Photographer <br /> & Film Maker
            </h1>
            <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12">
              India, Bangalore
            </p>
            <Link to={"contact"} className="btn mb-[30px] rounded-lg">
              Hire Me
            </Link>
          </motion.div>
          <div className="flex justify-end max-h-96 lg:max-h-max">
            <motion.div
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 1.5, ease: "backInOut" }}
              className="relative lg:-right-40 overflow-hidden"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1.5, ease: "backInOut" }}
                src={WomanImg}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
