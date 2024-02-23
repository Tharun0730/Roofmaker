import { Box } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
function QuickNavigator() {
    return (
        <Box
            sx={{
                width: "85%",
                height: "40px",
                color:"white",
                background: "#a09d9d",
                position: "absolute",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 10% 100%)",
                display: "flex",
                alignItems: "center",
                paddingLeft: "8rem",
                justifyContent: "space-around",
            }}
        >
            <Box sx={{ display: "flex", gap: "2rem",cursor:"pointer" }}>
                <Box sx={{display:"flex",alignItems:"center ",gap:"5px", ":hover":{
                        color:"skyblue"
                    },fontSize:"14px"}}> <LocalPhoneIcon/> +971586785443 </Box>
                <Box  sx={{display:"flex",alignItems:"center ",gap:"5px", ":hover":{
                        color:"skyblue"
                    },fontSize:"14px"}}><AccessTimeIcon/>  Mon - Fri | 09:00-17:00</Box>
                <Box sx={{display:"flex",alignItems:"center ",gap:"5px", ":hover":{
                        color:"skyblue"
                    },fontSize:"14px"}} >  <MailOutlineIcon/>  Admin@precisionroofmakers.com</Box>
            </Box>
            <Box sx={{ display: "flex", gap: "1rem",cursor:"pointer"  }}>
                <FacebookIcon sx={{
                    ":hover":{
                        color:"skyblue"
                    },fontSize:"21px"
                }} />
               < InstagramIcon   sx={{
                    ":hover":{
                        color:"skyblue"
                    },fontSize:"21px"
                }}/>
               < TwitterIcon  sx={{
                    ":hover":{
                        color:"skyblue"
                    },fontSize:"21px"
                }}/>
               < YouTubeIcon  sx={{
                    ":hover":{
                        color:"skyblue"
                    },fontSize:"21px"
                }}/>
            </Box>
            <Box></Box>
        </Box>
    );
}

export default QuickNavigator;
