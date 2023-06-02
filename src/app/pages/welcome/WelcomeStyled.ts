import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { IWelcomeContainerStyled } from "./types";

export const WelcomeContainer = styled(Grid)<IWelcomeContainerStyled>`
  min-width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.palette?.background?.default};
  box-sizing: border-box;
  text-align: center;
`;