import React from "react";
import { Box, Typography } from "@mui/material";
import ProfileMenu from "./ProfileMenu";

function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        
      }}
    >
      <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center" }}>
        Admin Dashboard
      </Typography>
      <ProfileMenu />
    </Box>
  );
}

export default Header;
