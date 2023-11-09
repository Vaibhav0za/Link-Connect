import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Button, Typography, Grid } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import CModal from "../CModal";
import CInput from "../CInput";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(80%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const StyledImage = styled("img")({
  objectFit: "cover",
  width: "100%",
  height: "auto",
  aspectRatio: "9 / 9",
});

export default function InputFileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Display the selected image
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFile(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Button sx={{ p: 0, minWidth: 1 }} component="label" variant="text ">
        <AddBoxIcon />
        <VisuallyHiddenInput
          type="file"
          accept="image/*,video/*"
          onChange={handleFileChange}
        />
      </Button>
      <CModal
        visible={selectedFile}
        style={{ width: "30%" }}
        onClose={() => {
          setSelectedFile(null);
        }}
        title={"Upload Post"}
        children={
          <div style={{ padding: "20px" }}>
            {selectedFile && (
              <Grid  container>
                <StyledImage src={selectedFile} alt="Selected File" />
                <Grid mt={5} gap={1} container>
                  <Grid alignItems={"center"} container>
                    <Grid xs={4} item>
                      <Typography variant="p">Select Location</Typography>
                    </Grid>
                    <Grid xs={6} item>
                      <CInput variant="outlined" placeholder="Nadiad" />
                    </Grid>
                  </Grid>
                  <Grid alignItems={"center"} container>
                    <Grid xs={4} item>
                      <Typography variant="p">Enter Caption</Typography>
                    </Grid>
                    <Grid xs={6} item>
                      <CInput variant="outlined" placeholder="Enjoying" />
                    </Grid>
                    <Grid xs={6} item>
                        <Button variant="contained">Post</Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </div>
        }
      />
    </>
  );
}
