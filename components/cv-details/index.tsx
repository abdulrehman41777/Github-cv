import { Email, LocationOn, Phone } from "@mui/icons-material";
import { Box, Typography, Divider } from "@mui/material";
import React from "react";

const CvDetails = () => {
  return (
    <Box
      sx={{
        // backgroundColor: "#fff",
        // padding: "24px",
        // borderRadius: "12px",
        // // boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        // // maxWidth: "600px",
        // margin: "auto",
      }}
    >
      {/* Name & Contact Details */}
      <Typography variant="h5" fontWeight="bold" color="primary">
        Muhammad Abbas Abidi
      </Typography>
      <Divider sx={{ my: 2 }} />

      <Typography
        variant="body1"
        sx={{ display: "flex", alignItems: "center", mb: 1, fontSize: "14px" }}
      >
        <LocationOn sx={{ mr: 1, color: "red" }} />
        Jaffer Taiyar Society, Malir, Karachi
      </Typography>
      <Typography
        variant="body1"
        sx={{ display: "flex", alignItems: "center", mb: 1, fontSize: "14px" }}
      >
        <Phone sx={{ mr: 1, color: "green" }} />
        0333-2748903
      </Typography>
      <Typography
        variant="body1"
        sx={{ display: "flex", alignItems: "center", mb: 2, fontSize: "14px" }}
      >
        <Email sx={{ mr: 1, color: "blue" }} />
        zaidi.41702@gmail.com
      </Typography>

      {/* Professional Summary */}
      <Typography variant="h6" fontWeight="bold" color="primary">
        Professional Summary
      </Typography>
      <Typography sx={{ fontSize: "14px", mb: 3, color: "#555" }}>
        Passionate Frontend Developer with expertise in modern web technologies
        like **React, Next.js, and Node.js**. Strong problem-solving skills and
        experience in building scalable web applications.
      </Typography>

      {/* Skills */}
      <Typography variant="h6" fontWeight="bold" color="primary">
        Skills
      </Typography>
      <Typography sx={{ fontSize: "14px", mb: 3, color: "#555" }}>
        ✅ JavaScript (React, Next.js, Node.js, Express) <br />
        ✅ MUI, TailwindCSS, Bootstrap <br />
        ✅ MongoDB, PostgreSQL, Firebase
      </Typography>

      {/* Experience */}
      <Typography variant="h6" fontWeight="bold" color="primary">
        Experience
      </Typography>
      <Typography sx={{ fontSize: "14px", mb: 3, color: "#555" }}>
        🔹 **Software Engineer** - XYZ Company (2022 - Present) <br />
        🔹 **Web Developer** - ABC Solutions (2019 - 2022)
      </Typography>

      {/* Education */}
      <Typography variant="h6" fontWeight="bold" color="primary">
        Education
      </Typography>
      <Typography sx={{ fontSize: "14px", mb: 2, color: "#555" }}>
        🎓 BSc in Computer Science, **Iqra University** (2018 - 2024)
      </Typography>
    </Box>
  );
};

export default CvDetails;
