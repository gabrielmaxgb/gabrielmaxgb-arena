import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ReactComponent as GhostIcon } from "../../../assets/icons/ghost.svg";
import { NotFoundContainer } from "./NotFoundStyled";

const NotFound = () => {
  return (
    // <AnimatedPageWrapper>
    <NotFoundContainer>
      <GhostIcon width={"14rem"} height={"14rem"} />
      <Typography mb={"2rem"} variant="h3">
        Nothing here
      </Typography>
      <Link to="/home">
        <Button variant="contained">Get out!</Button>
      </Link>
    </NotFoundContainer>
    // </AnimatedPageWrapper>
  );
};

export default NotFound;
