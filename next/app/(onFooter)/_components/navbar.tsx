import { Search, Menu, Bell } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <nav className="fixed w-full h-12 flex justify-end items-center z-50 bg-white">
        <div className="flex gap-4">
          <Search size={34} className="text-[#8CC444]" />
          <Menu size={34} className="text-[#8CC444]" />
          <Bell size={34} className="mr-2 text-[#8CC444]" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
