import { Button, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SWORD_SVG } from "../../../assets";
import drawSword from "../../../assets/audio/draw-sword.mp3";
// import medievalFanfare from "../../../assets/audio/medieval-fanfare.mp3";
import { WelcomeContainer } from "./WelcomeStyled";

const Welcome = () => {
  const navigate = useNavigate();
  const [adventureStarted, setAdventureStarted] = useState(false);

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
        {/* <AnimatedPageWrapper> */}
        <Typography variant="h4">
          Hello! I'm Gabriel , a fullstack <s>wizard</s> software developer
          focused on frontend
        </Typography>
        <Typography variant="h1" fontFamily={"Monoton"}>
          Welcome
        </Typography>
        <Typography variant="h4" mb={"1rem"}>
          to my portfolio
        </Typography>
        {/* <Link to={"/home"} id={"link"}> */}
        <Button
          variant={adventureStarted ? "text" : "outlined"}
          onClick={() => {
            new Audio(drawSword).play();
            setAdventureStarted(true);
            setTimeout(() => {
              navigate("/home");
            }, 700);
          }}
        >
          {adventureStarted ? (
            <img src={SWORD_SVG} width="50px" />
          ) : (
            "Draw sword!"
          )}
        </Button>
        {/* </Link> */}
        {/* </AnimatedPageWrapper> */}
      </WelcomeContainer>
    </>
  );
};

export default Welcome;
