import {
  Heart,
  Home,
  LucideMessagesSquare,
  PlusCircle,
  User2,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="h-12 fixed flex z-50 bottom-0 justify-around items-center w-full bg-white">
        <Home size={34} className="text-[#8CC444]" />
        <Heart size={34} className="text-[#8CC444]" />
        <PlusCircle size={34} className="text-[#8CC444]" />
        <LucideMessagesSquare size={34} className="text-[#8CC444]" />
        <Link href={"/signin"}>
          <User2 size={34} className="text-[#8CC444]" />
        </Link>
      </footer>
    </>
  );
};

export default Footer;
