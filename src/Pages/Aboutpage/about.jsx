import Carousel from "../../components/Carousel";
import NavBar from "../../components/navBar";
import Background from "../../assets/beautiful-wooden-house-with-big-windows.jpg";
import slider2 from "../../assets/slider2.jpg";
import slider3 from "../../assets/slider3.jpg";
import { Avatar, Box, Typography } from "@mui/material";
import aboutimg1 from "../../assets/aboutimg1.png";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import aboutimg2 from "../../assets/aboutimg2.png";

import aboutimg3 from "../../assets/aboutimg3.png";

import aboutimg4 from "../../assets/aboutimg4.png";

import aboutimg5 from "../../assets/aboutimg5.png";

import { Service } from "./../../components/service";
import Footer from "../../components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
export default function About() {
  const images = [Background, slider2, slider3];
  return (
    <>
      <NavBar />
      <Box
      
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          padding:  {xs:"50px 20px 10px 20px",lg:"50px 20px"} ,
          marginTop:"13rem",
          gap: "10px",
        }}
      >
        <Typography
          variant="p"
          sx={{
            fontSize: {xs:"20px",lg:"35px"},
            fontWeight: "bolder",
            color: "gray",
          }}
        >
          About US
        </Typography>
        <Box sx={{ border: "2px solid gray", width: {xs:"70%",sm:"80%"} }}></Box>
      </Box>
      <Box
      data-aos="zoom-out-right"
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap:"wrap",
         
          padding:{xs:"30px",lg:"0 0 100px 0"},
          alignItems: "center",
         height:"auto",
          width: "100%",
          gap:{xs:"30px",md:"0"}
       
        }}
      >
        <Box
          sx={{
            width: {xs:"100%",sm:"100%",md:"30%"},
            
            height:{xs:"auto",md: "600px"},
            backgroundColor: "#EEEEEE",
          }}
        >
          <Typography
            sx={{
              margin: "10px 20px",
              fontSize: "26px",
              fontWeight: "bolder",
              color: "#333333",
            }}
          >
             Service
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              gap: "30px",
              margin: "20px",
              borderBottom: "1px solid #ddd",
              padding: "10px",
            }}
          >
            <Avatar
              src={aboutimg1}
              sx={{
                height: "35px",
                width: "35px",
              }}
              variant="square"
            ></Avatar>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "bolder",

                color: "gray",
              }}
            >
              steel erection
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              gap: "30px",
              margin: "20px",
              borderBottom: "1px solid #ddd grey",
              padding: "10px",
            }}
          >
            <Avatar
              src={aboutimg4}
              sx={{
                height: "35px",
                width: "35px",
              }}
              variant="square"
            ></Avatar>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "bolder",

                color: "gray",
              }}
            >
              Standing Seam Installation
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              gap: "30px",
              margin: "20px",
              borderBottom: "1px solid #ddd",
              padding: "10px",
            }}
          >
            <Avatar
              src={aboutimg3}
              sx={{
                height: "35px",
                width: "35px",
              }}
              variant="square"
            ></Avatar>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "bolder",

                color: "gray",
              }}
            >
              Complex Roofing and Clapping
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              gap: "30px",
              margin: "20px",
              borderBottom: "1px solid #ddd",
              padding: "10px",
            }}
          >
            <Avatar
              src={aboutimg2}
              sx={{
                height: "35px",
                width: "35px",
              }}
              variant="square"
            ></Avatar>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "bolder",

                color: "gray",
              }}
            >
              Skin Installaion
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              gap: "30px",
              margin: "20px",
              borderBottom: "1px solid #ddd",
              padding: "10px",
            }}
          >
            <Avatar
              src={aboutimg5}
              sx={{
                height: "35px",
                width: "35px",
              }}
              variant="square"
            ></Avatar>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "bolder",

                color: "gray",
              }}
            >
              Consulting
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              gap: "30px",
              margin: "20px",
              borderBottom: "1px solid #ddd",
              padding: "10px",
            }}
          >
            <Avatar
              src={aboutimg1}
              sx={{
                height: "35px",
                width: "35px",
              }}
              variant="square"
            ></Avatar>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "bolder",

                color: "gray",
              }}
            >
              &More Service...
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            flexDirection: "column",
            width: {xs:"100%",sm:"100%",md:"50%"},
            height:{xs:"auto",md: "600px"},
            padding:{xs:"0px 20px",lg:"0 50px"},
            gap: "10px",
         
          }}
        >
          <Typography
            sx={{
              fontSize: "26px",
              fontWeight: "bolder",
              color: "#333333",
            }}
          >
            Our Company
          </Typography>
          <Typography>
          


          Welcome to our dedicated service platform! With over 5 years of proven expertise in installation works and providing comprehensive roofing and wall cladding solutions, we stand as your trusted partner in meeting your needs. At our core, we prioritize excellence and customer satisfaction, ensuring that each project not only meets but exceeds expectations.

Our commitment to quality extends from the initial consultation to the final installation. With a focus on understanding your unique requirements, we deliver tailored solutions that align perfectly with your vision and objectives. Backed by a team of skilled professionals, we guarantee precision, expertise, and reliability in every aspect of our work.

As you explore our range of services, you'll discover a world of quality, reliability, and personalized attention.
          
          
          </Typography>
          <Typography sx={{color:"skyblue"}}>
"Building a strong foundation starts from the top down. With precision and expertise, we craft roofs that not only protect but elevate your dreams."
 
          </Typography>
     
        </Box>
      </Box>
      <Box sx={{
        backgroundColor:" rgb(209, 209, 209)",
        height:"440px",
        paddingTop:"10px",
        width:"100%",
      }}>
      <Footer/>

      </Box>
    </>
  );
}
