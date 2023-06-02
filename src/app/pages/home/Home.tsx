import { Button } from "@mui/material";
import { Link } from "react-router-dom";
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
        <Link to={"/projects"}>
          <Button variant="contained">Peojects</Button>
        </Link>
      </AnimatedPageWrapper>
    </HomeContainer>
  );
};

export default Home;
