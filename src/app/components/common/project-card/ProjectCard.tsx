import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { ProjectCardContainer } from "./ProjectCardStyled";

const ProjectCard = ({ name }: { name: string }) => {
  return (
    <ProjectCardContainer>
      <div>Project: {name}</div>
      <Link to={`${name}`}>
        <Button>Go to {name}</Button>
      </Link>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
