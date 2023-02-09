import { PencilSquareIcon } from "@heroicons/react/24/outline";

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center mb-4 w-full">
        <h2>درباره من</h2>
        <div className="w-[35%] border mx-2 flex-1"></div>
        <PencilSquareIcon className="icon" />
      </div>
      <p className="mb-6 text-slate-900">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است.
      </p>
    </div>
  );
};

export default AboutMe;
