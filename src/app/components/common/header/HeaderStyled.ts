import styled from "@emotion/styled";
import { ITheme } from "../../../../types/common/types";

export const HeaderContainer = styled.header<ITheme>`
  display: flex;
  align-items: center;
  justify-content: center;
  
  min-width: 100vw;
  padding: 0.5rem 0;
  background-color: ${props => props.theme.extraColors?.yellow};
  border-bottom: ${props => `3px solid ${props.theme.extraColors?.yellow}`};
  position: fixed;
  top: 0;
  box-sizing: border-box;
`;