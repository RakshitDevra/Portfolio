import AnimatedText from '@/components/Animated'
import Layout from '@/components/Layout'
import React from 'react'

function articles() {
  return (
   <>
      {/* <Head>
        <title>RakshitDevra | Articles Page</title>
        <meta name="Rakshit &apos;s About Page" content="aboutRakshitDevra"></meta>
    </Head> */}
    <main>
        <Layout>
            <AnimatedText text="Words Can Change The World!" className='mb-16' />
        </Layout>
    </main>
   </>
  )
}

export default articles
