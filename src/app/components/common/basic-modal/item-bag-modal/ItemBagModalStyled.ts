import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { ITheme } from "../../../../../types/common/types";

export const ModalContent = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
`;

export const BagItemContainer = styled(Button)<ITheme>`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  background-color: ${(props) => props.theme.extraColors?.yellow};
  border-radius: 8px;
  margin: 0.5rem;

  &:hover {
    background-color: ${(props) => props.theme.extraColors?.yellow};
  }
`;
