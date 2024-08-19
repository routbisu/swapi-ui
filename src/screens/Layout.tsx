import { css } from "@emotion/css";
import React from "react";
import { StarWarsLogo } from "../components/media/StarWarsLogo";

export type LayoutProps = { children?: React.ReactNode };

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const container = css`
    max-width: 960px;
    margin: auto;
    padding: 20px;
  `;

  const header = css`
    text-align: center;
    margin-bottom: 16px;
  `;

  return (
    <div className={container}>
      <div className={header}>
        <StarWarsLogo />
      </div>

      {children}
    </div>
  );
};
