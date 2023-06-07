import { Button, Grid, Tooltip, Typography, Zoom } from "@mui/material";
import { useState } from "react";
import { FAIRY_SVG, SPELL_BOOK_SVG } from "../../../assets";
import ProjectCard from "../../components/common/project-card/ProjectCard";
import { ProjectsContainer, TooltipContent } from "./ProjectsStyled";
import { MY_PROJECTS } from "./consts";

const Projects = () => {
  // const [castSpell, setCastSpell] = useState(false);
  const [spellBook, setSpellBook] = useState(false);
  const [knowledgeAccess, setKnowledgeAccess] = useState(false);

  const renderProjects = () => {
    return MY_PROJECTS.map((project) => {
      return (
        <Grid
          key={project.id}
          item
          container
          xs={12}
          sm={6}
          lg={4}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <ProjectCard project={project} knowledgeAccess={knowledgeAccess} />
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
      flexDirection={"column"}
      justifyContent={"start"}
      alignItems={"center"}
      spellBook={spellBook}
    >
      <Typography
        className="title"
        m={"0 1rem"}
        variant="h3"
        color={"secondary"}
      >
        Tomb of the story teller
      </Typography>
      <div className="header">
        <Tooltip
          title={
            knowledgeAccess ? null : (
              <TooltipContent>
                {!spellBook ? (
                  <>
                    <Typography variant="h5" mb={"1rem"}>
                      Cast the spell in order to reveal what you seek...
                    </Typography>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => setSpellBook(true)}
                    >
                      I don't know how to cast spells!
                    </Button>
                  </>
                ) : (
                  <Typography variant="h5" mb={"1rem"}>
                    Oh! I'm sorry. Try this ancient relic book, then. It will
                    provide the power you need to unlock the secrets!
                  </Typography>
                )}
              </TooltipContent>
            )
          }
          hidden={false}
          placement="bottom"
          arrow
          TransitionComponent={Zoom}
        >
          <img src={FAIRY_SVG} width={"200px"} className="fairy" />
        </Tooltip>
        <Button variant="text" onClick={() => setKnowledgeAccess(true)}>
          <img src={SPELL_BOOK_SVG} className="spell-book" width={"100px"} />
        </Button>
      </div>
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
      >
        {renderProjects()}
      </Grid>
    </ProjectsContainer>
    // </AnimatedPageWrapper>
  );
};

export default Projects;
