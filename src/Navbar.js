import { Avatar, Box, Container, TextField } from "@mui/joy";
import logo from "./logo.svg";
import { BiSearchAlt } from "react-icons/bi";

export const Navbar = () => {
  return (
    <Box
      sx={{
        height: 80,
        width: "100vw",
        boxShadow: "0 0 15px -5px #ddd",
        borderBottom: 1,
        borderColor: "#eee"
      }}
    >
      <Container
        sx={{
          height: "100%",
          maxWidth: ["xs", "md", "md", "lg", "xl"],
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <Box
          component="img"
          sx={{
            height: [30, 40, 45, 50]
          }}
          src={logo}
          alt="logo"
        />
        <TextField
          sx={{ width: [150, 250, 400, 500] }}
          label=""
          size="md"
          variant="soft"
          placeholder="Search"
          startDecorator={<Box component={BiSearchAlt} mb="-3px" />}
        />

        <Avatar sx={{ float: "right" }} variant="soft" />
      </Container>
    </Box>
  );
};
