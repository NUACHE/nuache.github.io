import { useScroll, motion } from "framer-motion";
import { use, useRef } from "react";
import LiIcon from "./LiIcon";


const Details = ({position, company, companyLink, time, address, work}:any) => {
    const ref = useRef(null);
    return (  <li ref={ref} className="my-8 first:mt:0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
        <LiIcon reference={ref} />
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration: 0.5, type:"spring"}}
        >
            <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg ">{position}&nbsp;<a href={companyLink}
            target="_blank" className="text-primary dark:text-primaryDark capitalize"
            >@{company}</a> </h3>
            <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm  ">
                {time} | {address}
            </span>
            <p className="font-medium w-full md:text-sm ">
                {work}
            </p>
        </motion.div>
    </li> );
}
 

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center start"],
        layoutEffect:false
        
    })
    return ( <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Experience</h2>
        <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
            <motion.div
            style={{scaleY: scrollYProgress}}
            className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
            md:w-[2px] md:left-[30px] xs:left-[20px]
            " />
            <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                
                    <Details 
                  position="Frontend Developer" company="Innorik"
                  companyLink="https://www.innorik.com"
              time="2023-Present" address=" Spintex, Accra"
                work="    Worked on a team responsible for developing new features for Enterprise Resource Planning system, InnoX, and 
                    developing new tools for data analysis and visualization."
                    
                    />
                    <Details 
                  position="Frontend Developer" company="DUXGH"
                  companyLink="https://duxgh.com/"
              time="2022-Present" address="Legon, Accra"
                work="    Responsible for developing a website that resulted in a substantial growth of our user base, 
                exceeding a milestone of over 120%."
                    
                    />
                     <Details 
                  position="Frontend Intern" company="AmaliTech"
                  companyLink="https://amalitech.org"
              time="2022" address=" Takoradi"
                work="    Worked on diverse projects and tasks, often requiring quick adaptability to new situations. I learned to embrace change and 
                efficiently manage my time and priorities in a dynamic work environment."
                    
                    />
                    <Details 
                  position="Frontend Developer" company="UvitechGH"
                  companyLink="https://uvitechgh.com/"
              time="2019" address=" Tamale"
                work="    Maintained, developed and designed the public website, leading to increased user time on the website
                 and improved customer experience.
                "
                    
                    />
                   
                  
                  
                
            </ul>
        </div>
    </div> );
}
 
export default Experience;