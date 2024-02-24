import { Avatar, Box, Typography } from "@mui/material";
import Containerimg1 from "../../assets/container1img.jpg";
import project2 from "../../assets/project1.jpg";
import project3 from "../../assets/project2.jpg";
import project4 from "../../assets/project3.jpg";
import project5 from "../../assets/project5.jpg";
import NavBar from './../../components/navBar';
import Footer from './../../components/Footer';
const boxData = [
  {
    src: Containerimg1,
    title: "Various Commercial Roofing Options",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aperiam nisi iure similique expedita harum sint voluptatum cumque culpa sunt laboriosam excepturi quae dolor nam veniam minima eos distinctio ea saepe quibusdam esse, aut commodi. Fugiat, reiciendis dicta sapiente mollitia unde voluptate officia consectetur distinctio voluptatem assumenda iste ad ducimus soluta quidem impedit.",
  },
  {
    src: project2,
    title: "Standing Seam",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aperiam nisi iure similique expedita harum sint voluptatum cumque culpa sunt laboriosam excepturi quae dolor nam veniam minima eos distinctio ea saepe quibusdam esse, aut commodi. Fugiat, reiciendis dicta sapiente mollitia unde voluptate officia consectetur distinctio voluptatem assumenda iste ad ducimus soluta quidem impedit.",
  },
  {
    src: project3,
    title: "MULTI-FAMILY Roofing in Florida",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aperiam nisi iure similique expedita harum sint voluptatum cumque culpa sunt laboriosam excepturi quae dolor nam veniam minima eos distinctio ea saepe quibusdam esse, aut commodi. Fugiat, reiciendis dicta sapiente mollitia unde voluptate officia consectetur distinctio voluptatem assumenda iste ad ducimus soluta quidem impedit.",
  },
  {
    src: project4,
    title: "Residential Roofing in Florida",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aperiam nisi iure similique expedita harum sint voluptatum cumque culpa sunt laboriosam excepturi quae dolor nam veniam minima eos distinctio ea saepe quibusdam esse, aut commodi. Fugiat, reiciendis dicta sapiente mollitia unde voluptate officia consectetur distinctio voluptatem assumenda iste ad ducimus soluta quidem impedit.",
  },
  {
    src: project5,
    title: "MULTI-FAMILY Roofing in Florida",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aperiam nisi iure similique expedita harum sint voluptatum cumque culpa sunt laboriosam excepturi quae dolor nam veniam minima eos distinctio ea saepe quibusdam esse, aut commodi. Fugiat, reiciendis dicta sapiente mollitia unde voluptate officia consectetur distinctio voluptatem assumenda iste ad ducimus soluta quidem impedit.",
  },
  {
    src: project4,
    title: "Various Commercial Roofing Options",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aperiam nisi iure similique expedita harum sint voluptatum cumque culpa sunt laboriosam excepturi quae dolor nam veniam minima eos distinctio ea saepe quibusdam esse, aut commodi. Fugiat, reiciendis dicta sapiente mollitia unde voluptate officia consectetur distinctio voluptatem assumenda iste ad ducimus soluta quidem impedit.",
  },
  // Add more objects as needed for additional boxes
];

export default function Projects() {
  return (
    <>
        <NavBar/>
        <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          padding:  {xs:"50px 20px 10px 20px",lg:"50px 20px"} ,
          marginTop:"14rem",
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
            Projects
        </Typography>
        <Box sx={{ border: "2px solid gray", width: {xs:"70%",sm:"80%"} }}></Box>
      </Box>
      <Box
        sx={{
          display: "flex",

          backgroundColor: "#efefef",
          flexDirection: { xs: "column-reverse", md: "column" },
          gap: { xs: "3rem", md: "4rem" },
          marginBlock: "4rem",
          padding: "20px",
        }}
      >
        {boxData.map((data, index) => (
          <Box
            key={index}
            sx={{
              padding: {
                xs: "0px 15px",
                md: "0px 50px",
                lg: "0px 0px",
              },
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: { xs: "auto", md: "80vh" },
              flexDirection:
                index % 2 === 0
                  ? { xs: "column", md: "row" }
                  : { xs: "column", md: "row-reverse" },
                  borderRadius: "20px",
              gap: "2rem",
            }}
          >
            <Avatar
              variant="square"
              src={data.src}
              sx={{
                height: { xs: "50%", md: "100%" },
                width: { xs: "90%", md: "50%" },
                borderRadius: index % 2 === 0 ? "20px 0px 0px 20px": "0 20px 20px 0"
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
                padding: { xs: "0 20px", md: "20px " },
                width: { xs: "100%", md: "50%" },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: "24px", md: "34px" },
                  fontWeight: "bolder",
                }}
              >
                {data.title}
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
                {data.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Footer/>
    </>
  );
}
