import { Box, Typography } from "@mui/material";
import ContactUS from "../../components/form";
import NavBar from "../../components/navBar";
import Footer from "../../components/Footer";

export default function ContactPage (){
    return(
<>
<NavBar/>
<Box
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          padding: "50px 20px",
          marginTop:"130px",
          gap: "10px",
        }}
      >
        <Typography
          variant="p"
          sx={{
            fontSize: "35px",
            fontWeight: "bolder",
            color: "gray",
          }}
        >
          Contact Us
        </Typography>
        <Box sx={{ border: "1px solid gray", width: "80%" }}></Box>
      </Box>
<Box   >
<ContactUS/>
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
    )
}