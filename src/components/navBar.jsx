import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {
    Avatar,
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Popover,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import logo from '../assets/cropped-logo16032022_300x300.png';
import QuickNavigator from './QuickNavigator';
import MenuIcon from '@mui/icons-material/Menu';
import './navbar.css';
import MobileDrawer from './MobileDrawer';

export default function NavBar() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();
    const handleNav = (path) => {
        navigate(path);
        setDrawerOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const threshold = 100;

            setVisible(
                (prevScrollPos > currentScrollPos &&
                    prevScrollPos - currentScrollPos > threshold) ||
                    currentScrollPos < threshold
            );
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible]);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <Box
            className='navbar-wrapper'
            sx={{
                position: 'fixed',
                top: visible ? '0' : '-100%', // Hide the navbar off-screen when not visible
                width: '100%',
                transition: 'top 0.3s ease', // Add transition effect for smooth appearance
                zIndex: 999,
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <QuickNavigator />
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '5px 25px',
                }}
            >
                <Avatar
                    variant='square'
                    sx={{
                        objectFit: 'cover',
                        height: '150px',
                        width: '200px',
                    }}
                    src={logo}
                />
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0px 20px',
                        
                    }}
                >
                    {!isMobile ? (
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '0px 20px',
                                paddingTop: '30px',
                                position: 'relative', // Position relative for dropdown
                            }}
                        >
                            <Typography
                                className='typography-menu'
                                onClick={() => {
                                    handleNav('/');
                                }}
                                sx={{
                                    color:
                                        location.pathname === '/'
                                            ? 'skyblue'
                                            : 'black',
                                    cursor: 'pointer',
                                    ':hover': {
                                        color: 'skyblue',
                                    },
                                    fontSize: '17px',
                                    fontWeight: '500',
                                }}
                                variant='p'
                            >
                                Home
                            </Typography>
                            <Typography
                                className='typography-menu'
                                onClick={() => {
                                    handleNav('/about');
                                }}
                                sx={{
                                    color:
                                        location.pathname === '/about'
                                            ? 'skyblue'
                                            : 'black',
                                    cursor: 'pointer',
                                    ':hover': {
                                        color: 'skyblue',
                                    },
                                    fontSize: '17px',
                                    fontWeight: '500',
                                }}
                                variant='p'
                            >
                                About Us
                            </Typography>
                            <div className='services-menu'>
                                <Typography
                                    onClick={() => {
                                        handleNav('/service');
                                    }}
                                    className='typography-menu'
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        color:
                                            location.pathname === '/service'
                                                ? 'skyblue'
                                                : 'black',
                                        cursor: 'pointer',
                                        ':hover': {
                                            color: 'skyblue',
                                        },
                                        fontSize: '17px',
                                        fontWeight: '500',
                                    }}
                                    variant='p'
                                >
                                    Our Services
                                    {/* Our Services <ArrowDropDownIcon /> */}
                                </Typography>
                                <div className='services-dropdown'>
                                    <Typography
                                        sx={{
                                            color: 'black',
                                            cursor: 'pointer',
                                            width: '100%',
                                            padding: '6px',
                                            ':hover': {
                                                background: 'white',
                                                color: 'skyblue',
                                            },
                                            fontSize: '17px',
                                            fontWeight: '500',
                                        }}
                                        variant='p'
                                    >
                                        Service 1
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: 'black',
                                            cursor: 'pointer',
                                            width: '100%',
                                            padding: '6px',
                                            ':hover': {
                                                background: 'white',
                                                color: 'skyblue',
                                            },
                                            fontSize: '17px',
                                            fontWeight: '500',
                                        }}
                                        variant='p'
                                    >
                                        Service 2
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: 'black',
                                            cursor: 'pointer',
                                            width: '100%',
                                            padding: '6px',
                                            ':hover': {
                                                background: 'white',
                                                color: 'skyblue',
                                            },
                                            fontSize: '17px',
                                            fontWeight: '500',
                                        }}
                                        variant='p'
                                    >
                                        Service 3
                                    </Typography>
                                </div>
                            </div>
                            <div className='projects-menu'>
                                <Typography
                                    onClick={() => {handleNav('/projects')}}
                                    className='typography-menu'
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        color:   location.pathname === '/projects'
                                        ? 'skyblue'
                                        : 'black',
                                        cursor: 'pointer',
                                        ':hover': {
                                            color: 'skyblue',
                                        },
                                        fontSize: '17px',
                                        fontWeight: '500',
                                    }}
                                    variant='p'
                                >
                                    Projects <ArrowDropDownIcon />
                                </Typography>
                                <div className='projects-dropdown'>
                                    <Typography
                                     onClick={() => {
                                        handleNav('/standingSeam');
                                    }}
                                        sx={{
                                            color: 'white',
                                            cursor: 'pointer',
                                            width: '100%',
                                            padding: '6px',
                                            ':hover': {
                                                background: 'white',
                                                color: 'skyblue',
                                            },
                                            fontSize: '15px',
                                            fontWeight: '500',
                                        }}
                                        variant='p'
                                    >
                                        Standing seam
                                    </Typography>
                                    <Typography
                                              onClick={() => {
                                                handleNav('/sandwichPanel');
                                            }}
                                        sx={{
                                            color: 'white',
                                            cursor: 'pointer',
                                            width: '100%',
                                            padding: '6px',
                                            ':hover': {
                                                background: 'white',
                                                color: 'skyblue',
                                            },
                                            fontSize: '15px',
                                            fontWeight: '500',
                                        }}
                                        variant='p'
                                    >
                                        Sandwich Panel
                                    </Typography>
                                    <Typography
                                              onClick={() => {
                                                handleNav('/walkWayAndFall');
                                            }}
                                        sx={{
                                            color: 'white',
                                            cursor: 'pointer',
                                            width: '100%',
                                            padding: '6px',
                                            ':hover': {
                                                background: 'white',
                                                color: 'skyblue',
                                            },
                                            fontSize: '15px',
                                            fontWeight: '500',
                                        }}
                                        variant='p'
                                    >
                                        WalkWay & fall
                                    </Typography>
                                </div>
                            </div>
                            <Typography
                                onClick={() => {
                                    handleNav('/contactus');
                                }}
                                className='typography-menu'
                                sx={{
                                    color:
                                        location.pathname === '/contactus'
                                            ? 'skyblue'
                                            : 'black',
                                    cursor: 'pointer',
                                    ':hover': {
                                        color: 'skyblue',
                                    },
                                    fontSize: '17px',
                                    fontWeight: '500',
                                }}
                                variant='p'
                            >
                                Contact Us
                            </Typography>
                        </Box>
                    ) : (
                        <IconButton
                            onClick={() => setDrawerOpen(true)}
                            sx={{ color: 'black' }}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                </Box>
            </Box>
            {/* Drawer for mobile */}
            <Drawer
                anchor='right'
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: '300px',
                        backgroundColor: theme.palette.background.default,
                        color: theme.palette.text.primary,
                    },
                }}
            >
                <MobileDrawer handleNav={() => handleNav}/>
            </Drawer>
        </Box>
    );
}
