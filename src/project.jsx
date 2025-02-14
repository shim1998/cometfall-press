import './index.css'
import initbg from './assets/projectalt.png'
import world from './assets/theworld.png'
import worldtitle from './assets/theworld_title.png'

function Project() {
    return (
        <>
            <div className='project -z-20 overflow-x-clip'>
                <div className='w-full h-autoplace-content-center block'>
                    <img className='w-[100vw] scale-160 md:scale-140 lg:scale-140 xl:scale-130 2xl:scale-130 h-auto top-0' src={initbg} alt='Sunless Dunes'/>
                </div>
                <p className='relative mt-30 mb-10 clear-both text-left md:text-center text-pretty sm:text-sm md:text-md lg:text-lg xl:text-xl font-semibold w-2/3 m-auto text-dark'>
                    Sunless Dunes is a new Campaign Setting for D&D 5e inspired by medieval India, taking your table to the nation of 'Kasaaq' within the northern deserts of the continent of 'Eqos'. The various cities, noble houses, races, and subclasses found within this setting are each influenced by one of the many diverse cultures found in India, set during a time period in which steam power is beginning to shake-up old feudal ways. 
                    <br/>
                    <br/>
                    Cometfall Press started off as a group of design students playing D&D many years ago in India. Our setting has been developed over many years, initially starting off as a homebrew world created for our table which continued to expand in scope. Now, our team is spread across the globe, and aims to bring our home-grown setting to players and DMs everywhere.
                </p>
                
                <div className='flex flex-col mt-5 md:mt-10 lg:mt-10 xl:md-10'>
                    <div className='relative w-3/5 md:w-1/3 lg:w-1/3 xl:w-1/4 m-auto z-20 p-2'>
                        <img src={worldtitle}/>
                    </div>
                    <div className='place-items-center relative flex flex-col sm:mt-10 md:mt-20 lg:mt-20 xl:mt-20 md:flex-row lg:flex-row xl:flex-row m-auto w-[90%] h-50'>
                        <div className='w-4/5 md:w-2/3 lg:w-3/5 xl:w-2/5 z-20 p-2 m-2'>
                            <img src={world}/>
                        </div>
                        <p className='w-4/5 md:w-1/2 h-auto p-2 clear-both m-auto text-left text-pretty text-dark sm:text-sm md:text-md lg:text-lg xl:text-xl font-semibold'>
                            This book details the cultures and landscapes of the nation of Kasaaq, which is only a small whole of a greater world known as 'Abmarah'. Kasaaq is most well known for its large desert, but contains many diverse environments including dense jungles, floodplains, underground caves, volcanic mountains, tropical islands, and cool valleys.
                        </p>
                    </div>
                </div>
                <div className='h-[2000px]'></div>
            </div>  
        </>
    )
}

export default Project