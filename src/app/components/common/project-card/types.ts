import { ITheme } from "../../../../types/common/types";
import { IProject } from "../../../pages/projects/types";

export interface IProjectCardProps {
  project: IProject;
  knowledgeAccess: boolean;
}

export interface IProjectCardContainer extends ITheme {
  knowledgeAccess: boolean;
}
