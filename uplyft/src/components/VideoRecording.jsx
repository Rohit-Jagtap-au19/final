import React from "react";
import { useRecordWebcam } from "react-record-webcam";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";

import { Box, Paper } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function VideoRecording(props) {
  const recordWebcam = useRecordWebcam({ frameRate: 60 });

  const saveFile = async () => {
    const blob = await recordWebcam.getRecording();
  };
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid Item md={3} xs={6}>
            <p>Camera status: {recordWebcam.status}</p>
          </Grid>
          <Grid Item md={3} xs={6}>
            <Item style={{ cursor: "pointer" }} onClick={recordWebcam.open}>
              Start Video Interview
            </Item>
          </Grid>
        </Grid>

        {/* this will effect preview */}

        <Grid
          container
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
          spacing={1}
        >
          <Grid Item md={6} xs={12} className="mb">
            <Paper className="ml" style={{ padding: "30px 50px" }}>
              <video ref={recordWebcam.webcamRef} autoPlay muted />
            </Paper>
          </Grid>
          <Grid Item md={6} xs={12} className="mb">
            <Paper className="ml" style={{ padding: "30px 50px" }}>
              <video ref={recordWebcam.previewRef} autoPlay muted controls height={'100%'}/>
            </Paper>
          </Grid>
        </Grid>

        {/* this will efffect buttons */}
        <Grid container md={6.5} xs={12} flex justifyContent={"space-between"}>
          <Item onClick={recordWebcam.start} style={{ cursor: "pointer" }}>
            Start recording
          </Item>
          <Item style={{ cursor: "pointer" }} onClick={recordWebcam.stop}>
            Stop recording
          </Item>
          <Item style={{ cursor: "pointer" }} onClick={recordWebcam.retake}>
            Retake
          </Item>
          <Item style={{ cursor: "pointer" }} onClick={saveFile}>
            Save file to server
          </Item>
        </Grid>
      </Box>
    </>
  );
}
