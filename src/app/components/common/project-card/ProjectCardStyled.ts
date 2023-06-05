import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { ITheme } from "../../../../types/common/types";

export const ProjectCardContainer = styled(Button)<ITheme>`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;

  /* width: 100%; */
  /* margin: 1rem 0.5rem; */
  /* background-color: ${(props) => props.theme.extraColors?.yellow}; */
  background-color: black;
  border: ${(props) => `5px solid ${props.theme.extraColors?.yellow}`};
  /* min-height: 80px; */
  padding: 0.5rem;
  cursor: pointer;
`;
