import React, { useState } from "react";
import { Box, Divider, List, ListItem, ListItemText, Popover, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function MobileDrawer({ handleNav }) {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpenDropdown = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseDropdown = () => {
        setAnchorEl(null);
    };


    return (
        <Box sx={{ padding: "16px" }}>
            <List>
                <ListItem
                    button
                    onClick={() => handleNav("/")}
                    component={Link}
                    to="/"
                    sx={{
                        borderRadius: "8px",
                        marginBottom: "12px",
                        "&:hover": {
                            backgroundColor: "#f5f5f5", // Light gray on hover
                        },
                    }}
                >
                    <ListItemText primary="Home" />
                </ListItem>

                <ListItem
                    button
                    onClick={() => handleNav("/about")}
                    component={Link}
                    to="/about"
                    sx={{
                        borderRadius: "8px",
                        marginBottom: "12px",
                        "&:hover": {
                            backgroundColor: "#f5f5f5",
                        },
                    }}
                >
                    <ListItemText primary="About" />
                </ListItem>

                <ListItem
                    button
                    onClick={() => handleNav("/service")}
                    component={Link}
                    to="/service"
                    sx={{
                        borderRadius: "8px",
                        marginBottom: "12px",
                        "&:hover": {
                            backgroundColor: "#f5f5f5",
                        },
                    }}
                >
                    <ListItemText primary="Service" />
                </ListItem>

                <ListItem
                    button
                    onClick={() => handleNav("/contactus")}
                    component={Link}
                    to="/contactus"
                    sx={{
                        borderRadius: "8px",
                        marginBottom: "12px",
                        "&:hover": {
                            backgroundColor: "#f5f5f5",
                        },
                    }}
                >
                    <ListItemText primary="Contact Us" />
                </ListItem>

                {/* Dropdown for Projects */}
                <ListItem
                    button
                    onClick={handleOpenDropdown}
                    sx={{
                        borderRadius: '8px',
                        marginBottom: '12px',
                        '&:hover': {
                            backgroundColor: '#f5f5f5',
                        },
                    }}
                >
                    <ListItemText primary="Projects" />
                </ListItem>
            </List>

            {/* Popover for Projects Dropdown */}
            <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleCloseDropdown}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <Box sx={{ padding: '16px' }}>
                    <Typography variant="h6" gutterBottom sx={{ marginBottom: '8px' }}>
                        Projects
                    </Typography>
                    <List>
                        {['/standingSeam', '/sandwichPanel', '/walkwayAndFall'].map(
                            (path) => (
                                <ListItem
                                    key={path}
                                    button
                                    onClick={() => {
                                        handleNav(path);
                                        handleCloseDropdown();
                                    }}
                                    component="a" // Use 'a' as component for external links
                                    href={path}
                                    sx={{
                                        borderRadius: '8px',
                                        '&:hover': {
                                            backgroundColor: '#f5f5f5',
                                        },
                                        marginBottom: '8px',
                                    }}
                                >
                                    <ListItemText primary={path === '/walkwayAndFall' ? 'Walk way and Fall': path ===  '/sandwichPanel' ? 'Sandwich Panel' : 'Standing Seam'} />
                                </ListItem>
                            )
                        )}
                    </List>
                </Box>
            </Popover>

            <Divider />
            {/* Add additional links or dropdown menu items here */}
        </Box>
    );
}

export default MobileDrawer;
