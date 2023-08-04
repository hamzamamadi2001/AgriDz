import React,{useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BsMessenger } from 'react-icons/bs';

import { ImLocation } from 'react-icons/im';

function CardCat({src,title,id,price,unit,baseQuantity}) {
   
  
  return (
     
    <div dir='rtl' className="  bg-white h-full rounded-2xl    flex  flex-col relative justify-start items-center">
    <div className='flex justify-center gap-5 items-center flex-row '> <p className='text-green-500 font-bold text-3xl'>عنوان العمل</p> </div>
    <div className='relative w-20 h-20  -z-0'>
          <Image src="/user.png" fill className='rounded-t-lg'></Image>
          </div> 
    <div className="flex justify-center items-center p-2 rounded-2xl w-full   break-words  bg-gray-300">
      <p className="  w-full h-full ">هنا نضع مقدمة لوصف  نضع مقدمة لوصف  نضع مقدمة لوصف  نضع مقدمة لوصف  نضع مقدمة لوصف  نضع مقدمة لوصف العمل</p>
    </div>
     
          <div className='flex flex-row-reverse justify-center gap-2 items-center '><p className='text-green-500 font-bold text-xl'>الولاية-البلدية</p><div className='flex justify-center items-center'><ImLocation size={20} color='red'></ImLocation> <p className='text-orange-500 w-full font-bold text-xl'>الموقع:</p></div>  </div>
          <div className='flex justify-center gap-2 items-center flex-row-reverse'><p className='text-green-500 font-bold text-xl'>اقرب وقت</p> <p className='text-orange-500 font-bold text-xl'>تاريخ البدئ:</p> </div>
          <div className='flex justify-center gap-2 items-center flex-row-reverse'><p className='text-green-500 font-bold text-xl'>قابل للمفاوضة</p> <p className='text-orange-500 font-bold text-xl'>السعر:</p> </div>
    
     <div className='flex justify-center flex-col-reverse flex-wrap items-center gap-1'>
       
                 <button className='flex justify-center items-center gap-1 bg-orange-500 rounded-2xl p-2 text-white'>ارسالة رسالة<BsMessenger size={10} color='white'></BsMessenger></button>
   
        
        <div className='flex justify-center gap-2 items-center flex-row-reverse'><p className='text-green-500 font-bold text-2xl'>0792966687</p> <p className='text-orange-500 font-bold text-xl'>الهاتف:</p> </div>
      
     </div>
    </div>
     
   )
}

export default CardCat