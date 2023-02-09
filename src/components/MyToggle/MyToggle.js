import { useState } from "react";
import { MoonIcon } from "@heroicons/react/24/solid";
import { SunIcon } from "@heroicons/react/24/outline";

const MyToggle = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <button
      onClick={() => setEnabled((prevState) => !prevState)}
      className={`${
        enabled ? "bg-gray-300" : "bg-gray-200"
      } relative inline-flex h-12 w-6 justify-center rounded-full`}
    >
      <SunIcon className="absolute top-1 w-4 text-slate-400" />
      <MoonIcon className="absolute bottom-1 w-4 text-slate-400" />
      <span
        className={`${
          enabled ? "translate-y-7" : "translate-y-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </button>
  );
};

export default MyToggle;
