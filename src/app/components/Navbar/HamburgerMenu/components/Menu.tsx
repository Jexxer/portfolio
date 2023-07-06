import React from "react";
import classNames from "@/utils/classNames";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const Menu = (props: Props) => {
  const { open, setOpen } = props;

  return (
    <div
      className={classNames(
        open ? "absolute" : "hidden",
        "top-0 left-0 z-50",
        "w-screen h-screen",
        "bg-black/80"
      )}
      onClick={() => setOpen(false)}
    >
      <div></div>
    </div>
  );
};

export default Menu;
