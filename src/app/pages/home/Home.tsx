import SouthIcon from "@mui/icons-material/South";
import {
  Button,
  CircularProgress,
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
  ARMOR_SVG,
  BOOTS_SVG,
  DESTRUCTIVE_MAGIC_SVG,
  ELF_SVG,
  HELMET_SVG,
  KNIGHT_SVG,
  MY_CV,
  ORC_SVG,
  SHIELD_SVG,
  SPELL_SCROLL_SVG,
  SWORD_SVG,
  VILLAGER_SVG,
} from "../../../assets";
import BasicModal from "../../components/common/basic-modal/BasicModal";
import Footer from "../../components/common/footer/Footer";
import GearSet from "../../components/common/gear-set/GearSet";
import {
  CustomButton,
  TooltipContent,
} from "../../components/common/styled-components/StyledComponents";
import useImagePreloader from "../../hooks/use-image-preloader/useImagePreloader";
import useScrollPosition from "../../hooks/use-scroll-position/UseScrollPosition";
import { HomeContainer, HomeSection, ModalContent } from "./HomeStyled";

const Home = () => {
  const theme = useTheme();
  const sectionTwo = useRef<null | HTMLDivElement>(null);
  const scrollPosition = useScrollPosition();
  const [isSkillsModalOpen, setSkillsModalOpen] = useState(false);
  const xs = useMediaQuery(theme.breakpoints.only("xs"));
  const imgPreloader = useImagePreloader([
    ARMOR_SVG,
    BOOTS_SVG,
    DESTRUCTIVE_MAGIC_SVG,
    ELF_SVG,
    HELMET_SVG,
    KNIGHT_SVG,
    MY_CV,
    ORC_SVG,
    SHIELD_SVG,
    SPELL_SCROLL_SVG,
    SWORD_SVG,
    VILLAGER_SVG,
  ]);

  console.log("imgPreloader", imgPreloader);
  // const { bagItems, setBagItems } = useBagItems();
  // console.log("last deploy test");

  if (!imgPreloader) {
    return (
      <HomeContainer
        item
        container
        xs={12}
        justifyContent={"center"}
        alignItems={"center"}
        height={xs ? "auto" : "100vh"}
      >
        <CircularProgress />
      </HomeContainer>
    );
  }

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
            {/* <Button
              onClick={() => setBagItems([...bagItems, { item: "master-key" }])}
            >
              Get Master Key
            </Button> */}
            <Tooltip
              title={
                <TooltipContent>
                  <Typography variant="h5">
                    Welcome!! (click here to) Meet my friends!
                  </Typography>
                </TooltipContent>
              }
              placement="top"
              arrow
              TransitionComponent={Zoom}
            >
              <CustomButton
                // bgImage={isSkillsModalOpen ? ANGRY_SOLDIER_SVG : VILLAGER_SVG}
                bgImage={isSkillsModalOpen ? KNIGHT_SVG : VILLAGER_SVG}
                bgImageOnHover={KNIGHT_SVG}
                maxWidth="100%"
                backgroundPosition="center"
                // backgroundSize={isSkillsModalOpen ? "500px 500px" : "cover"}
                width="350px"
                height="350px"
                onClick={() => setSkillsModalOpen(true)}
                margin={"0 0 1rem 0"}
              />
            </Tooltip>
            <GearSet
              head={{
                tooltipMessage: "Linkedin",
                link: "https://www.linkedin.com/in/gabriel-max-dev/",
                imgSrc: HELMET_SVG,
                itemName: "helmet",
              }}
              rightArm={{
                tooltipMessage: "Github",
                link: "https://github.com/gabrielmaxgb",
                imgSrc: SWORD_SVG,
                itemName: "sword",
              }}
              body={{
                tooltipMessage: "Check out my CV",
                link: MY_CV,
                imgSrc: ARMOR_SVG,
                itemName: "armor",
              }}
              leftArm={{
                tooltipMessage:
                  "Behold the shield of the legendary adventurer, the ultimate multitasking tool - protecting against dragons, deflecting axes, and doubling as a pizza tray when hunger strikes! It's the hero's secret weapon for battles and impromptu snack breaks.",
                link: "",
                imgSrc: SHIELD_SVG,
                itemName: "shield",
              }}
              foot={{
                tooltipMessage:
                  "The greaves of the great adventurer: the ultimate fashion statement for those who like their shins protected and their enemies impressed. It's like strapping on shin-spired swag and saying, 'Watch out, world! My calves mean business!'",
                link: "",
                imgSrc: BOOTS_SVG,
                itemName: "boots",
              }}
            />
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
          id="other-options"
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
              <Tooltip
                title={
                  <TooltipContent>
                    <Typography variant="body1">
                      Hey, hi! I'm Farryn Yllafaren! It's nice to have you here.
                      If you would like to check Gabriel's front end main skills
                      I'm the right person!
                    </Typography>
                  </TooltipContent>
                }
                placement="top"
                arrow
                TransitionComponent={Zoom}
              >
                <Button>
                  <img
                    id="front-end"
                    className="specialization-image"
                    src={ELF_SVG}
                    alt="front-end"
                    width={"80px"}
                  />
                </Button>
              </Tooltip>
              <Typography mt={"1rem"} variant="h5">
                Front end
              </Typography>
            </section>
            <section className="specialization-area">
              <Tooltip
                title={
                  <TooltipContent>
                    <Typography variant="body1">Hi :/</Typography>
                  </TooltipContent>
                }
                placement="top"
                arrow
                TransitionComponent={Zoom}
              >
                <Button>
                  <img
                    id="back-end"
                    className="specialization-image"
                    src={ORC_SVG}
                    alt="back-end"
                    width={"80px"}
                  />
                </Button>
              </Tooltip>
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
