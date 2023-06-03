import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FULL_MOON_PNG, VILLAGER_PNG, WEREWOLF_PNG } from "../../../assets";
import AnimatedPageWrapper from "../../components/layout/animations/AnimatedPageWrapper";
import { CustomButton, MoonContainer, WelcomeContainer } from "./WelcomeStyled";

const Welcome = () => {
  return (
    <>
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
          <Typography variant="h4">
            Hello! I'm Gabriel , a fullstack <s>wizard</s> software developer
            focused on frontend
          </Typography>
          <MoonContainer bgImage={FULL_MOON_PNG}>
            <Link to={"/home"} id={"staff-link"}>
              <CustomButton
                id={"villager"}
                bgImage={VILLAGER_PNG}
                bgImageOnHover={WEREWOLF_PNG}
              />
            </Link>
          </MoonContainer>
          <Typography variant="h1" fontFamily={"Monoton"}>
            Welcome
          </Typography>
          <Typography variant="h4" mb={"1rem"}>
            to my portfolio
          </Typography>
          <Link to={"/home"} id={"link"}>
            <Button variant="outlined">See more</Button>
          </Link>
        </AnimatedPageWrapper>
      </WelcomeContainer>
    </>
  );
};

export default Welcome;
