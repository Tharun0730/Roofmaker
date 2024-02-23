import React, { useState, useEffect } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import '../components/navbar.css';
import logo from '../assets/cropped-logo16032022_300x300.png';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
const navigate=useNavigate()

const handleNav=(path)=>{
navigate(path)
}
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const threshold = 100;

      setVisible(
        (prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > threshold) ||
          currentScrollPos < threshold
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <Box
      className= "navbar-wrapper"
      sx={{
        display: 'flex',
        position: 'fixed',
        top: visible ? '0' : '-100%', // Hide the navbar off-screen when not visible
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '5px 25px',
        // backgroundColor: 'rgb(27, 26, 85)',
        // backdropFilter: 'blur(5px)',
        transition: 'top 0.3s ease', // Add transition effect for smooth appearance
        zIndex: 999,
      }}
    >
      <Avatar
        variant="square"
        sx={{
          objectFit: 'cover',
          height: '150px',
          width: '200px',
        }}
        src={logo}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0px 20px',
          position: 'relative', // Position relative for dropdown
        }}
      >
        <Typography
        className="typography-menu"
        onClick={
          ()=>{
            handleNav("/")
          }
         }
          sx={{
            color: 'black',
            cursor: 'pointer',
            ':hover': {
              color: 'skyblue',
            },
            fontSize: '17px',
            fontWeight: '500',
          }}
          variant="p"
        >
          Home
        </Typography>
        <Typography
         className="typography-menu"
         onClick={
          ()=>{
            handleNav("/about")
          }
         }
          sx={{
            color: 'black',
            cursor: 'pointer',
            ':hover': {
              color: 'skyblue',
            },
            fontSize: '17px',
            fontWeight: '500',
          }}
          variant="p"
        >
          About Us
        </Typography>
        <div className="services-menu">
          <Typography
              className="typography-menu"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'black',
              cursor: 'pointer',
              ':hover': {
                color: 'skyblue',
              },
              fontSize: '17px',
              fontWeight: '500',
            }}
            variant="p"
            onClick={()=>{handleNav("/service")}}
          >
            Our Services
            {/* Our Services <ArrowDropDownIcon /> */}
          </Typography>
          <div className="services-dropdown">
            <Typography
            
              sx={{
                color: 'black',
                cursor: 'pointer',
                width: '100%',
                padding: '6px',
                ':hover': {
                  background: 'white',
                  color: 'skyblue',
                },
                fontSize: '17px',
                fontWeight: '500',
              }}
              variant="p"
            >
              Service 1
            </Typography>
            <Typography
            
              sx={{
                color: 'black',
                cursor: 'pointer',
                width: '100%',
                padding: '6px',
                ':hover': {
                  background: 'white',
                  color: 'skyblue',
                },
                fontSize: '17px',
                fontWeight: '500',
              }}
              variant="p"
            >
              Service 2
            </Typography>
            <Typography
            
              sx={{
                color: 'black',
                cursor: 'pointer',
                width: '100%',
                padding: '6px',
                ':hover': {
                  background: 'white',
                  color: 'skyblue',
                },
                fontSize: '17px',
                fontWeight: '500',
              }}
              variant="p"
            >
              Service 3
            </Typography>
          </div>
        </div>
        <div className="projects-menu">
          <Typography
          className='typography-menu'
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'black',
              cursor: 'pointer',
              ':hover': {
                color: 'skyblue',
              },
              fontSize: '17px',
              fontWeight: '500',
            }}
            variant="p"
          >
            Projects <ArrowDropDownIcon />
          </Typography>
          <div className="projects-dropdown">
            <Typography
          
              sx={{
                
                color: 'white',
                cursor: 'pointer',
                width: '100%',
                padding: '6px',
                ':hover': {
                  background: 'white',
                  color: 'skyblue',
                },
                fontSize: '15px',
                fontWeight: '500',
              }}
              variant="p"
            >
              Standing seam
            </Typography>
            <Typography
           
              sx={{
                color: 'white',
                cursor: 'pointer',
                width: '100%',
                padding: '6px',
                ':hover': {
                  background: 'white',
                  color: 'skyblue',
                },
                fontSize: '15px',
                fontWeight: '500',
              }}
              variant="p"
            >
              Sandwich Panel
            </Typography>
            <Typography
         
              sx={{
                color: 'white',
                cursor: 'pointer',
                width: '100%',
                padding: '6px',
                ':hover': {
                  background: 'white',
                  color: 'skyblue',
                },
                fontSize: '15px',
                fontWeight: '500',
              }}
              variant="p"
            >
              WalkWay & fall
            </Typography>
          </div>
        </div>
        <Typography
        onClick={()=>{handleNav("/contactus")}}
            className="typography-menu"
          sx={{
            color: 'black',
            cursor: 'pointer',
            ':hover': {
              color: 'skyblue',
            },
            fontSize: '17px',
            fontWeight: '500',
          }}
          variant="p"
          
        >
          Contact Us
        </Typography>
      </Box>
    </Box>
  );
}
