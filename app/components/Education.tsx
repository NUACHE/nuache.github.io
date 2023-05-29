import { useScroll, motion } from "framer-motion";
import { use, useRef } from "react";
import React from "react";
import LiIcon from "./LiIcon";


const Details = ({type, time, place, info}:any) => {
    const ref = useRef(null);
    return (  <li ref={ref} className="my-8 first:mt:0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
        <LiIcon reference={ref} />
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration: 0.5, type:"spring"}}
        >
            <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg ">{type} </h3>
            <span className="capitalize font-medium text-dark/75 dark:text-light/75  xs:text-sm  ">
                {time} | {place}
            </span>
            <p className="font-medium w-full  md:text-sm  ">
                {info}
            </p>
        </motion.div>
    </li> );
}
 

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center start"], 
        layoutEffect: false,
    })
    return ( <div className="mb-96 ">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Education</h2>
        <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
            <motion.div
            style={{scaleY: scrollYProgress}}
            className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
            md:w-[2px] md:left-[30px] xs:left-[20px]
            " />
            <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                
            <Details 
                  type=" Front-End Engineer Certification" time="2022"
                  place="Codecademy" 
                  info="Learned to make websites beautiful, functional, and fast. 
                  Obtained the specialized skills and portfolio needed to start your career as a Front-End Engineer. Relevant concepts  
                  included Object and Data Structures, Test-Driven Development and SOLID Principle.
                  " 
                    />
                    <Details 
                  type=" Bachelor Of Science In Electrical Engineering" time="2018-2022"
                  place="Kwame Nkrumah University Of Science and Technology (KNUST)"
              info="Relevant courses included C programming and Programming and Numeric Computing with Matlab." 
                    />
                
                  
                
            </ul>
        </div>
    </div> );
}
 
export default Education;