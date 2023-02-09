import Navbar from "../components/Navbar/Navbar";
import SideBar from "../components/SideBar/SideBar";

const Layout = ({children}) => {
  return ( 
    <div className="bg-indigo-50 min-h-screen ">
      <Navbar/>
      <div className="relative flex">
        <SideBar/>
        {children}
      </div>
    </div>
   );
}
 
export default Layout;