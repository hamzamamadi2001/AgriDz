import React,{useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
 
function CardCat({title,discription,location}) {
   
  
  return (
     
    <div className=" w-72 bg-gray-100 rounded-2xl mx-3 p-3 flex  flex-col relative">
    <div className='flex justify-center gap-5 items-center flex-row '> <p className='text-orange-800 font-bold text-3xl'>{title}</p> </div>
    <div className=" overflow-hidden w-full break-words h-11 whitespace-normal text-ellipsis">
      <p className=" w-full break-words  h-full">{discription}</p>
    </div>
          <div className='flex justify-center gap-5 items-center flex-row'> <p className='text-green-500 font-bold text-xl'>موقع العمل:{location}</p> </div>
     
    <div className="bg-yellow-400  absolute bottom-0 left-0 rounded-lg p-1">
      <p>انقر للتفاصيل</p>
    </div>
    </div>
     
   )
}

export default CardCat