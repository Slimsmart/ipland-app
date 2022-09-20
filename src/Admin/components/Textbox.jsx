import { TextField } from "@mui/material";
import React from "react";

export default function Textbox(props) {
  const {
    value,
    handleChange,
    label,
    classname = "",
    error,
    helperText,
    ...rest
  } = props;

  return (
    <TextField
      value={value}
      onChange={handleChange}
      required
      error={error}
      helperText={helperText}
      fullWidth
      {...rest}
      className={classname}
      sx={{
        "&": {
          margin: "1rem 0",
        },
        "& .MuiOutlinedInput-root": {
          width: "100%",
          backgroundColor: "white",
          border: "none",
          textTransform: "none",
        },
      }}
      label={label}
    />
  );
}
