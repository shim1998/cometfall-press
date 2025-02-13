import './index.css'
import initbg from './assets/project.png'
import world from './assets/theworld.png'
import worldtitle from './assets/theworld_title.png'

function Project() {
    return (
        <>
            <div className='-z-20 overflow-x-clip'>
                <div className='w-full h-autoplace-content-center block'>
                    <img className='w-full scale-125 h-auto top-0' src={initbg} alt='Sunless Dunes'/>
                </div>
                <p className='relative my-10 clear-both text-center text-pretty  sm:text-sm md:text-md lg:text-lg xl:text-xl font-semibold w-2/3 m-auto text-dark'>
                    Sunless Dunes is a new Campaign Setting for D&D 5e inspired by medieval India, taking your table to the nation of 'Kasaaq' within the northern deserts of the continent of 'Eqos'. The various cities, noble houses, races, and subclasses found within this setting are each influenced by one of the many diverse cultures found in India, set during a time period in which steam power is beginning to shake-up old feudal ways. 
                    <br/>
                    <br/>
                    Cometfall Press started off as a group of design students playing D&D many years ago in India. Our setting has been developed over many years, initially starting off as a homebrew world created for our table which continued to expand in scope. Now, our team is spread across the globe, and aims to bring our home-grown setting to players and DMs everywhere.
                </p>
                
                <div className='relative sm:mt-30 md:mt-20 lg:mt-30 xl:mt-30'>
                    <div className='relative w-1/3 m-auto z-20 p-2 m-2'>
                        <img src={worldtitle}/>
                    </div>
                    <div className='relative flex flex-col sm:mt-10 md:mt-30 lg:mt-40 xl:mt-70 md:flex-row lg:flex-row xl:flex-row m-auto bg-light w-[90%] h-50 place-items-center'>
                        <div className='w-1/2 sm:w-2/3 z-20 p-2 m-2'>
                            <img src={world}/>
                        </div>
                        <p className='w-1/2 h-auto p-2 clear-both m-2 text-center lg:text-left md:text-left xl:text-left text-pretty text-dark sm:text-sm md:text-md lg:text-lg xl:text-xl font-semibold'>
                            This book details the cultures and landscapes of the nation of Kasaaq, which is only a small whole of a greater world known as 'Abmarah'. Kasaaq is most well known for its large desert, but contains many diverse environments including dense jungles, floodplains, underground caves, volcanic mountains, tropical islands, and cool valleys.
                        </p>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default Project