import AboutMe from "./AboutMe/AboutMe";
import Certificates from "./Certificates/Certificates";
import Experience from "./Experience/Experience";
import IdentificationInfo from "./IdentificationInfo/IdentificationInfo";
import Skills from "./Skills/Skills";
import Tags from "./Tags/Tags";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Information = () => {
  const [isShow, setIsShow] = useState(true);

  return (
    <section
      className={`bg-white w-full md:w-[284px]  px-6 py-7 rounded-3xl text-slate-400 relative  ${
        isShow ? "" : "h-[280px]"
      } `}
    >
      <IdentificationInfo />
      <div className={`${isShow?"block":"hidden"}`}>
        <Tags />
        <AboutMe />
        <Skills />
        <Certificates />
        <Experience />
      </div>
      <button
        className="flex md:hidden bg-white p-1  items-center justify-center border-2 rounded-full absolute -bottom-5 left-1/2 -translate-x-1/2 "
        onClick={() => setIsShow((prevState) => !prevState)}
      >
        {isShow ? (
          <ChevronUpIcon className="icon text-blue-600" />
        ) : (
          <ChevronDownIcon className="icon text-blue-600" />
        )}
      </button>
    </section>
  );
};

export default Information;
