import Box from "@mui/material/Box";
import FaqItem from "../atoms/FaqItem";
import Typography from "@mui/material/Typography";
import faqs from "../assets/Faqs.json";
import { styled } from "@mui/material/styles";

const MainTypography = styled(Typography)(({ theme }) => ({
  font: "normal normal bold Open Sans",
}));

function Faq() {
  return (
    <Box>
      <MainTypography variant="h4" align="center" sx={{ py: 2 }}>
        FAQ
      </MainTypography>
      {faqs.map((item, index) => {
        return (
          <FaqItem
            id={"faq" + index}
            topic={item.topic}
            description={item.description}
          />
        );
      })}
    </Box>
  );
}

export default Faq;
