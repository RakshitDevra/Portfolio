import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/Animated'
import Image from 'next/image'
import Link from 'next/link'
import { GithubIcon } from '@/components/icons'
import project1 from "../../public/images/projects/NewsMonkey.png"

import TextUtils from "../../public/images/projects/TextUtils.png"
import TicTacToe from "../../public/images/projects/TicTacToe.png"
import SnakeGame from "../../public/images/projects/SnakeGame.png"
import FlipkatClone from "../../public/images/projects/FlipkartClone.png"
import MovingCars from "../../public/images/projects/MovingLamborghini.png"
import Portfolio from "../../public/images/projects/Portfolio.png"
import FbLoginPage from "../../public/images/projects/FbLoginPage.png"


import {motion} from "framer-motion"; 
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage =motion(Image); 
const FeaturedProject = ({type,title,summary,img,link,github}) => {
return (
    <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 '>
    {/* <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm::h-[102%] xs:w-full xs:rounded-[1.5rem]' /> */}
        <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full '>
            <FramerImage src={img} alt={title} className='w-full h-auto' whileHover={{scale:1.05}} transition={{duration:0.2}} priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,50vw"/> 
        </Link>
        <div  className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6  '>
            <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base marker:'>{type}</span>
            <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
            <h2 className='my-2 w-full text-left text-4xl font-bold  dark:text-primaryDark sm:text-sm '>{title}</h2>
            </Link>
            <p className='my-2 font-medium text-dark dark:text-light sm:text-sm '>{summary}</p>
            <div className='mt-2 flex items-center'>
                <Link href={github} target='_blank' className='w-10  dark:text-primaryDark'><GithubIcon /></Link>
                <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base '>Visit Project</Link>
                <Link href="https://drive.google.com/file/d/1uAnpBX6fps7Fv3xx-o3mxWx9smNG9coe/view?usp=sharing" target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base '>Watch Video</Link>
            </div>

        </div>
    </article>
)
    
}
const Project=({title,type,img,summary,link,github})=>{
  return(
    <article className='w-full flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark  dark:border-light xs:p-4 '>
    {/* <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem] ' /> */}
        <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
            <FramerImage src={img} alt={title} className='w-full h-auto' whileHover={{scale:1.05}} transition={{duration:0.2}} /> 
        </Link>
        <div  className='w-full flex flex-col items-start justify-between mt-4'>
            <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base '>{type}</span>
            <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
            <h2 className='my-2 w-full text-left text-3xl font-bold  dark:text-primaryDark lg:text-2xl '>{title}</h2>
            </Link>
            <p className='my-2 font-medium text-dark dark:text-light sm:text-sm '>{summary}</p>
           
            <div className='w-full mt-2 flex items-center justify-between'>
            <Link href={link} target='_blank' className='ml-4 text-lg font-semibold  dark:text-primaryDark md:text-base '>Visit</Link>
                <Link href={github} target='_blank' className='w-10  dark:text-primaryDark md:w-6 '><GithubIcon />{" "}</Link>
                
                </div>
                </div>
    </article>
  )
}
const projects = () => {
  return (
   <>
    <Head>
        <title>RakshitDevra | Projects Page</title>
        <meta name="Rakshit's Project Page" content="aboutRakshitDevra"></meta>
    </Head>
    <TransitionEffect />
    <main className='w-full mb-16 flex flex-col  items-center justify-center'>
        <Layout className='pt-16'>
            <AnimatedText text="Imagination Trumps Knowledge!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl '/>
              <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 '>
                <div className='col-span-12'>
                   <FeaturedProject title="NewsMonkey Application" 
summary="NewsMonkey is a dynamic news application designed to keep you updated with the latest news from around the world. Built using React, NewsMonkey offers a seamless and responsive user experience, allowing you to explore news articles across various categories effortlessly. Whether you're interested in Technology, Sports, Health, or entertainment, NewsMonkey has you covered with real-time updates and a clean, intuitive interface.(Due to the limitation of NewsAPI it only fetches news in development mode)" link=" https://rakshitdevra.github.io/NewsApplication/" type="Featured Project"  img={project1} github="https://github.com/RakshitDevra/NewsApplication" />
                </div>
                <div className='col-span-6 sm:col-span-12'>
                <Project title="TextUtils Application" 
summary="TextUtils is a versatile text manipulation application built using React, designed to simplify text handling tasks. With TextUtils, users can easily convert text to uppercase or lowercase, remove extra spaces, and copy text to the clipboard. The application also features a Dark Mode for comfortable viewing and provides alerts to enhance the overall user experience." link="https://rakshitdevra.github.io/TextUtilsReact/" type="Project 2"  img={TextUtils} github="https://github.com/RakshitDevra/TextUtilsReact" />
                </div>
                <div className='col-span-6 sm:col-span-12'>
                <Project title="TicTacToe Game" 
summary="TicTacToe is a classic game brought to life through JavaScript. This simple yet engaging game challenges players to outsmart their opponent by lining up three X's or O's in a row.The game offers a smooth and interactive experience, making it fun for users to relive this timeless pastime right in their browser." link="https://rakshitdevra.github.io/Tictactoe/" type="Project 3"  img={TicTacToe} github="https://github.com/RakshitDevra/Tictactoe" />
                </div>
                <div className='col-span-6 sm:col-span-12'>
                <Project title="Snake Game" 
summary="The Snake Game is a nostalgic classic, recreated with JavaScript to provide an engaging and interactive experience. In this game, players guide a growing snake to consume food items while avoiding collisions with the walls and the snake's own body. With smooth controls and dynamic gameplay, this version of Snake brings the timeless fun of the original right to your browser." link="https://rakshitdevra.github.io/SnakeGame/" type="Project 4"  img={SnakeGame} github="https://github.com/RakshitDevra/SnakeGame" />
                </div>
                <div className='col-span-6 sm:col-span-12'>
                <Project title="Flipkart Clone" 
summary="The Flipkart Clone is a static website meticulously crafted using CSS to emulate the design and layout of the popular e-commerce platform, Flipkart. This project showcases a keen eye for detail and a strong grasp of CSS, replicating the user interface elements, color schemes, and overall look and feel of the original site. It serves as a testament to my web design skills and ability to recreate complex layouts with precision." link="https://rakshitdevra.github.io/FlipkartClone/" type="Project 5"  img={FlipkatClone} github="https://github.com/RakshitDevra/FlipkartClone" />
                </div>
                <div className='col-span-6 sm:col-span-12'>
                <Project title="Racing Cars" 
summary="The Moving Cars Animation is a dynamic and visually captivating project built entirely using CSS. This animation showcases cars smoothly moving across the screen, demonstrating advanced CSS techniques and creativity." link="https://rakshitdevra.github.io/Racingcars/" type="Project 6"  img={MovingCars} github="https://github.com/RakshitDevra/Racingcars" />
                </div>
                <div className='col-span-6 sm:col-span-12'>
                <Project title="Portfolio Website" 
summary="I have built a comprehensive portfolio website using Next.js to showcase my work and achievements. This website highlights my projects, providing detailed descriptions and insights into my development process. It also includes my educational background, giving a clear view of my academic journey. Additionally, the site features a section dedicated to my GitHub repositories, allowing visitors to explore my code and contributions. This portfolio serves as a central hub for my professional presence, demonstrating my skills and dedication to web development" link="/" type="Project 7"  img={Portfolio} github="https://github.com/RakshitDevra" />
                </div>
                <div className='col-span-6 sm:col-span-12'>
                <Project title="Facebook Landing Page" 
summary="This static Facebook login page, crafted entirely with Tailwind CSS, showcases a clean and responsive design inspired by the Facebook login interface." link="https://rakshitdevra.github.io/Facebookclone/
" type="Project 8"  img={FbLoginPage} github="https://github.com/RakshitDevra/Facebookclone" />
                </div>

              </div>
        </Layout>
    </main>
   </>
  )
}

export default projects