"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import MoodIcon from "@mui/icons-material/Mood";
import GitHubActivity from "../github-activity";
import Image from "next/image";

const MainSection = () => {
  // const [hover, setHover] = useState(false);

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          padding: "16px",
          borderRadius: "8px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Responsive layout
          alignItems: { xs: "center", md: "flex-start" },
          width: "100%",
          gap: "10px",
          backgroundColor: "#fff",
          margin: "20px 0px",
        }}
      >
        {/* Left Section (Avatar & Profile Info) */}
        <Box
          sx={{
            width: { xs: "100%", md: "30%" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Profile Image */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: { xs: "150px", sm: "180px", md: "75%" },
                height: { xs: "150px", sm: "180px", md: "250px" },
                borderRadius: "50%",
                border: "1px solid #E0E4E7",
                backgroundColor: "#F0F0F0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image src="/avator.png" alt="avatar" width={150} height={100} />
            </Box>

            {/* Status Button */}

            <Box
              sx={{
                border: "1px solid #D7DAE0",
                height: "45px",
                borderRadius: "50px",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                position: "absolute",
                right: { xs: "10px", md: "30px" },
                bottom: { xs: "10px", md: "50px" },
                backgroundColor: "#fff",
                gap: "5px",
                padding: "0 10px",
                width: "45px",
                justifyContent: "flex-start",
                overflow: "hidden",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  width: "120px",
                  right: { xs: "10px", md: "-30px" },
                  "& .icon, & .text": {
                    color: "#0256B3", transition: "all 0.3s ease-in",
                  },
                },
              }}
            >
              <MoodIcon className="icon" sx={{ color: "#747C86" }} />
              <Typography
                className="text"
                sx={{
                  fontSize: "12px",
                  whiteSpace: "nowrap",
                  transition: "opacity 0.3s ease-in-out",
                  ml: "5px", // Space from icon
                }}
              >
                Set Status
              </Typography>
            </Box>




          </Box>

          {/* Profile Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              paddingTop: "10px",
              alignItems: "center",
              width: "100%",
            }}
          >
            {/* <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>muhammadabbas26</Typography> */}
            <Button
              sx={{
                border: "1px solid #E0E4E7",
                backgroundColor: "#F0F0F0",
                color: "#25292E",
                fontSize: "12px",
                fontWeight: "800",
                height: "30px",
                width: "100%",
              }}
            >
              Edit Profile
            </Button>
          </Box>
        </Box>

        {/* Right Section (GitHub Activity) */}
        <Box
          sx={{
            width: { xs: "100%", md: "70%" },
            marginTop: { xs: "20px", md: "0" },
          }}
        >
          <GitHubActivity />
        </Box>
      </Box>
    </Container>
  );
};

export default MainSection;
