import styled from "@emotion/styled";
import { ITheme } from "../../../../types/common/types";

export const UserInteractivePanelContainer = styled.div<ITheme>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.extraColors?.yellow};
  border-radius: 8px;
  position: fixed;
  bottom: 1rem;
  right: 0;
  z-index: 1;
`;
