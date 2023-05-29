import Link from "next/link";
import Lout from "./Lout";

const Footer = () => {
    return ( <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg 
    dark:text-light dark:border-light sm:text-base
    ">
        <Lout className={"py-8 flex items-center justify-between lg:flex-col lg:py-8"}>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className="flex items-center lg:py-2" >Build with 
            <span className="text-primary dark:text-primaryDark text-2xl px-1">&#9825;</span> by&nbsp;
             <Link href={'/'} className="underline underline-offset-2">MO</Link> </div>
            <Link href={"/"} target="_blank" className="underline underline-offset-2">Say hello</Link>
        </Lout>
    </footer> );
}
 
export default Footer;