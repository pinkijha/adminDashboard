import { useState } from "react";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  const sidebarToggleHandler = () => {
    setSidebarToggle(!sidebarToggle);
  };

  return (
    <BrowserRouter>
      <div className="flex">
        <div className={`${sidebarToggle ? "block" : "hidden"} md:w-1/6`}>
          <Sidebar toggleSidebar={sidebarToggleHandler} isSidebarOpen={sidebarToggle} />
        </div>
        <div className={`${sidebarToggle ? "md:w-5/6" : "w-full"}`}>
          <Navbar toggleSidebar={sidebarToggleHandler} isSidebarOpen={sidebarToggle} />
          <Body isSidebarOpen={sidebarToggle} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
