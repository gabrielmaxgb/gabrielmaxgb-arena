import { ThemeOptions } from "@mui/material";
export interface IChildren {
  children: JSX.Element[] | JSX.Element;
}

export interface ITheme extends ThemeOptions {
  theme?: ThemeOptions;
}

export interface ICustomizableComponent extends ThemeOptions {
  theme?: ThemeOptions;
  bgImage?: string;
  bgImageOnHover?: string;
  width?: string;
  maxWidth?: string;
  height?: string;
  backgroundColor?: string;
  bg?: string;
  backgroundPosition?: string;
  backgroundSize?: string;
  margin?: string;
}
