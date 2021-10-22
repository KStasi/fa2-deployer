import React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";

const MainAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  ...theme.custom.mainFont,
  color: theme.custom.color.type3.default,
}));

const FaqItem = ({ id, topic, description }) => {
  return (
    <Accordion>
      <MainAccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={id}
        id={id}
      >
        <Typography>{topic}</Typography>
      </MainAccordionSummary>
      <AccordionDetails>
        <Typography>{description}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default FaqItem;
