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
                  position="Full-stack Developer" company="Innorik"
                  companyLink="https://www.innorik.com"
              time="2023-Present" address=" Spintex, Accra"
                work={`
                •Collaborated with product team to understand requirements and business specifications around enterprise planning and management and determining appropriate tools for handling the requirements.\n
                
                `}
                    
                    />
                    <Details 
                  position="Frontend Engineer" company="DUXGH"
                  companyLink="https://duxgh.com/"
              time="2022-Present" address="Legon, Accra"
                work ="
                •Partnered with backend developers and design team to convert Apis and UI/UX into functional dynamic web pages using react, tailwind and typescript.
               
                "
                    
                    />
                     <Details 
                  position="Mobile Application Developer" company="Spike SH"
                  companyLink=""
              time="2022" address=" Accra"
                work="
                •Collaborated with CTO, backend developers and design team to plan app's requirements and specifications. 
              
                "
                    
                    />
                     <Details 
                  position="Mobile Application Developer" company="Cache Technology"
                  companyLink="https://spike.sh"
              time="2022" address=" India"
                work="
                •Led mobile team in developing a data management and tracking system, implementing charts, graphs and tables using flutter and Syncfusion to provide accurate data projections for The Council for Scientific & Industrial Research (CSIR).
               
                "
                    
                    />
                    <Details 
                  position="Frontend Developer" company="UvitechGH"
                  companyLink="https://uvitechgh.com/"
              time="2019" address=" Tamale"
                work="
                •Supervised and led a team of 3 interns to develop a booking and ticketing application, for booking events and buying tickets, using react, tailwind, typescript and redux.
               
                "
                    
                    />
                   
                  
                  
                
            </ul>
        </div>
    </div> );
}
 
export default Experience;