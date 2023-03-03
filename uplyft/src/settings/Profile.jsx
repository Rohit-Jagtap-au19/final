import React from 'react'
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";

export default function Profile() {
  return (
    <Grid container spacing={2} className="paddingall">
      <Grid xs={4} className="paddingall">
        <Card sx={{ height: 50 + "vh" }}>
          <CardContent></CardContent>
        </Card>
      </Grid>
      <Grid xs={8} className="paddingall">
        <Card sx={{ height: 50 + "vh" }}>
          <CardContent></CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
