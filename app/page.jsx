'use client'
import useSWR from 'swr'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useState, useEffect } from "react";
import useTranslation from 'next-translate/useTranslation'
import { Alert, Carousel } from "flowbite-react";
import { SocialIcon } from 'react-social-icons';
import Card2 from '../components/Card2'
import Jobcard from '../components/jobCard'
import Details from '../components/Detailscard'
import TextField from '@mui/material/TextField';
import { SessionProvider } from 'next-auth/react'

import Image from 'next/image'
import Link from 'next/link'
import { Button, Grid } from "@nextui-org/react";


import { useSession } from 'next-auth/react'
import ReactCountryFlag from "react-country-flag"
import InputLabel from '@mui/material/InputLabel';

import { TbMoodEmpty } from 'react-icons/tb';
import Tab from '@mui/material/Tab';


import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useDispatch } from "react-redux";
import { changeTheName } from "@/slices/CounterSlice";

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


// function ChildModal() {
//   const [open1, setOpen1] =useState(false);
//   const handleOpen1 = () => {
//     setOpen1(true);
//   };
//   const handleClose1 = () => {
//     setOpen1(false);
//   };

//   return (
//     <>
//       <Button onClick={handleOpen1}>طلب العمل</Button>
//       <Modal
//         open={open1}
//         onClose={handleClose1}
//         aria-labelledby="child-modal-title"
//         aria-describedby="child-modal-description"
//       >
//         <Box sx={{ ...style, width: 280 }} className="flex justify-center items-center flex-col gap-2">
//         <TextField id="outlined-basic" label="اكتب رقم هاتفك" variant="standard" />
//         <Button onClick={handleOpen1}>ارسال طلب العمل</Button>
//         </Box>
//       </Modal>
//     </>
//   );
// }


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}

    >
      {value === index && (
        <Box sx={{ p: 3 }} >
          <Typography fontSize="50px">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};



function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



export default function Home() {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch()

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [emailError, setEmailError] = useState(false);



  const validateEmail = (email) => {
    var result = String(email)
      .toLowerCase()
      .match(
        /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);
    if (result == null) { setEmailError(true); return false }
    else { setEmailError(false); return true }

  };



  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const [openmodel, setModekOpenJob] = useState(false);

  const onClick = () => {
    setModekOpenJob(true);
  };

  const onClose = () => {
    setModekOpenJob(false);
  };

  const handleChangeCity = (event) => {
    setChosenCity(event.target.value);
  };
  const handleChangeCategory = (event) => {
    setChosenCat(event.target.value);
  };

  const [open1, setOpen1] = useState(false);
  const [openProduct, setOpenProduct] = useState(false);
  const [indexx, setIndexx] = useState(0);


  const handleOpen1 = () => {
    setOpen1(true);
  };
  const handleOpenProduct1 = (index) => {
    setIndexx(index)
    setOpenProduct(true);
  };
  const handleCloseProduct1 = () => {
    setOpenProduct(false);
  };
  const [getveg, setGetVeg] = useState([]);
  // const handleSearch = async (id) => {


  //   // setLoading2(true)
  //   let response = await fetch("http://localhost:3000/api/get_product", {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8'
  //     }
  //     // ,
  //     // body: JSON.stringify({ catid: parseInt(chosencat), city: chosencity })
  //   });
  //   let result = await response.json(response);
  //   console.log(result)
  //   setGetVeg(result)
  //   // setLoading2(false)
  // };
  // useEffect(() => {


  //   handleSearch()
  // }, []);
  const [type, setType] = useState("الخضر");
  const [officalname, setofficaialname] = useState("البطاطة");
  const [selectedWilaya, setSelectedWilaya] = useState("كل الولايات");

useEffect(() => {
if(type=="الخضر"){
 
console.log("this is first key",veg[0].name)
  setofficaialname(veg[0].name)
}

if(type=="الفواكه"){
 
  console.log("this is first key",fruits[0].name)
    setofficaialname(fruits[0].name)
  }


  if(type=="الحبوب"){
 
    console.log("this is first key",legumes[0].name)
      setofficaialname(legumes[0].name)
    }


    if(type=="البقول"){
 
      console.log("this is first key",cerals[0].name)
        setofficaialname(cerals[0].name)
      }


      if(type=="اشجار مثمرة"){
 
        console.log("this is first key",treeFruits[0].name)
          setofficaialname(treeFruits[0].name)
        }



        if(type=="اشجار زينة"){
 
          console.log("this is first key",treeornamentals[0].name)
            setofficaialname(treeornamentals[0].name)
          }


          if(type=="اعلاف"){
 
            console.log("this is first key",fodder[0].name)
              setofficaialname(fodder[0].name)
            }
            if(type=="اسمدة"){
 
              console.log("this is first key",milk[0].name)
                setofficaialname(milk[0].name)
              }
 
}, [type]);
  const { data, error, isLoading, isValidating, mutate} = useSWR(`https://agri-dz.vercel.app/api/get_product?wilaya=${selectedWilaya}&type=${type}&name=${officalname}`)
  console.log(data)
  


  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [checked6, setChecked6] = useState(false);
  const [checked7, setChecked7] = useState(false);
  const [title, setTitle] = useState("نشر منتوج");






  function handelTabHamza(num1, num2, num3, num4, num5, num6, num7) {
    document.getElementById(num1).style.backgroundColor = "white"
    document.getElementById(num2).style.backgroundColor = "orange"
    document.getElementById(num3).style.backgroundColor = "orange"
    document.getElementById(num4).style.backgroundColor = "orange"
    document.getElementById(num5).style.backgroundColor = "orange"
    document.getElementById(num6).style.backgroundColor = "orange"
    document.getElementById(num7).style.backgroundColor = "orange"


    if (num1 == "1") {
      console.log("iam here1")
      setChecked1(true);
      setChecked2(false);
      setChecked3(false);
      setChecked4(false);
      setChecked5(false);
      setChecked6(false);
      setChecked7(false);
      dispatch(changeTheName({ name: "نشر منتوج", numm: 1 }))

    }
    if (num1 == "2") {
      console.log("iam here2")
      setTitle()

      setChecked1(false);
      setChecked4(false);
      setChecked5(false);
      setChecked6(false);
      setChecked7(false);
      setChecked2(true);
      setChecked3(false);
      
      dispatch(changeTheName({ name: "نشر عمل", numm: 2 }))

    }
    if (num1 == "3") {
      console.log("iam here2")
      setTitle("نشر سؤال")

      setChecked1(false);
      setChecked4(false);
      setChecked5(false);
      setChecked6(false);
      setChecked7(false);
      setChecked2(false);
      setChecked3(true);
      dispatch(changeTheName({ name: "نشر سؤال", numm: 3 }))

    }

    if (num1 == "4") {
      console.log("iam here2")
      setTitle("نشر عتاد")

      setChecked1(false);

      setChecked2(false);
      setChecked3(false);
      setChecked5(false);
      setChecked6(false);
      setChecked7(false);
      setChecked4(true);
      dispatch(changeTheName({ name: "نشر عتاد", numm: 4 }))


    }


    if (num1 == "5") {
      console.log("iam here2")
      setTitle("نشر عقار")

      setChecked1(false);

      setChecked2(false);
      setChecked3(false);
      setChecked4(false);
      setChecked6(false);
      setChecked7(false);
      setChecked5(true);
      dispatch(changeTheName({ name: "نشر عقار", numm: 5 }))

    }


    if (num1 == "6") {
      console.log("iam here2")
      setTitle("نشر عرض")

      setChecked1(false);
      setChecked2(false);
      setChecked3(false);
      setChecked4(false);
      setChecked5(false);
      setChecked7(false);

      setChecked6(true);
      dispatch(changeTheName({ name: "نشر عرض", numm: 6 }))


    }

    if (num1 == "7") {
      console.log("iam here2")
      setTitle("نشر عرض")

      setChecked1(false);

      setChecked2(false);
      setChecked3(false);
      setChecked4(false);
      setChecked5(false);

      setChecked6(false);

      setChecked7(true);
      dispatch(changeTheName({ name: "نشر عرض", numm: 7 }))


    }






  }



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
    { name: "كل الولايات", id: "كل الولايات" },
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

  // useEffect(() => {



  // },[]);



  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (


    <div className="w-full relative">

      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel dir="ltr" >

          <div className=" relative w-screen md:h-screen h-96  flex justify-center items-center">

            <Image src="/1.jpg" fill className="w-full h-full md:h-screen  " />
            <p className="absolute  top-1/2 md:text-5xl font-bold text-center text-lg text-white bg-orange-600 ">مكان مخصص للاعلانات</p>


          </div>
          <div className=" relative w-screen md:h-screen h-96  flex justify-center items-center">

            <Image src="/2.jpg" fill className="w-full h-1/2 md:h-screen  " />
            <p className="absolute  top-1/2 md:text-5xl font-bold text-center text-lg text-black bg-green-600 ">مكان مخصص للاعلانات</p>


          </div>
          <div className=" relative w-screen md:h-screen h-96  flex justify-center items-center">

            <Image src="/3.jpg" fill className="w-full h-1/2 md:h-screen  " />
            <p className="absolute  top-1/2 md:text-5xl font-bold text-center text-lg text-black bg-yellow-300 ">مكان مخصص للاعلانات</p>


          </div>
          <div className=" relative w-screen md:h-screen h-96  flex justify-center items-center">

            <Image src="/4.jpg" fill className="w-full h-1/2 md:h-screen  " />
            <p className="absolute  top-1/2 md:text-5xl font-bold text-center text-lg text-white bg-orange-600 ">مكان مخصص للاعلانات</p>


          </div>

        </Carousel>
      </div>


      <section className="flex justify-center items-center flex-wrap gap-2 bg-white w-screen">
        <div id="1" onClick={() => (handelTabHamza('1', "2", "3", "4", "5", "6", "7"))} className="bg-white cursor-pointer px-3    flex-col    rounded-t-lg    flex justify-center items-center border-2 border-orange-500">

          <Image src="/product.png" width={50} height={50}></Image>


          <p className="font-bold text-base">منتوجات فلاحية</p>

        </div>
        <div id="6" onClick={() => (handelTabHamza("6", '1', "2", "3", "4", "5", "7"))} className="bg-orange-400 cursor-pointer px-3    flex-col    rounded-t-lg    flex justify-center items-center border-2 border-orange-500">

          <Image src="/cow.png" width={50} height={50}></Image>


          <p className="font-bold text-base">مواشي و مشتقاتها</p>

        </div>

        <div id="7" onClick={() => (handelTabHamza("7", '1', "2", "3", "4", "5", "6"))} className="bg-orange-400 cursor-pointer px-3    flex-col    rounded-t-lg    flex justify-center items-center border-2 border-orange-500">

          <Image src="/shipping.png" width={50} height={50}></Image>


          <p className="font-bold text-base">خدمة النقل</p>

        </div>
        <div id="2" onClick={() => (handelTabHamza('2', "1", "3", "4", "5", "6", "7"))} className="bg-orange-400 cursor-pointer   px-3  flex-col     rounded-t-lg   flex justify-center items-center   border-2 border-orange-500">
          <Image src="/job.png" width={50} height={50}></Image>

          <p className="font-bold text-base">عروض العمل</p>

        </div>
        <div id="3" onClick={() => (handelTabHamza('3', "1", "2", "4", "5", "6", "7"))} className="bg-orange-400 cursor-pointer   px-3  flex-col    rounded-t-lg   flex justify-center items-center border-2 border-orange-500">
          <Image src="/question.png" width={50} height={50}></Image>

          <p className="font-bold text-base">اسئلة الفلاحين</p>

        </div>
        <div id="4" onClick={() => (handelTabHamza('4', "1", "2", "3", "5", "6", "7"))} className="bg-orange-400 cursor-pointer   px-3  flex-col    rounded-t-lg   flex justify-center items-center border-2 border-orange-500">
          <Image src="/tractor.png" width={50} height={50}></Image>

          <p className="font-bold text-base">كراء وبيع العتاد</p>

        </div>
        <div id="5" onClick={() => (handelTabHamza('5', "1", "2", "3", "4", "6", "7"))} className="bg-orange-400 cursor-pointer   px-3  flex-col    rounded-t-lg   flex justify-center items-center border-2 border-orange-500">
          <Image src="/fields.png" width={50} height={50}></Image>

          <p className="font-bold text-base">كراء و بيع عقار</p>

        </div>

      </section>

      <Slide className="w-full" direction="left" in={checked1} mountOnEnter unmountOnExit>

        <section id="products" className="w-full   flex justify-center items-center   gap-3 flex-wrap ">
          <div className="w-full   bg-blue-300 flex justify-center items-center gap-3 flex-wrap">
            <div className="flex justify-center items-center">
              <p>الولايات</p>
              <p>:</p>

              <select defaultValue={0} className="bg-white" onChange={(e) => (setSelectedWilaya(e.target.value))}>
                {wilaya.map((res, index) => {

                  return (
                    <option key={res.id} value={res.id}>{res.name}</option>

                  )
                })}

              </select>
            </div>
            <div className="flex justify-center items-center">
              <p>نوع المنتوج</p>
              <p>:</p>
              <select defaultValue={1} onChange={(e) => (setType(e.target.value))} >
                <option value={"الخضر"}>الخضر</option>
                <option value={"الفواكه"}>الفواكه</option>
                <option value={"الحبوب"}>الحبوب</option>
                <option value={"البقول"}>البقول</option>
                <option value={"اشجار مثمرة"}>اشجار مثمرة</option>
                <option value={"اشجار زينة"}>اشجار زينة</option>
                <option value={"حليب و مشتقاته"}>حليب و مشتقاته</option>
                <option value={"اعلاف"}>اعلاف</option>
                <option value={"اسمدة"}>اسمدة</option>


              </select>
            </div>
            <div className="flex justify-center items-center">
              <p>اسم المنتوج</p>
              <p>:</p>


             <select defaultValue={0} className='bg-blue-300' onChange={(e) => (setofficaialname(e.target.value))}>
                {type == "الخضر" && veg.map((res, index) => {

                  return (
                    <option key={res.id} value={res.name}>{res.name}</option>

                  )
                })}
             
                
                
                {type == "الفواكه" ? (fruits.map((res, index) => {
                  
                  return (
                    <option key={res.id} value={res.name}>{res.name}</option>

                  )
                })):<></>}


                {type == "الحبوب" && cerals.map((res, index) => {

                  return (
                    <option key={res.id} value={res.name}>{res.name}</option>

                  )
                })}

                {type == "البقول" && legumes.map((res, index) => {

                  return (
                    <option key={res.id} value={res.name}>{res.name}</option>

                  )
                })}
                {type == "اشجار مثمرة" && treeFruits.map((res, index) => {

                  return (
                    <option key={res.id} value={res.name}>{res.name}</option>

                  )
                })}

                {type == "اشجار زينة" && treeornamentals.map((res, index) => {

                  return (
                    <option key={res.id} value={res.name}>{res.name}</option>

                  )
                })}


                {type == "اعلاف" && milk.map((res, index) => {

                  return (
                    <option key={res.id} value={res.name}>{res.name}</option>

                  )
                })}




                {type == "اسمدة" && fodder.map((res, index) => {

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
          </div>

          <div className="w-full p-5 flex justify-center items-center gap-5 flex-wrap">
            {!isLoading&&data?.map((res, index) => {

              return (
                <>

                  <div id="example" onClick={()=>handleOpenProduct1(index)} >
                    <Card2 name={res.name} wilaya={res.wilaya} ready={res.ready} src={res.imagelist[0]}></Card2>
                  </div>
                </>
              )
            })}

          </div>
        </section>
      </Slide>


      <Slide className="w-full" direction="left" in={checked6} mountOnEnter unmountOnExit>

        <section id="products" className="w-full   flex justify-center items-center   gap-3 flex-wrap ">
          <div className="w-full   bg-blue-300 flex justify-center items-center gap-3 flex-wrap">
            <div className="flex justify-center items-center">
              <p>الولايات</p>
              <p>:</p>

              <select defaultValue={0} className="bg-white">
                {wilaya.map((res, index) => {

                  return (
                    <option key={res.id} value={res.id}>{res.name}</option>

                  )
                })}

              </select>
            </div>
            <div className="flex justify-center items-center">
              <p>نوع المنتوج</p>
              <p>:</p>
              <select defaultValue={1} onChange={(e) => (setType(e.target.value))} >
                <option value={1}>الخضر</option>
                <option value={2}>الفواكه</option>
                <option value={3}>الحبوب</option>
                <option value={4}>البقول</option>
                <option value={5}>اشجار مثمرة</option>
                <option value={6}>اشجار زينة</option>
                <option value={7}>حليب و مشتقاته</option>
                <option value={8}>اعلاف</option>
                <option value={9}>اسمدة</option>


              </select>
            </div>
            <div className="flex justify-center items-center">
              <p>اسم المنتوج</p>
              <p>:</p>


              <select defaultValue={0}  >
                {type == 1 && veg.map((res, index) => {

                  return (
                    <option key={res.id} value={res.id}>{res.name}</option>

                  )
                })}
                {type == 2 && fruits.map((res, index) => {

                  return (
                    <option key={res.id} value={res.id}>{res.name}</option>

                  )
                })}


                {type == 3 && cerals.map((res, index) => {

                  return (
                    <option key={res.id} value={res.id}>{res.name}</option>

                  )
                })}

                {type == 4 && legumes.map((res, index) => {

                  return (
                    <option key={res.id} value={res.id}>{res.name}</option>

                  )
                })}
                {type == 5 && treeFruits.map((res, index) => {

                  return (
                    <option key={res.id} value={res.id}>{res.name}</option>

                  )
                })}

                {type == 6 && treeornamentals.map((res, index) => {

                  return (
                    <option key={res.id} value={res.id}>{res.name}</option>

                  )
                })}


                {type == 7 && milk.map((res, index) => {

                  return (
                    <option key={res.id} value={res.id}>{res.name}</option>

                  )
                })}




                {type == 8 && fodder.map((res, index) => {

                  return (
                    <option key={res.id} value={res.id}>{res.name}</option>

                  )
                })}

                {type == 9 && fertilizers.map((res, index) => {

                  return (
                    <option key={res.id} value={res.id}>{res.name}</option>

                  )
                })}


              </select>
            </div>
          </div>





        </section>
      </Slide>



      {/* this part is for agri products details */}


      <div>

        <Modal
          open={openProduct}
          onClose={handleCloseProduct1}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style }} className="flex justify-center items-center flex-col gap-2 ">
            <div className='w-full h-ful flex justify-center items-center flex-col'>

            <div className="h-64 w-64 relative  flex justify-center items-center">
        <Carousel dir="ltr">
        {!isLoading&&data?.length>0&&data[indexx]?.imagelist.map((image,index)=>{
          return(
            <div className=" relative w-full md:h-full   flex justify-center items-center">

            <Image src={image} fill className="w-full h-full md:h-screen  " />

          </div>
          )
        })}
        </Carousel>
      </div>
      <div className='flex flex-col justify-start items-start'>
      <div className='flex justify-center gap-2 items-center flex-row'> <p className='text-black font-bold text-lg'>اسم المنتوج:{!isLoading&&data.length>0&&data[indexx].name} </p> </div>
      <div className='flex justify-center gap-5 items-center flex-row'> <p className='text-black font-bold text-xl'>نوع المنتوج:{!isLoading&&data.length>0&&data[indexx].type} </p> </div>
      <div className='flex justify-center gap-5 items-center flex-row'> <p className='text-black font-bold text-xl'>السعر:{!isLoading&&data.length>0&&data[indexx].price} </p> </div>
      <div className='flex justify-center gap-5 items-center flex-row'> <p className='text-black font-bold text-xl'>حالة النتموج:{!isLoading&&data.length>0&&data[indexx].ready} </p> </div>
      <div className='flex justify-center gap-5 items-center flex-row'> <p className='text-black font-bold text-xl'>الكمية/المساحة:{!isLoading&&data.length>0&&data[indexx].quantity} </p> </div>
      <div className='flex justify-center gap-5 items-center flex-row'> <p className='text-black font-bold text-xl'>المناقشة:{!isLoading&&data.length>0&&data[indexx].discuss} </p> </div>
    </div>  
    {!isLoading&&data.length>0&&data[indexx].phone.map((num,index)=>{
          return(
            <div className=" w-full bg-orange-600">
            <p>{num}</p>
          

          </div>
          )
        })}
            </div>
          </Box>
        </Modal>
      </div>












      <div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 300 }} className="flex justify-center items-center flex-col gap-2">
            <Details></Details>
            <div className="flex justify-center items-center flex-col gap-2">
              <TextField id="outlined-basic" label="اكتب رقم هاتفك" variant="outlined" />
              <Button onClick={handleOpen1}>ارسال طلب العمل</Button>
            </div>
          </Box>
        </Modal>
      </div>


      <Slide direction="left" in={checked2} mountOnEnter unmountOnExit  >
        <section id="jobs" className="w-screen    flex justify-center items-start gap-2 flex-wrap  ">

          <div className="w-screen h-28 bg-blue-300 flex justify-center items-center gap-3 flex-wrap">
            <div className="flex justify-center items-center">
              <p>الولايات</p>
              <p>:</p>

              <select defaultValue={0}>
                {wilaya.map((res, index) => {

                  return (
                    <option key={res.id} value={res.id}>{res.name}</option>

                  )
                })}
              </select>
            </div>


          </div>

          <div id="example" onClick={handleOpen}>
            <Jobcard discription="مطلوب عامل في الفلاحة" location="الوادي" title="مطلوب عامل في الفلاحة"></Jobcard>
          </div>
          <div id="example" onClick={handleOpen}>
            <Jobcard discription="مطلوب عامل في المزرعة" location="الوادي" title="مطلوب عامل في المزرعة"></Jobcard>
          </div>
          <div id="example" onClick={handleOpen}>
            <Jobcard discription="عامل في البناء" location="الوادي" title="عامل في البناء"></Jobcard>
          </div>


        </section>
      </Slide>

      <Slide direction="left" in={checked3} mountOnEnter unmountOnExit>
        <section id="questions" className="w-screen min-h-screen  flex justify-center items-start gap-2 flex-wrap  ">



          <p className="md:text-5xl font-bold text-center text-lg ">مكان مخصص لاسئلة الفلاحين</p>
        </section>
      </Slide>


      <Slide direction="left" in={checked7} mountOnEnter unmountOnExit>
        <section id="questions" className="w-screen min-h-screen  flex justify-center items-start gap-2 flex-wrap  ">



          <p className="md:text-5xl font-bold text-center text-lg ">خدمات النقل غير متوفرة حاليا سيتم تخصيصها في التحديث القادم</p>
        </section>
      </Slide>


      <Slide direction="left" in={checked4} mountOnEnter unmountOnExit>
        <section id="questions" className="w-screen min-h-screen  flex justify-center items-start gap-2 flex-wrap  ">



          <p className="md:text-5xl font-bold text-center text-lg ">مكان مخصص لبيع و كراء العتاد الفلاحي</p>
        </section>
      </Slide>



      <Slide direction="left" in={checked5} mountOnEnter unmountOnExit>
        <section id="questions" className="w-screen min-h-screen  flex justify-center items-start gap-2 flex-wrap  ">



          <p className="md:text-5xl font-bold text-center text-lg ">مكان مخصص لبيع و كراء الاراضي الفلاحية</p>
        </section>
      </Slide>


{/* 
      <section className='bg-white   mx-auto break-all  mt-10 '>
      

        <div className="  flex flex-wrap  content-center place-items-center self-center justify-center   sm:mt-0 sm:justify-center items-center  ">
          <SocialIcon className="m-3" url="https://www.facebook.com/TheNakset" ></SocialIcon>
          <SocialIcon className="m-3" url="https://www.linkedin.com/company/nakset/" ></SocialIcon>
          <SocialIcon className="m-3" url="https://www.instagram.com/nakset_kft/" ></SocialIcon>
          <SocialIcon className="m-3" url="https://www.whatsapp.com/" ></SocialIcon>
        </div>

      </section> */}
      <div id="contact"></div>
    </div>

  )

}
