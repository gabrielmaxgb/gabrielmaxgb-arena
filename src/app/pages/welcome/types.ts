// import { ThemeOptions } from "@mui/material";
import { ThemeOptions } from "@mui/material";
import { ITheme } from "../../../types/common/types";

export interface IWelcomeContainerStyled extends ITheme {
  theme?: ThemeOptions;
}

export interface IMoonContainer extends ITheme {
  theme?: ThemeOptions;
  bgImage: string;
}
