import { useState } from "react";
// import "./ProjectCard.css";
import { Button } from "@mui/material";
import { ProjectCardContainer } from "./ProjectCardStyled";
import { IProjectCardProps } from "./types";

const ProjectCard = ({ project }: IProjectCardProps) => {
  // const { name, company, description, imageSource } = project;
  const { imageSource } = project;
  const [cardFlip, setCardFlip] = useState(false);

  return (
    <>
      <ProjectCardContainer>
        <Button>
          <img
            className="front"
            src={imageSource}
            width={"100%"}
            onClick={() => setCardFlip(!cardFlip)}
            loading="lazy"
          />
        </Button>
      </ProjectCardContainer>
    </>
  );
};

export default ProjectCard;
