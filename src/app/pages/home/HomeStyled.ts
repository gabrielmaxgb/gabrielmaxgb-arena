import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { ITheme } from "../../../types/common/types";

export const HomeContainer = styled(Grid)<ITheme>`
  min-width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.palette?.background?.default};
  /* overflow: -moz-hidden-unscrollable; */
  /* overflow-x: hidden; */
  box-sizing: border-box;
  text-align: center;
  overflow: hidden;
`;