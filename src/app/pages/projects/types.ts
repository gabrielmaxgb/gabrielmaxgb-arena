import { ITheme } from "../../../types/common/types";

export interface IProject {
  id: number;
  name: string;
  company: string;
  description: string;
  imageSource: string;
}

export interface IProjectsContainerStyled extends ITheme {
  spellBook: boolean;
}
