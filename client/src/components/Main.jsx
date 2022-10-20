import React from 'react';
import videoBg from '../assets/r6edit.mp4';
import Typed from 'react-typed';
import Footer from './Footer';

export default function Main(props) {
  return (
    <div>
      <div>
        <div className="px-2 flex max-w-screen-lg mx-auto pt-5 justify-center items-center">
          <p className="text-4xl text-green-400 font-bold">
            <Typed
              strings={['Rainbow Six Siege', 'Try Now!!!']}
              typeSpeed={70}
              backSpeed={80}
              loop
            />
          </p>
        </div>
        <section className="px-2 flex space-x-2 max-w-screen-lg mx-auto py-2 items-center justify-center">
          <video src={videoBg} autoPlay loop muted className="video" />
          <a
            href="#"
            className="w-1/3 bg-gradient-to-tr from-orange-500 to-gray-500 h-80 relative rounded inline-block overflow-hidden">
            <img
              className="absolute left-0 top-0 w-full h-full z-20 object-cover"
              src="https://w0.peakpx.com/wallpaper/676/109/HD-wallpaper-tom-clancys-rainbow-six-siege-poster-promotional-materials-online-game-rainbow-six-siege.jpg"
              alt="r6poster"
            />
            <div className="p-4 absolute bottom-0 left-0 z-20">
              <h2 class="text-4xl font-semibold text-gray-100 leading-right">Rainbow Six Siege</h2>
            </div>
          </a>
        </section>
        <div className="px-2 flex max-w-screen-lg mx-auto py-5 justify-center items-center">
          <section className="px-2 flex">
            <a href="#" className="block mb-5 mr-10 w-1/2">
              <div className="flex">
                <div>
                  <h3 className="text-3xl font-bold text-purple-800 mt-3 mb-2">
                  Siege is an entry in the Rainbow Six series and the successor to Tom Clancy's Rainbow 6: Patriots
                  </h3>
                  <p className="text-white">
                  Tom Clancy's Rainbow Six Siege is an online tactical shooter video game developed by 
                  Ubisoft Montreal and published by Ubisoft. It was released worldwide for Microsoft
                   Windows, PlayStation 4, and Xbox One on December 1, 2015; the game was also released 
                   for PlayStation 5 and Xbox Series X and Series S exactly five years later on December 1, 
                   2020. The title received a port for Google Stadia on June 30, 2021, and one for Amazon 
                   Luna in January 2022. 
                  </p>
                </div>
              </div>
            </a>
            <a href="#" className="block mb-5 w-1/2">
              <div className="flex">
                <div>
                  <h3 className="text-3xl font-bold text-purple-800 mt-3 mb-2">
                  Tom Clancy's Rainbow Six Siege is a first-person shooter game
                  </h3>
                  <p className="text-white">
                  Different operators have different nationalities, weapons, and gadgets.
                   The game features an asymmetrical structure whereby the teams are not always
                    balanced in their choices of abilities.[4] The base Counter-Terrorism Units (CTUs) 
                    available for play are the American Hostage Rescue Team (referred to in-game as the FBI SWAT), 
                    the British SAS, the German GSG-9, the Russian Spetsnaz and the French GIGN, each of which has four operators 
                    per unit split between attackers and defenders
                  </p>
                </div>
              </div>
            </a>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Title() {
  return (
    <div className="px-2 flex max-w-screen-lg mx-auto pt-5 justify-center items-center">
      <p className="text-4xl text-green-400 font-bold">
        <Typed strings={['Rainbow Six Siege', 'Try Now!!!']} typeSpeed={70} backSpeed={80} loop />
      </p>
    </div>
  );
}

function VideoEdit() {
  return (
    <section className="px-2 flex space-x-2 max-w-screen-lg mx-auto py-2 items-center justify-center">
      <video src={videoBg} autoPlay loop muted className="video" />
      <a
        href="#"
        className="w-1/3 bg-gradient-to-tr from-orange-500 to-gray-500 h-80 relative rounded inline-block overflow-hidden">
        <img
          className="absolute left-0 top-0 w-full h-full z-20 object-cover"
          src="https://w0.peakpx.com/wallpaper/676/109/HD-wallpaper-tom-clancys-rainbow-six-siege-poster-promotional-materials-online-game-rainbow-six-siege.jpg"
          alt="r6poster"
        />
        <div className="p-4 absolute bottom-0 left-0 z-20">
          <h2 class="text-4xl font-semibold text-gray-100 leading-right">Rainbow Six Siege</h2>
        </div>
      </a>
    </section>
  );
}

/*
      <p className='text-4xl text-green-400 font-bold'>
        <Typed strings={['Rainbow Six Siege', 'Try Now!!!']} typeSpeed={70} backSpeed={80} loop/>
      </p>

*/
