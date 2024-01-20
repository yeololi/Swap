import {
  Heart,
  Home,
  LucideMessagesSquare,
  PlusCircle,
  User2,
} from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="h-12 fixed flex z-50 bottom-0 justify-around items-center w-full bg-white">
        <Home size={34} className="text-[#8CC444]" />
        <Heart size={34} className="text-[#8CC444]" />
        <PlusCircle size={34} className="text-[#8CC444]" />
        <LucideMessagesSquare size={34} className="text-[#8CC444]" />
        <User2 size={34} className="text-[#8CC444]" />
      </footer>
    </>
  );
};

export default Footer;
