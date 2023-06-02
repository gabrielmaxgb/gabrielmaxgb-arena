import styled from "@emotion/styled";
import { ITheme } from "../../../types/common/types";

export const NotFoundContainer = styled.main<ITheme>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  min-width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.palette?.background?.default};
  box-sizing: border-box;
  text-align: center;
`;