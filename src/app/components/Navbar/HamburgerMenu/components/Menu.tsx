import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import classNames from "@/utils/classNames";
import { links } from "../../data";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const Menu = (props: Props) => {
  const { open, setOpen } = props;

  return (
    <AnimatePresence>
      <motion.div
        key="menu-container"
        className={classNames(
          open ? "absolute" : "hidden",
          "w-screen h-[100dvh]",
          "top-0 right-0 z-50",
          "bg-black/80",
          "duration-500"
        )}
        onClick={() => setOpen(false)}
      >
        <motion.div
          key="list-parent-container"
          className="w-full h-full flex flex-col justify-center"
        >
          <motion.ul
            key="list-container"
            className="w-full h-[60%] grid grid-cols-1 place-items-center text-center"
          >
            {links.map((link) => (
              <motion.li key={link.id} className="text-theme-text">
                <motion.a
                  key="menu-list-item"
                  href={link.href}
                  className="p-3 text-2xl font-semibold"
                >
                  {link.name}
                </motion.a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Menu;
