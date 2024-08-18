import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    background: {
      default: string;
    };
    border: {
      card: string;
    };
  }
}
