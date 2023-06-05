import { ProjectCardContainer } from "./ProjectCardStyled";
import { IProjectCardProps } from "./types";

const ProjectCard = ({ project }: IProjectCardProps) => {
  const { name, company, description, imageSource } = project;

  return (
    <ProjectCardContainer>
      <img src={imageSource} width={"100%"} />
    </ProjectCardContainer>
  );
};

export default ProjectCard;
