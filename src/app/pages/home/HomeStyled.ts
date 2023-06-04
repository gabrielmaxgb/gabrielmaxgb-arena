import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { ICustomizableComponent, ITheme } from "../../../types/common/types";

export const HomeContainer = styled(Grid)<ITheme>`
  background-color: ${(props) => props.theme.palette?.background?.default};
  box-sizing: border-box;
`;

export const HomeSection = styled(Grid)<ICustomizableComponent>`
  height: auto;
  width: 100vw;
  box-sizing: border-box;
  background-color: ${(props) => props.backgroundColor || undefined};

  #presentation {
  }
`;

export const ModalContent = styled.div`
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

    img {
      cursor: pointer;
    }
  }
`;
