import './index.css'
import initbg from './assets/WebsiteBanner.webp'
import world from './assets/WebsiteTheWorld.webp'
import map from './assets/WebsiteWorldMap.webp'
import houses from './assets/WebsiteHouseBanners.webp'
import races from './assets/WebsiteRaces.webp'
import worldtitle from './assets/WebsiteText1.webp'
import racesitle from './assets/WebsiteText2.webp'
import subclasses from './assets/WebsiteSubclasses.webp'
import subclasstitle from './assets/WebsiteText3.webp'
import book from './assets/WebsiteBook.webp'
import { useState, useEffect } from 'react'
import Footer from './footer.jsx'

function Project() {

    const para1 = (
    <p className='w-4/5 md:w-1/2 clear-both my-10 m-auto md:mx-10 text-left text-pretty text-dark'>
        ...which your party can use to their advantage in furthering their own goals of adventure and notoriety. The setting features plot hooks relating to politics, war, mythology, ancient religions, and even tales of an apocalypse. The legend of the Sunless Dunes states that the ancient ruler of these sands, Sol Sultana, has ascended to become a goddess of the sun, and is soon returning to burn away the world. 
    </p>)

    const [mappara, setMappara] = useState(getText())

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
        <>
            <div className='project -z-20 overflow-x-clip place-items-center place-content-center sm:text-md md:text-lg lg:text-lg xl:text-xl font-regular'>
                <div className='w-full h-auto place-content-center block mb-30 md:mb-0'>
                    <img className='w-[100vw] scale-160 md:scale-140 lg:scale-140 xl:scale-130 2xl:scale-130 h-auto top-0' src={initbg} alt='Sunless Dunes'/>
                </div>
                <div className='w-[100%] lg:w-[95%] m-auto'>
                    <div className='flex flex-col lg:flex-row-reverse place-items-center place-content-center m-auto'>
                        <p className=' relative clear-both text-left text-pretty text-dark w-3/4 lg:w-1/2 m-auto lg:mr-15 md:mt-30 pt-0 xl:pt-10'>
                            Sunless Dunes is a new Campaign Setting for D&D 5e inspired by medieval India, taking your table to the nation of <i>Kasaaq</i> within the northern deserts of the continent of <i>Eqos</i>. The various cities, noble houses, races, and subclasses found within this setting are each influenced by one of the many diverse cultures found in India, set during a time period in which steam power is beginning to shake-up old feudal ways. 
                            <br/>
                            <br/>
                            Cometfall Press started off as a group of design students playing D&D many years ago in India. Our setting has been developed over many years, initially starting off as a homebrew world created for our table which continued to expand in scope. Now, our team is spread across the globe, and aims to bring our home-grown setting to players and DMs everywhere.
                        </p>
                        <div className='relative m-auto w-2/3 md:w-2/5 lg:w-2/5 xl:w-2/5 2xl:w-2/5 z-20 pt-10 lg:pt-20'>
                            <img src={book} alt='Book Sample' />
                        </div>
                    </div>
                    
                    <div className='relative flex flex-col mt-10'>
                        <div className='relative drop-shadow-[0_0_10px_rgba(50,0,0,0.33)] w-3/5 md:w-2/5 lg:w-1/3 xl:w-1/4 m-auto z-20 p-2'>
                            <img src={worldtitle} alt='World Title' />
                        </div>
                        <div className='place-items-center relative h-auto flex flex-col-reverse m-auto lg:flex-row w-[90%] '>
                            <p className='relative w-3/4 lg:w-1/2  mx-auto h-auto p-2 clear-both mt-10 text-left text-pretty text-dark'>
                                This book details the cultures and landscapes of the nation of Kasaaq, which is only a small whole of a greater world known as <i>Abmarah</i>. Kasaaq is most well known for its large desert, but contains many diverse environments including dense jungles, floodplains, underground caves, volcanic mountains, tropical islands, and cool valleys.
                            </p>
                            <div className='w-4/5 scale-110 md:w-2/3 lg:w-3/5 xl:w-2/5 z-20 p-2 m-2 mt-5'>
                                <img className='min-w-[100%]' src={world} alt='World Map' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='place-items-center relative h-auto flex flex-col m-auto mt-5 w-[100vw]'>
                    <div className='relative w-[100vw] z-20 drop-shadow-[0_0_50px_rgba(50,5,5,0.33)]'>
                        <img src={map} alt='Kasaaq Map'/>
                    </div>
                    <div className='flex flex-col mx-auto place-items-center'>
                        <div className='flex flex-row'>
                            <p className='w-4/5 md:w-1/2 clear-both mt-10 mb-10 m-auto md:mx-10 text-left text-pretty text-dark'>
                                Each city was inspired by a different culture from the medieval Indian subcontinent, and they all hold unique adventure hooks within them. The nation is divided into six different kingdoms, each serving the <i>Mahataraja</i> of the city of Kasaaq. Many of the story hooks of the setting are political in nature, and there are many <i>Mahaan Houses</i> of powerful noble families to be found within the Kav'orra Desert and surrounding areas. They all have different ambitions within the constant power struggles of the desert...
                            </p>
                            {mappara&&para1}
                        </div>
                        <div className='relative z-20 w-[100vw] mx-0 drop-shadow-[0_0_25px_rgba(50,5,5,0.14)]'>
                            <img className='min-w-[100%]' src={houses}/>
                        </div>
                        {!mappara&&para1}
                    </div>
                </div>
                <div className='place-items-center relative h-auto flex flex-col m-auto mt-5 w-[100vw]'>
                    <p className='relative mx-5 pt-0 my-auto clear-both text-left text-pretty font-regular w-3/4 m-auto text-dark'>
                        There are many factions both outside and within Kasaaq, and many of them feature as backgrounds for player characters and NPCs alike within this book. An example here is the Swarna Guild, based on the ancient Dravidian merchants of south India. While they are not within Kasaaq itself, they control a neighboring nation and hold a lot of foreign influence within the desert.                  
                    </p>
                    <div className='relative flex flex-col mt-20'>
                        <div className='relative drop-shadow-[0_0_10px_rgba(50,0,0,0.33)] w-3/5 md:w-2/5 lg:w-1/3 xl:w-1/4 m-auto z-20 p-2'>
                            <img src={racesitle} alt='Race Title' />
                        </div>
                        <div className='place-items-center relative h-auto flex flex-col m-auto lg:flex-row w-[100%] lg:w-[100%]'>
                            <div className='w-4/5 scale-110 md:w-2/3 lg:w-3/5 xl:w-2/5 z-20 p-2 mx-5 mt-5 '>
                                <img className='min-w-[100%]' src={races} alt='Races' />
                            </div>
                            <p className='relative w-3/4 lg:w-1/2 mx-5 h-auto p-2 clear-both mt-10 text-left text-pretty text-dark'>
                                This book details the cultures and landscapes of the nation of Kasaaq, which is only a small whole of a greater world known as <i>Abmarah</i>. Kasaaq is most well known for its large desert, but contains many diverse environments including dense jungles, floodplains, underground caves, volcanic mountains, tropical islands, and cool valleys.
                            </p>
                            
                        </div>
                        <p className='relative m-auto my-auto mt-5 lg:mt-10 clear-both text-left text-pretty font-regular w-3/4 text-dark'>
                            This book will contain 13 new playable races, each culturally embedded within the history of Kasaaq and inspired from Indian mythology or existing fantasy mythos. Many of these races have unique racial feats to go along with them. These races include:
                        </p>
                        <ul className='w-3/4 mx-auto my-0 mt-10 columns-1 md:columns-2'>
                        <li className='m-4 mt-0 break-inside-avoid-column'><b>The Omniborn</b><br/> An ancient extinct race with four arms and three different subraces.</li>
                            <li className='m-4 break-inside-avoid-column'><b>The Vedavin</b><br/> A blue-skinned race deeply attuned to magic and the gods.</li>
                            <li className='m-4 break-inside-avoid-column'><b>The Panshera</b><br/> Humanoid big-cats with three subraces: Leos, Tigros, and Pardos.</li>
                            <li className='m-4 break-inside-avoid-column'><b>The Vanara</b><br/> Humanoid monkeys known for their legendary heroism and trickery.</li>
                            <li className='m-4 break-inside-avoid-column'><b>The Ursines</b><br/> Humanoid bears with two subraces: Ursos and Pandos.</li>
                            <li className='m-4 break-inside-avoid-column'><b>The Saurians</b><br/> Humanoid lizardfolk with three subraces: Crocids, Gatorids, and Gharids.</li>
                            <li className='m-4 break-inside-avoid-column'><b>The Faiiali</b><br/> Insect-like people with six arms known for their architectural genius.</li>
                            <li className='m-4 break-inside-avoid-column'><b>The Vezaborn</b><br/> A tentacled race created by the gods to survive all extremes.</li>
                            <li className='m-4 break-inside-avoid-column'><b>The Vicchu</b><br/> Half-scorpions known for their monstrous might.</li>
                            <li className='m-4 break-inside-avoid-column'><b>The Dune Orcs</b><br/> A new subrace for Orcs who dwell within the sandy wastes.</li>
                            <li className='m-4 break-inside-avoid-column'><b>The Desert Dwarves</b><br/> A new subrace for the dwarves of the arid mountains.</li>
                            <li className='m-4 break-inside-avoid-column'><b>The Sand Elves</b><br/> A new subrace for elves who are accustomed to the harsh desert.</li>
                            <li className='m-4 break-inside-avoid-column'><b>The Sunless Drow</b><br/> A new surface-drow subrace for elves who thrive in the cold.</li>
                        </ul>

                        <div className='relative drop-shadow-[0_0_10px_rgba(50,0,0,0.33)] w-3/5 md:w-2/5 lg:w-1/3 xl:w-1/4 m-auto mt-15 z-20 p-2'>
                            <img src={subclasstitle} alt='Subclass Title' />
                        </div>
                        <div className='place-items-center relative h-auto flex flex-col m-auto lg:flex-row w-[100%] lg:w-[100%]'>
                            <div className='w-4/5 scale-110 md:w-2/3 lg:w-3/5 xl:w-2/5 z-20 p-2 mx-5 mt-5 '>
                                <img className='min-w-[100%]' src={subclasses} alt='Subclass' />
                            </div>
                            <p className='relative w-3/4 lg:w-1/2 mx-5 h-auto p-2 clear-both mt-10 text-left text-pretty text-dark'>
                                This book details the cultures and landscapes of the nation of Kasaaq, which is only a small whole of a greater world known as <i>Abmarah</i>. Kasaaq is most well known for its large desert, but contains many diverse environments including dense jungles, floodplains, underground caves, volcanic mountains, tropical islands, and cool valleys.
                            </p>
                            
                        </div>
                        <p className='relative m-auto my-auto mt-5 lg:mt-10 clear-both text-left text-pretty font-regular w-3/4 text-dark'>
                            This book will contain 13 new subclasses, one for each of the main classes found in 5e (including Artificer!) These are:
                        </p>
                        <ul className='w-3/4 mx-auto my-0 mt-10 columns-1 md:columns-2'>
                            <li className='m-4 mt-0 break-inside-avoid-column'><b>Artificer:</b> <i>The Scrapper</i><br/> A subclass that involves equal destruction and creation.</li>
                            <li className='m-4 break-inside-avoid-column'><b>Barbarian:</b> <i>Path of the Pehlwan</i><br/> A subclass inspired by ancient Indian wrestling.</li>
                            <li className='m-4 break-inside-avoid-column'><b>Bard:</b> <i>The College of Hymns</i><br/> A subclass dedicated to the gods and their mantras.</li>
                            <li className='m-4 break-inside-avoid-column'><b>Cleric:</b> <i>The Star Domain</i><br/> A subclass that worships  gods of astrology and star signs.</li>
                            <li className='m-4 break-inside-avoid-column'><b>Druid:</b> <i>Circle of the Dunes</i><br/> A subclass that maintains the primal life of the desert.</li>
                            <li className='m-4 break-inside-avoid-column'><b>Fighter:</b> <i>The Deadeye</i><br/> A subclass using firearms for gunslingers and sharpshooters.</li>
                            <li className='m-4 break-inside-avoid-column'><b>Monk:</b> <i>Way of the Claw</i><br/> A subclass that uses bestial claws to destroy their enemies.</li>
                            <li className='m-4 break-inside-avoid-column'><b>Paladin:</b> <i>Oath of Domination</i><br/> A subclass dedicated to those who seek the darkness.</li>
                            <li className='m-4 break-inside-avoid-column'><b>Ranger:</b> <i>The Veilguard</i><br/> A subclass for those who guard the veil to the afterlife.</li>
                            <li className='m-4 break-inside-avoid-column'><b>Rogue:</b> <i>The Thuggee</i><br/> A subclass of raw strength and thuggish mysticism.</li>
                            <li className='m-4 break-inside-avoid-column'><b>Sorcerer:</b> <i>Terror Sorcery</i><br/> A subclass that turns fear itself into arcane power.</li>
                            <li className='m-4 break-inside-avoid-column'><b>Warlock:</b> <i>The Rakshasa Patron</i><br/> A subclass for those that make deals with the fiends.</li>
                            <li className='m-4 break-inside-avoid-column'><b>Wizard:</b> <i>The Heretic</i><br/> A subclass that involves turning the divine into the arcane.</li>
                        </ul>
                    </div>
                    <h2 href='' className='font-semibold text-5xl m-auto mt-20'>Coming Soon on Kickstarter!</h2>
                    <p className='m-auto mt-10'>Follow us on our socials for updates.</p>
                </div>
                <div className='h-[200px]'/>
            
            </div>
            <Footer/> 
        </>
    )
}

export default Project