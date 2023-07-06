import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "./components/Menu";

type Props = {};

const HamburgerMenu = (props: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex justify-end p-5 items-center h-16 md:hidden lg:hidden">
        <div className="text-theme-accent">
          <GiHamburgerMenu size={40} onClick={() => setOpen((prev) => !prev)} />
        </div>
      </div>
      <Menu open={open} setOpen={setOpen} />
    </>
  );
};

export default HamburgerMenu;
