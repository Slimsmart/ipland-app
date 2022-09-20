import { Box } from "@mui/material";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "@mui/material/Link";
import { getGeolocation } from "../api";

export default function Footer() {
  const matches = useMediaQuery("(max-width:600px)"); //mobile view

  const [country, setCountry] = React.useState(null);

  React.useEffect(() => {
    const getCountry = async () => {
      const { country } = await getGeolocation();
      setCountry(country);
    };
    getCountry();
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#eee",
        minHeight: "90px",
        bottom: 0,
        left: 0,
        justifySelf: "flex-end",
        marginTop: "auto",
      }}
    >
      <div
        className="bottom-border-grey"
        style={{
          padding: ".5rem 2rem",
          textAlign: matches ? "center" : "left",
        }}
      >
        <span
          style={{
            fontFamily: "Poppins",
            color: "#333",
            fontSize: "14px",
          }}
        >
          {country}
        </span>
      </div>
      <Box className={matches ? "flex-column flex-center" : "flex-row"} py={1}>
        <nav
          className={matches ? "flex-column size-sm" : `flex-row size-sm`}
          style={{
            listStyle: "none",
            cursor: "pointer",
            textAlign: matches ? "center" : "left",
          }}
        >
          <Link
            href="/about"
            sx={{ margin: "0 1rem", color: "#333", textDecoration: "none" }}
          >
            <li>About</li>
          </Link>
          <Link
            href="/how-to"
            sx={{ margin: "0 1rem", color: "#333", textDecoration: "none" }}
          >
            <li>How Search Works</li>
          </Link>
          <Link
            href="/"
            sx={{ margin: "0 1rem", color: "#333", textDecoration: "none" }}
          >
            <li>Ipland Home</li>
          </Link>
        </nav>
      </Box>
    </Box>
  );
}
