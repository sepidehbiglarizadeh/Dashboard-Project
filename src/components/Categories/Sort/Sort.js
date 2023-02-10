import { useState } from "react";
import { FaEquals, FaRegClock } from "react-icons/fa";

const Sort = () => {
  const [isClicked, setIsClicked] = useState({ id: "", boolean: false });

  const clickHandler = (id) => {
    setIsClicked({ id, boolean: true });
  };

  return (
    <div className="flex items-center gap-x-2">
      <span className="text-xs">نوع نمایش:</span>
      <div className="bg-gray-200 flex items-center p-1 rounded-full">
        <button
          className={`px-2 ${
            isClicked.id === 1 ? "bg-white rounded-r-md" : ""
          }`}
          onClick={() => clickHandler(1)}
        >
          <FaEquals className="text-sm" />
        </button>
        <button
          className={`px-2 ${
            isClicked.id === 2 ? "bg-white rounded-l-md" : ""
          }`}
          onClick={() => clickHandler(2)}
        >
          <FaRegClock className="text-sm" />
        </button>
      </div>
    </div>
  );
};

export default Sort;
