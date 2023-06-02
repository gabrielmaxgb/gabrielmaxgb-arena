import { Outlet } from "react-router-dom";
import ProjectCard from "../../components/common/project-card/ProjectCard";
import { ProjectsContainer } from "./ProjectsStyled";

const Projects = () => {
  return (
    <ProjectsContainer>
      <div id="projects-list">
        <ProjectCard name="winesounds" />
        <ProjectCard name="ourofino" />
        <ProjectCard name="appen" />
      </div>
      <Outlet />
    </ProjectsContainer>
  );
};

export default Projects;
