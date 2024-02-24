import { Avatar, Box, Grid, Typography } from "@mui/material";
import img1 from "../assets/container1img.jpg";
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';

export function Service() {
  const services = [
    {
      img: img1,
      title: "Stell Erection",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quidem placeat quam voluptatum reprehenderit reiciendis quae distinctio. Fugit cum, nostrum maiores voluptas distinctio incidunt sed, sint impedit, officiis nisi minus!"
    },
    {
      img: img1,
      title: "Stell Erection",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quidem placeat quam voluptatum reprehenderit reiciendis quae distinctio. Fugit cum, nostrum maiores voluptas distinctio incidunt sed, sint impedit, officiis nisi minus!"
    },
    {
      img: img2,
      title: "Standing Seam",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quidem placeat quam voluptatum reprehenderit reiciendis quae distinctio. Fugit cum, nostrum maiores voluptas distinctio incidunt sed, sint impedit, officiis nisi minus!"
    },
    {
      img: img3,
      title: "Service Three",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quidem placeat quam voluptatum reprehenderit reiciendis quae distinctio. Fugit cum, nostrum maiores voluptas distinctio incidunt sed, sint impedit, officiis nisi minus!"
    },
    {
      img: img4,
      title: "Service Four",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quidem placeat quam voluptatum reprehenderit reiciendis quae distinctio. Fugit cum, nostrum maiores voluptas distinctio incidunt sed, sint impedit, officiis nisi minus!"
    },
    {
      img: img5,
      title: "Service Five",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quidem placeat quam voluptatum reprehenderit reiciendis quae distinctio. Fugit cum, nostrum maiores voluptas distinctio incidunt sed, sint impedit, officiis nisi minus!"
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
