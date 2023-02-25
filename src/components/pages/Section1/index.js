import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TextField, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Search from "../../../assets/svgFile/search.svg";
import Location from "../../../assets/svgFile/location.svg";

export default function Headers() {

  return (
    <div
      variant="div"
      style={{
        bgcolor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        margin: "0px",
      }}
     
      maxWidth="xl"
    >
      <Box
        sx={{
          marginTop: { xs: "1vh", md: "10vh" },
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "5.5vw",
              lineHeight: "6vh",
              textAlign: "center",
              color: "#000000",
            }}
          >
            Get The
          </Typography>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "5.5vw",
              lineHeight: "6vh",
              textAlign: "center",
              color: "#4540DB",
            }}
          >
            &nbsp;Right Job
          </Typography>
        </Box>
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "5.5vw",
            lineHeight: "6vh",
            textAlign: "center",
            color: "#000000",
            marginTop: { xs: "-3vh", md: "10vh" },
          }}
        >
          You Deserve
        </Typography>
      </Box>
      <Typography
        sx={{
          marginTop: { xs: "2vh", md: "15vh" },
          fontWeight: "400",
          fontSize: "3vw",
          lineHeight: "3vh",
          textAlign: "center",
          color: "#000000",
          textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        786 jobs & 110 candidates are registeresd
      </Typography>

      <Box
        sx={{
          // position: "relative",
          bgcolor: "#FFFFFF",
          ShadowRoot: "0px 1px 22px 1px rgba(69, 64, 219, 0.04)",
          borderRadius: "20px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          // marginBottom: { xs: "10%", md: "20vh" },
          width: "70%",
          marginTop: { xs: "6%", md: "12vh" },
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            marginBlock: "20px",
          }}
        >
          <Grid item xs={12} md={5}>
            <TextField
              placeholder="Search title or keywoard"
              sx={{
                border: "none",
                outline: "none",
                width: "100%",

                "& .css-1q6at85-MuiInputBase-root-MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                  },
                },
              }}
              size="small"
              id="outlined-basic"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <img
                    src={Search}
                    alt="Search"
                    style={{
                      marginRight: "10px",
                      maxWidth: "30px",
                      width: { xs: "10%", md: "100%" },
                      maxHeight: "30px",
                      height: { xs: "10%", md: "100%" },
                    }}
                  />
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <TextField
              sx={{
                border: "none",
                width: "100%",
                outline: "none",

                "& .css-1q6at85-MuiInputBase-root-MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                  },
                },
              }}
              size="small"
              id="outlined-basic"
              variant="outlined"
              placeholder="search location"
              InputProps={{
                startAdornment: (
                  <img
                    alt="Location"
                    src={Location}
                    style={{
                      maxWidth: "30px",
                      width: { xs: "10%", md: "100%" },
                      maxHeight: "30px",
                      height: { xs: "10%", md: "100%" },
                      marginRight: "10px",
                    }}
                  />
                ),
              }}
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          sx={{
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
            borderRadius: "1.5vw",
            bgcolor: "#4540DB",
          }}
        >
          Search
        </Button>
      </Box>
    </div>
  );
}
