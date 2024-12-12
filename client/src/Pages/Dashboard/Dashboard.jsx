import React from "react";
import Layout from "../../components/Layout/Layout";
import { Box, Typography, Grid, Card, CardContent, CardActions, IconButton } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PaidIcon from "@mui/icons-material/Paid";
import WorkIcon from "@mui/icons-material/Work";
import '../../App.css';

function Dashboard() {
  return (
    <Layout>
      <Box sx={{ padding: "16px" }}>
        <Typography variant="h4" gutterBottom>
          Welcome to the Admin Dashboard
        </Typography>
        <Typography variant="body1" paragraph>
          Here you can manage employees, leaves, salaries, and more!
        </Typography>

        <Grid container spacing={3}>
          {/* Total Employees */}
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <CardContent>
                <IconButton sx={{ fontSize: 40, color: "white" }}>
                  <PeopleIcon />
                </IconButton>
                <Typography variant="h6" sx={{ marginTop: 2 }}>
                  Total Employees
                </Typography>
                <Typography variant="h4">120</Typography>
              </CardContent>
              <CardActions>
                <Typography variant="body2" color="text.secondary">Manage Employees</Typography>
              </CardActions>
            </Card>
          </Grid>

          {/* Total Leaves */}
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <CardContent>
                <IconButton sx={{ fontSize: 40, color: "#f50057" }}>
                  <WorkIcon />
                </IconButton>
                <Typography variant="h6" sx={{ marginTop: 2 }}>
                  Total Leaves
                </Typography>
                <Typography variant="h4">35</Typography>
              </CardContent>
              <CardActions>
                <Typography variant="body2" color="text.secondary">Manage Leaves</Typography>
              </CardActions>
            </Card>
          </Grid>

          {/* Total Salary */}
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <CardContent>
                <IconButton sx={{ fontSize: 40, color: "#4caf50" }}>
                  <PaidIcon />
                </IconButton>
                <Typography variant="h6" sx={{ marginTop: 2 }}>
                  Total Salary
                </Typography>
                <Typography variant="h4">₹1,500,000</Typography>
              </CardContent>
              <CardActions>
                <Typography variant="body2" color="text.secondary">Manage Salaries</Typography>
              </CardActions>
            </Card>
          </Grid>

          {/* Calendar */}
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <CardContent>
                <IconButton sx={{ fontSize: 40, color: "#ff9800" }}>
                  <CalendarTodayIcon />
                </IconButton>
                <Typography variant="h6" sx={{ marginTop: 2 }}>
                  Calendar
                </Typography>
                <Typography variant="h4">View Schedule</Typography>
              </CardContent>
              <CardActions>
                <Typography variant="body2" color="text.secondary">View Calendar</Typography>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
}

export default Dashboard;
