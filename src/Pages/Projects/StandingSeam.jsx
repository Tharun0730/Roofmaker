import React from 'react'
import ProjectCardDetails from '../../components/ProjectCardDetails';
import Containerimg1 from '../../assets/st seam/st seam.jpg'
import NavBar from '../../components/navBar';
import { SlEnergy } from "react-icons/sl";
import { HiHomeModern } from "react-icons/hi2";
import { FaTools } from "react-icons/fa";
import { MdOutlineWifiProtectedSetup } from "react-icons/md";
import Footer from '../../components/Footer';
import WhatWedo from '../../components/whatWedo';
import { GiHotSurface } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
import { PiWarehouseFill } from "react-icons/pi";
function StandingSeam() {
  const boxData = [
    {
        src: Containerimg1,
        title: 'What Is Standing Seam Metal Roofing?',
      
        about:" Standing seam metal roofing is defined as a concealed fastener metal panel system that features vertical legs and a broad, flat area between the two legs. It’s also described as having raised seams, or vertical legs, that rise above the panel’s flat area. Standing seam systems can be used for either metal roofing or metal walls.",
        advantage:[{
          point:"Durable, Weather-Tight, and Long-Lasting. One of the most significant advantages of standing seam metal roofing is its exceptional durability"
        },{
          point:"Fire Resistant"
        },{
          point:"Easy Maintenance"
        },{
          point:"Energy Efficient"
        },{
          point:"Color Options to Fit Your Aesthetic"
        },{
          point:"Increases Home Value and Curb Appeal"
        }]
    }
];


const ChooseUsData=[{
  title:"No fasteners are visible on the surface",
  icon: <GiHotSurface style={{fontSize:"50px",padding:"5px",color:"white"}}/>
 },
 {
  title:"Sleek, Consistent, & Modern Look",
  icon: <HiHomeModern style={{fontSize:"50px",padding:"5px",color:"white"}}/>
 },
 {
  title:"Longevity & Lifecycle",
  icon: <PiWarehouseFill style={{fontSize:"50px",padding:"5px",color:"white"}}/>
 },
//  {
//   title:"Architectural Freedom ",
//   icon: <IoMdSettings style={{fontSize:"50px",padding:"5px",color:"white"}}/>
//  },
 {
  title:"Energy-Efficient",
  icon: <SlEnergy style={{fontSize:"50px",padding:"5px",color:"white"}}/>
 },
//  {
//   title:"Different Material Options",
//   icon: <MdOutlineWifiProtectedSetup style={{fontSize:"50px",padding:"5px",color:"white"}}/>
//  },
//  {
//   title:"Mounting Options",
//   icon: <FaTools style={{fontSize:"50px",padding:"5px",color:"white"}}/>
//  },
]
  return (
    <>
     <NavBar/>
     <ProjectCardDetails boxData={boxData}/>
     <WhatWedo data={ChooseUsData}/>
      <Footer/>
    </>
  )
}

export default StandingSeam