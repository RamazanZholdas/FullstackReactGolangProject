import React from 'react';
import videoBg from '../assets/r6edit.mp4';
import Typed from 'react-typed';

export default function Main() {
  return (
    <div>
      <div className="px-2 flex max-w-screen-lg mx-auto pt-5 justify-center items-center">
        <p className="text-4xl text-green-400 font-bold">
          <Typed strings={['Rainbow Six Siege', 'Try Now!!!']} typeSpeed={70} backSpeed={80} loop />
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, delectus.
                </h3>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus accusantium
                  voluptatibus doloremque quasi enim non ducimus natus, est harum accusamus? Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Rem commodi deleniti rerum,
                  odit sint illo labore laudantium quasi cupiditate quidem.
                </p>
              </div>
            </div>
          </a>
          <a href="#" className="block mb-5 w-1/2">
            <div className="flex">
              <div>
                <h3 className="text-3xl font-bold text-purple-800 mt-3 mb-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, delectus.
                </h3>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus accusantium
                  voluptatibus doloremque quasi enim non ducimus natus, est harum accusamus? Lorem,
                  ipsum dolor sit amet consectetur adipisicing elit. Labore, non harum! Recusandae
                  voluptatem error minima doloribus. Optio quam quasi voluptatum!
                </p>
              </div>
            </div>
          </a>
        </section>
      </div>
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
