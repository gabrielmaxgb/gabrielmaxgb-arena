import { ThemeOptions } from "@mui/material";
export interface IChildren {
  children: JSX.Element[] | JSX.Element;
}

export interface ITheme extends ThemeOptions {
  theme?: ThemeOptions;
}