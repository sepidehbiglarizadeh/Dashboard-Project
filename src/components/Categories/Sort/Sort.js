import { FaEquals, FaRegClock } from "react-icons/fa";

const Sort = () => {
  return (
    <div className="flex items-center gap-x-2">
      <span className="text-xs">نوع نمایش:</span>
      <div className="bg-gray-200 flex items-center p-1 rounded-full">
        <button className="px-2">
          <FaEquals className="text-sm" />
        </button>
        <button className="px-2">
          <FaRegClock className="text-sm" />
        </button>
      </div>
    </div>
  );
};

export default Sort;
