import React ,{useState,} from 'react'
import { AiFillMinusCircle } from 'react-icons/ai';
import { AiFillPlusCircle } from 'react-icons/ai';
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


function About({children}) {
  const [openProduct, setOpenProduct] = useState(false);

  const handleOpen1 = () => {
    setOpen1(true);
  };
  const handleOpenProduct1 = () => {
    setOpenProduct(true);
  };
  const handleCloseProduct1 = () => {
    setOpenProduct(false);
  };

  return (
     
    <div>

    <Modal
      open={true}
      onClose={handleCloseProduct1}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style, width: 300 }} className="flex justify-center items-center flex-col gap-2">
        {children}
      </Box>
    </Modal>
    </div>



       
  )
}

export default About
