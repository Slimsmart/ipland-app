import { Box } from "@mui/material";
import React from "react";
import Menu from "./Menu";
import Table from "./Table";
import Tabs from "./Tabs";
import useMediaQuery from "@mui/material/useMediaQuery";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

const outliers = [
  "name",
  "name_translated",
  "is_in_european_union",
  "timezones",
  "emoji",
  "ioc",
  "ip",
  "type",
];

const Result = (props) => {
  const matches = useMediaQuery("(max-width:600px)"); //mobile view

  const { data, ipaddress, handleInput, submit, clear, error } = props;

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tableHeadings = Object.keys(data);

  const outlierKeys = tableHeadings.filter((k) => outliers.includes(k));

  const keys = tableHeadings.filter((k) => !outliers.includes(k));

  return (
    <Box sx={{ width: "100%" }} className="flex-column">
      <div
        className={`${
          matches ? "flex-column" : "flex-row justify-space-btwn"
        } align-center bottom-border-grey px`}
      >
        <div
          className={
            matches ? "flex-column align-center" : "flex-row align-center"
          }
          style={{ width: "100%", height: "100%" }}
        >
          <Menu
            cssname="flex-row align-center"
            inputWidth={matches ? "100%" : "40%"}
            iconWidth={100}
            iconHeight={100}
            mx={2}
            p={1}
            position={[null, "end"]}
            clear={clear}
            value={ipaddress}
            submit={submit}
            handleInput={handleInput}
            error={error}
          />
        </div>
        <span className="size-xl margin my-md">{data.location.emoji}</span>
      </div>

      <Box
        width="100%"
        className="flex-column flex-center"
        justifyContent="space-between"
        minHeight="350px"
        height="auto"
      >
        <Box width="100%" height="100%" className="flex-column flex-center">
          <Tabs
            value={value}
            handleChange={handleChange}
            headings={keys}
            outliers={[outlierKeys]}
          />
          <Table value={value} data={data} tabs={keys} />
        </Box>
        <span className="ip-place-bottom">
          <LocationOnRoundedIcon sx={{ color: "red" }} />
          {data.ip}
        </span>
      </Box>
    </Box>
  );
};

export default Result;
