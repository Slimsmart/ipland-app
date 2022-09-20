import React from "react";
import { Box } from "@mui/material";
import Search from "./Search";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Menu(props) {
  const {
    cssname,
    inputWidth,
    mx = 0,
    p = 0,
    position = [],
    iconWidth,
    iconHeight,
    clear,
    value,
    handleInput,
    submit,
    error = null,
  } = props;

  const matches = useMediaQuery("(max-width:600px)"); //mobile view

  return (
    <>
      <Box className={cssname} p={p} mx={mx}>
        <img
          src="ipland.png"
          alt="home-icon"
          width={iconWidth}
          height={iconHeight}
        />
      </Box>
      <Box sx={{ width: inputWidth }} mx={mx} mb={matches ? 3 : 0}>
        {error && (
          <span className="error" aria-label="error message">
            {error}
          </span>
        )}
        <Search
          clear={clear}
          value={value}
          submit={submit}
          handleInput={handleInput}
          position={position}
        />
      </Box>
    </>
  );
}
