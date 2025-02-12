

import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

interface ListItemProps {
  icon: ReactNode;
  label: string;
  count?: number;
  active?: boolean;
}

const ListItem: React.FC<ListItemProps> = ({ icon, label, count, active }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        padding: "6px 10px",
        borderBottom: active ? "2px solid #e36209" : "none",
        color: active ? "#000" : "#555",
        cursor: "pointer",
        fontWeight: active ? "600" : "400",
        fontSize: { xs: "12px", sm: "14px" },
        "&:hover": { color: "#000" },
        minWidth: "100px", // Ensures spacing in small screens
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
  );
};

export default ListItem;
