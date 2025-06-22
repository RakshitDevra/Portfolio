import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/Animated'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from "../../public/images/profile/Myphoto3.png";
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'


const about = () => {
  return (
   <>
    <Head>
        <title>RakshitDevra | About Page</title>
        <meta name="Rakshit's About Page" content="aboutRakshitDevra"></meta>
    </Head>
    <TransitionEffect />
    <main className='flex w-full flex-col items-center justify-center dark:text-light'>
      <Layout className='pt-16 '> <AnimatedText text="Passion Fuels Purpose!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
      <div className='grid w-full grid-cols-8 gap-16 sm:gap-8 '>
      <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8' >
        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 '>About Me</h2>
        <p className='font-medium'>Hello! I&apos;m Rakshit Devra, a recent graduate with a Bachelor of Technology in Computer Engineering from the College of Technology, Pantnagar. My academic journey has equipped me with a solid foundation in computer science and engineering, but my true passion lies in the world of web development and coding.
                </p>
<p className='font-medium my-4'>During my time at university, I immersed myself in various programming languages and frameworks, continuously seeking to expand my knowledge and skills. My dedication to coding is fueled by a curiosity for solving problems and a desire to bring innovative ideas to life.</p>
<p className='font-medium my-4'>
Feel free to explore my portfolio to see some of the projects I &apos; ve worked on and the skills I&apos;ve developed. I&apos;m excited about the future and look forward to connecting with like-minded professionals and exploring new opportunities.

</p>
      </div>
<div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1  md:col-span-8'>
<div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light
'/>
  <Image src={profilePic} alt="ProfilePic" className='w-full h-auto rounded-2xl' priority sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw,33vw"/>
</div>
<div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row md:order-3 '> 
<div className='flex flex-col items-end justify-center xl:items-center '>
<span className='inline-block text-7xl font-bold  md:text-6xl sm:text-5xl xs:text-4xl '>
    1000+
  </span>
  <h3 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75   xl: text-center md:text-lg sm:text-base xs:text-sm '> DSA Problems solved on Leetcode</h3>
  <span className='inline-block text-7xl font-bold  md:text-6xl sm:text-5xl xs:text-4xl '>
    10+
  </span>
  <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75   xl: text-center md:text-lg sm:text-base xs:text-sm '> Projects completed</h2>
</div></div>
      </div>
      <Skills />
      <Experience  />
      <Education />
</Layout> 
    </main>

   </>
  )
}

export default about