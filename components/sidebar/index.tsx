

// "use client";

// import Link from "next/link";
// import {
//   Drawer,
//   Box,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   IconButton,
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import BookIcon from "@mui/icons-material/Book";
// import GridOnIcon from "@mui/icons-material/GridOn";
// import PackageIcon from "@mui/icons-material/Category";
// import StarBorderIcon from "@mui/icons-material/StarBorder";

// interface SidebarProps {
//   open: boolean;
//   toggleSidebar: () => void;
// }

// const Sidebar: React.FC<SidebarProps> = ({ open, toggleSidebar }) => {
//   return (
//     <Drawer anchor="left" open={open} onClose={toggleSidebar}>
//       <Box sx={{ width: 250, padding: "16px" }}>
//         {/* Close Button */}
//         <IconButton onClick={toggleSidebar} sx={{ marginBottom: "10px" }}>
//           <CloseIcon />
//         </IconButton>

//         {/* Sidebar Menu Items */}
//         <List>
//           <Link href="/Overview" passHref legacyBehavior>
//             <ListItem component="button" onClick={toggleSidebar}>
//               <ListItemIcon>
//                 <BookIcon />
//               </ListItemIcon>
//               <ListItemText primary="Overview" />
//             </ListItem>
//           </Link>
//           <Link href="/Repositories" passHref legacyBehavior>
//             <ListItem component="button" onClick={toggleSidebar}>
//               <ListItemIcon>
//                 <GridOnIcon />
//               </ListItemIcon>
//               <ListItemText primary="Repositories" />
//             </ListItem>
//           </Link>
//           <Link href="/projects" passHref legacyBehavior>
//             <ListItem component="button" onClick={toggleSidebar}>
//               <ListItemIcon>
//                 <PackageIcon />
//               </ListItemIcon>
//               <ListItemText primary="Projects" />
//             </ListItem>
//           </Link>
//           <Link href="/stars" passHref legacyBehavior>
//             <ListItem component="button" onClick={toggleSidebar}>
//               <ListItemIcon>
//                 <StarBorderIcon />
//               </ListItemIcon>
//               <ListItemText primary="Stars" />
//             </ListItem>
//           </Link>
//         </List>
//       </Box>
//     </Drawer>
//   );
// };

// export default Sidebar;


"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Drawer,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
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
  const pathname = usePathname(); // Get current route

  // Sidebar Menu Items
  const menuItems = [
    { label: "Overview", icon: <BookIcon />, path: "/Overview" },
    { label: "Repositories", icon: <GridOnIcon />, path: "/Repositories" },
    { label: "Projects", icon: <PackageIcon />, path: "/projects" },
    { label: "Stars", icon: <StarBorderIcon />, path: "/stars" },
  ];

  return (
    <Drawer anchor="left" open={open} onClose={toggleSidebar}>
      <Box sx={{ width: 280, padding: "16px", bgcolor: "#f9f9f9" }}>
        {/* Close Button */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" fontWeight="600">
            Navigation
          </Typography>
          <IconButton onClick={toggleSidebar}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Sidebar Menu Items */}
        <List sx={{ marginTop: 2 }}>
          {menuItems.map((item) => (
            <Link href={item.path} key={item.label} passHref legacyBehavior>
              <ListItemButton
                onClick={toggleSidebar}
                selected={pathname === item.path}
                sx={{
                  borderRadius: "8px",
                  marginBottom: "8px",
                  bgcolor: pathname === item.path ? "#e0e0e0" : "transparent",
                  "&:hover": {
                    bgcolor: "#ddd",
                  },
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </Link>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
