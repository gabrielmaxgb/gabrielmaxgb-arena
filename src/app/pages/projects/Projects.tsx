import { Grid } from "@mui/material";
import ProjectCard from "../../components/common/project-card/ProjectCard";
import { ProjectsContainer } from "./ProjectsStyled";
import { MY_PROJECTS } from "./consts";

const Projects = () => {
  const renderProjects = () => {
    return MY_PROJECTS.map((project) => {
      console.log("project", project);
      return (
        <Grid item container xs={12} sm={6} lg={4}>
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
      alignItems={"center"}
    >
      <Grid
        item
        container
        xs={11}
        md={8}
        justifyContent={"start"}
        alignItems={"center"}
        spacing={2}
        // sx={{ backgroundColor: "red" }}
      >
        {renderProjects()}
      </Grid>
    </ProjectsContainer>
    // </AnimatedPageWrapper>
  );
};

export default Projects;
