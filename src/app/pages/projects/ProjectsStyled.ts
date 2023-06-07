import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { IProjectsContainerStyled } from "./types";

export const ProjectsContainer = styled(Grid)<IProjectsContainerStyled>`
  min-height: 100vh;
  height: auto;
  background-color: ${(props) => props.theme.palette?.background?.default};
  /* overflow: auto; */
  padding: 2rem 0;
  box-sizing: border-box;

  .title {
    background-color: black;
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 2rem;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 5rem;

    .button {
      padding: 0;
      border: 0;
    }

    button {
      .red {
        font-size: 2rem;
      }
      .green {
        color: green;
      }
    }

    .spell-book {
      cursor: pointer;
      border-radius: 8px;
      box-shadow: 3px 6px #000000;
      display: ${(props) => (props.spellBook ? "" : "none")};
    }
  }
`;
