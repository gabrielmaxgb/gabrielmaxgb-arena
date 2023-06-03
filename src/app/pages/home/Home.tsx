import { Grid, Typography } from "@mui/material";
import { KNIGHT_SVG, VILLAGER_SVG } from "../../../assets";
import { CustomButton } from "../../components/common/styled-components/StyledComponents";
import AnimatedPageWrapper from "../../components/layout/animations/AnimatedPageWrapper";
import { HomeContainer, HomeSection } from "./HomeStyled";

const Home = () => {
  return (
    <AnimatedPageWrapper>
      <HomeContainer
        item
        container
        xs={12}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <HomeSection id="presentation" item container xs={12}>
          <Grid
            item
            container
            xs={6}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <CustomButton
              bgImage={VILLAGER_SVG}
              bgImageOnHover={KNIGHT_SVG}
              width="600px"
              height="600px"
            />
            {/* <img id="me-img" src={VILLAGER_SVG} alt="me" width={"200px"} /> */}
          </Grid>
          <Grid
            item
            container
            xs={6}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography variant="h5" textAlign={"justify"} width={"80%"}>
              I am passionate about technology and I seek to improve my
              technical and personal skills every day, aiming to positively
              impact as many lives as possible with my work. I have 5 years of
              experience with agile development teams, developing web
              applications with javascript, typescript and implementing system's
              specifications with several technologies that encompass the
              product stack based on React, Nextjs, Nodejs and code versioning
              with Git.
            </Typography>
          </Grid>
        </HomeSection>
      </HomeContainer>
    </AnimatedPageWrapper>
  );
};

export default Home;
