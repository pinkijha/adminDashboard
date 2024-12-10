import Body from "./components/Body"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"


function App() {
 

  return (
    <>
      <div className="flex">        
      <div className="w-1/6"><Sidebar/></div>

      <div  className="w-5/6">
      <Navbar/>
      <Body/>
      </div>

      </div>
    </>
  )
}

export default App
