import React from "react";
import Tb from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useMediaQuery from "@mui/material/useMediaQuery";

const Table = (props) => {
  const { data, tabs, value } = props;

  const matches = useMediaQuery("(max-width:600px)"); //mobile view

  const theads = Object.keys(data[tabs[value]]);

  const trows = theads.map((k, idx) => (
    <TableCell
      sx={{ fontFamily: "Poppins", textTransform: "capitalize" }}
      component="th"
      scope="row"
      key={idx}
    >
      {data[tabs[value]][k]}
    </TableCell>
  ));

  const TableHeads = theads.map((th, idx) => (
    <TableCell sx={{ fontFamily: "Poppins" }} key={idx}>
      {th}
    </TableCell>
  ));

  return (
    <TableContainer sx={{ width: matches ? "90%" : "70%" }} component={Paper}>
      <Tb sx={{ width: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>{TableHeads}</TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            {trows}
          </TableRow>
        </TableBody>
      </Tb>
    </TableContainer>
  );
};

export default Table;
