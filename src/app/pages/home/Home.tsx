import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import {
  ADVENTURE_MAP_SVG,
  API_SVG,
  DESTRUCTIVE_MAGIC_SVG,
  FRONT_END_SVG,
  KNIGHT_SVG,
  SPELL_SCROLL_SVG,
  VILLAGER_SVG,
} from "../../../assets";
import BasicModal from "../../components/common/basic-modal/BasicModal";
import { CustomButton } from "../../components/common/styled-components/StyledComponents";
import AnimatedPageWrapper from "../../components/layout/animations/AnimatedPageWrapper";
import { HomeContainer, HomeSection, ModalContent } from "./HomeStyled";

const Home = () => {
  const theme = useTheme();
  const [isSkillsModalOpen, setSkillsModalOpen] = useState(false);
  const xs = useMediaQuery(theme.breakpoints.only("xs"));

  return (
    <>
      <AnimatedPageWrapper>
        <HomeContainer
          item
          container
          xs={12}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <HomeSection
            id="presentation"
            item
            container
            xs={12}
            justifyContent={"center"}
            p={xs ? "0 0 1rem 0" : "1rem 0"}
          >
            <Grid
              item
              container
              xs={11}
              md={6}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <CustomButton
                bgImage={VILLAGER_SVG}
                bgImageOnHover={KNIGHT_SVG}
                maxWidth="100%"
                width="350px"
                height="350px"
                onClick={() => setSkillsModalOpen(true)}
              />
              {/* <img id="me-img" src={VILLAGER_SVG} alt="me" width={"200px"} /> */}
            </Grid>
            <Grid
              item
              container
              xs={11}
              md={6}
              justifyContent={xs ? "center" : "start"}
              alignItems={"center"}
            >
              <Typography variant="h5" textAlign={"center"} maxWidth={"70%"}>
                I am passionate about technology and I seek to improve my
                technical and personal skills every day, aiming to positively
                impact as many lives as possible with my work. I have 5 years of
                experience with agile development teams, developing web
                applications with javascript, typescript and implementing
                system's specifications with several technologies that encompass
                the product stack based on React, Nextjs, Nodejs and code
                versioning with Git.
              </Typography>
            </Grid>
          </HomeSection>
          <HomeSection
            id="projects"
            item
            container
            xs={12}
            justifyContent={"center"}
            alignItems={"center"}
            backgroundColor={theme.extraColors.yellow}
            p={xs ? "0 0 1rem 0" : "1rem 0"}
          >
            <img src={ADVENTURE_MAP_SVG} width={"100px"} />
            <Typography m={"0 1rem"} variant="h2">
              Projects
            </Typography>
            <img src={SPELL_SCROLL_SVG} width={"100px"} />
          </HomeSection>
        </HomeContainer>
      </AnimatedPageWrapper>

      {isSkillsModalOpen && (
        <BasicModal
          open={isSkillsModalOpen}
          handleClose={() => setSkillsModalOpen(false)}
        >
          <Typography variant="h5" mb={"1rem"}>
            My skills:
          </Typography>
          <ModalContent>
            <img
              id="destructive-magic"
              src={DESTRUCTIVE_MAGIC_SVG}
              alt="destructive-magic"
            />
            <section className="specialization-area">
              <img
                id="front-end"
                className="specialization-image"
                src={FRONT_END_SVG}
                alt="front-end"
                width={"80px"}
              />
              <Typography mt={"1rem"} variant="h5">
                Front end
              </Typography>
            </section>
            <section className="specialization-area">
              <img
                id="back-end"
                className="specialization-image"
                src={API_SVG}
                alt="back-end"
                width={"80px"}
              />
              <Typography mt={"1rem"} variant="h5">
                Back end
              </Typography>
            </section>
          </ModalContent>
        </BasicModal>
      )}
    </>
  );
};

export default Home;
