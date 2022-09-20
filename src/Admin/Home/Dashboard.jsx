import { Paper, Typography, Box } from "@mui/material";
import React from "react";
import Layout from "./Layout";
import useMediaQuery from "@mui/material/useMediaQuery";
import { CircularProgress } from "@mui/material";
import { isAuthenticated } from "../../api";

export default function Dashboard() {
  const [data, setData] = React.useState(null);

  const numberOfPassed = data?.passed[0].TotalAmount;

  const numberOfFailed = data?.failed?.count;

  const ip = data?.highestSearchIp;

  const matches = useMediaQuery("(max-width:600px)"); //mobile view

  const Loading = <CircularProgress sx={{ fontSize: "20px" }} />;

  const All = [
    {
      name: "User  Requests",
      total: data ? +(numberOfFailed + numberOfPassed) : Loading,
    },
    { name: "Failed  API Calls", total: data ? numberOfFailed : Loading },
    { name: "Passed  API Calls", total: data ? numberOfPassed : Loading },
    { name: "Top Searched", total: data ? ip : Loading },
  ];

  const Cards = All.map((obj, idx) => (
    <Paper
      className="flex-column flex-center"
      sx={{
        height: 300,
        width: matches ? "80%" : 250,
        margin: matches ? "1rem 0" : 0,
      }}
      key={idx}
    >
      <Typography variant="h5">{obj.name}</Typography>
      <Typography variant="h6">{obj.total}</Typography>
    </Paper>
  ));

  React.useEffect(() => {
    isAuthenticated()
      .then((result) => {
        if (result.data) {
          setData(result.data);
        }
      })
      .catch(() => setAuth(false));
  }, []);

  return (
    <Layout>
      <Box>
        <Typography variant="h3">Dashboard</Typography>
        <Box
          width="100%"
          height="100%"
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
          className={matches ? "flex-column flex-center" : "flex-row"}
        >
          {Cards}
        </Box>
      </Box>
    </Layout>
  );
}
