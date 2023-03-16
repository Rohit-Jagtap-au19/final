import React from "react";
import { Box, Paper } from "@mui/material";
import Navbar from "../components/Navbar";
import Sidenav from "../components/Sidenav";
import {
  Card,
  Grid,
  CardContent,
  Typography,
  Stack,
  Button,
  TextField,
} from "@mui/material";

import profilepic from "../assets/blankprofile.webp";

export default function Edit_Profile() {
  return (
    <>
      <Navbar />
      <Box height={60} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }} className="bgcolor">
          <Paper style={{padding:'10px 50px'}}>
            <Grid item md={12} sx={12}>
              <Stack direction={"row"} justifyContent={"space-between"}>
                <Typography variant="h4">Edit Profile</Typography>
                <img
                  src={profilepic}
                  alt="Loading.."
                  style={{
                    height: "100px",
                    borderRadius: "50%",
                    padding: "5px",
                  }}
                />
              </Stack>
            </Grid>
            <Grid container style={{padding:'0px 20%'}}>
              <Grid item md={12} sx={12}>
                <Stack direction={"row"} justifyContent={"space-evenly"} spacing={2}>
                  <Grid direction={"column"} md={6} sx={12}>
                    <Typography variant="h6">First Name</Typography>
                    <TextField
                      id="outlined-basic"
                      label="name"
                      variant="outlined"
                      style={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid direction={"column"} md={6} sx={12}>
                    <Typography variant="h6">Last Name</Typography>
                    <TextField
                      id="outlined-basic"
                      label="Last Name"
                      variant="outlined"
                      style={{ width: "100%" }}
                    />
                  </Grid>
                </Stack>
              </Grid>
              <Grid md={12} sx={12}>
                <Typography variant="h6">Edit Profile</Typography>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid md={12} sx={12}>
                <Typography variant="h6">Edit Profile</Typography>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid md={12} sx={12}>
                <Typography variant="h6">Edit Profile</Typography>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  style={{ width: "100%" }}
                />
              </Grid>

              <Grid item md={12} sx={12}>
                <Stack direction={"row"} justifyContent={"space-evenly"} spacing={2}>
                  <Grid direction={"column"} md={6} sx={12}>
                    <Typography variant="h6">Edit Profile</Typography>
                    <TextField
                      id="outlined-basic"
                      label="Outlined"
                      variant="outlined"
                      style={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid direction={"column"} md={6} sx={12}>
                    <Typography variant="h6">Edit Profile</Typography>
                    <TextField
                      id="outlined-basic"
                      label="Outlined"
                      variant="outlined"
                      style={{ width: "100%" }}
                    />
                  </Grid>
                </Stack>
              </Grid>

              <Grid item md={12} sx={12}>
                <Stack direction={"row"} justifyContent={"space-evenly"} spacing={2}>
                  <Grid direction={"column"} md={6} sx={12}>
                    <Typography variant="h6">Edit Profile</Typography>
                    <TextField
                      id="outlined-basic"
                      label="Outlined"
                      variant="outlined"
                      style={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid direction={"column"} md={6} sx={12}>
                    <Typography variant="h6">Edit Profile</Typography>
                    <TextField
                      id="outlined-basic"
                      label="Outlined"
                      variant="outlined"
                      style={{ width: "100%" }}
                    />
                  </Grid>
                </Stack>
              </Grid>

              <Grid md={12} sx={12}>
                <Typography variant="h6">Edit Profile</Typography>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  style={{ width: "100%" }}
                />
              </Grid>
              <Stack spacing={2} direction="row" style={{marginTop:'10px'}}>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
              </Stack>
            </Grid>
          </Paper>
        </Box>
      </Box>
    </>
  );
}
