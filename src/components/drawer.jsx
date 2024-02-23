import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Typography } from '@mui/material';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
      <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "0px 20px",
                        flexDirection:"column",
                        paddingTop:"30px",
                        position: "relative", // Position relative for dropdown
                    }}
                >
                    <Typography
                        className="typography-menu"
                     
                        sx={{
                            color: "black",
                            cursor: "pointer",
                            ":hover": {
                                color: "skyblue",
                            },
                            fontSize: "17px",
                            fontWeight: "500",
                        }}
                        variant="p"
                    >
                        Home
                    </Typography>
                    <Typography
                        className="typography-menu"
                       
                        sx={{
                            color: "black",
                            cursor: "pointer",
                            ":hover": {
                                color: "skyblue",
                            },
                            fontSize: "17px",
                            fontWeight: "500",
                        }}
                        variant="p"
                    >
                        About Us
                    </Typography>
                    <div className="services-menu">
                        <Typography
                           onClick={() => {
                            handleNav("/service");
                        }}
                            className="typography-menu"
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "black",
                                cursor: "pointer",
                                ":hover": {
                                    color: "skyblue",
                                },
                                fontSize: "17px",
                                fontWeight: "500",
                            }}
                            variant="p"
                        >
                            Our Services
                            {/* Our Services <ArrowDropDownIcon /> */}
                        </Typography>
                        <div className="services-dropdown">
                            <Typography
                                sx={{
                                    color: "black",
                                    cursor: "pointer",
                                    width: "100%",
                                    padding: "6px",
                                    ":hover": {
                                        background: "white",
                                        color: "skyblue",
                                    },
                                    fontSize: "17px",
                                    fontWeight: "500",
                                }}
                                variant="p"
                            >
                                Service 1
                            </Typography>
                            <Typography
                                sx={{
                                    color: "black",
                                    cursor: "pointer",
                                    width: "100%",
                                    padding: "6px",
                                    ":hover": {
                                        background: "white",
                                        color: "skyblue",
                                    },
                                    fontSize: "17px",
                                    fontWeight: "500",
                                }}
                                variant="p"
                            >
                                Service 2
                            </Typography>
                            <Typography
                                sx={{
                                    color: "black",
                                    cursor: "pointer",
                                    width: "100%",
                                    padding: "6px",
                                    ":hover": {
                                        background: "white",
                                        color: "skyblue",
                                    },
                                    fontSize: "17px",
                                    fontWeight: "500",
                                }}
                                variant="p"
                            >
                                Service 3
                            </Typography>
                        </div>
                    </div>
                    <div className="projects-menu">
                        <Typography
                            className="typography-menu"
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "black",
                                cursor: "pointer",
                                ":hover": {
                                    color: "skyblue",
                                },
                                fontSize: "17px",
                                fontWeight: "500",
                            }}
                            variant="p"
                        >
                            Projects <ArrowDropDownIcon />
                        </Typography>
                        <div className="projects-dropdown">
                            <Typography
                                sx={{
                                    color: "white",
                                    cursor: "pointer",
                                    width: "100%",
                                    padding: "6px",
                                    ":hover": {
                                        background: "white",
                                        color: "skyblue",
                                    },
                                    fontSize: "15px",
                                    fontWeight: "500",
                                }}
                                variant="p"
                            >
                                Standing seam
                            </Typography>
                            <Typography
                                sx={{
                                    color: "white",
                                    cursor: "pointer",
                                    width: "100%",
                                    padding: "6px",
                                    ":hover": {
                                        background: "white",
                                        color: "skyblue",
                                    },
                                    fontSize: "15px",
                                    fontWeight: "500",
                                }}
                                variant="p"
                            >
                                Sandwich Panel
                            </Typography>
                            <Typography
                                sx={{
                                    color: "white",
                                    cursor: "pointer",
                                    width: "100%",
                                    padding: "6px",
                                    ":hover": {
                                        background: "white",
                                        color: "skyblue",
                                    },
                                    fontSize: "15px",
                                    fontWeight: "500",
                                }}
                                variant="p"
                            >
                                WalkWay & fall
                            </Typography>
                        </div>
                    </div>
                    <Typography
                 className="typography-menu"
                        sx={{
                            color: "black",
                            cursor: "pointer",
                            ":hover": {
                                color: "skyblue",
                            },
                            fontSize: "17px",
                            fontWeight: "500",
                        }}
                        variant="p"
                    >
                        Contact Us
                    </Typography>
                </Box>
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
