import { css } from "@emotion/css";
import React, { CSSProperties, ReactNode } from "react";

type StackProps = {
  children?: ReactNode;
  /** Flex properties */
  /** Grid gap: gap between elements */
  gap?: number;
  /** Flex shorthand */
  flex?: CSSProperties["flex"];
  direction?: CSSProperties["flexDirection"];
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
};

export const Stack: React.FC<StackProps> = ({
  children,
  direction = "row",
  gap,
  flex,
  align,
  justify,
}) => {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: ${direction};
        flex: ${flex};
        grid-gap: ${gap}px;
        align-items: ${align};
        justify-content: ${justify};
      `}
    >
      {children}
    </div>
  );
};
