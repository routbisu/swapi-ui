import { Theme } from "@emotion/react";

export const defaultTheme: Theme = {
  typography: {
    heading1: {
      fontSize: 18,
      fontWeight: 700,
      lineHeight: 1.5,
    },
    heading2: {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: 15,
      fontWeight: 500,
      lineHeight: 1.3,
    },
    body2: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1.3,
    },
  },
  color: {
    background: {
      default: "#242424",
    },
    border: {
      card: "#525252",
    },
    text: {
      primary: "#FFE820",
      secondary: "#ACACAC",
    },
  },
};
