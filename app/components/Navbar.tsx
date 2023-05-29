'use client';
import React, { useState } from 'react'
import Logo from './Logo'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from './Icons';
import {motion} from "framer-motion";
import useThemeSwitcher from './hooks/useThemeSwitcher';

interface ICustomLink {
    href: string;
    title: string;
    className?: string;
    toggle ?: ()=> void
  }

const CustomLink = ({href, title, className=""}:ICustomLink) => {
    const currentPage = usePathname();
    
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`h-1 inline-block w-0 bg-dark
            absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
            ${currentPage === href? ' w-full' : ' w-0'} dark:bg-light
            `}>&nbsp;</span>
        </Link>
    )
}
const CustomMobileLink = ({href, title, className="", toggle}:ICustomLink) => {
    const currentPage = usePathname();
    const router = useRouter();

    const handleClick = ( )=>{
        toggle!();
        router.push(href);
    }
    
    return (
        <button onClick={handleClick} className={`${className} relative group text-light dark:text-dark my-2`}>
            {title}

            <span className={`h-1 inline-block w-0 bg-light dark:bg-dark
            absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
            ${currentPage === href? ' w-full' : ' w-0'} 
            `}>&nbsp;</span>
        </button>
    )
}

const Navbar = () => {

    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    

    return (
        <header
        className='w-full px-32 py-8 font-medium flex items-center justify-between  
        dark:text-light  dark:bg-dark relative lg:px-16 md:px-12 sm:px-8
        '
        >

            <button className=' flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1': ' -translate-y-0.5'}`} ></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0': 'opacity-100'}`} ></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease out h-0.5 w-6 rounded-sm  ${isOpen ? '-rotate-45 -translate-y-1': ' translate-y-0.5'}`} ></span>
                
            </button>
            <div className='w-full flex justify-between items-center lg:hidden'>
            <nav>
                <CustomLink href="/" title='Home' className='mx-4'/>
                <CustomLink href="#skills" title='Skills' className='mx-4' />
                <CustomLink href="#experience" title='Experience' className='mx-4'/>
               
            </nav>
           
            <nav className='flex items-center justify-center flex-wrap'>
              
                <motion.a href="https://github.com/NUACHE" target={"_blank"}  className='w-6 mx-3 bg-light rounded-full dark:bg-dark'
                 whileHover={{y:-2}}
                 whileTap={{scale: 0.9}}
                >
                    <GithubIcon className={''} />
                </motion.a>
                <motion.a href="https://www.linkedin.com/in/michael-opoku-98a1221a5/" target={"_blank"}  className='w-6 mx-3'
                 whileHover={{y:-2}}
                 whileTap={{scale: 0.9}}>
                    <LinkedInIcon className={''} />
                </motion.a>
                
              <button
              onClick={()=> {
                 setMode(mode === "light" ? "dark": "light")

    }
              }
              className={`ml-3 w-6 flex items-center justify-center rounded-full p-1
              ${mode === "light"? "bg-dark text-light": "bg-light text-dark"}
              
              `}
              >
        {
            mode === "dark"?
           <SunIcon className={'fill-light'} />
            : 
            <MoonIcon className={'fill-light'} />
        }
              </button>
            </nav>
            </div>

          {isOpen ?   <motion.div 
          initial={{scale: 0, opacity:0, x: "-50%", y:"-50%" }}
          animate={{scale: 1, opacity:1 }}
          className='min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32
            '>
            <nav className='flex items-center flex-col justify-center'>
                <CustomMobileLink href="/" title='Home' className=''  toggle={handleClick}  />
                <CustomMobileLink href="#skills" title='Skills' className=''  toggle={handleClick}/>
                <CustomMobileLink href="#experience" title='Projects' className=''  toggle={handleClick}/>
            
            </nav>
           
            <nav className='flex items-center justify-center flex-wrap mt-2'>
               
                <motion.a href="https://github.com/NUACHE" target={"_blank"}  className='w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1'
                 whileHover={{y:-2}}
                 whileTap={{scale: 0.9}}
                >
                    <GithubIcon className={''} />
                </motion.a>
                <motion.a href="https://www.linkedin.com/in/michael-opoku-98a1221a5/" target={"_blank"}  className='w-6 mx-3 sm:mx-1'
                 whileHover={{y:-2}}
                 whileTap={{scale: 0.9}}>
                    <LinkedInIcon className={''} />
                </motion.a>
               
              <button
              onClick={()=> {
                 setMode(mode === "light" ? "dark": "light")

    }
              }
              className={`ml-3 w-6 flex items-center justify-center rounded-full p-1
              ${mode === "light"? "bg-dark text-light": "bg-light text-dark"}
              
              `}
              >
        {
            mode === "dark"?
           <SunIcon className={'fill-light'} />
            : 
            <MoonIcon className={'fill-light'} />
        }
              </button>
            </nav>
            </motion.div>: null}
            {/* <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
            <Logo />
            </div> */}
        </header>
    )
}

export default Navbar