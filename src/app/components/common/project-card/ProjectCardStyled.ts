import styled from "@emotion/styled";
import { IProjectCardContainer } from "./types";

export const ProjectCardContainer = styled.div<IProjectCardContainer>`
  img {
    --g: 4px; /* the gap */
    --b: 52px; /* border thickness*/
    --c: ${(props) => props.theme.extraColors?.yellow}; /* the color */

    padding: calc(var(--g) + var(--b));
    --_c: #0000 0 25%, var(--c) 0 50%;
    --_g1: repeating-linear-gradient(90deg, var(--_c)) repeat-x;
    --_g2: repeating-linear-gradient(180deg, var(--_c)) repeat-y;
    background: var(--_g1) var(--_p, 25%) 0, var(--_g2) 0 var(--_p, 125%),
      var(--_g1) var(--_p, 125%) 100%, var(--_g2) 100% var(--_p, 25%);
    background-size: 200% var(--b), var(--b) 200%;
    cursor: pointer;
    filter: grayscale(50%);
    transition: 0.3s;
  }
  img:hover {
    --_p: 75%;
    filter: grayscale(0%);
  }

  img {
    --m: radial-gradient(circle farthest-side at right, #000 99%, #0000) 0 100%/46%
        92% no-repeat,
      radial-gradient(circle farthest-side at left, #000 99%, #0000) 100% 0/46%
        92% no-repeat;
    -webkit-mask: var(--m);
    mask: var(--m);
    filter: grayscale(0.5);
    transition: 0.3s linear;
    cursor: pointer;
  }
  img:hover {
    -webkit-mask-position: 7.5% 50%, 92.5% 50%;
    mask-position: 7.5% 50%, 92.5% 50%;
    filter: grayscale(0);
  }

  img {
    filter: ${(props) => (!props.knowledgeAccess ? "blur(15px)" : "none")};
  }
`;
