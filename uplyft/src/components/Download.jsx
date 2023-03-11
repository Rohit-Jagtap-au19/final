import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import { Box } from "@mui/system";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from "@mui/material";

export default function Download() {
  return (
    <Box>
      <Grid container md={12} xs={12} direction={"column"}>
        <Typography variant="h5">
          Resources to help you with the task
        </Typography>
        <Stack spacing={1} direction={"row"}>
          <Grid item md={3} xs={6} alignItems={'center'} spacing={2}>
            <Card variant="outlined" className="paddingall">
              <PictureAsPdfIcon fontSize={"large"}/>
              <Typography variant="h5">
                Resources to help you with the task
              </Typography>
              <Link>Click To Download file <ArrowRightAltIcon/></Link>
            </Card>
          </Grid>
          <Grid item md={3} xs={6} alignItems={'center'}>
            <Card variant="outlined" className="paddingall">
              <PictureAsPdfIcon fontSize={"large"}/>
              <Typography variant="h5">
                Resources to help you with the task
              </Typography>
              <Link>Click To Download file <ArrowRightAltIcon/></Link>
            </Card>
          </Grid>
        </Stack>
      </Grid>
    </Box>
  );
}
