import ConstructionIcon from "@mui/icons-material/Construction";
import { Typography } from "@mui/material";
import { ProjectsContainer } from "./ProjectsStyled";

const Projects = () => {
  return (
    // <AnimatedPageWrapper>
    <ProjectsContainer>
      <Typography m={2} variant="h4">
        Building
      </Typography>
      <ConstructionIcon fontSize="large" />
      {/* <div id="projects-list">
          <ProjectCard name="winesounds" />
          <ProjectCard name="ourofino" />
          <ProjectCard name="appen" />
        </div>
        <Outlet /> */}
    </ProjectsContainer>
    // </AnimatedPageWrapper>
  );
};

export default Projects;
