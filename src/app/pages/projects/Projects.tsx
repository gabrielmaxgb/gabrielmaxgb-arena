import { Outlet } from "react-router-dom";
import ProjectCard from "../../components/common/project-card/ProjectCard";
import AnimatedPageWrapper from "../../components/layout/animations/AnimatedPageWrapper";
import { ProjectsContainer } from "./ProjectsStyled";

const Projects = () => {
  return (
    <AnimatedPageWrapper>
      <ProjectsContainer>
        <div id="projects-list">
          <ProjectCard name="winesounds" />
          <ProjectCard name="ourofino" />
          <ProjectCard name="appen" />
        </div>
        <Outlet />
      </ProjectsContainer>
    </AnimatedPageWrapper>
  );
};

export default Projects;
