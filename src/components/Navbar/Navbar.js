import logo from "../../assets/images/logo.png";
import {
  ArrowRightOnRectangleIcon,
  BellIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import MyToggle from "../MyToggle/MyToggle";

const Navbar = () => {
  return (
    <header className="w-full bg-white">
      <nav className="p-4 md:px-11 md:py-6 flex justify-between items-center shadow-sm drop-shadow ">
        <figure className="w-[30%]">
          <img src={logo} alt="logo" />
        </figure>
        <div className="flex gap-x-2 md:gap-x-4">
          <button className="border p-3 md:p-3 rounded-full relative">
            <BellIcon className="w-5" />
            <span className="absolute -top-1 -right-1 bg-blue-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
              ۲
            </span>
          </button>
          <button className="border p-3 md:p-3 rounded-full">
            <Cog6ToothIcon className="w-5" />
          </button>
          <button className="border p-3 md:p-3 rounded-full">
            <ArrowRightOnRectangleIcon className="w-5" />
          </button>
          <MyToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
