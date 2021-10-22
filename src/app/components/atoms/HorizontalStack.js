import Stack from "@mui/material/Stack";

const HorizontalStack = ({ children }) => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      justifyContent="space-between"
      sx={{ width: "100%" }}
    >
      {children}
    </Stack>
  );
};

export default HorizontalStack;
