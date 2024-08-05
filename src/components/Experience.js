import React from 'react'
import {motion,useScroll} from "framer-motion"
import { useRef } from 'react'
import Lilicon from './Lilicon'




const Details=({position,company,time,work})=>{
    const ref=useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%] '>
    <Lilicon  refrence={ref}/>
    <motion.div initial={{y:50}}
    whileInView={{y:0}}
    transition={{duration:0.5,type:"spring"}}>
            <h3 className='capitalize font-bold text-2xl text-primaryDark sm:text-xl xs:text-lg '>{position} &nbsp; <a>@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 '> 
            {time} </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
}
const Experience = () => {
    const ref=useRef(null);
    const {scrollYProgress } =useScroll(
        {
            target:ref,
            offset:["start end","center start"]
        }
    )

  return (
    <div className='my-64 '><h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 '>
Experience
    </h2>
    <div ref ={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full '>
    <motion.div style={{scaleY:scrollYProgress}} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'></motion.div>
<ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2 '>
    <Details position="Summer Training" company ="GEOPIC,ONGC,DEHRADUN" time="July(07/23)-August(08/23)" work="During my summer training at ONGC, I worked a file-sharing application using React and NodeJs. This application allows users to securely upload, share, and download files with ease. With a user-friendly interface and robust backend integration, the app ensures efficient file management and seamless sharing capabilities, making it a valuable tool for professional use.






"
/>
</ul>


    </div></div>
  )
}

export default Experience