import { PencilSquareIcon } from "@heroicons/react/24/outline";
import man from "../../../assets/images/man.png";
import { IoLogoWhatsapp, IoMdBasketball, IoLogoFacebook } from "react-icons/io";

const IdentificationInfo = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className="flex items-center mb-4 w-full">
        <h2>اطلاعات شناسایی</h2>
        <div className="flex-1 border mx-2"></div>
        <PencilSquareIcon className="icon" />
      </div>
      <figure className="w-[85px] h-[85px] rounded-full overflow-hidden border border-blue-600 mb-[10px]">
        <img src={man} alt="userImage" />
      </figure>
      <span className="text-blue-600 font-bold mb-6">مهدی ساغری</span>
      <div className="flex items-center gap-x-3 mb-6">
        <a
          href="https://www.whatsapp.com/"
          className=" p-2 border rounded-full"
        >
          <IoLogoWhatsapp className="icon text-slate-500" />
        </a>
        <a
          className=" p-2 border rounded-full"
          href="https://www.microsoft.com/"
        >
          <IoMdBasketball className="icon text-slate-500" />
        </a>
        <a
          href="https://www.facebook.com/"
          className=" p-2 border rounded-full"
        >
          <IoLogoFacebook className="icon text-slate-500" />
        </a>
      </div>
    </div>
  );
};

export default IdentificationInfo;
