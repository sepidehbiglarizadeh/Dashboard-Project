import { NavLink, useLocation } from "react-router-dom";

const ListItem = ({ item, isShow }) => {
  const location = useLocation();


  return (
    <NavLink
      to={item.path}
      className={(navData) =>
        navData.isActive ? "bg-indigo-50 text-blue-600" : ""
      }
    >
      <li
        className={`flex items-center px-2 md:px-5 py-3 gap-x-2 cursor-pointer relative hover:bg-indigo-50 hover:text-blue-600 hover:border-r-4 hover:border-blue-600 rounded-md ${
          location.pathname === item.path ? "bg-indigo-50" : ""
        }  `}
      >
        {item.icon}
        <span className={`hidden ${isShow ? "md:block" : ""}`}>
          {item.title}
        </span>
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
    </NavLink>
  );
};

export default ListItem;
