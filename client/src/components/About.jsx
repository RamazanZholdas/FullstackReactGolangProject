import React from 'react';
import conv from '../assets/book.svg';
import share from '../assets/share.svg';

function About() {
  return (
    <div>
      <div className="px-2 flex max-w-screen-lg mx-auto pt-5 items-center flex-col">
        <p className="text-4xl text-green-400 font-bold mb-10">About this website</p>
        <h1 className="text-3xl text-purple-800 font-semibold">Learn</h1>
        <div className="flex items-center">
          <p className="text-xl text-green-400 font-medium mt-10 w-96 text-right mr-16">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio non maxime nihil vel esse
            fugit at debitis repellendus porro. Autem consequatur dolore et dolorum eaque aperiam
            odit, perspiciatis consequuntur voluptate, obcaecati impedit quod ad. Facilis fuga
            tempore, nihil molestias, debitis vero est quasi reiciendis itaque cupiditate eaque id
            illum sint aut nisi amet. Exercitationem ad, ducimus fugit sit magni pariatur.
          </p>
          <img src={conv} alt="communicate" className="w-56" />
        </div>
        <h1 className="text-3xl text-purple-800 font-semibold mt-10">Share your opinion</h1>
        <div className="flex items-center">
          <img src={share} alt="communicate" className="w-56" />
          <p className="text-xl text-green-400 font-medium mt-10 w-96 ml-16">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio non maxime nihil vel esse
            fugit at debitis repellendus porro. Autem consequatur dolore et dolorum eaque aperiam
            odit, perspiciatis consequuntur voluptate, obcaecati impedit quod ad. Facilis fuga
            tempore, nihil molestias, debitis vero est quasi reiciendis itaque cupiditate eaque id
            illum sint aut nisi amet. Exercitationem ad, ducimus fugit sit magni pariatur.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
