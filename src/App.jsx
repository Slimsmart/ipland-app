import React from "react";
import { Box } from "@mui/material";
import { getGeolocation, getipDetails } from "./api";
import CircularProgress from "@mui/material/CircularProgress";
import Result from "./components/Result";
import Button from "./components/Button";
import Menu from "./components/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import Footer from "./components/Footer";

function App() {
  const [ipaddress, updateIpAdress] = React.useState("");

  const [data, setIpData] = React.useState(null);

  const [loading, setLoading] = React.useState(false);

  const [error, setError] = React.useState(null);

  const handleInput = (e) => {
    const { value } = e.target;
    updateIpAdress(value);
  };

  const matches = useMediaQuery("(max-width:600px)"); //mobile view

  const submit = async (e) => {
    try {
      const key = e.key;
      if (key === "Enter" || e.type === "click") {
        setLoading(true);
        const { data: response } = await getipDetails(ipaddress);
        setLoading(false);
        setIpData(response);
        setError("");
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const clear = (e) => updateIpAdress("");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "space-between",
      }}
    >
      {loading ? (
        <div className="flex-center loader">
          <CircularProgress />
        </div>
      ) : data ? (
        <>
          <Result
            ipaddress={ipaddress}
            loading={loading}
            handleInput={handleInput}
            submit={submit}
            clear={clear}
            data={data}
            error={error}
          />
        </>
      ) : (
        <Box
          sx={{
            width: "100%",
            minHeight: "29.8em",
          }}
          className="flex-column align-center"
        >
          <Menu
            cssname="flex-row flex-center"
            inputWidth={matches ? "80%" : "50%"}
            iconWidth={200}
            iconHeight={200}
            mx={0}
            p={0}
            position={["start", "end"]}
            clear={clear}
            value={ipaddress}
            submit={submit}
            handleInput={handleInput}
            error={error}
          />
          <Button
            text="IP Search"
            submit={submit}
            style={{
              margin: "2rem 0",
              backgroundColor: "#f4f4f4",
              color: "black",
              fontFamily: "'Poppins', 'Open Sans'",
              "&.MuiButton-containedPrimary": {
                textTransform: "capitalize",
              },
              "&.MuiButton-containedPrimary:hover": {
                backgroundColor: "#f4f4f4",
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
              },
            }}
          />
        </Box>
      )}
      <Footer />
    </div>
  );
}

export default App;
