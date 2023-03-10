import Head from 'next/head'
import styles from '@/styles/Home.module.css'

import { useRef, useEffect, useState, useLayoutEffect  } from 'react'

import SecOne from '@/components/landing/SecOne'
import SecTwo from '@/components/landing/SecTwo'
import SecThree from "@/components/landing/SecThree"
import SecFour from "@/components/landing/SecFour"
import SecFive from '@/components/landing/SecFive'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  const [height, setHeight] = useState("100vh");

  useEffect(()=>{
    if( typeof window !== 'undefined'){
      setHeight(window.innerHeight)
    }
  }, [])

  return (
    <>
      <Head>
        <title>DS website</title>

        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-capable" content='yes'/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        
      <main  className={styles.main} 
      
      >
        <SecOne />
        <SecTwo/>
        <SecThree/>
        <SecFour/>
        <SecFive />
      </main>
      
      
       
        


    </>
  )
}
