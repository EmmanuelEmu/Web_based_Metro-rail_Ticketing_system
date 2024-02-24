import React, { useEffect, useState, useContext } from "react";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CustomInput from "./CustomInput";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import Badge from "@mui/material/Badge";
import CssBaseline from "@mui/material/CssBaseline";
import { UserMain } from "../Account/User";

const Account = (props) => {
  const { firstName, lastName, NID, dob, email, mobile, password } =
    props.userData;
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState(null);
  const [edit, update] = useState({
    // Initially EDIT, so it's disabled at first
    disabled: true,
    isEdit: true, //isEdit refers to the Button
    showPassword: false,
  });

  useEffect(() => {
    // Assuming props.userData.picture is the image data received from the backend
    const imageData = props.userData.picture;
    const mimeType = imageData[0] === 0x89 ? "image/png" : "image/jpg";
    // Convert Uint8Array to Blob
    const blob = new Blob([imageData], { type: mimeType }); // Adjust the type accordingly

    try {
      // Generate object URL
      const objectUrl = URL.createObjectURL(blob);
      setImageUrl(objectUrl);
    } catch (error) {
      setError(error.message);
    }

    // Clean up
    return () => {
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, [props.userData.picture]);
  console.log(imageUrl);

  const styles = {
    details: {
      padding: "1rem",
      borderTop: "1px solid #e1e1e1",
    },
    value: {
      padding: "1rem 2rem",
      borderTop: "1px solid #e1e1e1",
      color: "#899499",
    },
  };

  return (
    <UserMain.Provider>
      <CssBaseline>
        {/* BACKGROUND */}
        <Grid container direction="column" sx={{ overflowX: "hidden" }}>
          <Grid item xs={12} md={6}>
            <img
              alt="avatar"
              style={{
                width: "100vw",
                height: "35vh",
                objectFit: "cover",
                objectPosition: "50% 50%",
                position: "relative",
              }}
              src="https://iris2.gettimely.com/images/default-cover-image.jpg"
            />
          </Grid>

          {/* COMPONENTS */}
          <Grid
            container
            direction={{ xs: "column", md: "row" }}
            spacing={3}
            sx={{
              position: "absolute",
              top: "20vh",
              px: { xs: 0, md: 7 },
            }}
          >
            {/* PROFILE CARD */}
            <Grid item md={2}>
              <Card variant="outlined">
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  {/* CARD HEADER START */}
                  <Grid item sx={{ p: "1.5rem 0rem", textAlign: "center" }}>
                    {/* PROFILE PHOTO */}
                    <Badge
                      overlap="circular"
                      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                      badgeContent={
                        <PhotoCameraIcon
                          sx={{
                            border: "5px solid white",
                            backgroundColor: "#ff558f",
                            borderRadius: "50%",
                            padding: ".2rem",
                            width: 35,
                            height: 35,
                          }}
                        ></PhotoCameraIcon>
                      }
                    >
                      <Avatar
                        sx={{ width: 100, height: 100, mb: 1.5 }}
                        src="https://media.glamour.com/photos/5a425fd3b6bcee68da9f86f8/master/pass/best-face-oil.png"
                      ></Avatar>
                    </Badge>

                    {/* DESCRIPTION */}
                    <Typography variant="h6">
                      {firstName}&nbsp;{lastName}
                    </Typography>
                    <Typography color="text.secondary">Hello there</Typography>
                  </Grid>
                  {/* CARD HEADER END */}

                  {/* DETAILS */}
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography style={styles.details}>Detail 1</Typography>
                      <Typography style={styles.details}>Detail 2</Typography>
                      <Typography style={styles.details}>Detail 3</Typography>
                    </Grid>
                    {/* VALUES */}
                    <Grid item xs={6} sx={{ textAlign: "end" }}>
                      <Typography style={styles.value}>dt1</Typography>
                      <Typography style={styles.value}>dt2</Typography>
                      <Typography style={styles.value}>dt3</Typography>
                    </Grid>
                  </Grid>

                  {/* BUTTON */}
                  <Grid item style={styles.details} sx={{ width: "100%" }}>
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{ width: "99%", p: 1, my: 2 }}
                    >
                      View Public Profile
                    </Button>
                  </Grid>
                </Grid>
              </Card>
            </Grid>

            {/* SETTINGS CARD */}
            <Grid item md={7}>
              <Card variant="outlined" sx={{ height: "100%", width: "100%" }}>
                {/* TABS */}
                <br></br>
                {/* <Tabs
            value={tabValue}
            onChange={handleTabChange}
            textColor="secondary"
            indicatorColor="secondary"
          >
            <Tab value="one" label="Account" />
            <Tab value="two" label="Tab 2" />
            <Tab value="three" label="Tab 3" />
          </Tabs> */}
                <Divider></Divider>

                {/* MAIN CONTENT CONTAINER */}
                <form>
                  <CardContent
                    sx={{
                      p: 3,
                      maxHeight: { md: "40vh" },
                      textAlign: { xs: "center", md: "start" },
                    }}
                  >
                    {/* FIELDS */}
                    <FormControl fullWidth>
                      <Grid
                        container
                        direction={{ xs: "column", md: "row" }}
                        columnSpacing={5}
                        rowSpacing={3}
                      >
                        {/* ROW 1: FIRST NAME */}
                        <Grid component="form" item xs={6}>
                          <CustomInput
                            name="firstName"
                            value={firstName}
                            title="First Name"
                            //   onChange={handleUser}
                            dis={edit.disabled}
                          ></CustomInput>
                        </Grid>

                        {/* ROW 1: LAST NAME */}
                        <Grid component="form" item xs={6}>
                          <CustomInput
                            name="lastName"
                            value={lastName}
                            //   onChange={handleUser}
                            title="Last Name"
                            dis={edit.disabled}
                          ></CustomInput>
                        </Grid>

                        {/* ROW 2: MIDDLE NAME */}
                        <Grid item xs={6}>
                          <CustomInput
                            name="NID"
                            value={NID}
                            //   onChange={handleUser}
                            title="NID"
                            dis={edit.disabled}
                          ></CustomInput>
                        </Grid>

                        {/* ROW 2: GENDER */}
                        <Grid item xs={6}>
                          <CustomInput
                            name="DOB"
                            value={dob}
                            //   onChange={handleUser}
                            title="dob"
                            dis={edit.disabled}
                          ></CustomInput>
                        </Grid>

                        {/* ROW 3: PHONE */}
                        <Grid item xs={6}>
                          <CustomInput
                            name="phone"
                            value={mobile}
                            //   onChange={handleUser}
                            title="Phone Number"
                            dis={edit.disabled}
                            //DIALING CODE (63+)
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  +880
                                </InputAdornment>
                              ),
                            }}
                          ></CustomInput>
                        </Grid>

                        {/* ROW 3: EMAIL */}
                        <Grid item xs={6}>
                          <CustomInput
                            name="email"
                            value={email}
                            //   onChange={handleUser}
                            title="Email Address"
                            dis={edit.disabled}
                          ></CustomInput>
                        </Grid>

                        {/* ROW 4: PASSWORD */}
                        <Grid item xs={6}>
                          <CustomInput
                            name="pass"
                            value={password}
                            //   onChange={handleUser}
                            title="Password"
                            dis={edit.disabled}
                            type={edit.showPassword ? "text" : "password"}
                            // PASSWORD ICON
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton
                                    //   onClick={handlePassword}
                                    edge="end"
                                    disabled={edit.disabled}
                                  >
                                    {edit.showPassword ? (
                                      <VisibilityOff />
                                    ) : (
                                      <Visibility />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                          ></CustomInput>
                        </Grid>

                        {/* BUTTON */}
                        <Grid
                          container
                          justifyContent={{ xs: "center", md: "flex-end" }}
                          item
                          xs={6}
                        >
                          <Button
                            sx={{ p: "1rem 2rem", my: 2, height: "3rem" }}
                            component="button"
                            size="large"
                            variant="contained"
                            color="secondary"
                            //   onClick={changeButton}
                          >
                            {edit.isEdit === false ? "UPDATE" : "EDIT"}
                          </Button>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </CardContent>
                </form>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </CssBaseline>
    </UserMain.Provider>
  );
};

export default Account;
