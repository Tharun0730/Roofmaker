import { Avatar, Box, Typography } from '@mui/material';
import NavBar from '../../components/navBar';
import Background from '../../assets/beautiful-wooden-house-with-big-windows.jpg';
import slider2 from '../../assets/slider2.jpg';
import slider3 from '../../assets/slider3.jpg';
import Containerimg1 from '../../assets/container1img.jpg';
import Containerimg2 from '../../assets/conatiner3.jpg';
import Backscreenimg from '../../assets/Roofmaker1.jpg';
import { Service } from '../../components/service';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import HomeMsg from '../../components/HomeMsg';

export default function Home() {
    const images = [
        { image: slider2, text: 'ROOFING & CLADDING INSTALLERS' },
        { image: slider3, text: 'STANDING SEAM INSTALLER' },
        { image: Background, text: 'ROOF WALKWAY AND FALL ARREST INSTALLERS' },
    ];

    return (
        <>
            <NavBar />

            <Carousel images={images} autoplayInterval={3000} />
            <HomeMsg />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column-reverse', md: 'column' },
                    gap: { xs: '3rem', md: '2rem' },
                    marginBlock: '4rem',
                }}
            >
                <Box
                    sx={{
                        padding: {
                            xs: '0px 15px',
                            md: '0px 50px',
                            lg: '0px 100px',
                        },
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: '2rem',
                    }}
                >
                    <Avatar
                        variant='square'
                        src={Containerimg1}
                        sx={{
                            height: { xs: '50%', md: '100%' },
                            width: { xs: '90%', md: '50%' },
                        }}
                    ></Avatar>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            height: '100%',
                            gap: '20px',
                            padding: { xs: '0 20px', md: '0px 0px 0px 50px' },
                            width: { xs: '100%', md: '50%' },
                        }}
                    >
                        <Typography variant='h4' sx={{ fontWeight: 'bolder' }}>
                            Various Commercial Roofing Options
                        </Typography>
                        <Box
                            sx={{
                                width: '100%',
                                border: '2px solid black',
                            }}
                        ></Box>
                        <Typography
                            variant='p'
                            sx={{
                                paddingBottom: '10px',
                            }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ipsam aperiam nisi iure similique expedita
                            harum sint voluptatum cumque culpa sunt laboriosam
                            excepturi quae dolor nam veniam minima eos
                            distinctio ea saepe quibusdam esse, aut commodi.
                            Fugiat, reiciendis dicta sapiente mollitia unde
                            voluptate officia consectetur distinctio voluptatem
                            assumenda iste ad ducimus soluta quidem impedit.
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        padding: {
                            xs: '0px 15px',
                            md: '0px 50px',
                            lg: '0px 100px',
                        },
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: { xs: 'column', md: 'row-reverse' },
                        gap: '2rem',
                    }}
                >
                    <Avatar
                        variant='square'
                        src={Containerimg2}
                        sx={{
                            height: { xs: '50%', md: '100%' },
                            width: { xs: '90%', md: '50%' },
                        }}
                    ></Avatar>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            height: '100%',

                            gap: '20px',
                            padding: { xs: '0 20px', md: '0px 50px 0 0' },
                            width: { xs: '100%', md: '50%' },
                        }}
                    >
                        <Typography variant='h4' sx={{ fontWeight: 'bolder' }}>
                            Expert Help With Residential Roofing
                        </Typography>
                        <Box
                            sx={{
                                width: '100%',
                                border: '2px solid black',
                            }}
                        ></Box>
                        <Typography
                            sx={{
                                paddingBottom: '10px',
                            }}
                            variant='p'
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ipsam aperiam nisi iure similique expedita
                            harum sint voluptatum cumque culpa sunt laboriosam
                            excepturi quae dolor nam veniam minima eos
                            distinctio ea saepe quibusdam esse, aut commodi.
                            Fugiat, reiciendis dicta sapiente mollitia unde
                            voluptate officia consectetur distinctio voluptatem
                            assumenda iste ad ducimus soluta quidem impedit.
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    justifyContent: 'end',
                    alignItems: 'center',
                    backgroundImage: `url(${Backscreenimg})`,
                    backgroundSize: 'cover',

                    backgroundAttachment: 'fixed',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        height: '100%',

                        gap: '20px',
                        padding: '1rem',
                        width: { xs: '100%', md: '50%' },
                    }}
                >
                    <Typography
                        variant='h4'
                        sx={{ fontWeight: 'bolder', color: 'Black' }}
                    >
                        Expert Help With Residential Roofing
                    </Typography>
                    <Box
                        sx={{
                            width: '100%',
                            border: '2px solid black',
                        }}
                    ></Box>
                    <Box
                        sx={{
                            backgroundColor: 'rgba(0, 0, 0, 0.708)',
                            padding: '15px',
                            borderRadius: '10px',
                        }}
                    >
                        <Typography variant='p' sx={{ color: 'white' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ipsam aperiam nisi iure similique expedita
                            harum sint voluptatum cumque culpa sunt laboriosam
                            excepturi quae dolor nam veniam minima eos
                            distinctio ea saepe quibusdam esse, aut commodi.
                            Fugiat, reiciendis dicta sapiente mollitia unde
                            voluptate officia consectetur distinctio voluptatem
                            assumenda iste ad ducimus soluta quidem impedit
                            iusto vero maiores voluptatum? Quia, ut doloribus
                            repellendus, aperiam dolor quam ex culpa ullam magni
                            enim cumque facere reprehenderit similique!
                            Perspiciatis voluptate vero cupiditate laboriosam
                            consequatur beatae ex veritatis amet ullam, nesciunt
                            elit. Cum eveniet exercitationem sint aut libero
                            nisi officiis perspiciatis corporis molestias
                            cumque.
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Service />
            <Box
                sx={{
                    backgroundColor: ' rgb(209, 209, 209)',
                    height: '440px',
                    paddingTop: '10px',
                    width: '100%',
                }}
            >
                <Footer />
            </Box>
        </>
    );
}
