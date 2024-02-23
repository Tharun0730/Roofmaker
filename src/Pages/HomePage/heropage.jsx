import { Avatar, Box, Typography } from "@mui/material";
import NavBar from "../../components/navBar";
import Background from "../../assets/beautiful-wooden-house-with-big-windows.jpg";
import slider2 from "../../assets/slider2.jpg"
import slider3 from "../../assets/slider3.jpg"
import Containerimg1 from "../../assets/container1img.jpg";
import Containerimg2 from "../../assets/conatiner3.jpg";
import Backscreenimg from "../../assets/Roofmaker1.jpg";
import { Service } from "../../components/service";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";

export default function Home() {

  const images = [ Background, slider2, slider3]

  return (
    <>
      <NavBar />


    <Carousel images={images} autoplayInterval={3000} />


      <Box
        sx={{
          height: "100vh",
          padding: "0px 100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar
          variant="square"
          src={Containerimg1}
          sx={{
            height: "100%",
            width: "50%",
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
            padding: "0px 0px 0px 50px",
            width: "50%",
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
          <Typography variant="p" sx={{
            paddingBottom:"10px"
          }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            aperiam nisi iure similique expedita harum sint voluptatum cumque
            culpa sunt laboriosam excepturi quae dolor nam veniam minima eos
            distinctio ea saepe quibusdam esse, aut commodi. Fugiat, reiciendis
            dicta sapiente mollitia unde voluptate officia consectetur
            distinctio voluptatem assumenda iste ad ducimus soluta quidem
            impedit iusto vero maiores voluptatum? Quia, ut doloribus
            repellendus, aperiam dolor quam ex culpa ullam magni enim cumque
            facere reprehenderit similique! Perspiciatis voluptate vero
            cupiditate laboriosam consequatur beatae ex veritatis amet ullam,
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          flexDirection: "row-reverse",
          height: "100vh",
          padding: "0px 100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar
          variant="square"
          src={Containerimg2}
          sx={{
            height: "100%",
            width: "50%",
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
            padding: "0px 50px 0 0",
            width: "50%",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bolder" }}>
            Expert Help With Residential Roofing
          </Typography>
          <Box
            sx={{
              width: "100%",
              border: "2px solid black",
            }}
          ></Box>
          <Typography sx={{
            paddingBottom:"10px"
          }} variant="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            aperiam nisi iure similique expedita harum sint voluptatum cumque
            culpa sunt laboriosam excepturi quae dolor nam veniam minima eos
            distinctio ea saepe quibusdam esse, aut commodi. Fugiat, reiciendis
            dicta sapiente mollitia unde voluptate officia consectetur
            distinctio voluptatem assumenda iste ad ducimus soluta quidem
            impedit iusto vero maiores voluptatum? Quia, ut doloribus
            repellendus, aperiam dolor quam ex culpa ullam magni enim cumque
            facere reprehenderit similique! Perspiciatis voluptate vero
            cupiditate laboriosam consequatur beatae ex veritatis amet ullam,
            
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          backgroundImage: `url(${Backscreenimg})`,
          backgroundSize: "cover",

          backgroundAttachment: "fixed",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "100%",

            gap: "20px",
            padding: "0px 50px 0 0",
            width: "50%",
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              aperiam nisi iure similique expedita harum sint voluptatum cumque
              culpa sunt laboriosam excepturi quae dolor nam veniam minima eos
              distinctio ea saepe quibusdam esse, aut commodi. Fugiat,
              reiciendis dicta sapiente mollitia unde voluptate officia
              consectetur distinctio voluptatem assumenda iste ad ducimus soluta
              quidem impedit iusto vero maiores voluptatum? Quia, ut doloribus
              repellendus, aperiam dolor quam ex culpa ullam magni enim cumque
              facere reprehenderit similique! Perspiciatis voluptate vero
              cupiditate laboriosam consequatur beatae ex veritatis amet ullam,
              nesciunt  elit. Cum eveniet
              exercitationem sint aut libero nisi officiis perspiciatis corporis
              molestias cumque.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Service />
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