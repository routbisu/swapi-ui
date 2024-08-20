import { Theme } from "@emotion/react";

export const defaultTheme: Theme = {
  typography: {
    heading1: {
      fontSize: 18,
      fontWeight: 700,
    },
    heading2: {
      fontSize: 16,
      fontWeight: 600,
    },
    body1: {
      fontSize: 15,
      fontWeight: 500,
    },
    body2: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1.5,
    },
    label: {
      fontSize: 13,
      fontWeight: 700,
    },
  },
  color: {
    background: {
      default: "#242424",
      button: "#434343",
      buttonDisabled: "#333333",
      buttonActive: "#3a3a3a",
    },
    border: {
      card: "#525252",
      buttonActive: "#7A7A7A",
    },
    text: {
      primary: "#FFE820",
      secondary: "#CCCCCC",
    },
  },
};
