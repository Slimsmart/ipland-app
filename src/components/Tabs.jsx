import * as React from "react";
import Box from "@mui/material/Box";
import ScrollTabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function Tabs(props) {
  const { headings = [], outliers = [], handleChange, value } = props;

  const TabsHeadings = headings.map((heading, idx) => (
    <Tab key={idx} label={heading} />
  ));

  return (
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: { xs: 320, sm: 480 },
      }}
    >
      <ScrollTabs value={value} onChange={handleChange}>
        {TabsHeadings}
      </ScrollTabs>
    </Box>
  );
}
