import React from 'react';
import Card from './Card';
import Footer from './Footer';

function Blog(props) {
    if (props.name === '') {
        return (
            <div className="flex justify-center items-center h-screen">
                <h1 className="text-3xl font-semibold text-green-400">
                    You need to be logged in to see this page
                </h1>
            </div>
        );
    }

  return (
    <div>
        <div className='flex justify-center items-center'>
            <div className='h-full text-purple-600 font-semibold text-3xl mb-5'>Hi {props.name}, You can choose any operator</div>
        </div>
      <div className="px-2 flex max-w-screen-lg mx-auto pt-5 items-center gap-11 justify-center">
        <Card
          image={
            'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7fwxcTrdNLQbXkfBJglLaN/38d901042d7debc709c266a46f856d7e/r6s-operators-list-grim.png'
          }
          name="Grim"
          role="Attacker"
          desc="You've heard the buzz, and the Kawan Hive Launcher is here! Firing off a projectile releases a 
          swarm of bots that track the location of opponents who walk through it. Just don't get them in your eyes."
        />
        <Card
          image={
            'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/1ieRqIy6e47QH48sTp1W4a/59f8188d94ae610bf76da26b4fef0b92/r6s-operators-list-sens.png'
          }
          name="Sens"
          role="Attacker"
          desc="R.O.U. Projector System rolls after it's thrown by Sens and drops small projectors to create a 
          screen along its path. Although physical objects can still pass through the screen, it's highly flexible—cutting off multiple lines of sight at once."
        />
        <Card
          image={
            'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/24jDQIfDdVMLX5K54pKNe5/58dec3b1e7d32a637bc76560e0cf0385/r6s-operator-list-zero.png'
          }
          name="Zero"
          role="Attacker"
          desc="Intel is crucial to a good attack strategy, and Zero is well aware of that. His Argus Launcher 
          is equipped with very special cameras that can lodge themselves into breakable and reinforced surface to surveil either side."
        />
      </div>
      <div className="px-2 flex max-w-screen-lg mx-auto pt-5 items-center gap-11 justify-center">
        <Card
          image={
            'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/72pEJEYxwPGoW221XvdmAJ/ea79dbd58064cbc99a1514e1b1641586/r6-operators-list-warden.png'
          }
          name="Warden"
          role="Defender"
          desc="The Glance serves a function that was almost non-existent on the Defending team. With it active,
           Warden can see through smoke and turn around what could be a low-intel situation. It's a great tool for a team that's struggling to get intel."
        />
        <Card
          image={
            'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/48ebOPwZWlyktdhawglqlI/819d0565c7f545e97526e4dda0a2f129/r6-operators-list-vigil.png'
          }
          name="Vigil"
          role="Defender"
          desc="Chul Kyungs quiet lethality in the field allows him to rely on his Electronic Rendering Cloak (ERC-7)
           to remain undetected. "
        />
        <Card
          image={
            'https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/2Q9Y4UXzkQfECOw5fX3QrI/bfd6532c840cb06a22e0196f2acfc462/r6-operators-list-mira.png'
          }
          name="Mira"
          role="Defender"
          desc='A specialized laminated glass, which when deployed with oxyacetylene can carve out a one-way mirror on any wall. '
        />
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
