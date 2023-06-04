// @ts-nocheck
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { ICustomizableComponent, ITheme } from "../../../types/common/types";

export const HomeContainer = styled(Grid)<ICustomizableComponent>`
  background-color: ${(props) => props.theme.palette?.background?.default};
  box-sizing: border-box;

  #presentation {
    /* height: 100vh; */
    height: ${(props) => {
      console.log("props", props);
      return props.height ? props.height : "auto";
    }};

    #icons {
      display: flex;
      align-items: center;
      justify-content: center;

      text-decoration: none;
      width: 100%;

      button {
        margin: 1rem;
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;

        a {
          text-decoration: none;
          color: inherit;
        }
      }
    }
  }

  #projects {
    padding: 1rem 0;
  }

  #footer {
  }
`;

export const HomeSection = styled(Grid)<ICustomizableComponent>`
  height: auto;
  width: 100vw;
  box-sizing: border-box;
  background-color: ${(props) => props.backgroundColor || undefined};
  background: ${(props) => props.bg || undefined};
`;

export const ModalContent = styled.div<ITheme>`
  display: flex;
  align-items: center;
  justify-content: center;

  #destructive-magic {
    width: 100px;
    position: absolute;
    right: 85%;
    bottom: 90%;
  }

  .specialization-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem;
    cursor: pointer;
    transition: 0.5s;

    img {
      cursor: pointer;
    }

    &:hover {
      color: ${(props) => props.theme.extraColors?.emphasis};
    }
  }
`;

export const BackgroundContainer = styled.div<ICustomizableComponent>`
  background-image: ${(props) => `url(${props.bgImage})`};
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;

  width: 100%;
  height: 500px;
`;
