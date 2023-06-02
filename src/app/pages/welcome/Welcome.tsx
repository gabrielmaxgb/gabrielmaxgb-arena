import { Button, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import AnimatedPageWrapper from "../../components/layout/animations/AnimatedPageWrapper";
import { WelcomeContainer } from "./WelcomeStyled";

const Welcome = () => {
  const theme = useTheme();

  console.log(theme);

  return (
    <WelcomeContainer
      item
      container
      xs={10}
      md={12}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <AnimatedPageWrapper>
        <Typography variant="h5">
          Hello! I'm Gabriel, a fullstack software developer focused on frontend
        </Typography>
        <Typography variant="h1" fontFamily={"Monoton"}>
          Welcome
        </Typography>
        <Typography variant="h5" mb={"1rem"}>
          to my portifolio
        </Typography>
        <Link to={"/home"}>
          <Button variant="outlined">See more</Button>
        </Link>
      </AnimatedPageWrapper>
    </WelcomeContainer>
  );
};

export default Welcome;
