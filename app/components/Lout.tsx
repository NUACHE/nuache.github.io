import * as React from 'react';


const Lout = ({children, className=""}:{children:any, className:string}) => {
    return ( <div className={`w-full h-full inline-block z-0  p-32 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className} `}>{children}</div> );
}
 
export default Lout;