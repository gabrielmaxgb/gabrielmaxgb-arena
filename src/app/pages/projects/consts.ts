import {
  APPEN_BANNER_PNG,
  GREENMAINFRAME_BANNER_PNG,
  LAUNCH_ATS_BANNER_PNG,
  OUROFINO_BANNER_PNG,
  WINESOUNDS_BANNER_PNG,
} from "../../../assets";
import { IProject } from "./types";

export const MY_PROJECTS: IProject[] = [
  {
    id: 1,
    name: "Winesounds Bistro",
    company: "Fan Projects",
    description:
      "Developed the web app and some of the main functionalities of the Winesounds bistro digital platform. It's a community management platform where you can sell your products in a e-commerce, talk with your customers in a social feed, interact with their posts about your events...",
    imageSource: WINESOUNDS_BANNER_PNG,
    link: "https://winesounds.com.br/#/",
  },
  {
    id: 2,
    name: "Ourofino",
    company: "Sambatech",
    description:
      "Developed from scratch the Ourofino pedido fácil web app wich is an traditional B2B e-commerce based on agricultural products.",
    imageSource: OUROFINO_BANNER_PNG,
    link: "https://www.ourofinosaudeanimal.com/",
  },
  {
    id: 3,
    name: "Appen",
    company: "Novatics",
    description:
      "UI refactor of the main page of Appen's web page using base web and a new design system.",
    imageSource: APPEN_BANNER_PNG,
    link: "https://appen.com/",
  },
  {
    id: 4,
    name: "Greenmainframe",
    company: "Webera",
    description:
      "Worked in the microservices codebase of the Webera's Greenmainframe application, wich is a host for Wordpress websites.",
    imageSource: GREENMAINFRAME_BANNER_PNG,
    link: "https://greenmainframe.com/",
  },
  {
    id: 5,
    name: "Launch ATS",
    company: "Pride Innovations Brazil - Pride Global",
    description:
      "Development of various functionalities, bug fixing, code refactoring, and code review in a React-based application. It was a recruitment software that",
    imageSource: LAUNCH_ATS_BANNER_PNG,
    link: "https://prideglobal.launchats.com/login",
  },
];
