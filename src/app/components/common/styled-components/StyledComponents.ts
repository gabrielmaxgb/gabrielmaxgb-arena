import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { ICustomizableComponent } from "../../../../types/common/types";

export const CustomButton = styled(Button)<ICustomizableComponent>`
  background-image: ${(props) => `url(${props.bgImage})`};
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;
  background-color: transparent;
  width: ${(props) => props.width || "5rem"};
  height: ${(props) => props.height || "5rem"};
  border-radius: 100%;
  transition: 0.5s;

  &:hover {
    border-radius: 100%;
    transition: 0.5s;
    background-image: ${(props) => `url(${props.bgImageOnHover})`};
  }
`;
