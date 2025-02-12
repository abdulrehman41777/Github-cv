"use client";

import {} from "react";
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import BookIcon from "@mui/icons-material/Book";
import GridOnIcon from "@mui/icons-material/GridOn";
import PackageIcon from "@mui/icons-material/Category";
import StarBorderIcon from "@mui/icons-material/StarBorder";

interface SidebarProps {
  open: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, toggleSidebar }) => {
  return (
    <Drawer anchor="left" open={open} onClose={toggleSidebar}>
      <Box sx={{ width: 250, padding: "16px" }}>
        {/* Close Button */}
        <IconButton onClick={toggleSidebar} sx={{ marginBottom: "10px" }}>
          <CloseIcon />
        </IconButton>

        {/* Sidebar Menu Items */}
        <List>
          <ListItem component="button" onClick={toggleSidebar}>
            <ListItemIcon>
              <BookIcon />
            </ListItemIcon>
            <ListItemText primary="Overview" />
          </ListItem>
          <ListItem component="button" onClick={toggleSidebar}>
            <ListItemIcon>
              <GridOnIcon />
            </ListItemIcon>
            <ListItemText primary="Repositories" />
          </ListItem>
          <ListItem component="button" onClick={toggleSidebar}>
            <ListItemIcon>
              <PackageIcon />
            </ListItemIcon>
            <ListItemText primary="Projects" />
          </ListItem>
          <ListItem component="button" onClick={toggleSidebar}>
            <ListItemIcon>
              <StarBorderIcon />
            </ListItemIcon>
            <ListItemText primary="Stars" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
