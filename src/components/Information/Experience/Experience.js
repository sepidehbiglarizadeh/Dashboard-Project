import { PencilSquareIcon } from "@heroicons/react/24/outline";

const Experience = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center mb-4 w-full">
        <h2>درباره من</h2>
        <div className="w-[35%] border mx-2 flex-1"></div>
        <PencilSquareIcon className="icon" />
      </div>
      <ul className="list-disc text-slate-900 mb-6">
        <li>طراح تجربه کاربری - شرکت همراه</li>
        <li>طراح کاربری - شرکت آینده سازان</li>
      </ul>
    </div>
  );
};

export default Experience;
