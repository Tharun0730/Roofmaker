import { Avatar, Box, Typography } from "@mui/material";
import NavBar from "../../components/navBar";
import Background from "../../assets/FALL ARREST SYSTEM/fall protection-systems 2.jpg";
import slider2 from "../../assets/WALKWAYS/flexwalk-02.webp";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

import slider3 from "../../assets/st seam/standing-seam-roof 2.webp";
import Containerimg1 from "../../assets/st seam/seam 1.jpeg";
import Containerimg2 from "../../assets/st seam/st seam.jpg";
import Backscreenimg from "../../assets/WALKWAYS/flexwalk-3.webp";
import { Service } from "../../components/service";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import HomeMsg from "../../components/HomeMsg";

export default function Home() {
  const images = [
    { image: slider2, text: "ROOFING & CLADDING INSTALLERS" },
    { image: slider3, text: "STANDING SEAM INSTALLER" },
    { image: Background, text: "ROOF WALKWAY AND FALL ARREST INSTALLERS" },
  ];

  return (
    <>
      <NavBar />

      <Carousel images={images} autoplayInterval={3000} />
      <HomeMsg />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "column" },
          gap: { xs: "3rem", md: "2rem" },
          marginBlock: "4rem",
        }}
      >
        <Box
          data-aos="fade-right"
          sx={{
            padding: {
              xs: "0px 15px",
              md: "0px 50px",
              lg: "0px 100px",
            },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
            gap: "2rem",
          }}
        >
          <Avatar
            variant="square"
            src={Containerimg1}
            sx={{
              height: { xs: "50%", md: "100%" },
              width: { xs: "90%", md: "50%" },
            }}
          ></Avatar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height: "100%",
              gap: "20px",
              padding: { xs: "0 20px", md: "0px 0px 0px 50px" },
              width: { xs: "100%", md: "50%" },
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bolder" }}>
              Various Commercial Roofing Options
            </Typography>
            <Box
              sx={{
                width: "100%",
                border: "2px solid black",
              }}
            ></Box>
            <Typography
              variant="p"
              sx={{
                paddingBottom: "10px",
              }}
            >
              Commercial roofing options offer diverse solutions tailored to the
              unique requirements of different businesses and structures. One
              common choice is thermoplastic polyolefin (TPO), a single-ply
              membrane known for its energy efficiency and durability. Ethylene
              Propylene Diene Monomer (EPDM) is another popular option, a
              synthetic rubber roofing membrane praised for its weather
              resistance and low maintenance. Metal roofing provides a sleek and
              modern look, while also offering durability and longevity.
              Built-up roofing (BUR) involves multiple layers of asphalt and
              reinforcing fabrics, providing robust protection.
            </Typography>
          </Box>
        </Box>
        <Box
          data-aos="fade-left"
          sx={{
            padding: {
              xs: "0px 15px",
              md: "0px 50px",
              lg: "0px 100px",
            },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row-reverse" },
            gap: "2rem",
          }}
        >
          <Avatar
            variant="square"
            src={Containerimg2}
            sx={{
              height: { xs: "50%", md: "100%" },
              width: { xs: "90%", md: "50%" },
            }}
          ></Avatar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height: "100%",

              gap: "20px",
              padding: { xs: "0 20px", md: "0px 50px 0 0" },
              width: { xs: "100%", md: "50%" },
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bolder" }}>
              Innovative Choices in Commercial Roofing
            </Typography>
            <Box
              sx={{
                width: "100%",
                border: "2px solid black",
              }}
            ></Box>
            <Typography
              sx={{
                paddingBottom: "10px",
              }}
              variant="p"
            >
              In the ever-evolving domain of roof makers, staying abreast of
              innovative choices in commercial roofing is paramount. These
              skilled professionals are not only well-versed in traditional
              roofing materials but also at the forefront of adopting
              cutting-edge options. From integrating smart roofing technologies
              to incorporating eco-friendly and energy-efficient materials, roof
              makers are instrumental in guiding businesses towards roofing
              solutions that combine durability, functionality, and
              sustainability. As the demand for innovative choices in commercial
              roofing continues to rise, roof makers play a pivotal role in
              transforming architectural visions into reality, ensuring that
              businesses not only have a protective overhead but also an
              aesthetically pleasing and forward-thinking roofing system that
              aligns with modern standards and environmental considerations..
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          backgroundImage: `url(${Backscreenimg})`,
          backgroundSize: "cover",

          backgroundAttachment: "fixed",
        }}
      >
        <Box
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "100%",

            gap: "20px",
            padding: "1rem",
            width: { xs: "100%", md: "50%" },
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "bolder", color: "Black" }}
          >
            Expert Help With Residential Roofing
          </Typography>
          <Box
            sx={{
              width: "100%",
              border: "2px solid black",
            }}
          ></Box>
          <Box
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.708)",
              padding: "15px",
              borderRadius: "10px",
            }}
          >
            <Typography variant="p" sx={{ color: "white" }}>
              When it comes to residential roofing, expert assistance is
              paramount to ensure the longevity, durability, and aesthetic
              appeal of your home. A seasoned roofing professional possesses the
              knowledge and skills necessary to assess your roof's condition,
              recommend suitable materials, and execute precise installation or
              repairs. Whether you're considering a complete roof replacement,
              addressing leaks, or upgrading to energy-efficient roofing
              solutions, an expert in residential roofing can guide you through
              the process. From selecting the right materials, such as asphalt
              shingles, metal roofing, or clay tiles, to adhering to local
              building codes and safety standards, their expertise ensures a
              secure and attractive roofing system that enhances your home's
              overall value and protection. Entrusting your residential roofing
              needs to a qualified professional guarantees peace of mind and a
              long-lasting investment in the well-being of your home.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Service />
      <Box
        sx={{
          backgroundColor: " rgb(209, 209, 209)",
          height: "440px",
          paddingTop: "10px",
          width: "100%",
        }}
      >
        <Footer />
      </Box>
    </>
  );
}
