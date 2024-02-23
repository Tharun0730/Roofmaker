import { Box } from "@mui/material";
import NavBar from "../../components/navBar";
import Footer from "../../components/Footer";
import { Service } from "../../components/service";

export default function Servicepage (){
    return(
        <>
       <NavBar/> 
       <Box sx={{
        marginTop:"140px"
       }}>
       <Service/>
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