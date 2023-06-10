import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FAIRY_SVG } from "../../../assets";
import { WelcomeContainer } from "./WelcomeStyled";

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
        <div id="start-adventure-button">
          <Link to={"/home"} id={"link"}>
            <Button variant="outlined">Start adventure!</Button>
          </Link>
        </div>
        <Typography className="tip" variant="caption" mt={"1rem"}>
          (There are many features hidden through mouse hover! Go ahead and
          click everything!)
        </Typography>
        <img className="fairy" src={FAIRY_SVG} width={"65px"} />
        {/* </AnimatedPageWrapper> */}
      </WelcomeContainer>
    </>
  );
};

export default Welcome;
