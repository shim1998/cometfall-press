import './index.css'
import initbg from './assets/projectalt.png'
import world from './assets/theworld_alt.png'
import map from './assets/KasaaqMap1_alt.png'
import houses from './assets/Houses_Kavorra1_alt.png'
import worldtitle from './assets/theworld_title.png'
import Footer from './Footer';
import { useState, useEffect } from 'react'

function Project() {
    const para1 = (
        <p className='w-4/5 md:w-1/2 clear-both mt-10 mb-10 m-auto md:mx-10 text-center md:text-left text-pretty text-dark sm:text-md md:text-lg lg:text-lg xl:text-xl font-medium'>
            ...which your party can use to their advantage in furthering their own goals of adventure and notoriety. The setting features plot hooks relating to politics, war, mythology, ancient religions, and even tales of an apocalypse. The legend of the Sunless Dunes states that the ancient ruler of these sands, Sol Sultana, has ascended to become a goddess of the sun, and is soon returning to burn away the world.
        </p>
    );

    const [mappara, setMappara] = useState(getText());

    function getText() {
        return window.innerWidth < 768 ? false : true;
    }

    useEffect(() => {
        function handleResize() {
            setMappara(getText());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className='project -z-20 overflow-x-clip'>
            <div className='w-full h-auto place-content-center block'>
                <img className='w-[100vw] scale-160 md:scale-140 lg:scale-140 xl:scale-130 2xl:scale-130 h-auto top-0' src={initbg} alt='Sunless Dunes' />
            </div>

            <p className='relative mt-30 mb-10 clear-both text-left md:text-center text-pretty sm:text-sm md:text-lg lg:text-lg xl:text-xl font-semibold w-2/3 m-auto text-dark'>
                Sunless Dunes is a new Campaign Setting for D&D 5e inspired by medieval India, taking your table to the nation of 'Kasaaq' within the northern deserts of the continent of 'Eqos'. The various cities, noble houses, races, and subclasses found within this setting are each influenced by one of the many diverse cultures found in India, set during a time period in which steam power is beginning to shake up old feudal ways.
                <br />
                <br />
                Cometfall Press started off as a group of design students playing D&D many years ago in India. Our setting has been developed over many years, initially starting off as a homebrew world created for our table which continued to expand in scope. Now, our team is spread across the globe, and aims to bring our home-grown setting to players and DMs everywhere.
            </p>

            <div className='relative flex flex-col mt-10 md:mt-15 lg:mt-15 xl:md-15'>
                <div className='relative drop-shadow-[0_0_10px_rgba(50,0,0,0.33)] w-3/5 md:w-1/3 lg:w-1/3 xl:w-1/4 m-auto z-20 p-2'>
                    <img src={worldtitle} alt='World Title' />
                </div>

                <div className='place-items-center relative h-auto flex flex-col m-auto -mt-10 md:flex-row lg:flex-row xl:flex-row w-[90%] '>
                    <div className='w-4/5 scale-110 md:w-2/3 lg:w-3/5 xl:w-2/5 z-20 p-2 m-2 mt-5'>
                        <img src={world} alt='World Map' />
                    </div>
                    <p className='relative w-4/5 mx-10 md:w-1/2 h-auto p-2 clear-both mt-0 md:mt-10 text-left text-pretty text-dark sm:text-md md:text-lg lg:text-lg xl:text-xl font-medium'>
                        This book details the cultures and landscapes of the nation of Kasaaq, which is only a small whole of a greater world known as 'Abmarah'. Kasaaq is most well known for its large desert, but contains many diverse environments including dense jungles, floodplains, underground caves, volcanic mountains, tropical islands, and cool valleys.
                    </p>
                </div>
            </div>

            <div className='place-items-center relative h-auto flex flex-col m-auto mt-5 w-[100vw]'>
                <div className='relative z-20 drop-shadow-[0_0_50px_rgba(50,5,5,0.33)]'>
                    <img src={map} alt='Kasaaq Map' />
                </div>

                <div className='flex flex-col xl:flex-row lg:flex-row mx-auto place-items-center'>
                    <p className='w-4/5 lg:w-1/2 clear-both mt-10 mb-10 mx-10 text-center text-pretty text-dark sm:text-sm md:text-lg lg:text-lg xl:text-xl font-semibold'>
                        Each city was inspired by a different culture from the medieval Indian subcontinent, and they all hold unique adventure hooks within them. The nation is divided into six different kingdoms, each serving the 'Mahataraja' of the city of Kasaaq. Many of the story hooks of the setting are political in nature, and there are many 'Mahaan Houses' of powerful noble families to be found within the Kav'orra Desert and surrounding areas. They all have different ambitions within the constant power struggles of the desert...
                    </p>
                    <div className='relative z-20 w-[100vw] lg:w-3/5 mx-0 lg:mx-10 drop-shadow-[0_0_25px_rgba(50,5,5,0.14)]'>
                        <img src={houses} alt='Noble Houses' />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Project;
