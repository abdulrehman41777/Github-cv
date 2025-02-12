"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Popover,
} from "@mui/material";
import GitHubContributionGraph from "../contribuition-graphs";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CvDetails from "../cv-details";

const GitHubActivity = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedYear, setSelectedYear] = useState(2025);

  // Open Dropdown
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // Close Dropdown
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "contribution-settings-popover" : undefined;

  return (
    <Box sx={{
      backgroundColor: "#fff",
      padding: "24px",
      borderRadius: "12px",
      // boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      // maxWidth: "600px",
      margin: "auto",
    }}>
      <CvDetails />
      {/* Contribution Graph */}
      <Box sx={{padding:"20px 0px"}}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, 
            gap: "20px",
            alignItems: { xs: "center", md: "flex-start" }, 
          }}
        >
          <Box sx={{ width: "100%", maxWidth: "600px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: { xs: "column", sm: "row" }, // Stack items on very small screens
                alignItems: { xs: "center", sm: "flex-start" },
                marginBottom: "10px",
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              <Typography sx={{ fontSize: { xs: "14px", sm: "16px"} , color:"#1976D2",  fontWeight:"600"}}>
                4 contributions in {selectedYear}
              </Typography>
              <Box
                sx={{
                  fontSize: "12px",
                  cursor: "pointer",
                  "&:hover": { color: "blue", textDecoration: "underline" },
                  display: "flex",
                  alignItems: "center",
                  marginTop: { xs: "5px", sm: "0" }, // Space on small screens
                }}
                onClick={handleClick}
              >
                Contributions settings{" "}
                <ArrowDropDownIcon sx={{ fontSize: "16px" }} />
              </Box>
            </Box>

            {/* Contribution Graph */}
            <GitHubContributionGraph />
          </Box>

          {/* Year Selector */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              alignItems: "center",
              width: { xs: "100%", md: "auto" }, // Full width on small screens
            }}
          >
            {[2025, 2024].map((year) => (
              <Button
                key={year}
                variant={selectedYear === year ? "contained" : "text"}
                sx={{
                  backgroundColor:
                    selectedYear === year ? "#0366d6" : "transparent",
                  color: selectedYear === year ? "#fff" : "#0366d6",
                  textTransform: "none",
                  width: { xs: "80%", sm: "100px" }, // Larger buttons on mobile
                  fontWeight: "bold",
                  borderRadius: "6px",
                  fontSize: { xs: "12px", sm: "14px" }, // Smaller text on mobile
                  "&:hover": {
                    backgroundColor:
                      selectedYear === year ? "#0256b3" : "#f0f0f0",
                  },
                }}
                onClick={() => setSelectedYear(year)}
              >
                {year}
              </Button>
            ))}
          </Box>
        </Box>

        {/* Contribution Settings Popover */}
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          sx={{ marginTop: "5px" }}
        >
          <Box
            sx={{
              width: "280px",
              backgroundColor: "#ffffff",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              padding: "12px",
            }}
          >
            <Box
              sx={{
                padding: "10px",
                borderBottom: "1px solid #E5E7EB",
                "&:hover": {
                  backgroundColor: "#F3F4F6",
                },
                cursor: "pointer",
              }}
            >
              <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
                Private contributions
              </Typography>
              <Typography sx={{ fontSize: "12px", color: "#6B7280" }}>
                Turning on private contributions will show anonymized private
                activity on your profile.
              </Typography>
            </Box>

            <Box
              sx={{
                padding: "10px",
                "&:hover": {
                  backgroundColor: "#F3F4F6",
                },
                cursor: "pointer",
              }}
            >
              <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
                Activity overview
              </Typography>
              <Typography sx={{ fontSize: "12px", color: "#6B7280" }}>
                Turning on the activity overview will show an overview of your
                activity across organizations and repositories.
              </Typography>
            </Box>
          </Box>
        </Popover>

        {/* Contribution Activity */}
        <Box>
          <Typography
            variant="h6"
            color="primary"
            sx={{ fontWeight: "bold", marginBottom: "10px" }}
          >
            Contribution activity
          </Typography>
          <Typography
            sx={{ color: "#6B7280", fontSize: "14px", marginBottom: "10px" }}
          >
            February {selectedYear}
          </Typography>
          <Typography
            sx={{ color: "#6B7280", fontSize: "14px", marginBottom: "10px" }}
          >
            muhammadabbas26 has no activity yet for this period.
          </Typography>
        </Box>
      </Box>

      {/* Show More Button */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#F0F0F0",
          color: "#0969DA",
          fontWeight: "bold",
          width: "100%",
          textTransform: "none",
          marginTop: "10px",
        }}
      >
        Show more activity
      </Button>
    </Box>
  );
};

export default GitHubActivity;
