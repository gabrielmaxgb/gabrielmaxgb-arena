import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { ITheme } from "../../../types/common/types";

export const HomeContainer = styled(Grid)<ITheme>`
  background-color: ${(props) => props.theme.palette?.background?.default};
  box-sizing: border-box;
`;

export const HomeSection = styled(Grid)`
  height: 100vh;
`;
