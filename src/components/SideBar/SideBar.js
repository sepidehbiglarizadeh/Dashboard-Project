import {
  ChatBubbleLeftRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DocumentMinusIcon,
  EnvelopeIcon,
  UserCircleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import { Squares2X2Icon } from "@heroicons/react/24/solid";
import {} from "@heroicons/react/24/outline";
import { useState } from "react";

const SideBar = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div
      className={`w-14 px-1 py-6 ${
        isShow ? "md:w-56 px-3" : "md:w-20 "
      }    transition-all duration-150 min-h-[calc(100vh_-_80px)] md:min-h-[calc(100vh_-_103px)]  bg-white  text-lg text-slate-500 shadow-sm z-10 relative`}
    >
      <ul>
        <li className="flex items-center px-2 md:px-5 py-3 gap-x-2 ">
          <Squares2X2Icon className="icon" />
          <span className={`${isShow ? "" : "hidden"}`}>داشبورد</span>
        </li>
        <li className="flex items-center px-2 md:px-5 py-3 gap-x-2">
          <UserCircleIcon className="icon" />
          <span className={`${isShow ? "" : "hidden"}`}>پروفایل</span>
        </li>
        <li className="flex items-center px-2 md:px-5 py-3 gap-x-2 relative">
          <ChatBubbleLeftRightIcon className="icon" />
          <span className={`${isShow ? "" : "hidden"}`}>گفتگوها</span>
          <san
            className={`bg-blue-600 text-white rounded-full w-5 h-5 text-xs flex justify-center items-center ${
              isShow ? "" : "absolute left-0"
            }`}
          >
            ۳
          </san>
        </li>
        <li className="flex items-center px-2 md:px-5 py-3 gap-x-2">
          <EnvelopeIcon className="icon" />
          <span className={`${isShow ? "" : "hidden"}`}>ارسال دعوت نامه</span>
        </li>
        <li className="flex items-center px-2 md:px-5 py-3 gap-x-2">
          <DocumentMinusIcon className="icon" />
          <span className={`${isShow ? "" : "hidden"}`}>صدور پیش فاکتور</span>
        </li>
        <li className="flex items-center px-5 py-3 gap-x-2">
          <UserPlusIcon className="icon" />
          <span className={`${isShow ? "" : "hidden"}`}>عضویت در کانتمو</span>
        </li>
      </ul>
      <button
        className="hidden md:flex bg-white p-1  items-center justify-center border-2 rounded-full absolute top-1/2 -left-5"
        onClick={() => setIsShow((prevState) => !prevState)}
      >
        {isShow ? (
          <ChevronRightIcon className="icon text-blue-600 " />
        ) : (
          <ChevronLeftIcon className="icon text-blue-600 " />
        )}
      </button>
    </div>
  );
};

export default SideBar;
