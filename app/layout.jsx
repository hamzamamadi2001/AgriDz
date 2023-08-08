import './globals.css'
import { Cairo } from 'next/font/google'
import { FaUserAlt } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';
import { IoIosAddCircle } from 'react-icons/io';
import Provider from "../components/provider"
import Login from "../components/login"
import Main from "../components/MainCard"
import   { SWRConfig } from 'swr'
import Head from "next/head";

import Link from 'next/link';
import { changeTheName } from '@/slices/CounterSlice';
const inter = Cairo({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}) {
  return (
    <html className='w-screen' lang="en" dir='rtl'>
     <head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon-192x192.png" />
          <meta name="theme-color" content="#042940" />
        </head>
      <body className={inter.className}>
    
<Provider>
        {children}

        <section className="m-0 w-full h-10 flex justify-center items-center gap-2  bg-black sticky md:hidden bottom-0 z-50">


          <div style={{ borderRadius: "100%" }} className="absolute bg-yellow-500 w-20 h-20  bottom-2 cursor-pointer   flex justify-center items-center">
            <p className="font-bold text-black">نشر عرض</p>

          </div>

        </section>

        <section className="m-0 px-5 w-full bg-green-400  hidden justify-center items-center gap-2  fixed  md:flex top-0  z-50">

          <div className='flex w-full h-full justify-between items-center'>


            <div className='  flex justify-center items-center gap-5'>
               <Login>
              
             </Login>
              <Link  href="#" >
              <div className=' bg-red-400 flex justify-center items-center flex-col rounded-md p-1 '>
              <AiFillHeart size={20} color='red'></AiFillHeart>
              <p className='text-white text-center text-2xl'>المفضلة</p>
              </div>
              </Link>


            </div>
           <Main></Main>
            <div >
              <span className='text-5xl text-blue-500'>خيرات</span>
  
              <span className='text-lg text-red-500'> DZ</span>
            </div>

          </div>

        </section>
        </Provider>
      
      </body> 
      
    
    </html>
  )
}
