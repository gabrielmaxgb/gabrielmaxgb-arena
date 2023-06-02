import styled from "@emotion/styled";
import { ITheme } from "../../../../types/common/types";

export const ProjectCardContainer = styled.div<ITheme>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  margin: 1rem 0.5rem;
  background-color: ${props => props.theme.extraColors?.yellow};
  min-height: 80px;
  padding: 1rem;
`;