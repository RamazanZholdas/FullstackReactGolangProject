import React from 'react';
import conv from '../assets/book.svg';
import share from '../assets/share.svg';
import Footer from './Footer';

function About(props) {
  return (
    <div>
      <div>
        <div className="px-2 flex max-w-screen-lg mx-auto pt-5 items-center flex-col">
          <p className="text-4xl text-green-400 font-bold mb-10">About this website</p>
          <h1 className="text-3xl text-purple-800 font-semibold">Learn</h1>
          <div className="flex items-center">
            <p className="text-xl text-green-400 font-medium mt-10 w-96 text-right mr-16">
            Three years after the Rainbow Program's deactivation, there is a resurgence of terrorist activities, 
            with the White Mask being the most prominent. The terrorists' goals are unknown, 
            yet they are causing chaos across the world.[32] To counter this rising threat, the
             program is reactivated by a new leader, Aurelia Arnot (who operated under the codename
              "Six") (Angela Bassett).[33] Arnot assembles a group of special forces operatives from
               different countries to face and combat the White Masks. 
            </p>
            <img src={conv} alt="communicate" className="w-56" />
          </div>
          <h1 className="text-3xl text-purple-800 font-semibold mt-10">Share your opinion</h1>
          <div className="flex items-center">
            <img src={share} alt="communicate" className="w-56" />
            <p className="text-xl text-green-400 font-medium mt-10 w-96 ml-16">
            The game's predecessor was Tom Clancy's Rainbow 6: Patriots, a tactical shooter announced in 2011. 
            It had a focus on narrative, and the story campaign features many cut-scenes and scripted events. 
            However, the game fell into a development hell shortly after its announcement. The game's outdated 
            engine and frequent change of leadership hindered development progress, and game quality was not up
             to par.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
