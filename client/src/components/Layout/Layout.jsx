import React, { useState } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {/* Sidebar */}
      {isSidebarOpen && (
        <Box
          sx={{
            width: { xs: "250px", sm: "300px" },
            transition: "width 0.3s ease",
            overflow: "hidden",
            backgroundColor: "#f4f4f4",
            boxShadow: 2,
          }}
        >
          <Sidebar onClose={toggleSidebar} />
        </Box>
      )}

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          transition: "margin-left 0.3s ease",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#3f51b5",
            color: "#fff",
            padding: "8px 16px",
          }}
        >
          {/* Hamburger Icon */}
          {!isSidebarOpen && (
            <IconButton
              onClick={toggleSidebar}
              sx={{
                color: "white",
                display: "inline-flex",
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Header />
        </Box>

        {/* Content */}
        <Box
          sx={{
            padding: "16px",
            overflowY: "auto",
            flexGrow: 1,
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default Layout;
