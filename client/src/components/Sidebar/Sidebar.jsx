import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { Link } from "react-router-dom"; // Import Link component for routing

function Sidebar({ onClose }) {
  return (
    <Box
      sx={{
        height: "100%",
        width: "250px",
        display: "flex",
        flexDirection: "column",
        padding: "16px",
        backgroundColor: "#3f51b5",
        color: "white",
      }}
    >
      {/* Close Button */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", marginBottom: "16px" }}>
        <IconButton onClick={onClose} sx={{ color: "white" }}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Sidebar Title */}
      <Typography variant="h6" sx={{ marginBottom: "24px", fontWeight: "bold" }}>
        Dashboard Menu
      </Typography>

      {/* Sidebar Links */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        
        {/* Dashboard Link */}
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 12px",
              borderRadius: "8px",
              cursor: "pointer",
              "&:hover": { backgroundColor: "#5c6bc0" },
            }}
          >
            <DashboardIcon />
            <Typography>Dashboard</Typography>
          </Box>
        </Link>

        {/* Employees Link with Routing */}
        <Link to="/employees" style={{ textDecoration: "none" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 12px",
              borderRadius: "8px",
              cursor: "pointer",
              "&:hover": { backgroundColor: "#5c6bc0" },
            }}
          >
            <PeopleIcon />
            <Typography>Employees</Typography>
          </Box>
        </Link>

        {/* Leaves Link */}
        <Link to="/leaves" style={{ textDecoration: "none" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 12px",
              borderRadius: "8px",
              cursor: "pointer",
              "&:hover": { backgroundColor: "#5c6bc0" },
            }}
          >
            <EventNoteIcon />
            <Typography>Leaves</Typography>
          </Box>
        </Link>
      </Box>
    </Box>
  );
}

export default Sidebar;
