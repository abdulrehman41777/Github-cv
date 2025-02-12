


"use client";

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

// Dummy Contribution Data (365 days)
const contributions = Array(365)
  .fill(0)
  .map(() => Math.floor(Math.random() * 5));

// Function to determine color based on contribution count
const getColor = (count: number) => {
  if (count === 0) return "#ebedf0";
  if (count === 1) return "#9be9a8";
  if (count === 2) return "#40c463";
  if (count === 3) return "#30a14e";
  return "#216e39";
};

// Months Labels
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const GitHubContributionGraph = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Check if screen is small

  return (
    <Box
      sx={{
        border: "1px solid #D7DAE0",
        borderRadius: "6px",
        padding: isMobile ? "10px" : "16px",
        backgroundColor: "#F7F9FC",
        marginBottom: "20px",
        overflowX: "auto", // Scrollable on small screens
      }}
    >
      {/* Contribution Graph */}
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {/* Months Row */}
        <Box
          sx={{
            display: "flex",
            gap: "4px",
            marginLeft: "20px",
            marginBottom: "5px",
            fontSize: isMobile ? "10px" : "12px",
            overflowX: "auto",
          }}
        >
          {months.map((month, index) => (
            <Typography
              key={index}
              sx={{
                fontSize: isMobile ? "10px" : "12px",
                color: "#6B7280",
                width: isMobile ? "20px" : "30px", // Smaller width on mobile
                textAlign: "center",
              }}
            >
              {month}
            </Typography>
          ))}
        </Box>

        {/* Graph Grid */}
        <Box sx={{ display: "flex", gap: "2px" }}>
          {/* Week Labels */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: "2px", marginRight: "5px" }}>
            {["Mon", "Wed", "Fri"].map((day, index) => (
              <Typography
                key={index}
                sx={{
                  fontSize: isMobile ? "10px" : "12px",
                  color: "#6B7280",
                  textAlign: "right",
                }}
              >
                {day}
              </Typography>
            ))}
          </Box>

          {/* Contribution Grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: isMobile ? "repeat(26, 10px)" : "repeat(53, 10px)",
              gap: "2px",
              overflowX: "auto",
            }}
          >
            {contributions.map((count, index) => (
              <Box
                key={index}
                sx={{
                  width: "10px",
                  height: "10px",
                  backgroundColor: getColor(count),
                  borderRadius: "2px",
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GitHubContributionGraph;
