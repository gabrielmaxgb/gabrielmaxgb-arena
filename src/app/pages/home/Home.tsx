import { Outlet } from "react-router-dom";
import Header from "../../components/common/header/Header";
import AnimatedPageWrapper from "../../components/layout/animations/AnimatedPageWrapper";
import { HomeContainer } from "./HomeStyled";

const Home = () => {
  return (
    <HomeContainer
      item
      container
      xs={12}
      // md={12}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ backgroundColor: "red" }}
    >
      <Header />
      <AnimatedPageWrapper>
        <Outlet />
      </AnimatedPageWrapper>
    </HomeContainer>
  );
};

export default Home;
