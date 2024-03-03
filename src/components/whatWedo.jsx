import { Box, Typography } from '@mui/material';
import React from 'react';
import { HiHomeModern } from 'react-icons/hi2';
import NoFastenersIcon from '@mui/icons-material/Clear'; // Replace with the actual Material-UI icon component

export default function WhatWedo({ data }) {
  return (
    <Box sx={{ margin:"50px 0" }}>
      <Typography variant='h3' sx={{margin:"10px", padding:"10px 0px",textAlign: "center", fontSize: "2.125rem", fontWeight: "bolder", fontFamily: "Poppins !important" }}>
        Why To Choose <Typography variant='span' sx={{ textAlign: "center", fontSize: "2.125rem", fontWeight: "bolder", fontFamily: "Poppins !important", color: "#4269E2" }}>
          Us?
        </Typography>
      </Typography>
      <Box sx={{gap:"20px",padding:"10px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
        {data.map((datas) => (
          <Box key={datas.title} sx={{ padding: "10px", borderRadius: "10px", gap: "20px", width: "250px", height: "250px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>

            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "#4269E2", borderRadius: "50%", padding: "10px" }}>
              {datas.icon}
            </Box>
            <Typography sx={{ textAlign: "center", color: "gray",fontWeight: "bolder" }}>
              {datas.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
