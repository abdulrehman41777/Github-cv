


"use client";

import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation"; // ✅ Import for active route detection

interface ListItemProps {
  icon: ReactNode;
  label: string;
  count?: number;
  href: string;
}

const ListItem: React.FC<ListItemProps> = ({ icon, label, count, href }) => {
  const pathname = usePathname(); // ✅ Get current route
  const isActive = pathname === href; // ✅ Check if this tab is active

  return (
    <Link href={href} passHref style={{ textDecoration: "none", color: "inherit" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "6px 10px",
          borderBottom: isActive ? "2px solid #e36209" : "none", // ✅ Active tab color
          color: isActive ? "#000" : "#555",
          cursor: "pointer",
          fontWeight: isActive ? "600" : "400",
          fontSize: { xs: "12px", sm: "14px" },
          "&:hover": { color: "#000" },
          minWidth: "100px",
        }}
      >
        {icon}
        <Typography variant="body2">{label}</Typography>
        {count !== undefined && (
          <Box
            sx={{
              backgroundColor: "#e4e4e4",
              padding: "2px 6px",
              borderRadius: "12px",
              fontSize: "10px",
              fontWeight: "bold",
            }}
          >
            {count}
          </Box>
        )}
      </Box>
    </Link>
  );
};

export default ListItem;
