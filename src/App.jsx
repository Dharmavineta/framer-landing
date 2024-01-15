import { useContext } from "react";
import AnimRoutes from "./components/AnimRoutes";
import { CursorContext } from "./context/CursorContext";
import { motion } from "framer-motion";
import Header from "./components/Header";

const App = () => {
  const { cursorVariants, cursorBg } = useContext(CursorContext);
  return (
    <div>
      <Header />
      <AnimRoutes />
      <motion.div
        variants={cursorVariants}
        animate={cursorBg}
        className="w-[32px] rounded-full h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50"
      ></motion.div>
    </div>
  );
};

export default App;
