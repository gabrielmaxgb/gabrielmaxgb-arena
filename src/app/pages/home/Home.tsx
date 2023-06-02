import { Typography } from "@mui/material";
import AnimatedPageWrapper from "../../components/layout/animations/AnimatedPageWrapper";
import { HomeContainer } from "./HomeStyled";

const Home = () => {
  return (
    <HomeContainer
      item
      container
      xs={10}
      md={12}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <AnimatedPageWrapper>
        <Typography>Home</Typography>
      </AnimatedPageWrapper>
    </HomeContainer>
  );
};

export default Home;
