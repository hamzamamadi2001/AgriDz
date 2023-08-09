import React, { useState } from 'react'
import Image from 'next/image'
import { HiMinus } from 'react-icons/hi';
import { MdAdd } from 'react-icons/md';
import { MdAddShoppingCart } from 'react-icons/md';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { ImLocation } from 'react-icons/im';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};


function CardCat({ src, name, wilaya ,ready}) {
   const [inwishlist, setInWishList] = useState(false);
   const [value, setValue] = useState(1);

  //  const [openProduct, setOpenProduct] = useState(false);
 
  //  const handleOpenProduct1 = () => {
  //    setOpenProduct(true);
  //  };
  //  const handleCloseProduct1 = () => {
  //    setOpenProduct(false);
  //  };


   return (
<div >

      <div className='md:w-72 md:h-72 w-36 h-52 cursor-pointer  relative    shadow-black  bg-gray-200 flex flex-col justify-center items-center rounded-md' >
         <div className="z-10 cursor-pointer absolute left-0 top-0 bg-white">
            {inwishlist ? (<AiOutlineHeart onClick={() => { setInWishList(prev => !prev) }} color='red' size={30}  ></AiOutlineHeart>) : (<AiFillHeart onClick={() => { setInWishList(prev => !prev) }} color='red' size={30}   ></AiFillHeart>)}
         </div>
         <div className='relative w-full h-full  -z-0'>
            <Image src={src} fill className='rounded-t-lg'></Image>
         </div>
         <div className='w-full justify-center items-center flex flex-col'>
            <div className='flex justify-center gap-5 items-center flex-row'><div className='flex justify-center items-center'><ImLocation size={20} color='red'></ImLocation><p className='text-sm text-orange-800 font-bold md:text-xl'>{wilaya}</p></div> <p className='text-sm text-green-800 font-bold md:text-xl'>{name}</p> </div>
            <div className='flex justify-center gap-5 items-center flex-row'> <p className='text-green-500 font-bold md:text-xl text-sm'>{ready}</p> </div>


         </div>


      </div>
      {/* <Modal
      open={openProduct}
      onClose={handleCloseProduct1}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style, width: 300 }} className="flex justify-center items-center flex-col gap-2">
        <p>hello man</p>
      </Box>
    </Modal> */}
      
      </div>
   )
}

export default CardCat