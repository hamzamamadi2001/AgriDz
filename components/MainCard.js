"use client"
import {useEffect, useState}  from 'react';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { IoIosAddCircle } from 'react-icons/io';
import {storage} from "../helper/firebase"
import {getDownloadURL, ref, uploadBytes} from "firebase/storage"

import { useSelector } from 'react-redux';
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
export default function ButtonBases({image,title}) {
const [selectedtype, setSelectedType] = useState("الخضر");
const [imagelist, setImageList] = useState([]);
  const [type, setType] = useState([
    { name: "الخضر" , id: "الخضر"},
    { name: "الفواكه" , id:"الفواكه"},
    { name:"الحبوب" , id: "الحبوب" },
    { name:  "البقول", id: "البقول" },
    { name: "اشجار مثمرة" , id: "اشجار مثمرة" },
    { name:"اشجار زينة" , id: "اشجار زينة" },
    { name:"اعلاف" , id: "اعلاف"},
    { name: "اسمدة" , id: "اسمدة" },

  
  ]);
 
useEffect(() => {
if(selectedtype=="الخضر"){
 
console.log("this is first key",veg[0].name)
  setofficaialname(veg[0].name)
}

if(selectedtype=="الفواكه"){
 
  console.log("this is first key",fruits[0].name)
    setofficaialname(fruits[0].name)
  }


  if(selectedtype=="الحبوب"){
 
    console.log("this is first key",legumes[0].name)
      setofficaialname(legumes[0].name)
    }


    if(selectedtype=="البقول"){
 
      console.log("this is first key",cerals[0].name)
        setofficaialname(cerals[0].name)
      }


      if(selectedtype=="اشجار مثمرة"){
 
        console.log("this is first key",treeFruits[0].name)
          setofficaialname(treeFruits[0].name)
        }



        if(selectedtype=="اشجار زينة"){
 
          console.log("this is first key",treeornamentals[0].name)
            setofficaialname(treeornamentals[0].name)
          }


          if(selectedtype=="اعلاف"){
 
            console.log("this is first key",fodder[0].name)
              setofficaialname(fodder[0].name)
            }
            if(selectedtype=="اسمدة"){
 
              console.log("this is first key",milk[0].name)
                setofficaialname(milk[0].name)
              }
 
}, [selectedtype]);

 
const [error, setError] = useState(0);
const [message, setMessage] = useState("");


const images_upload_and_store_into_db = async () =>{
//first think is to upload the photos and after that insert it to db
setError(0)

if(inputs[0].length!=10){
  setMessage("رقم الهاتف غير صحيح")
  setError(1)
  return
}
else if(selectedImages.length<=0){
  setMessage("يجب وضع صور للمنتوج")
  setError(1)
  return

}
else if(quantityArea.length==0){
  setMessage("يجب كتابة المصاحة او الكمية")
  setError(1)
return
}else{
  setError(0)

}

 let arr = new Array();
  for (let i = 0; i < selectedImages.length; i++) {
    const file = selectedImages[i];
    const imageref = ref(storage,`images/${file.name}`)
    const hh =   await  uploadBytes(imageref,file)
    const   hhh  = await getDownloadURL(hh.ref)
   arr.push(hhh)
    
  }
  setImageList(arr)
  let info={imagelist:arr,
    wilaya:selectedwilay,
    type:selectedtype,
    name:officalname,
    phone:inputs,
    quantity:quantityArea,
    price:price,
    ready:ready,
    discuss:discuss,
    
  }
 console.log(info)
  //rememper to replace the url before uploading it to the server https://nakset.vercel.app/api/register
  let response = await fetch("http://localhost:3000/api/add_product",{method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(info)});
 
  
  //after checking every think is ok now we can make the
 

 
}
 
  const [inputs, setInputs] = useState(['']); // Initial state with one input
  const [quantityArea, setQuantityArea] = useState('');
  const [price, setPrice] = useState('');
  const [selectedwilay, setSelectedWilaya] = useState("أدرار");
  const [officalname, setofficaialname] = useState("البطاطة");
  const [ready, setReady] = useState(1);
  const [discuss, setDisc] = useState(1); // Initial state with one input
   // Initial state with one input
   // Initial state with one input
   // Initial state with one input
   // Initial state with one input
   // Initial state with one input

  const handleAddInput = () => {
    setInputs([...inputs, '']); // Add a new empty input to the array
  };

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };
  const handleRemoveInput = (index) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1); // Remove the input at the specified index
    setInputs(newInputs);
  };

  const handelRemovePhoto = (index) => {
    const newInputs = [...selectedImages];
    newInputs.splice(index, 1); // Remove the input at the specified index
    setSelectedImages(newInputs);
  };

 
  const [selectedImages, setSelectedImages] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    const imageFiles = Array.from(files).filter((file) =>
      file.type.startsWith('image/')
    );
    setSelectedImages([...selectedImages, ...imageFiles]);
  };



const [veg, setVeg] = useState([
  { name: "بطاطا حمراء", id: "1" },
  { name: "بطاطا حلوة", id: "17" },
  { name: "بطاطا بيضاء", id: "16" },
  { name: "بصل", id: "2" },
  { name: "طماطم", id: "3" },
  { name: "جزر", id: "4" },
  { name: "ثوم", id: "5" },
  { name: "فلفل", id: "6" },
  { name: "فلفل حار", id: "7" },
  { name: "بذنجان", id: "8" },
  { name: "اليقطين", id: "9" },
  { name: "الخرشوف", id: "10" },
  { name: "الكرنبيط", id: "11" },
  { name: "شفلور", id: "12" },
  { name: "سلطة", id: "13" },
  { name: "لفت احمر", id: "14" },
  { name: "خيار", id: "15" },

]);

const [fruits, setFruits] = useState([
  { name: "عنب", id: "1" },
  { name: "تفاح", id: "2" },
  { name: "برتقال", id: "3" },
  { name: "مندرين", id: "4" },
  { name: "ليمون", id: "5" },
  { name: "فراولة", id: "6" },
  { name: "بطيخ احمر-دلاع-", id: "7" },
  { name: "بطيخ اصفر", id: "8" },
  { name: "موز", id: "9" },
  { name: "نكتارين", id: "10" },
  { name: "مانجو", id: "11" },
  { name: "ايجاص", id: "12" },
  { name: "اناناس", id: "13" },
  { name: "تين شوكي-هندي-", id: "14" },
  { name: "نكتارين", id: "15" },
  { name: "رمان", id: "16" },
  { name: "تين-كرموس-", id: "17" },
  { name: "توت", id: "18" },
  { name: "كرز", id: "19" },
  { name: "برقوق", id: "20" },
  { name: "خوخ", id: "21" },
  { name: "مشماش", id: "22" },

]);

const [cerals, setCerals] = useState([
  { name: "عدس", id: "1" },
  { name: "فول", id: "1" },
  { name: "فاصوليا-لوبيا-", id: "1" },
  { name: "بازلاء-جلبانة-", id: "1" },
  { name: "فول", id: "1" },

]);

const [legumes, setLegumes] = useState([
  { name: "القمح", id: "1" },
  { name: "الشعير", id: "1" },
  { name: "الذرة", id: "1" },
  { name: "الشوفان", id: "1" },
  { name: "عباد الشمس", id: "1" },
]);


const [treeornamentals, setTreeOrnamentals] = useState([
  { name: "test treeOrnamentals", id: "1" },
]);

const [treeFruits, setTreeFruits] = useState([
  { name: "test treeFruits", id: "1" },
]);

const [milk, setMilk] = useState([
  { name: "test milk", id: "1" },

]);
const [fodder, setFodder] = useState([
  { name: "test fodder", id: "1" },

]);

const [fertilizers, setFertilizers] = useState([
  { name: "test fertilizers", id: "1" },

]);

const [wilaya, setWilaya] = useState([
  { name: "أدرار", id: "أدرار" },
  { name: "الشلف", id: "الشلف" },
  { name: "الأغواط", id: "الأغواط" },
  { name: "أم البواقي", id: "أم البواقي" },
  { name: "باتنة", id: "باتنة" },
  { name: "بجاية", id: "بجاية" },
  { name: "بسكرة", id: "بسكرة" },
  { name: "بشار", id: "بشار" },
  { name: "البليدة", id: "البليدة" },
  { name: "البويرة", id: "البويرة" },

  { name: "تمنراست", id: "تمنراست" },
  { name: "تبسة", id: "تبسة" },
  { name: "تلمسان", id: "تلمسان" },
  { name: "تيارت", id: "تيارت" },
  { name: "تيزي وزو", id: "تيزي وزو" },
  { name: "الجزائر", id: "الجزائر" },
  { name: "الجلفة", id: "الجلفة" },
  { name: "جيجل", id: "جيجل" },
  { name: "سطيف", id: "سطيف" },
  { name: "سعيدة", id: "سعيدة" },

  { name: "سكيكدة", id: "سكيكدة" },
  { name: "سيدي بلعباس", id: "سيدي بلعباس" },
  { name: "عنابة", id: "عنابة" },
  { name: "قالمة", id: "قالمة" },
  { name: "قسنطينة", id: "قسنطينة" },
  { name: "المدية", id: "المدية" },
  { name: "مستغانم", id: "مستغانم" },
  { name: "المسيلة", id: "المسيلة" },
  { name: "معسكر", id: "معسكر" },
  { name: "ورقلة", id: "ورقلة" },

  { name: "وهران", id: "وهران" },
  { name: "البيض", id: "البيض" },
  { name: "إليزي", id: "إليزي" },
  { name: "برج بوعريريج", id: "برج بوعريريج" },
  { name: "بومرداس", id: "بومرداس" },
  { name: "الطارف", id: "الطارف" },
  { name: "تندوف", id: "تندوف" },
  { name: "تيسمسيلت", id: "تيسمسيلت" },
  { name: "الوادي", id: "الوادي" },
  { name: "خنشلة", id: "خنشلة" },

  { name: "سوق أهراس", id: "سوق أهراس" },
  { name: "تيبازة", id: "تيبازة" },
  { name: "ميلة", id: "ميلة" },
  { name: "عين الدفلة", id: "عين الدفلة" },
  { name: "النعامة", id: "النعامة" },
  { name: "عين تيموشنت", id: "عين تيموشنت" },
  { name: "غرادية", id: "غرادية" },
  { name: "غليزان", id: "غليزان" },
  { name: "تيميمون", id: "تيميمون" },


  { name: "برج باجي مختار", id: "برج باجي مختار" },
  { name: "أولاد جلال", id: "أولاد جلال" },
  { name: "بني عباس", id: "بني عباس" },
  { name: "عين صالح", id: "عين صالح" },
  { name: "عين قزام", id: "عين قزام" },
  { name: "تقرت", id: "تقرت" },
  { name: "جانت", id: "جانت" },
  { name: "المغير", id: "المغير" },
  { name: "المنيعة", id: "المنيعة" },


]);
 



  const name = useSelector((state)=>state.name)
  const num = useSelector((state)=>state.num)
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);

  // this part for the use state of the model
 


  const handleOpen = () => {
    if(num == 1){
      setOpen1(true);
    }
    if(num == 2){
      setOpen2(true);
    }
    if(num == 3){
      setOpen3(true);
    }
    if(num == 4){
      setOpen4(true);
    }
    if(num == 5){
      setOpen5(true);
    }
    if(num == 6){
      setOpen6(true);
    }
    if(num == 7){
      setOpen7(true);
    }

  };
  const handleClose = () => {
    if(num == 1){
      setOpen1(false);
    }
    if(num == 2){
      setOpen2(false);
    }
    if(num == 3){
      setOpen3(false);
    }
    if(num == 4){
      setOpen4(false);
    }
    if(num == 5){
      setOpen5(false);
    }
    if(num == 6){
      setOpen6(false);
    }true
    if(num == 7){
      setOpen7(false);
    }
  };

  return (
    <>
   <Modal
            open={open1}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box sx={{ ...style, width: 300 }} className="flex justify-center items-center h-screen flex-col  overflow-y-scroll">
    <div className=" w-full h-full bg-gray-100 rounded-2xl flex  flex-col relative">

              <p className='text-center font-bold text-3xl mb-4'>اضافة منتوج</p>

                      {error==1?<p className='text-center text-red-600'>{message}</p>:<p></p>}
              <div className="w-full flex flex-col justify-center items-start gap-3 flex-wrap">
            <div className="flex justify-center items-center">
              <p>الولاية</p>
              <p>:</p>

              <select className='bg-blue-300' defaultValue={0} onChange={(e) => (setSelectedWilaya(e.target.value))} >
                {wilaya.map((res, index) => {

                  return (
                    <option key={res.id} value={res.name}>{res.name}</option>

                  )
                })}

              </select>
            </div>
            <div className="flex justify-center items-center">
              <p>نوع المنتوج</p>
              <p>:</p>
              <select defaultValue={"الخضر"} className='bg-blue-300' onChange={(e) => (setSelectedType(e.target.value))} >
                <option value={"الخضر"}>الخضر</option>
                <option value={"الفواكه"}>الفواكه</option>
                <option value={"الحبوب"}>الحبوب</option>
                <option value={"البقول"}>البقول</option>
                <option value={"اشجار مثمرة"}>اشجار مثمرة</option>
                <option value={"اشجار زينة"}>اشجار زينة</option>
                <option value={"اعلاف"}>اعلاف</option>
                <option value={"اسمدة"}>اسمدة</option>


              </select>
            </div>
            <div className="flex justify-center items-center">
              <p>اسم المنتوج</p>
              <p>:</p>


              <select defaultValue={0} className='bg-blue-300' onChange={(e) => (setofficaialname(e.target.value))}>
                {selectedtype == "الخضر" && veg.map((res, index) => {

                  return (
                    <option key={res.id} value={res.name}>{res.name}</option>

                  )
                })}
             
                
                
                {selectedtype == "الفواكه" ? (fruits.map((res, index) => {
                  
                  return (
                    <option key={res.id} value={res.name}>{res.name}</option>

                  )
                })):<></>}


                {selectedtype == "الحبوب" && cerals.map((res, index) => {

                  return (
                    <option key={res.id} value={res.name}>{res.name}</option>

                  )
                })}

                {selectedtype == "البقول" && legumes.map((res, index) => {

                  return (
                    <option key={res.id} value={res.name}>{res.name}</option>

                  )
                })}
                {selectedtype == "اشجار مثمرة" && treeFruits.map((res, index) => {

                  return (
                    <option key={res.id} value={res.name}>{res.name}</option>

                  )
                })}

                {selectedtype == "اشجار زينة" && treeornamentals.map((res, index) => {

                  return (
                    <option key={res.id} value={res.name}>{res.name}</option>

                  )
                })}


                {selectedtype == "اعلاف" && milk.map((res, index) => {

                  return (
                    <option key={res.id} value={res.name}>{res.name}</option>

                  )
                })}




                {selectedtype == "اسمدة" && fodder.map((res, index) => {

                  return (
                    <option key={res.id} value={res.name}>{res.name}</option>

                  )
                })}

                {/* {type == 9 && fertilizers.map((res, index) => {

                  return (
                    <option key={res.id} value={res.name}>{res.name}</option>

                  )
                })} */}


              </select>
            </div>
            
            <div className='flex justify-center items-center'>
            <p className='text-sm'>الكمية/المساحة:</p>
            <input
           className=' placeholder-slate-900 bg-blue-200'
          type="text"
          name="username"
          placeholder='الكمية او المساحة'
          value={quantityArea}
          onChange={(e)=>{setQuantityArea(e.target.value)}}
         ></input>
          </div>




          <div className="flex justify-center items-center">
              <p>هل المنتوج جاهز</p>
              <p>:</p>
              <select defaultValue={1} className='bg-blue-200' onChange={(e) => (setReady(e.target.value))} >
                <option value="جاهز">جاهز</option>
                <option value="مزال مزروع">مزال مزروع</option>
              </select>
            </div>

            <div className="flex justify-center items-center">
              <p>السعر قابل للنقاش</p>
              <p>:</p>
              <select defaultValue={1} className='bg-blue-300' onChange={(e) => (setDisc(e.target.value))} >
                <option value={1}>نعم</option>
                <option value={0}>لا</option>
              </select>
            </div>

            <div className="flex justify-center items-center">
              <p>السعر المبدئي</p>
              <p>:</p>
              <input
           className='placeholder-slate-900 bg-blue-200'
          type="text"
          name="username"
          placeholder='السعر(اختياري)'
          value={price}
          onChange={(e)=>{setPrice(e.target.value)}}
         ></input>
            </div>
         <p className='text-gray-600 text-sm'>في حالة لاتريد كتابة السعر دع الخانة فارغة</p>

          <div>
          <p>رقم الهاتف</p>
      {inputs.map((input, index) => (
        <>
        <input
        className='w-full my-5 placeholder-slate-900 bg-blue-200'
          type="text"
          name="phone"
          placeholder='رقم الهاتف'
          

          key={index}
          value={input}
          onChange={(e) => handleInputChange(index, e.target.value)}
        />
        {index!=0 && <button  className='bg-red-200 p-2 flex justify-center items-center'  onClick={() => handleRemoveInput(index)}>ازالة الرقم</button>
      }
 </>
      ))}
     
      <button  className='bg-green-200 p-2 flex justify-center items-center'  onClick={handleAddInput}>اضافة رقم هاتف أخر</button>
     
    </div>
 {console.log(inputs,price,quantityArea,selectedwilay,officalname,selectedtype,ready,discuss)}

    <div className='flex justify-center items-center flex-col flex-wrap'>
      <input type="file" accept="image/*" multiple onChange={handleFileChange} id="files"  className='hidden'/>
      <label for="files" className='bg-blue-200 p-2'>اضافة صور</label>

      <div className='flex justify-center items-center gap-1'>
        {selectedImages.map((image, index) => (
          <>
          <img
            key={index}
            src={URL.createObjectURL(image)}
            alt={`Image ${index + 1}`}
            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
          />
          {index!=0 && <button  className='bg-red-200 p-2 flex justify-center items-center'  onClick={() => handelRemovePhoto(index)}>ازالة الصورة</button>
        }
        </>
        ))
        
        }
      </div>
      </div>
 <div className='w-full flex justify-center items-center my-5'>
    <button className='bg-green-500 p-2' onClick={images_upload_and_store_into_db}>نشر منتوج</button>
   
      </div>

          </div>
          
              






              </div>
            </Box>
          </Modal>

          <Modal
            open={open2}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box sx={{ ...style, width: 300 }} className="flex justify-center items-center flex-col gap-2">
              <p className='text-center font-bold text-3xl mb-4'>for 2</p>
            </Box>
          </Modal>

          <Modal
            open={open3}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box sx={{ ...style, width: 300 }} className="flex justify-center items-center flex-col gap-2">
              <p className='text-center font-bold text-3xl mb-4'>for 3</p>
            </Box>
          </Modal>


          <Modal
            open={open4}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box sx={{ ...style, width: 300 }} className="flex justify-center items-center flex-col gap-2">
              <p className='text-center font-bold text-3xl mb-4'>for 4</p>
            </Box>
          </Modal>


          <Modal
            open={open5}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box sx={{ ...style, width: 300 }} className="flex justify-center items-center flex-col gap-2">
              <p className='text-center font-bold text-3xl mb-4'>for 5</p>
            </Box>
          </Modal>


          <Modal
            open={open6}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box sx={{ ...style, width: 300 }} className="flex justify-center items-center flex-col gap-2">
              <p className='text-center font-bold text-3xl mb-4'>for 6</p>
            </Box>
          </Modal>

          <Modal
            open={open7}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box sx={{ ...style, width: 300 }} className="flex justify-center items-center flex-col gap-2">
              <p className='text-center font-bold text-3xl mb-4'>for 7</p>
            </Box>
          </Modal>
   
    <div onClick={handleOpen} className=' flex justify-center items-center flex-col rounded-md p-1 '>
    <p className='text-white text-center text-sm'>{name}</p>

    
    </div> </>
    )
}