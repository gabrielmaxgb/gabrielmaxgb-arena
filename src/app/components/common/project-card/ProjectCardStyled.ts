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
    filter: grayscale();
    transition: 0.3s;
  }
  img:hover {
    --_p: 75%;
    filter: grayscale(0%);
    filter: none;
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
  }

  img {
    filter: ${(props) =>
      !props.knowledgeAccess ? "blur(15px) grayscale()" : "none"};
  }

  // ------------------------- AWESOME ITEM SELECTION IDEA -------------------------
  /* .container {
    display: flex;
    flex-wrap: wrap;
    max-width: 600px;
    margin: 1vw auto;
    position: relative;
    text-align: center;
    width: 94vw;
  }
  .product {
    flex: auto;
    font-size: 1.5rem;
    margin: 0 1vw calc(1vw + 50px) 1vw;
    min-width: calc(33% - 2vw);
    position: relative;
  }
  .product:before {
    content: "";
    float: left;
    padding-top: 100%;
  }
  .content {
    background: white;
    border-radius: 30%;
    height: 84%;
    margin: 8%;
    position: absolute;
    width: 84%;
    vertical-align: middle;
    z-index: 5000;
  }
  .product:hover .effect-1,
  .product:hover .effect-2 {
    display: block;
  }
  .effect-1,
  .effect-2 {
    border-radius: 30%;
    display: none;
    mix-blend-mode: multiply;
    height: 84%;
    opacity: 1;
    position: absolute;
    width: 84%;
    z-index: 3000;
  }
  .effect-1 {
    animation: rotate 1.8s linear infinite;
    background: cyan;
  }
  .effect-2 {
    animation: rotate 1.2s linear reverse infinite;
    background: #e7a9ff;
  }
  @keyframes rotate {
    0% {
      top: 0;
      left: 8%;
    }
    25% {
      top: 8%;
      left: 0%;
    }
    50% {
      top: 16%;
      left: 8%;
    }
    75% {
      top: 8%;
      left: 16%;
    }
    100% {
      top: 0;
      left: 8%;
    }
  }
  .exercise {
    background-image: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
    border-radius: 5px;
    height: 50%;
    margin: 25%;
    width: 50%;
  } */
`;

export const ModalContent = styled.div`
  width: 400px;

  #spell-scroll {
    width: 100px;
    position: absolute;
    right: 85%;
    bottom: 90%;
  }
`;
