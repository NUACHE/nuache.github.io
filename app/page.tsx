'use client'

import Image from "next/image";
import profilePic from "../public/images/profile/developer-pic-1.png"
import pic1 from "../public/images/1.png"
import pic2 from "../public/images/giff.gif"
import lightBulb from "../public/images/svgs/miscellaneous_icons_1.svg"
import AnimatedText from "./components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "./components/Icons";
import Hireme from "./components/Hireme";
import Lout from "./components/Lout";
import TransitionEffect from "./components/TransitionEffect";
import React from "react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

export default function Home() {

 

  return (
    <>
      <TransitionEffect />

      <Lout className="pt-0 md:pt-16 sm:pt-8" >
        <main className="flex items-center text-dark w-full min-h-screen dark:text-light ">
          <div className="flex items-center justify-between w-full lg:flex-col">
          <div className="w-1/2 md:w-full px-8 ">
          <Image
  src={pic2}
  layout={'responsive'}
  height={175}
  width={175}
  alt={`A cute animal!`}
  unoptimized={true}
/>
             


            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText text="Crafting captivating user experiences." className="!text-6xl !text-left 
        xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl 
        " />

              <p className="my-4 text-base font-medium md:text-sm sm:text-xs " >As a skilled front-end developer, I am dedicated to turning ideas into innovative web applications.
                Explore my latest projects on github, showcasing my expertise in React.js and web development.</p>

              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link href="/Michael_Opoku_FE_Resume.pdf" target="_blank" className="dark:text-dark dark:bg-light  flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
  hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base
  "
                  download={true}
                >Resume <LinkArrow className="!w-6 ml-1" /></Link>
                <Link href="mailto:michaelopoku790@gmail.com" target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >Contact</Link>
              </div>
            </div>
          </div>
          {/* <Hireme /> */}
          <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
            <Image src={lightBulb} alt="MO" className="w-full h-auto" />
          </div>
          
        </main>
        <main id="skills" className="flex w-full flex-col items-center bg-Light justify-center
            dark:text-light
            ">
            
        <Skills />
        
        <div id="experience">  
                    <Experience />
                    </div>
                    <div id="education">  
                    <Education />
                    </div>
                    </main>
      </Lout>


    </>

  )
}
