import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="bg-indigo-50 min-h-screen ">
      <Navbar/>
      <div className="relative">
        <SideBar/>
      </div>
    </div>
  );
}

export default App;
