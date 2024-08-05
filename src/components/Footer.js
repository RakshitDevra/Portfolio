import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

function Footer() {
  return (
    <div>
      <footer className='w-full border-t-2 border-solid border-dark font-medium dark:border-light sm:text-base  text-lg ' >
         <Layout className='py-8 flex items-center justify-center dark:text-light dark:border-light lg:flex-col lg:py-6'>
       {/* <span>All rights Reserved</span> */} 
       
       <div className='flex items-center lg:py-2'>
       Build With <span className='text-primary dark:text-primaryDark  text-2xl px-15'> &#9825; </span>by Rakshit Devra
       </div>
       {/* <Link href="/">Say Hello</Link> */}
        </Layout>
      </footer>
    </div>
  )
}

export default Footer
