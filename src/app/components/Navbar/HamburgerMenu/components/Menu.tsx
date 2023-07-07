import React, { useEffect } from "react";
import { motion, AnimatePresence, useAnimate } from "framer-motion";
import classNames from "@/utils/classNames";
import { links } from "../../data";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const Menu = (props: Props) => {
  const { open, setOpen } = props;
  const [scope, animate] = useAnimate();

  const handleClose = async () => {
    await animate(
      scope.current,
      {
        opactiy: 0,
        x: "100vw",
      },
      {
        duration: 0.5,
      }
    );
    setOpen(false);
  };

  useEffect(() => {}, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={scope}
          key="menu-container"
          className={classNames(
            "absolute top-0 right-0",
            "w-screen h-screen",
            "bg-black/80"
          )}
          onClick={handleClose}
          initial={{ opacity: 0, x: "100vw" }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.5,
              transisiton: { ease: "easeIn" },
            },
          }}
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
      )}
    </AnimatePresence>
  );
};

export default Menu;
