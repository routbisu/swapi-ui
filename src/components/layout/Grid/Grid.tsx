import { css } from "@emotion/css";
import React, { ReactNode } from "react";

export type GridProps = {
  /** Number of items in every row of the grid for mobile and desktop */
  columnsMobile: number;
  columnsDesktop: number;
  /** The space between the children (measured in spacing units from the theme) */
  gap?: number;
  children?: ReactNode;
};

export const Grid: React.FC<GridProps> = ({
  columnsMobile,
  columnsDesktop,
  gap = 10,
  children,
}) => {
  return (
    <div
      className={css`
        display: grid;
        grid-gap: ${gap}px;
        grid-template-columns: ${new Array(columnsMobile)
          .fill("1fr")
          .join(" ")};
        @media (min-width: 550px) {
          grid-template-columns: ${new Array(columnsDesktop)
            .fill("1fr")
            .join(" ")};
        }
      `}
    >
      {children}
    </div>
  );
};
