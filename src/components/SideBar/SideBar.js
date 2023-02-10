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
import { useState } from "react";
import ListItem from "./ListItem/ListItem";

const items = [
  {
    id: 1,
    title: "داشبورد",
    icon: <Squares2X2Icon className="icon" />,
    number: null,
    path: "/",
  },
  {
    id: 2,
    title: "پروفایل",
    icon: <UserCircleIcon className="icon" />,
    number: null,
    path: "/profile",
  },
  {
    id: 3,
    title: "گفتگوها",
    icon: <ChatBubbleLeftRightIcon className="icon" />,
    number: 3,
    path: "/chats",
  },
  {
    id: 4,
    title: "ارسال دعوت نامه",
    icon: <EnvelopeIcon className="icon" />,
    number: null,
    path: "/invitation",
  },
  {
    id: 5,
    title: "صدور پیش فاکتور",
    icon: <DocumentMinusIcon className="icon" />,
    number: null,
    path: "/invoice",
  },
  {
    id: 6,
    title: "عضویت در کانتمو",
    icon: <UserPlusIcon className="icon" />,
    number: null,
    path: "/membership",
  },
];

const SideBar = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div
      className={`w-14 px-1 py-6 ${
        isShow ? "md:w-[280px] px-3" : "md:w-20 "
      }    transition-all duration-150 min-h-[calc(100vh_-_80px)] md:min-h-[calc(100vh_-_103px)]  bg-white  text-lg text-slate-500 shadow-sm z-10 relative`}
    >
      <ul>
        {items.map((item) => {
          return <ListItem item={item} isShow={isShow} key={item.id} />;
        })}
      </ul>
      <button
        className="hidden md:flex bg-white p-1  items-center justify-center border-2 rounded-full absolute top-1/3 -left-5"
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
