import React, { useState } from 'react';
import "./Footer.css";
import logo from "../assets/cropped-logo16032022_300x300.png";

import img1 from '../assets/clientimg.png';
import img2 from '../assets/clientimg2.png';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaRegEnvelope } from "react-icons/fa";
import { IoMdTimer, IoIosCall } from "react-icons/io";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { Service } from './service';
import { Box, Button, TextField, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function Footer() {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);

  const clientImages = [img1, img2, img1, img2, img1, img2, img1, img2, img2, img1, img2, img1, img2, img1, img2, img2, img1, img2, img1, img2, img1, img2, img1];

  const itemsPerPage = 5;
  const totalSets = Math.ceil(clientImages.length / itemsPerPage);

  const goToPreviousSet = () => {
    setCurrentSetIndex((prevIndex) => (prevIndex === 0 ? totalSets - 1 : prevIndex - 1));
  };

  const goToNextSet = () => {
    setCurrentSetIndex((prevIndex) => (prevIndex + 1) % totalSets);
  };

  const startIndex = currentSetIndex * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, clientImages.length);
  const currentSet = clientImages.slice(startIndex, endIndex);

  return (
    <>
      <div className="client-container-box">
        <div className='container-box-1'>
          <h3>Our clients</h3>
          <div className='arrow-container'>
            <MdArrowBackIos onClick={goToPreviousSet} />
            <MdArrowForwardIos onClick={goToNextSet} />
          </div>
        </div>
        <div className="client-slider-box">
          {currentSet.map((img, index) => (
            <div key={index} className='client-img-box'>
              <img src={img} alt={`client-${index}`} />
            </div>
          ))}
        </div>
      </div>
      <footer>
        <div className="footer-container-box">
          <div className="footer-container-box-1">
            <img src={logo} />
            <h2 style={{ color: "rgb(27, 182, 238)" }}>PREDCISION ROOF MAKERS</h2>
            <div className="social-media-icon">
              <FaFacebook />
              <FaInstagram />
              <FaLinkedin />
              <FaWhatsapp />
            </div>
          </div>
          <div className="footer-container-box-2">
            <div className="footer-container1-sub-box-1">
              <h5>Information</h5>
              <span className="footer-span">
                <MdArrowForwardIos /> Home
              </span>
              <span className="footer-span">
                <MdArrowForwardIos /> About Us
              </span>
              <span className="footer-span">
                <MdArrowForwardIos /> Our Services
              </span>
              <span className="footer-span">
                <MdArrowForwardIos /> Projects
              </span>
             
            </div>
  
            <div className="footer-container1-sub-box-1">
              <h5>Contact Us</h5>
              <Box
                    sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "start",
                        gap: "10px",
                        
                    }}
                >
                    <LocationOnIcon
                        sx={{
                            fontSize: "25px",
                            color: "#1976d2!important",
                        }}
                    />
                    <Typography
                        sx={{
                            fontSize: "14px",
                            fontWeight: "700",
                            color: "grey",
                        }}
                    >
                        PRECISION ROOF MAKERS For Turnkey Projects Contracting
                     
                    <Typography
                        sx={{
                           
                            fontSize: "14px",
                           
                            color: "grey",
                        }}
                    >
                         
                        Al Nahda 2, Dubai, United Arab Emirates
                       
                    </Typography>

                       
                    </Typography>
                 

                   
                </Box>
                {/* Phone */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        gap: "10px",
                    }}
                >
                    <CallIcon
                        sx={{
                            fontSize: "25px",
                            color: "#1976d2!important",
                        }}
                    />
                    <Typography
                        sx={{
                            fontSize: "14px",
                            fontWeight: "700",
                            color: "grey",
                        }}
                    >
                        +971 524 022 744, +971 52 450 4254
                    </Typography>
                </Box>
                {/* Email */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        gap: "10px",
                    }}
                >
                    <MailOutlineIcon
                        sx={{
                            fontSize: "25px",
                            color: "#1976d2!important",
                        }}
                    />
                    <Typography
                        sx={{
                            fontSize: "14px",
                            fontWeight: "700",
                            color: "grey",
                        }}
                    >
                        admin@precisionroofmakers.com
                    </Typography>
                </Box>
                {/* Office Hours */}
              
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
