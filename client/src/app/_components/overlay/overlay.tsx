import { HTMLAttributes } from "react";

interface OverlayProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  setIsOpen: () => void;
}

export const Overlay: React.FC<OverlayProps> = ({ isOpen, setIsOpen }) => {
  return isOpen ? (
    <div
      onClick={setIsOpen}
      className=" fixed inset-0 size-full z-10 bg-black/40 backdrop-blur-sm transition-all"
    />
  ) : null;
};
