
import React from 'react'
import Box from '@mui/material/Box';

import Sidenav from '../components/Sidenav'
import Navbar from '../components/Navbar'
import ResponsiveDrawer from '../components/ResSide';
import CompanyCard from '../components/CompanyCard';
export default function Home() {
  return (
    
    <>
    <Navbar/>
    <Box height={30}/>
    <Box sx={{ display: 'flex' }}>
    <Sidenav/>
    {/* <ResponsiveDrawer/> */}
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      {/* <h1>Soon Dashboard will be here</h1> */}
      <CompanyCard/>
      </Box>
    </Box>
    </>
  );
}
