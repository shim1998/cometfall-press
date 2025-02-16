import { Outlet, Link } from "react-router-dom";
import Navbar from './navbar.jsx'
import Footer from './footer.jsx'

function Layout() {

    const footer = (
                <div className="w-full h-full fixed">
                    <div className="w-fit m-auto fixed bottom-0 left-0 right-0">
                        Cometfall Press © 2025
                    </div>
                </div>
    )

  return (
      <>
          <div className="w-full h-full fixed left-0 top-0 overflow-y-scroll">
                <Navbar/>
                <div className="flex flex-col w-full h-full">
                    <Outlet className='overflow-x-clip'/>
                </div>
          </div>
      </>
  )
}

export default Layout