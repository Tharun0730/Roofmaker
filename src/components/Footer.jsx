import React, { useState } from 'react';
import "./Footer.css";
import img1 from '../assets/clientimg.png';
import img2 from '../assets/clientimg2.png';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaRegEnvelope } from "react-icons/fa";
import { IoMdTimer, IoIosCall } from "react-icons/io";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { Service } from './service';

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
            <img src={""} />
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
                <MdArrowForwardIos /> About us
              </span>
              <span className="footer-span">
                <MdArrowForwardIos /> Our Service
              </span>
              <span className="footer-span">
                <MdArrowForwardIos /> Project
              </span>
             
            </div>
  
            <div className="footer-container1-sub-box-3">
              <h5>Contact us</h5>
              <div className="contact-input-box">
                <span>
                  <FaRegEnvelope />
                </span>

                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="contact-input-box">
                <span>
                  <IoIosCall />
                </span>

                <input type="text" placeholder="Enter your number" />
              </div>
              <div className="contact-input-box">
                <span>
                  <IoMdTimer />
                </span>

                <input type="text" placeholder="Enter your message" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
