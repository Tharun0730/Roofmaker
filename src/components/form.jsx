import { Box, Button, TextField, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function ContactUS() {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingBottom:"100px "
             
                
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    flexDirection: "column",
                    width: "500px",
                    gap: "20px",
                    padding: "30px 30px",
                    height:"812px",
                boxShadow: "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px"

                   
                }}
            >
                {/* Contact Details */}
                <Typography
                    sx={{
                        fontSize: "30px",
                        fontWeight: "bolder",
                        color: "#333333",
                    }}
                >
                    Get In Touch
                </Typography>
                {/* Location */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "start",
                        gap: "10px",
                        
                    }}
                >
                    <LocationOnIcon
                        sx={{
                            fontSize: "25px",
                            color: "#1976d2!important",
                        }}
                    />
                    <Typography
                        sx={{
                            fontSize: "18px",
                            fontWeight: "bolder",
                            color: "grey",
                        }}
                    >
                        PRECISION ROOF MAKERS For Turnkey Projects Contracting
                        <Typography
                        sx={{
                            padding:"5px 0",
                            fontSize: "18px",
                           
                            color: "grey",
                        }}
                    >
                         P.O Box: 33262, Al Karama, Near Central Post Office,
                        Dubai, United Arab Emirates
                       
                    </Typography>
                       
                    </Typography>
                 

                   
                </Box>
                {/* Phone */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        gap: "10px",
                    }}
                >
                    <CallIcon
                        sx={{
                            fontSize: "25px",
                            color: "#1976d2!important",
                        }}
                    />
                    <Typography
                        sx={{
                            fontSize: "18px",
                            fontWeight: "bolder",
                            color: "grey",
                        }}
                    >
                        +971 524 022 744, +971 52 450 4254
                    </Typography>
                </Box>
                {/* Email */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        gap: "10px",
                    }}
                >
                    <MailOutlineIcon
                        sx={{
                            fontSize: "25px",
                            color: "#1976d2!important",
                        }}
                    />
                    <Typography
                        sx={{
                            fontSize: "18px",
                            fontWeight: "bolder",
                            color: "grey",
                        }}
                    >
                        admin@precisionroofmakers.com
                    </Typography>
                </Box>
                {/* Office Hours */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        gap: "10px",
                    }}
                >
                    <AccessTimeIcon
                        sx={{
                            fontSize: "25px",
                            color: "#1976d2!important",
                        }}
                    />
                    <Typography
                        sx={{
                            fontSize: "18px",
                            fontWeight: "bolder",
                            color: "grey",
                        }}
                    >
                        Mon-Fri: | 09:00 - 17:00
                    </Typography>
                </Box>
                {/* Quote Form */}
                <Typography
                    sx={{
                        fontSize: "30px",
                        fontWeight: "bolder",
                        color: "#333333",
                    }}
                >
                    Send Us A Quote
                </Typography>
                <TextField id="outlined-basic" sx={{ width: "90%" }} label="Name" variant="outlined" />
                <TextField id="outlined-basic" sx={{ width: "90%" }} label="Email" variant="outlined" />
                <TextField id="outlined-basic" sx={{ width: "90%" }} label="Phone Number" variant="outlined" />
                <TextField id="outlined-basic" sx={{ width: "90%" }} label="Message" variant="outlined" />
                <Button variant="contained" sx={{ width: "90%" }}>
                    Submit
                </Button>
            </Box>
            {/* Google Maps */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    flexDirection: "column",
                    width: "45%",
                    height:"812px",
                   
                }}
            >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7217.555026095422!2d55.29999754425859!3d25.244417614946197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42d5cd070fdb%3A0x291957c5950d16ce!2sEmirates%20Post%20-%20Dubai%20Central%20Post%20Office!5e0!3m2!1sen!2sin!4v1708671859977!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                ></iframe>
            </Box>
        </Box>
    );
}
