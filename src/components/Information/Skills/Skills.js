import { PencilSquareIcon } from "@heroicons/react/24/outline";

const Skills = () => {
  return (
    <div className={`flex flex-col items-center`}>
      <div className="flex items-center mb-4 w-full">
        <h2>مهارت ها</h2>
        <div className="w-[35%] border mx-2 flex-1"></div>
        <PencilSquareIcon className="icon" />
      </div>
      <div className="flex flex-wrap gap-x-2 gap-y-2 mb-6 text-slate-900">
        <span className="inline-block p-3 bg-indigo-50 rounded-2xl">
          تجربه کاربری
        </span>
        <span className="inline-block p-3 bg-indigo-50 rounded-2xl">
          طراحی سایت
        </span>
        <span className="inline-block p-3 bg-indigo-50 rounded-2xl">
          گرافیک
        </span>
      </div>
    </div>
  );
};

export default Skills;
