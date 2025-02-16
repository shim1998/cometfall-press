import './index.css'
import initbg from './assets/WebsiteBanner.webp'
import world from './assets/WebsiteTheWorld.webp'
import map from './assets/KasaaqMap1_alt.png'
import houses from './assets/Houses_Kavorra1_alt.png'
import worldtitle from './assets/WebsiteText1.webp'
import book from './assets/WebsiteBook.webp'
import { useState, useEffect } from 'react'
import Footer from './footer.jsx'

function Project() {

    const para1 = (
    <p className='w-4/5 md:w-1/2 clear-both my-10 m-auto md:mx-10 text-left lg:text-center text-pretty text-dark sm:text-md md:text-lg lg:text-lg xl:text-xl font-medium'>
        ...which your party can use to their advantage in furthering their own goals of adventure and notoriety. The setting features plot hooks relating to politics, war, mythology, ancient religions, and even tales of an apocalypse. The legend of the Sunless Dunes states that the ancient ruler of these sands, Sol Sultana, has ascended to become a goddess of the sun, and is soon returning to burn away the world. 
    </p>)

    const initpara = (
        <p className='relative mx-5 lg:mr-15 pt-0 xl:pt-10 my-auto md:mt-30 clear-both text-left text-pretty sm:text-md md:text-lg lg:text-lg xl:text-xl font-medium w-3/4 lg:w-1/2  m-auto text-dark'>
            Sunless Dunes is a new Campaign Setting for D&D 5e inspired by medieval India, taking your table to the nation of <i>Kasaaq</i> within the northern deserts of the continent of <i>Eqos</i>. The various cities, noble houses, races, and subclasses found within this setting are each influenced by one of the many diverse cultures found in India, set during a time period in which steam power is beginning to shake-up old feudal ways. 
            <br/>
            <br/>
            Cometfall Press started off as a group of design students playing D&D many years ago in India. Our setting has been developed over many years, initially starting off as a homebrew world created for our table which continued to expand in scope. Now, our team is spread across the globe, and aims to bring our home-grown setting to players and DMs everywhere.
        </p>)
    
    const initimg = (
        <div className='relative m-auto w-2/3 md:w-2/5 lg:w-2/5 xl:w-2/5 2xl:w-2/5 z-20 pt-10 lg:pt-20'>
            <img src={book} alt='Book Sample' />
        </div>)

    const [mappara, setMappara] = useState(getText())
    const [p1, setP1] = useState(setparas(getlarge()))

    function getText() {
        return window.innerWidth < 768 ? false : true;
      }

    function getlarge() {
    return window.innerWidth < 1024 ? false : true;
    }
    
    
    function setparas(x) {
        if(x){
            return [initimg, initpara]
        }
        else{
            return [initpara, initimg]
        }
    }

    useEffect(() => {
        function handleResize() {
            setMappara(getText());
            setP1(setparas(getlarge()))
        }
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
    

    return (
        <>
            <div className='project -z-20 overflow-x-clip place-items-center place-content-center'>
                <div className='w-full h-auto place-content-center block mb-30 md:mb-0'>
                    <img className='w-[100vw] scale-160 md:scale-140 lg:scale-140 xl:scale-130 2xl:scale-130 h-auto top-0' src={initbg} alt='Sunless Dunes'/>
                </div>
                <div className='flex flex-col lg:flex-row place-items-center place-content-center m-auto'>
                    {p1[0]}
                    {p1[1]}
                </div>
                
                <div className='relative flex flex-col mt-10'>
                    <div className='relative drop-shadow-[0_0_10px_rgba(50,0,0,0.33)] w-3/5 md:w-2/5 lg:w-1/3 xl:w-1/4 m-auto z-20 p-2'>
                        <img src={worldtitle} alt='World Title' />
                    </div>
                    <div className='place-items-center relative h-auto flex flex-col m-auto -mt-10 md:flex-row lg:flex-row xl:flex-row w-[90%] '>
                        <p className='relative w-4/5 mx-10 md:w-1/2 h-auto p-2 clear-both mt-20 md:mt-30 text-left text-pretty text-dark sm:text-md md:text-lg lg:text-lg xl:text-xl font-medium'>
                            This book details the cultures and landscapes of the nation of Kasaaq, which is only a small whole of a greater world known as <i>Abmarah</i>. Kasaaq is most well known for its large desert, but contains many diverse environments including dense jungles, floodplains, underground caves, volcanic mountains, tropical islands, and cool valleys.
                        </p>
                        <div className='w-4/5 scale-110 md:w-2/3 lg:w-3/5 xl:w-2/5 z-20 p-2 m-2 mt-5'>
                            <img src={world} alt='World Map' />
                        </div>
                    </div>
                </div>
                <div className='place-items-center relative h-auto flex flex-col m-auto mt-5 w-[100vw]'>
                        <div className='relative w-[100vw] z-20 drop-shadow-[0_0_50px_rgba(50,5,5,0.33)]'>
                            <img src={map} alt='Kasaaq Map'/>
                        </div>
                        <div className='flex flex-col mx-auto place-items-center'>
                            <div className='flex flex-row'>
                                <p className='w-4/5 md:w-1/2 clear-both mt-10 mb-10 m-auto md:mx-10 text-left lg:text-center text-pretty text-dark sm:text-md md:text-lg lg:text-lg xl:text-xl font-medium'>
                                    Each city was inspired by a different culture from the medieval Indian subcontinent, and they all hold unique adventure hooks within them. The nation is divided into six different kingdoms, each serving the <i>Mahataraja</i> of the city of Kasaaq. Many of the story hooks of the setting are political in nature, and there are many <i>Mahaan Houses</i> of powerful noble families to be found within the Kav'orra Desert and surrounding areas. They all have different ambitions within the constant power struggles of the desert...
                                </p>
                                {mappara&&para1}
                            </div>
                            <div className='relative z-20 w-[100vw] mx-0 drop-shadow-[0_0_25px_rgba(50,5,5,0.14)]'>
                                <img src={houses}/>
                            </div>
                            {!mappara&&para1}
                        </div>
                    </div>
                <div className='h-[200px]'></div>
            </div>
            <Footer/> 
        </>
    )
}

export default Project