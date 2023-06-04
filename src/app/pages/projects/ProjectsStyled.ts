import styled from "@emotion/styled";
import { ITheme } from "../../../types/common/types";

export const ProjectsContainer = styled.div<ITheme>`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;

  height: 100vh;
  background-color: ${(props) => props.theme.palette?.background?.default};

  #projects-list {
    display: flex;
    justify-content: space-around;
  }
`;
