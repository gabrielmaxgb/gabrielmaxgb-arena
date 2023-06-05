import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { ITheme } from "../../../types/common/types";

export const ProjectsContainer = styled(Grid)<ITheme>`
  height: 100vh;
  background-color: ${(props) => props.theme.palette?.background?.default};
  overflow: auto;
  padding: 2rem 0;
`;
