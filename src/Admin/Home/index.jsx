import { Box, Typography } from "@mui/material";
import React from "react";
import Textbox from "../components/Textbox";
import Button from "../../components/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useAuth } from "../../hooks/useAuth";

const Home = (props) => {
  const [state, setState] = React.useState({ email: "", password: "" });

  const matches = useMediaQuery("(max-width:600px)"); //mobile view

  const { authLogin, errors, responseErrors, loading } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Box
      width="100%"
      minHeight="100%"
      className="flex-column align-center"
      py={7}
    >
      <Box
        minWidth={matches ? "80%" : "400px"}
        height="470px"
        className={
          matches
            ? "flex-column align-center"
            : "border-grey flex-column align-center"
        }
        p={2}
      >
        <form style={{ width: "90%" }} className="flex-column align-center">
          <img
            src="/ipland.png"
            className="logo-size-md"
            alt="ipland-logo"
            loading="lazy"
          />
          <Typography fontSize={23} my={2}>
            Sign in
          </Typography>
          {responseErrors && <span className="error">{responseErrors}</span>}
          <Typography fontFamily="Poppins" fontSize={15}>
            Welcome Back, Please Sign in
          </Typography>
          <Textbox
            error={!!errors["email"]}
            value={state.email}
            handleChange={handleChange}
            label="Email"
            name="email"
            helperText={errors["email"]}
          />
          <Textbox
            error={!!errors["password"]}
            value={state.password}
            handleChange={handleChange}
            label="Password"
            name="password"
            type="password"
            helperText={errors["password"]}
          />
          <Box width="100%" className="flex-row" justifyContent="space-between">
            <Button
              text="Forgot Password?"
              style={{
                backgroundColor: "#f4f4f4",
                color: "black",
                visibility: "hidden",
                fontFamily: "'Poppins', 'Open Sans'",
                "&.MuiButton-containedPrimary": {
                  textTransform: "capitalize",
                  backgroundColor: "#fff",
                },
                "&.MuiButton-containedPrimary:hover": {
                  color: "#1976d2",
                  backgroundColor: "#f1f7fd",
                },
              }}
            />
            <Button
              submit={authLogin(state)}
              disbled={loading}
              text={loading ? "Logging in" : "Sign in"}
              style={{
                backgroundColor: loading ? "#8eb0e8" : "primary",
                color: "white",
              }}
            />
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Home;
