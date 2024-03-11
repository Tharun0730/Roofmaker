import { Avatar, Box, Grid, Typography } from "@mui/material";
import img1 from "../assets/sandwich panel/Sandwich panel roof 1.jpeg";
import img2 from '../assets/st seam/standing-seam-roof 2.webp';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/sandwich panel/image 4.webp';
import img5 from '../assets/sandwich panel/image 3.jpg';
import img6 from '../assets/FALL ARREST SYSTEM/FALL ARREST SYSTEM 1.jpg'
import SandwichPanel from './../Pages/Projects/SandwichPanel';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
export function Service() {
  const services = [
    {
      img: img1,
      title: "ROOFING",
      description: "Our cladding services and see how we can make your building stand out from the crowd. Learn about our metal cladding sheets for industrial and commercial buildings"
    },
    {
      img: img6,
      title: "STANDING SEAM",
      description: "Standing seam roof panels has raised metal seams that are joined with concealed fasteners. These panels are attached to the building structure with high-strength metal clips without screws piercing through the sheets."
    },
    {
      img: img2,
      title: "WALKWAY",
      description: "Roof Walkway designs provide personnel protection from trips and falls around service equipment and parapet edges. The installation is customized to the roof layout offering unimpeded pedestrian access to congested areas."
    },
    {
      img: img3,
      title: "FALL ARRESTER",
      description: "Falls from height are the single biggest cause of death and one of the biggest cause of serious injury in the workplace today"
    },
    {
      img: img4,
      title: "Sandwich-panel",
      description: "Sandwich panels are a modular building material designed to cover buildings and structures. These panels consist of two layers that form the outer structure and ensure form, weather resistance and rigidity"
    },
    {
      img: img5,
      title: "Maintenance Services",
      description: "Roof maintenance, including cleaning, gutter clearance, and minor repairs, helps prolong the lifespan of the roof and ensures it performs optimally"
    }
  ];

  return (
    <>
      
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
          Our Service
        </Typography>
        <Box sx={{ border: "2px solid gray", width: {xs:"70%",sm:"80%"} }}></Box>
      </Box>
      <Grid sx={{padding:"0 20px 70px 20px"}} container spacing={3}>
        {services.map((service, index) => (
          <Grid  item key={index} xs={12} sm={6} md={4} lg={4}>
            <Box
          
              sx={{
                display: "flex",
                flexDirection: "column",
                padding:"20px",
                height:'480px',
                minHeight: "410px",
                boxShadow: "0px 4px 6px rgba(238, 238, 238, 1)",
              }}
            >
              <Avatar
                src={service.img}
                variant="square"
                sx={{
                  height: "200px",
                  width: "100%",
                }}
              ></Avatar>
              <Typography variant="h6" sx={{ padding: ".5rem 1rem", fontWeight: "bolder" }}>{service.title}</Typography>
              <Typography variant="p" sx={{ padding: ".0rem 1rem" }}>{service.description}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
