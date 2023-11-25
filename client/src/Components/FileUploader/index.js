import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Button, Typography, Grid } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import CModal from "../CModal";
import CInput from "../CInput";
import BaseSetting from "../../apis/setting";
import { getApiData } from "../../apis/apiHelper";

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
  const [locationText, setLocationText] = useState("");
  const [captionText, setCaptionText] = useState("");
  const [selectedFileDataUrl, setSelectedFileDataUrl] = useState(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    // Use FileReader to convert the file to data URL
    const reader = new FileReader();
    reader.onloadend = () => {
      // Set the data URL as a state variable
      setSelectedFileDataUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const uploadPost = () => {
    const formData = new FormData();
    formData.append("image", selectedFile);
    console.log("formData:", formData);

    const endpoint = `${BaseSetting.endpoint.uploadPost}`;
    getApiData(endpoint, "post", formData)
      .then((result) => {
        console.log("result =====>>>>> ", result.status);
        if (result?.status) {
          const response = result.allPosts;
          console.log("response =====>>>>> ", response);
        } else {
          console.log("=====>>>>> error  ");
        }
      })
      .catch((err) => {
        console.log("=====>>>>> error ", err);
      });
  };

  return (
    <>
      <Button sx={{ p: 0, minWidth: 1 }} component="label" variant>
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
          setSelectedFileDataUrl(null);
        }}
        title={"Upload Post"}
        children={
          <div style={{ padding: "20px" }}>
            {selectedFile && (
              <Grid container>
                <StyledImage src={selectedFileDataUrl} alt="Selected File" />
                <Grid mt={5} gap={1} container>
                  <Grid alignItems={"center"} container>
                    <Grid xs={4} item>
                      <Typography variant="p">Select Location</Typography>
                    </Grid>
                    <Grid xs={6} item>
                      <CInput
                        value={locationText}
                        variant="outlined"
                        placeholder="Nadiad"
                        onChange={(e) => setLocationText(e)}
                      />
                    </Grid>
                  </Grid>
                  <Grid alignItems={"center"} container>
                    <Grid xs={4} item>
                      <Typography variant="p">Enter Caption</Typography>
                    </Grid>
                    <Grid xs={6} item>
                      <CInput
                        value={captionText}
                        variant="outlined"
                        placeholder="Enjoying"
                        onChange={(e) => setCaptionText(e)}
                      />
                    </Grid>
                    <Grid xs={6} item>
                      <Button onClick={uploadPost} variant="contained">
                        Post
                      </Button>
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
