import { useState } from "react";
// import "./ProjectCard.css";
import LaunchIcon from "@mui/icons-material/Launch";
import { Button, Typography } from "@mui/material";
import { SPELL_SCROLL_SVG } from "../../../../assets";
import BasicModal from "../basic-modal/BasicModal";
import { ModalContent, ProjectCardContainer } from "./ProjectCardStyled";
import { IProjectCardProps } from "./types";

const ProjectCard = ({ project, knowledgeAccess }: IProjectCardProps) => {
  const { imageSource } = project;
  const [cardFlip, setCardFlip] = useState<boolean>(false);
  const [isProjectModalOpen, setProjectModalOpen] = useState<boolean>(false);

  // console.log("project", project);

  return (
    <>
      <ProjectCardContainer knowledgeAccess={knowledgeAccess}>
        <Button
          disabled={!knowledgeAccess}
          onClick={() => setProjectModalOpen(true)}
        >
          <img
            className="image"
            src={imageSource}
            width={"100%"}
            onClick={() => setCardFlip(!cardFlip)}
            loading="lazy"
          />
        </Button>

        {/* ------------------------- AWESOME ITEM SELECTION IDEA ------------------------- */}
        {/* <div className="container">
          <div className="product">
            <div className="effect-1"></div>
            <div className="effect-2"></div>
            <div className="content">
              <div className="exercise"></div>
            </div>
          </div>
        </div> */}
      </ProjectCardContainer>

      {isProjectModalOpen && (
        <BasicModal
          open={isProjectModalOpen}
          handleClose={() => setProjectModalOpen(false)}
        >
          <ModalContent>
            <img id="spell-scroll" src={SPELL_SCROLL_SVG} alt="spell-scroll" />
            <a className="project-link" href={project.link} target={"_blank"}>
              <Typography id="project-name" variant="h5" mb={"1rem"}>
                {project.name}
              </Typography>
              <LaunchIcon fontSize="small" />
            </a>
            <Typography variant="h6" mb={"1rem"}>
              Company: {project.company}
            </Typography>
            <Typography variant="h6" mb={"1rem"}>
              {project.description}
            </Typography>
          </ModalContent>
        </BasicModal>
      )}
    </>
  );
};

export default ProjectCard;
