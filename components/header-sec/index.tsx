"use client";

import { Box, Typography, IconButton, InputBase } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AddIcon from "@mui/icons-material/Add";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GridOnIcon from "@mui/icons-material/GridOn";
import PackageIcon from "@mui/icons-material/Category";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import BookIcon from "@mui/icons-material/Book";
import Image from "next/image";
import ListItem from "../list-items";
import { useState } from "react";
import Sidebar from "../sidebar";
import { useRouter } from "next/navigation";

const HeaderSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <Sidebar open={menuOpen} toggleSidebar={() => setMenuOpen(!menuOpen)} />

      {/* Top Header */}
      <Box
        sx={{
          borderBottom: "1px solid #ddd",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "8px 16px",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {/* Left Section (Logo + Profile) */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {/* Menu Button - Opens Sidebar */}
            <IconButton onClick={() => setMenuOpen(true)}>
              <MenuIcon />
            </IconButton>

            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Image src="/image1.png" alt="Profile" width={30} height={30} />
              <Typography
                variant="body1"
                fontWeight={600}
                fontSize={{ xs: "12px", md: "14px" }}
              >
                muhammadabbas26
              </Typography>
            </Box>
          </Box>

          {/* Right Section (Search + Icons) */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "4px 8px",
                width: { xs: "120px", sm: "200px", md: "250px" },
              }}
            >
              <SearchIcon fontSize="small" sx={{ color: "#888" }} />
              <InputBase
                placeholder="Search"
                sx={{ marginLeft: 1, flex: 1, fontSize: "12px" }}
              />
            </Box>

            {/* Icons */}
            <IconButton>
              <PeopleAltIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <AddIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <NotificationsIcon fontSize="small" />
            </IconButton>
            <IconButton>
              <MailOutlineIcon fontSize="small" />
            </IconButton>

            {/* Profile Avatar */}
            <Image
              src="/image1.png"
              alt="User Avatar"
              width={30}
              height={30}
              style={{ borderRadius: "50%" }}
            />
          </Box>
        </Box>

        {/* Navigation Bar (Tabs) */}
        <Box
          sx={{
            display: "flex",
            gap: "16px",
            padding: "10px 20px",
            flexWrap: "wrap",
            overflowX: { xs: "auto", md: "unset" }, // Horizontal scroll on small screens
            whiteSpace: "nowrap",
          }}
        >
          <ListItem
            icon={<BookIcon fontSize="small" />}
            label="Overview"
            active
            onClick={() => router.push("Overview")} // Navigate to Overview

          />
          
          <ListItem
            icon={<GridOnIcon fontSize="small" />}
            label="Repositories"
            count={2}
            onClick={() => router.push("Repositories")}
          />
          <ListItem icon={<PackageIcon fontSize="small" />} label="Projects" />
          <ListItem icon={<PackageIcon fontSize="small" />} label="Packages" />
          <ListItem icon={<StarBorderIcon fontSize="small" />} label="Stars" />
        </Box>
      </Box>
    </>
  );
};

export default HeaderSection;
