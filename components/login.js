"use client"
import React, { useState } from 'react'
import {  Button,Spinner } from "flowbite-react";
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { signIn, signOut, useSession } from 'next-auth/react'
import { FaUserAlt } from 'react-icons/fa';
import Image from 'next/image'
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
function About() {
  const { data: session } = useSession()
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  if (session) {
    return (<div onClick={signOut} className=' bg-blue-400 flex justify-center  items-center flex-col rounded-md p-1 '>
      <Image width={50} height={50} src={session?.user?.image} ></Image>
      <p className='text-white text-2xl'>الخروج</p>
      {console.log(session)}
    </div>)
  } else {

    return (

      <div className="flex w-full justify-center items-center h-full flex-col gap-4 ">



        <div>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box sx={{ ...style, width: 300 }} className="flex justify-center items-center flex-col gap-2">
              <p className='text-center font-bold text-3xl mb-4'>ادخل للسوق الان</p>
              <Button style={{ width: "150px" }} onClick={async (e) => { e.preventDefault(); signIn("google").then((res) => { console.log(res) }) }} outline={true}
                color="light">
                <div className='flex flex-row justify-center items-center  gap-3'>
                  <FcGoogle size={40} ></FcGoogle>
                  <p className='w-10'>Google</p>
                </div>
              </Button>
              <Button style={{ width: "150px" }} onClick={async (e) => { e.preventDefault(); signIn("facebook").then((res) => { console.log(res) }) }} outline={true}
                color="light">
                <div className='flex flex-row justify-center items-center  gap-3'>

                  <BsFacebook color='blue'  size={40} ></BsFacebook>
                  <p>Facebook</p>
                </div>

              </Button>
            </Box>
          </Modal>
        </div>
        <div onClick={handleOpen} className=' bg-blue-400 flex justify-center  items-center flex-col rounded-md p-1 '>
          <FaUserAlt size={20} color='white'></FaUserAlt>
          <p className='text-white text-2xl'>حسابي</p>
        </div>





      </div>

    )

  }


}



export default About