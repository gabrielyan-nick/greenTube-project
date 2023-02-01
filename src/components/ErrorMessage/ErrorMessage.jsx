import { Box, Typography } from "@mui/material";
import error from "./Error.png";

const ErrorMessage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "94vh",
        pt: '10vh'
      }}
    >
      <Typography variant="body1" color="#fff" py={3} px={2}>
        Oops...something went wrong. Try to reload page.
      </Typography>
      <img
        src={error}
        alt="error"
        style={{
          width: "150px",
          height: "150px",
          margin: "0 auto",
          objectFit: "contain",
          display: "block",
        }}
      />
    </Box>
  );
};

export default ErrorMessage;
