import DescriptionIcon from "@mui/icons-material/Description";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SouthIcon from "@mui/icons-material/South";
import {
  Button,
  Grid,
  Tooltip,
  Typography,
  Zoom,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  DESTRUCTIVE_MAGIC_SVG,
  ELF_SVG,
  KNIGHT_SVG,
  MY_CV,
  ORC_SVG,
  SPELL_SCROLL_SVG,
  VILLAGER_SVG,
} from "../../../assets";
import BasicModal from "../../components/common/basic-modal/BasicModal";
import Footer from "../../components/common/footer/Footer";
import { CustomButton } from "../../components/common/styled-components/StyledComponents";
import useScrollPosition from "../../hooks/use-scroll-position/UseScrollPosition";
import { HomeContainer, HomeSection, ModalContent } from "./HomeStyled";

const Home = () => {
  const theme = useTheme();
  const sectionTwo = useRef<null | HTMLDivElement>(null);
  const scrollPosition = useScrollPosition();
  console.log(scrollPosition);
  const [isSkillsModalOpen, setSkillsModalOpen] = useState(false);
  const xs = useMediaQuery(theme.breakpoints.only("xs"));

  return (
    <>
      {/* <AnimatedPageWrapper> */}
      <HomeContainer
        item
        container
        xs={12}
        justifyContent={"center"}
        alignItems={"center"}
        height={xs ? "auto" : "100vh"}
      >
        <HomeSection
          id="presentation"
          item
          container
          xs={12}
          md={10}
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
            <Tooltip
              title={<Typography variant="h5">STEP BACK!!</Typography>}
              placement="top"
              arrow
              TransitionComponent={Zoom}
              // followCursor
            >
              <CustomButton
                bgImage={isSkillsModalOpen ? KNIGHT_SVG : VILLAGER_SVG}
                bgImageOnHover={KNIGHT_SVG}
                maxWidth="100%"
                width="350px"
                height="350px"
                onClick={() => setSkillsModalOpen(true)}
              />
            </Tooltip>
            <div id="icons">
              <Tooltip
                title={<Typography variant="body1">Github</Typography>}
                placement="top"
                arrow
                TransitionComponent={Zoom}
                // followCursor
              >
                <Button>
                  <a href="https://github.com/gabrielmaxgb" target="_blank">
                    <GitHubIcon />
                  </a>
                </Button>
              </Tooltip>
              <Tooltip
                title={<Typography variant="body1">Linkedin</Typography>}
                placement="top"
                arrow
                TransitionComponent={Zoom}
                // followCursor
              >
                <Button>
                  <a
                    href="https://www.linkedin.com/in/gabriel-max-dev/"
                    target="_blank"
                  >
                    <LinkedInIcon />
                  </a>
                </Button>
              </Tooltip>
              <Tooltip
                title={<Typography variant="body1">Check out my cv</Typography>}
                placement="top"
                arrow
                TransitionComponent={Zoom}
                // followCursor
              >
                <Button>
                  <a href={MY_CV} target="_blank">
                    <DescriptionIcon />
                  </a>
                </Button>
              </Tooltip>
            </div>
          </Grid>
          <Grid
            item
            container
            xs={11}
            md={6}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={xs ? "center" : "start"}
          >
            <Typography variant="h5" textAlign={"center"} maxWidth={"70%"}>
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
          <Button
            onClick={() => sectionTwo?.current?.scrollIntoView()}
            style={{
              position: "absolute",
              bottom: 10,
              transition: "1s",
              display: `${scrollPosition >= 60 || xs ? "none" : "inherit"}`,
              backgroundColor: "white",
              borderRadius: "8px",
              height: "50px",
            }}
          >
            <SouthIcon />
          </Button>
        </HomeSection>
        <HomeSection
          ref={sectionTwo}
          id="projects"
          item
          container
          xs={12}
          justifyContent={"center"}
          alignItems={"center"}
          backgroundColor={theme.extraColors.yellow}
        >
          <Tooltip
            title={<Typography variant="body1">My Projects</Typography>}
            placement="top"
            arrow
            TransitionComponent={Zoom}
            followCursor
          >
            <Link to="/projects">
              <CustomButton
                bgImage={SPELL_SCROLL_SVG}
                variant="text"
              ></CustomButton>
            </Link>
          </Tooltip>
        </HomeSection>
        <HomeSection
          id="footer"
          item
          container
          xs={12}
          justifyContent={"center"}
          bg={"rgb(0, 0, 0, 0.9)"}
        >
          <Footer />
        </HomeSection>
      </HomeContainer>
      {/* </AnimatedPageWrapper> */}

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
              <Button>
                <img
                  id="front-end"
                  className="specialization-image"
                  src={ELF_SVG}
                  alt="front-end"
                  width={"80px"}
                />
              </Button>
              <Typography mt={"1rem"} variant="h5">
                Front end
              </Typography>
            </section>
            <section className="specialization-area">
              <Button>
                <img
                  id="back-end"
                  className="specialization-image"
                  src={ORC_SVG}
                  alt="back-end"
                  width={"80px"}
                />
              </Button>
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
