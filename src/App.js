import { Box, Container, Typography } from "@mui/joy";
import { useTimer } from "react-timer-hook";
import { Navbar } from "./Navbar";
import "./styles.css";
import { useNavigate } from "react-router-dom";

export default function App() {
  const time = new Date();
  const navigate = useNavigate();
  const expiryTimestamp = time.setSeconds(time.getSeconds() + 10);
  const { seconds } = useTimer({
    expiryTimestamp,
    onExpire: () => navigate("/redirect")
  });
  return (
    <Box>
      <Navbar />
      <Container>
        <Typography level="h3" sx={{ mt: 10 }}>
          Due to low budget, we couldn't complete the app. So, for your
          convenience we're redirecting you to Youtube in {seconds} seconds...{" "}
        </Typography>
      </Container>
    </Box>
  );
}
