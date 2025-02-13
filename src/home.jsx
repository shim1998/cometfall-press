import logo from '/CFPLogo_Horizontal White Transparent.png'
import './home.css'

function Home() {

  return (
      <>
          <div className="flex flex-col place-content-center h-full m-auto">
            <div className="lg:w-3/4 md:w-full sm:w-full m-auto">
                <img className="" src={logo} alt="Cometfall Press Logo" />
            </div>
            <div className="w-fit m-auto mt-10 lg:text-5xl md:text-4xl text-3xl">
                Coming Soon!
            </div>
          </div>
      </>
  )
}

export default Home
