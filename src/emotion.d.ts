import "@emotion/react";
import { CSSObject } from "@emotion/react";

interface Text extends CSSObject {
  fontSize: number;
  fontWeight: number;
  lineHeight?: number;
}

declare module "@emotion/react" {
  export interface Theme {
    typography: {
      heading1: Text;
      heading2: Text;
      body1: Text;
      body2: Text;
    };
    color: {
      background: {
        default: string;
      };
      border: {
        card: string;
      };
      text: {
        primary: string;
        secondary: string;
      };
    };
  }
}
