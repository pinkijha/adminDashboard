import { useState } from "react";
import Body from "./components/Body"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"


function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  const sidebarToggleHandler = () => {
    setSidebarToggle(!sidebarToggle);
  };
 

  return (
    <>
      <div className="flex">        
      <div className="md:w-1/6"><Sidebar  toggleSidebar={sidebarToggleHandler} isSidebarOpen={sidebarToggle} /></div>

      <div  className="md:w-5/6">
      <Navbar toggleSidebar={sidebarToggleHandler} isSidebarOpen={sidebarToggle} />
      <Body  isSidebarOpen={sidebarToggle} />
      </div>

      </div>
    </>
  )
}

export default App
