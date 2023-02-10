import AboutMe from "./AboutMe/AboutMe";
import Certificates from "./Certificates/Certificates";
import Experience from "./Experience/Experience";
import IdentificationInfo from "./IdentificationInfo/IdentificationInfo";
import Skills from "./Skills/Skills";
import Tags from "./Tags/Tags";

const Information = () => {
  return (
    <section
      className={`h-[279px] md:h-auto overflow-hidden bg-white w-full md:w-[284px]  px-6 py-7 rounded-3xl text-slate-400 relative mb-6 md:mb-0 `}
    >
      <IdentificationInfo />
      <Tags />
      <AboutMe />
      <Skills />
      <Certificates />
      <Experience />
    </section>
  );
};

export default Information;
