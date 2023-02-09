import { PencilSquareIcon } from "@heroicons/react/24/outline";

const Certificates = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center mb-4 w-full">
        <h2>درباره من</h2>
        <div className="w-[35%] border mx-2 flex-1"></div>
        <PencilSquareIcon className="icon" />
      </div>
      <ul className="list-disc text-slate-900 mb-6">
        <li>کارشناسی کامپیوتر - دانشگاه تبریز</li>
        <li>مبانی طراحی - Udemy</li>
      </ul>
    </div>
  );
};

export default Certificates;
