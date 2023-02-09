import { Link } from "react-router-dom";

const ListItem = ({item,isShow}) => {
  return (
    <Link to={item.path}>
      <li className="flex items-center px-2 md:px-5 py-3 gap-x-2 cursor-pointer relative">
        {item.icon}
        <span className={`${isShow ? "" : "hidden"}`}>{item.title}</span>
        {item.number ? (
          <span
            className={`bg-blue-600 text-white rounded-full w-5 h-5 text-xs flex justify-center items-center ${
              isShow ? "" : "absolute left-0"
            }`}
          >
            {item.number}
          </span>
        ) : (
          ""
        )}
      </li>
    </Link>
  );
};

export default ListItem;
