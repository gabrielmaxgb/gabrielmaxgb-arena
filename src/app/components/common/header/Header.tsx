// @ts-ignore
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { ReactComponent as HatIcon } from "../../../../assets/icons/hat.svg";
import { HeaderContainer } from "./HeaderStyled";

const Header = () => {
  return (
    // <AnimatedPageWrapper>
    <HeaderContainer>
      <Grid
        item
        container
        xs={11}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <div id={"header-icon"}>
          <HatIcon width={"5rem"} height={"5rem"} />
        </div>
        <div id={"nav"}>
          <Link to={"projects"}>
            <Button variant="contained">Peojects</Button>
          </Link>
        </div>
      </Grid>
    </HeaderContainer>
    // </AnimatedPageWrapper>
  );
};

export default Header;
