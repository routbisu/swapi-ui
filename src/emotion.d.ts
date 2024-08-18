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
      heading2: Text;
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
