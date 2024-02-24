import { Avatar, Box, Typography } from '@mui/material';
import Containerimg1 from '../assets/container1img.jpg';
import project2 from '../assets/project1.jpg'
import project3 from '../assets/project2.jpg'
import project4 from '../assets/project3.jpg'
import project5 from '../assets/project5.jpg'


export default function ProjectCardDetails({boxData}) {
    return (
        <Box
            sx={{
                display: 'flex',
                backgroundColor: "#efefef",
                flexDirection: { xs: 'column-reverse', md: 'column' },
                gap: { xs: '3rem', md: '4rem' },
                marginBlock: '4rem',
                padding: "20px",
                marginTop: "13rem"
            }}
        >
            {boxData.map((data, index) => (
                <Box   
                    key={index}
                    sx={{
                        padding: {
                            xs: '0px 0px',
                            md: '0px 50px',
                            lg: '0px 0px',
                        },
                        boxShadow:" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                        borderRadius:{xs:"0px",md:"20px"},
                        backgroundColor: "white",
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: { xs: "auto", md: "90vh" },
                        flexDirection: index % 2 === 0 ? { xs: 'column', md: 'row' } : { xs: 'column', md: 'row-reverse' }, 
                        gap: '2rem',
                    }}
                >
                    <Avatar
                        variant='square'
                        src={data.src}
                        sx={{
                            borderRadius: index % 2 === 0 ?{ xs:"0px",md:"20px 0px 0px 20px"}  : {xs:"0px",md:"0px 20px 20px 0px"} ,
                            height: { xs: '50%', md: '100%' },
                            width: { xs: '100%', md: '50%' },
                        }}
                    ></Avatar>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'start',
                            flexDirection: 'column',
                            height: '100%',
                            gap: '20px',
                
                            padding: { xs: ' 20px', md: '20px ' },
                            
                            width: { xs: '100%', md: '50%' },
                        }}
                    >
                        <Typography variant='h4' sx={{ color:"#172154", fontSize: { xs: "24px", md: "34px" }, fontWeight: 'bolder' }}>
                            {data.title}
                        </Typography>
                        <Box
                            sx={{
                                width: '100%',
                                border: '2px solid grey',
                            }}
                        ></Box>
                    <Box  sx={{display:"flex",gap:"10px"}}>
                    <Typography sx={{color:"#172154",fontWeight:"bolder"}}> Location:</Typography>
                    <Typography sx={{color:"black",fontWeight:"bolder"}}>{data.Location}</Typography>
                    </Box>
                    <Box  sx={{display:"flex",gap:"10px"}}>
                    <Typography sx={{color:"#172154",fontWeight:"bolder"}}> Size:</Typography>
                    <Typography sx={{color:"black",fontWeight:"bolder"}}>{
                        data.Size
                    }</Typography>
                    </Box>
                    <Box  sx={{display:"flex",gap:"10px"}}>
                    <Typography sx={{color:"#172154",fontWeight:"bolder"}}> Year of Complete:</Typography>
                    <Typography sx={{color:"black",fontWeight:"bolder"}}>{data.year}</Typography>
                    </Box>
                    <Box>
                    <Typography sx={{color:"gray",fontWeight:"bolder"}}>
                 {data.about}
                    </Typography>

                    </Box>
                    </Box>
                </Box>
            ))}
        </Box>
    )
}
