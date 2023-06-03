import styled from "@emotion/styled";
import { Button, Grid } from "@mui/material";
import { ICustomizableComponent } from "../../../types/common/types";
import { IMoonContainer, IWelcomeContainerStyled } from "./types";

export const WelcomeContainer = styled(Grid)<IWelcomeContainerStyled>`
  min-width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.palette?.background?.default};
  box-sizing: border-box;
  text-align: center;

  #link {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    text-decoration: none;
  }

  // incredible button
  /* .btn-two {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    transition: all 0.5s;
    position: relative;
    width: 80px;
    height: 30px;
  }
  .btn-two span {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    display: block;
    position: absolute;
    width: 100%;
    color: black;
  }
  .btn-two::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all 0.5s;
    border: 1px solid white;
    background-color: white;
  }
  .btn-two::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all 0.5s;
    border: 1px solid white;
    background-color: white;
  }
  .btn-two:hover::before {
    transform: rotate(-45deg);
    background-color: rgba(255, 255, 255, 0);
  }
  .btn-two:hover::after {
    transform: rotate(45deg);
    background-color: rgba(255, 255, 255, 0);
  } */
`;

export const MoonContainer = styled.div<IMoonContainer>`
  display: flex;
  justify-content: center;
  align-items: end;

  background-image: ${(props) => `url(${props.bgImage})`};
  background-repeat: no-repeat;
  background-position: top;
  background-size: contain;

  height: 20vh;
  min-width: 100vw;
  margin-bottom: 3rem;

  #villager {
    background-color: transparent;
    cursor: pointer;
  }
`;

export const CustomButton = styled(Button)<ICustomizableComponent>`
  background-image: ${(props) => `url(${props.bgImage})`};
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  transition: 0.5s;

  &:hover {
    border-radius: 100%;
    transition: 0.5s;
    background-image: ${(props) => `url(${props.bgImageOnHover})`};
  }
`;
