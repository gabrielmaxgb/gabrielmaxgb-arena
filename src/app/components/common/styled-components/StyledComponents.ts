import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { ICustomizableComponent } from "../../../../types/common/types";

export const CustomButton = styled(Button)<ICustomizableComponent>`
  background-image: ${(props) => `url(${props.bgImage})`};
  background-repeat: no-repeat;
  background-position: ${(props) => props.backgroundPosition || "bottom"};
  background-size: ${(props) => props.backgroundSize || "cover"};
  width: ${(props) => props.width || "5rem"};
  max-width: ${(props) => props.maxWidth || undefined};
  height: ${(props) => props.height || "5rem"};
  border-radius: 70%;
  transition: 0.5s;
  margin: ${(props) => props.margin || undefined};

  &:hover {
    transition: 0.5s;
    background-image: ${(props) =>
      props.bgImageOnHover
        ? `url(${props.bgImageOnHover})`
        : `url(${props.bgImage})`};
  }
`;

export const TooltipContent = styled.div<ICustomizableComponent>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "column"};
  align-items: ${(props) => props.alignItems || "center"};

  padding: 1rem;
  box-sizing: border-box;

  #dialog-buttons {
    display: flex;
  }
`;
