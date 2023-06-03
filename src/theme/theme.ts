// @ts-nocheck
import "@fontsource/chakra-petch";
import "@fontsource/monofett";
import "@fontsource/monoton";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

declare module "@mui/material/styles" {
  export interface Theme {
    extraColors: {
      white: string;
      black: string;
      yellow?: strinh;
    };
    palette: {
      background: {
        default: string;
      };
      primary: {
        main: string;
      };
      secondary: {
        main: string;
      };
    };
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  export interface ThemeOptions {
    extraColors?: {
      white?: string;
      black?: string;
      yellow?: strinh;
    };
    status?: {
      danger?: string;
    };
  }
}

const themeCreator = createTheme({
  extraColors: {
    white: "#ffffff",
    black: "#000000",
    yellow: "#cbac64",
  },
  palette: {
    background: {
      default: "#E8D6A1",
    },
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#E8D6A1",
    },
  },
  typography: {
    // monofett: {
    //   fontFamily: "Monofett",
    // },
    fontFamily: [
      '"Chakra Petch"',
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

export const theme = responsiveFontSizes(themeCreator);
