import { Grid } from "@mui/material";
import ProjectCard from "../../components/common/project-card/ProjectCard";
import { ProjectsContainer } from "./ProjectsStyled";
import { MY_PROJECTS } from "./consts";

const Projects = () => {
  const renderProjects = () => {
    return MY_PROJECTS.map((project) => {
      console.log("project", project);
      return (
        <Grid
          key={project.id}
          item
          container
          xs={12}
          sm={6}
          md={4}
          justifyContent={"center"}
          alignItems={"center"}
          // className="gallery-item"
        >
          <ProjectCard project={project} />
        </Grid>
      );
    });
  };

  return (
    // <AnimatedPageWrapper>
    <ProjectsContainer
      item
      container
      xs={12}
      // md={12}
      justifyContent={"center"}
      alignItems={"start"}
    >
      <Grid
        item
        container
        xs={11}
        sm={10}
        md={8}
        justifyContent={"start"}
        alignItems={"start"}
        spacing={2}
        sx={{ maxWidth: "1500px" }}
        // className="gallery"
      >
        {renderProjects()}
      </Grid>
    </ProjectsContainer>
    // </AnimatedPageWrapper>
  );
};

export default Projects;
