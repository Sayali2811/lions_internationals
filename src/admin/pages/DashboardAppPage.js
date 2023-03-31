import { Helmet } from "react-helmet-async";
import { useTheme } from "@mui/material/styles";
import {  Typography, Icon, CardHeader, Card } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
import {
  LocalActivity,
  AdminPanelSettings,
  Newspaper,
} from "@mui/icons-material";
import RegionalView from "./RegionalView.js";
import ZonalView from "./ZonalView.js";
// ----------------------------------------------------------------------

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-around",
  },
  paper: {
    margin: "20px",
    width: "200px",
    borderRadius: "50px 0",
  },
  box: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export default function DashboardAppPage() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title> Dashboard </title>
      </Helmet>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Dashboard
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Paper elevation={3} className={classes.paper}>
          <Icon sx={{ width: "100%", height: "3em", paddingTop: "10px" }}>
            {" "}
            <LocalActivity
              sx={{ width: "2em", height: "2em", color: "#05B0E9" }}
            />
          </Icon>
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "10px",
              color: "#05B0E9",
            }}
          >
            Activty Reporting{" "}
          </Typography>
          <Typography
            variant="h4"
            sx={{
              backgroundColor: "#05B0E9",
              color: "white",
              display: "flex",
              justifyContent: "center",
              padding: "10px",
              borderRadius: "0 0 50px",
            }}
          >
            8
          </Typography>
        </Paper>
        <Paper elevation={3} className={classes.paper}>
          <Icon sx={{ width: "100%", height: "3em", paddingTop: "10px" }}>
          
            <AdminPanelSettings
              sx={{ width: "2em", height: "2em", color: "#05B0E9" }}
            />
          </Icon>
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "10px",
              color: "#05B0E9",
            }}
          >
            Admin Reporting{" "}
          </Typography>
          <Typography
            variant="h4"
            sx={{
              backgroundColor: "#05B0E9",
              color: "white",
              display: "flex",
              justifyContent: "center",
              padding: "10px",
              borderRadius: "0 0 50px",
            }}
          >
            8
          </Typography>
        </Paper>
        <Paper elevation={3} className={classes.paper}>
          <Icon sx={{ width: "100%", height: "3em", paddingTop: "10px" }}>
           
            <Newspaper sx={{ width: "2em", height: "2em", color: "#05B0E9" }} />
          </Icon>
          <Typography
            variant="h6"
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "10px",
              color: "#05B0E9",
            }}
          >
            News Reporting{" "}
          </Typography>
          <Typography
            variant="h4"
            sx={{
              backgroundColor: "#05B0E9",
              color: "white",
              display: "flex",
              justifyContent: "center",
              padding: "10px",
              borderRadius: "0 0 50px",
            }}
          >
            8
          </Typography>
        </Paper>
      </Box>

     
    </>
  );
}
