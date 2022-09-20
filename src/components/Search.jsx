import { TextField, Tooltip } from "@mui/material";
import React from "react";
import { InputAdornment } from "@mui/material";
import { SearchRounded, CloseRounded } from "@mui/icons-material";
const Search = (props) => {
  const { handleInput, submit, value = "", clear, position = [] } = props;

  const [start] = position;

  const alwaysShowCancelAndSearch = start ? value.length > 1 : true;

  return (
    <TextField
      required
      fullWidth
      value={value}
      onKeyUp={submit}
      onChange={handleInput}
      sx={{
        "&": {
          width: "100%",
          height: "43px",
          backgroundColor: "white",
          borderRadius: "30px",
          border: "none",
        },

        "& .MuiOutlinedInput-root": {
          fontSize: "13px",
          height: "45px",
          fontFamily: "Poppins",
          border: "none",

          "& > fieldset": {
            border: "1px solid #ccc",
            borderRadius: "30px",
            height: "47px",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#ddd",
            height: "45px",
          },
          "&:hover fieldset": {
            borderColor: "#eee",
            height: "45px",
            boxShadow:
              "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
            borderRadius: "30px",
          },
        },
      }}
      InputProps={{
        startAdornment: start && (
          <InputAdornment position="start">
            <SearchRounded color="primary" />
          </InputAdornment>
        ),
        endAdornment: alwaysShowCancelAndSearch && (
          <InputAdornment position="end">
            <Tooltip
              title="clear"
              placement="bottom"
              sx={{
                "&.MuiTooltip-tooltip": {
                  backgroundColor: "red",
                  ".MuiTooltip-tooltipPlacementBottom": {
                    color: "yellow",
                  },
                },
              }}
            >
              <CloseRounded
                sx={{
                  cursor: "pointer",
                  ...(!start && { borderRight: "1px solid #ccc" }),
                  padding: ".5rem 1rem",
                }}
                onClick={clear}
              />
            </Tooltip>
            {!start && (
              <Tooltip title="search" placement="bottom">
                <SearchRounded
                  sx={{
                    padding: ".5rem",
                    ...(!start && { cursor: "pointer" }),
                  }}
                  color="primary"
                />
              </Tooltip>
            )}
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Search;
