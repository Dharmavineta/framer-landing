import { createContext, useEffect, useState } from "react";

export const CursorContext = createContext();

const CursorProvider = ({ children }) => {
  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0,
  });

  const [cursorBg, setCursorBg] = useState("default");

  useEffect(() => {
    const handleMouse = (e) => {
      setCursorPos({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  const cursorVariants = {
    default: {
      x: cursorPos.x - 16,
      y: cursorPos.y - 16,
      backgroundColor: "#0e1112",
    },
    text: {
      width: "150px",
      height: "150px",
      x: cursorPos.x - 72,
      y: cursorPos.y - 72,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
    },
  };

  const mouseEnter = () => {
    setCursorBg("text");
  };
  const mouseLeave = () => {
    setCursorBg("default");
  };
  return (
    <CursorContext.Provider
      value={{ cursorVariants, cursorBg, mouseEnter, mouseLeave }}
    >
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
